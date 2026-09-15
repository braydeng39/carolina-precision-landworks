import React, { useState } from "react";
import { Copy, Check, MapPin } from "lucide-react";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "CarolinaPrecisionLandworks@gmail.com";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  return (
    <footer className="relative bg-[#111311] border-t border-white/10 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 pt-20 md:pt-28 pb-10">
        <div className="cpl-eyebrow text-[#D96C4B] mb-6 text-center">Direct Line</div>

        {/* Monumental phone number */}
        <div className="text-center mb-16">
          <div
            className="cpl-display font-bold text-[#F2F2F2] leading-none"
            style={{ fontSize: "clamp(2rem, 9vw, 6rem)" }}
          >
            704-310-0755
          </div>
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="tel:7043100755"
              className="cpl-display text-xs px-7 py-4 bg-[#D96C4B] text-[#111311] font-semibold hover:bg-[#e08366] transition-colors"
            >
              Call
            </a>
            <a
              href="sms:7043100755"
              className="cpl-display text-xs px-7 py-4 border border-[#D96C4B] text-[#D96C4B] hover:bg-[#D96C4B] hover:text-[#111311] transition-colors"
            >
              Text
            </a>
          </div>
        </div>

        {/* Email copy block */}
        <div className="flex justify-center mb-20">
          <button
            onClick={copyEmail}
            className="group inline-flex items-center gap-4 border border-white/15 hover:border-[#D96C4B] px-8 py-5 transition-colors"
          >
            <span className="cpl-display text-sm md:text-base text-[#F2F2F2] group-hover:text-[#D96C4B] transition-colors break-all">
              {email}
            </span>
            {copied ? (
              <Check className="w-5 h-5 text-[#4B9D96]" />
            ) : (
              <Copy className="w-5 h-5 text-[#A3A8A3] group-hover:text-[#D96C4B] transition-colors" />
            )}
          </button>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-t border-white/10 pt-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 border border-[#D96C4B] flex items-center justify-center rotate-45">
                <div className="w-3 h-3 bg-[#D96C4B]" />
              </div>
              <div className="leading-none">
                <div className="cpl-display text-sm font-bold text-[#F2F2F2]">Carolina Precision</div>
                <div className="cpl-eyebrow text-[10px]">Landworks</div>
              </div>
            </div>
            <p className="text-[#A3A8A3] text-base leading-relaxed max-w-md">
              Grading, land clearing, hardscaping, and drainage — engineered with
              heavy machinery and an obsession for the perfect grade. Serving the
              Carolinas.
            </p>
          </div>

          <div>
            <div className="cpl-eyebrow text-[#A3A8A3] mb-5">Services</div>
            <ul className="space-y-3 text-sm text-[#F2F2F2]/80">
              <li><a href="#services" className="hover:text-[#D96C4B] transition-colors">Grading</a></li>
              <li><a href="#services" className="hover:text-[#D96C4B] transition-colors">Land Clearing</a></li>
              <li><a href="#services" className="hover:text-[#D96C4B] transition-colors">Hardscaping</a></li>
              <li><a href="#services" className="hover:text-[#D96C4B] transition-colors">Drainage Solutions</a></li>
              <li><a href="#services" className="hover:text-[#D96C4B] transition-colors">Landscaping</a></li>
            </ul>
          </div>

          <div>
            <div className="cpl-eyebrow text-[#A3A8A3] mb-5">Connect</div>
            <ul className="space-y-3 text-sm text-[#F2F2F2]/80">
              <li><a href="#quote" className="hover:text-[#D96C4B] transition-colors">Request a Quote</a></li>
              <li><a href="tel:7043100755" className="hover:text-[#D96C4B] transition-colors">704-310-0755</a></li>
              <li>
                <button onClick={copyEmail} className="hover:text-[#D96C4B] transition-colors text-left">
                  {copied ? "Copied to clipboard" : "Copy email"}
                </button>
              </li>
              <li className="flex items-center gap-2 text-[#A3A8A3]">
                <MapPin className="w-4 h-4" /> Serving the Carolinas
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="cpl-eyebrow text-[10px] text-[#A3A8A3]/60">
            © {new Date().getFullYear()} Carolina Precision Landworks. All rights reserved.
          </div>
          <div className="cpl-eyebrow text-[10px] text-[#A3A8A3]/60">
            Built on a perfect grade.
          </div>
        </div>
      </div>
    </footer>
  );
}