import React from "react";
import { Facebook, Mail } from "lucide-react";

export default function Footer() {
  const email = "CarolinaPrecisionLandworks@gmail.com";

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


        {/* Socials */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="cpl-eyebrow text-[#A3A8A3] mb-6 text-center">Socials</div>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.facebook.com/p/Carolina-Precision-Landworks-61578478963600/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 border border-white/15 hover:border-[#D96C4B] px-6 py-4 transition-colors"
            >
              <Facebook className="w-5 h-5 text-[#D96C4B]" />
              <span className="cpl-display text-xs text-[#F2F2F2]">Facebook</span>
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-3 border border-white/15 hover:border-[#D96C4B] px-6 py-4 transition-colors"
            >
              <Mail className="w-5 h-5 text-[#D96C4B]" />
              <span className="cpl-display text-xs text-[#F2F2F2]">Email Us</span>
            </a>
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