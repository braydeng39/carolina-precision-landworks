import { createClientFromRequest } from 'npm:@base44/sdk@0.8.44';

export default async function(req) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const phone = String(body.phone || "").trim();
    const serviceType = String(body.service_type || "").trim();
    const scope = String(body.scope || "").trim();
    const message = String(body.message || "").trim().slice(0, 2000);

    if (!name || !email) {
      return Response.json({ error: "Name and email are required" }, { status: 400 });
    }

    const base44 = createClientFromRequest(req);

    const users = await base44.asServiceRole.entities.User.list();
    const recipient = users.find((u) => u.role === "admin") || users[0];
    if (!recipient || !recipient.email) {
      return Response.json({ error: "No admin recipient found in this workspace" }, { status: 500 });
    }
    const toEmail = recipient.email;

    // Persist the lead so it's queryable in the app, not just emailed.
    await base44.asServiceRole.entities.QuoteRequest.create({
      name,
      email,
      phone,
      service_type: serviceType,
      scope,
      message,
      status: "new",
    });

    const textBody = [
      "New quote request - Carolina Precision Landworks website",
      "",
      "Name:    " + name,
      "Email:   " + email,
      "Phone:   " + (phone || "(not provided)"),
      "Service: " + (serviceType || "(not specified)"),
      "Scope:   " + (scope || "(not specified)"),
      "",
      "Project details:",
      message || "(no message)",
    ].join("\n");

    const htmlBody =
      '<div style="font-family:Inter,Arial,sans-serif;color:#111;line-height:1.6;max-width:560px">' +
      '<h2 style="margin:0 0 8px">New quote request</h2>' +
      '<p style="margin:0 0 20px;color:#666">Submitted from the Carolina Precision Landworks website.</p>' +
      '<table style="border-collapse:collapse;font-size:14px;width:100%">' +
      row("Name", name) +
      row("Email", email) +
      row("Phone", phone || "-") +
      row("Service", serviceType || "-") +
      row("Scope", scope || "-") +
      '</table>' +
      '<h3 style="margin:24px 0 8px;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;color:#888">Project details</h3>' +
      '<p style="white-space:pre-wrap;border-left:3px solid #D96C4B;padding:8px 0 8px 14px;margin:0">' + (escapeHtml(message) || "-") + '</p>' +
      '</div>';

    await base44.asServiceRole.integrations.Core.SendEmail({
      to: toEmail,
      subject: "New lead: " + name + " - " + (serviceType || "Quote request"),
      text: textBody,
      html: htmlBody,
    });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}

function row(label, value) {
  return '<tr><td style="padding:7px 14px 7px 0;color:#888;vertical-align:top">' + label + '</td><td><b>' + escapeHtml(value) + '</b></td></tr>';
}

function escapeHtml(s) {
  return String(s || "").replace(/[&<>"']/g, function (c) {
    return "&#" + c.charCodeAt(0) + ";";
  });
}