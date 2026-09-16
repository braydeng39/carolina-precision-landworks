// Cloudflare Worker entry — Carolina Precision Landworks
// Handles POST /api/send-lead (emails the lead via Resend) and serves
// the static site from the ASSETS binding for everything else.
//
// Required secret (create with: wrangler secret put RESEND_API_KEY):
//   RESEND_API_KEY  — Resend API key
// Optional env vars (set in wrangler.toml or dashboard):
//   MAIL_FROM  — verified sender, e.g. "Carolina Precision Landworks <leads@yourdomain.com>"
//   LEAD_TO    — recipient (defaults to CarolinaPrecisionLandworks@gmail.com)

const DEFAULT_LEAD_TO = "CarolinaPrecisionLandworks@gmail.com";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders() });
    }

    if (url.pathname === "/api/send-lead") {
      return handleLead(request, env);
    }

    // Serve static assets (built site) for all other routes.
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }
    return new Response("Not found", { status: 404 });
  },
};

async function handleLead(request, env) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON body" }, 400);
  }

  const name = String(body?.name || "").trim();
  const email = String(body?.email || "").trim();
  const phone = String(body?.phone || "").trim();
  const serviceType = String(body?.service_type || "").trim();
  const scope = String(body?.scope || "").trim();
  const message = String(body?.message || "").trim().slice(0, 2000);

  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: "Name and a valid email are required" }, 400);
  }

  if (!env.RESEND_API_KEY) {
    return json({ error: "Resend API key not configured" }, 500);
  }

  const from = env.MAIL_FROM || "Carolina Precision Landworks <leads@resend.dev>";
  const to = env.LEAD_TO || DEFAULT_LEAD_TO;
  const subject = `New lead: ${name} — ${serviceType || "Quote request"}`;

  const textBody = [
    "New quote request — Carolina Precision Landworks website",
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
    row("Name", name) + row("Email", email) + row("Phone", phone || "-") +
    row("Service", serviceType || "-") + row("Scope", scope || "-") +
    "</table>" +
    '<h3 style="margin:24px 0 8px;font-size:13px;letter-spacing:0.1em;text-transform:uppercase;color:#888">Project details</h3>' +
    '<p style="white-space:pre-wrap;border-left:3px solid #D96C4B;padding:8px 0 8px 14px;margin:0">' +
    (escapeHtml(message) || "-") + "</p></div>";

  try {
    const resendRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject,
        text: textBody,
        html: htmlBody,
      }),
    });

    if (!resendRes.ok) {
      const errText = await resendRes.text();
      return json({ error: "Resend error", details: errText }, 502);
    }

    return json({ ok: true });
  } catch (error) {
    return json({ error: "Failed to send email", details: String(error) }, 502);
  }
}

function row(label, value) {
  return (
    '<tr><td style="padding:7px 14px 7px 0;color:#888;vertical-align:top">' +
    label +
    '</td><td><b>' +
    escapeHtml(value) +
    "</b></td></tr>"
  );
}

function escapeHtml(s) {
  return String(s || "").replace(/[&<>"']/g, (c) => "&#" + c.charCodeAt(0) + ";");
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders() },
  });
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}