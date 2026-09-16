import React, { useState } from "react";
import { toast } from "sonner";
import { Check, ChevronRight, Loader2 } from "lucide-react";

const services = ["Landscaping", "Hardscaping", "Grading", "Land Clearing", "Drainage Solutions", "Site Prep & Excavation"];
const scopes = [
  { label: "Small — Residential", desc: "A yard, a patio, a wall" },
  { label: "Medium — Large Yard", desc: "Full property softscape + hardscape" },
  { label: "Large — Acreage / Commercial", desc: "Multiple acres or a build site" },
  { label: "Not Sure Yet", desc: "Help me figure it out" },
];

const scopeMap = {
  "Small — Residential": "Small (Residential)",
  "Medium — Large Yard": "Medium (Large Yard)",
  "Large — Acreage / Commercial": "Large (Acreage / Commercial)",
  "Not Sure Yet": "Not Sure Yet",
};

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    service_type: "",
    scope: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const canNext1 = !!form.service_type;
  const canNext2 = !!form.scope;
  const canSubmit = form.name.trim() && /\S+@\S+\.\S+/.test(form.email);

  const submit = async () => {
    console.log("[CPL QuoteForm] submit() called", { step, form, canSubmit });
    if (!canSubmit) {
      console.warn("[CPL QuoteForm] submit() aborted — canSubmit is falsy", {
        name: form.name,
        email: form.email,
      });
      return;
    }
    setSubmitting(true);
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),
      service_type: form.service_type,
      scope: scopeMap[form.scope] || form.scope,
      message: form.message.trim(),
    };
    console.log("[CPL QuoteForm] POST /api/send-lead", payload);
    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      console.log("[CPL QuoteForm] fetch response", {
        status: res.status,
        ok: res.ok,
        type: res.headers.get("content-type"),
      });
      const text = await res.text();
      console.log("[CPL QuoteForm] response body (first 500 chars)", text.slice(0, 500));
      if (!res.ok) throw new Error(`Request failed: ${res.status} ${text.slice(0, 200)}`);
      setDone(true);
      toast.success("Quote request sent — we'll be in touch within one business day.");
    } catch (e) {
      console.error("[CPL QuoteForm] submit() error", e);
      toast.error("Something went wrong. Please call 704-310-0755.");
    } finally {
      setSubmitting(false);
    }
  };

  if (done) {
    return (
      <section id="quote" className="relative bg-[#1a1d1a] py-24 md:py-32 border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10">
          <div className="max-w-2xl mx-auto text-center border border-[#4B9D96]/40 bg-[#111311] p-12">
            <div className="w-16 h-16 mx-auto rounded-full bg-[#4B9D96]/15 border border-[#4B9D96] flex items-center justify-center mb-8">
              <Check className="w-7 h-7 text-[#4B9D96]" />
            </div>
            <div className="cpl-eyebrow text-[#4B9D96] mb-4">Request Logged</div>
            <h3 className="cpl-display text-3xl md:text-4xl font-bold text-[#F2F2F2] mb-4">
              Your request is in.
            </h3>
            <p className="text-[#A3A8A3] text-lg mb-8">
              Thanks, {form.name.split(" ")[0]}. We've got your {form.service_type.toLowerCase()} request.
              Expect a call or email within one business day. Need it sooner?
            </p>
            <a
              href="tel:7043100755"
              className="cpl-display text-sm px-7 py-4 bg-[#D96C4B] text-[#111311] font-semibold hover:bg-[#e08366] transition-colors inline-block"
            >
              Call 704-310-0755
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="quote" className="relative bg-[#1a1d1a] py-24 md:py-32 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 cpl-topo cpl-drift pointer-events-none opacity-40" />
      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-4 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-6">
            <div className="cpl-eyebrow text-[#D96C4B] mb-4">The Blueprint Engine</div>
            <h2 className="cpl-display text-4xl md:text-6xl font-bold text-[#F2F2F2] leading-[0.95]">
              Request a<br />quote.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 flex items-end">
            <p className="text-[#A3A8A3] text-lg leading-relaxed">
              Three quick steps. No obligation. Tell us the terrain, the scope,
              and how to reach you — we'll take it from there.
            </p>
          </div>
        </div>

        {/* Progress */}
        <div className="flex items-center gap-3 mb-10 max-w-3xl">
          {[1, 2, 3].map((n) => (
            <React.Fragment key={n}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center cpl-display text-xs font-bold border transition-colors ${
                  step >= n
                    ? "bg-[#D96C4B] text-[#111311] border-[#D96C4B]"
                    : "border-white/20 text-[#A3A8A3]"
                }`}
              >
                {step > n ? <Check className="w-4 h-4" /> : n}
              </div>
              {n < 3 && <div className={`flex-1 h-px ${step > n ? "bg-[#D96C4B]" : "bg-white/15"}`} />}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12">
            <div className="border border-white/10 bg-[#111311] p-8 md:p-12">
              {/* Step 1 */}
              {step === 1 && (
                <div>
                  <div className="cpl-eyebrow text-[#A3A8A3] mb-2">Step 01</div>
                  <h3 className="cpl-display text-2xl font-bold text-[#F2F2F2] mb-8">
                    Select your terrain.
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((s) => (
                      <button
                        key={s}
                        onClick={() => set("service_type", s)}
                        className={`text-left p-5 border transition-all ${
                          form.service_type === s
                            ? "border-[#D96C4B] bg-[#D96C4B]/10"
                            : "border-white/15 hover:border-white/40"
                        }`}
                      >
                        <div className="cpl-display text-sm font-semibold text-[#F2F2F2]">{s}</div>
                      </button>
                    ))}
                  </div>
                  <div className="mt-10 flex justify-end">
                    <button
                      disabled={!canNext1}
                      onClick={() => setStep(2)}
                      className="cpl-display text-xs px-7 py-4 bg-[#D96C4B] text-[#111311] font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#e08366] transition-colors inline-flex items-center gap-2"
                    >
                      Continue <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div>
                  <div className="cpl-eyebrow text-[#A3A8A3] mb-2">Step 02</div>
                  <h3 className="cpl-display text-2xl font-bold text-[#F2F2F2] mb-8">
                    Define the scope.
                  </h3>
                  <div className="grid grid-cols-1 gap-3">
                    {scopes.map((s) => (
                      <button
                        key={s.label}
                        onClick={() => set("scope", s.label)}
                        className={`text-left p-5 border transition-all flex items-center justify-between ${
                          form.scope === s.label
                            ? "border-[#D96C4B] bg-[#D96C4B]/10"
                            : "border-white/15 hover:border-white/40"
                        }`}
                      >
                        <div>
                          <div className="cpl-display text-sm font-semibold text-[#F2F2F2]">{s.label}</div>
                          <div className="text-[#A3A8A3] text-sm mt-1">{s.desc}</div>
                        </div>
                        {form.scope === s.label && <Check className="w-5 h-5 text-[#D96C4B]" />}
                      </button>
                    ))}
                  </div>
                  <div className="mt-10 flex justify-between">
                    <button
                      onClick={() => setStep(1)}
                      className="cpl-display text-xs px-6 py-4 border border-white/20 text-[#F2F2F2] hover:border-white/50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      disabled={!canNext2}
                      onClick={() => setStep(3)}
                      className="cpl-display text-xs px-7 py-4 bg-[#D96C4B] text-[#111311] font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#e08366] transition-colors inline-flex items-center gap-2"
                    >
                      Continue <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div>
                  <div className="cpl-eyebrow text-[#A3A8A3] mb-2">Step 03</div>
                  <h3 className="cpl-display text-2xl font-bold text-[#F2F2F2] mb-8">
                    Contact uplink.
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field label="Name *">
                      <input
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        placeholder="Jane Doe"
                        className="cpl-input"
                      />
                    </Field>
                    <Field label="Phone">
                      <input
                        value={form.phone}
                        onChange={(e) => set("phone", e.target.value)}
                        placeholder="704-555-0123"
                        className="cpl-input"
                      />
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label="Email *">
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => set("email", e.target.value)}
                          placeholder="you@email.com"
                          className="cpl-input"
                        />
                      </Field>
                    </div>
                    <div className="sm:col-span-2">
                      <Field label="What do you want done?">
                        <textarea
                          value={form.message}
                          onChange={(e) => set("message", e.target.value)}
                          rows={4}
                          placeholder="Tell us about the property, the problem, the dream…"
                          className="cpl-input resize-none"
                        />
                      </Field>
                    </div>
                  </div>

                  <div className="mt-10 flex justify-between items-center">
                    <button
                      onClick={() => setStep(2)}
                      className="cpl-display text-xs px-6 py-4 border border-white/20 text-[#F2F2F2] hover:border-white/50 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      disabled={!canSubmit || submitting}
                      onClick={submit}
                      className="cpl-display text-xs px-8 py-4 bg-[#D96C4B] text-[#111311] font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#e08366] transition-colors inline-flex items-center gap-2"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                        </>
                      ) : (
                        "Send Request"
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

      <style>{`
        .cpl-input {
          width: 100%;
          background: #111311;
          border: 1px solid rgba(242,242,242,0.15);
          color: #F2F2F2;
          padding: 0.875rem 1rem;
          font-size: 1rem;
          font-family: 'Inter', sans-serif;
          outline: none;
          transition: border-color 0.2s;
        }
        .cpl-input:focus { border-color: #D96C4B; }
        .cpl-input::placeholder { color: #A3A8A3; }
      `}</style>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="cpl-eyebrow text-[10px] text-[#A3A8A3] mb-2">{label}</div>
      {children}
    </label>
  );
}