import React from "react";
import { Check, Phone, ArrowLeft } from "lucide-react";

export default function ThankYou() {
  return (
    <main className="cpl-shell min-h-screen flex flex-col">
      {/* Brand header */}
      <header className="border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
          <a href="/" className="cpl-display text-sm font-bold text-[#F2F2F2] tracking-wider">
            CAROLINA PRECISION <span className="text-[#D96C4B]">LANDWORKS</span>
          </a>
          <a href="tel:7043100755" className="text-[#A3A8A3] text-sm hover:text-[#F2F2F2] transition-colors">
            704-310-0755
          </a>
        </div>
      </header>

      {/* Confirmation */}
      <section className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-2xl w-full text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#4B9D96]/15 border border-[#4B9D96] flex items-center justify-center mb-8">
            <Check className="w-7 h-7 text-[#4B9D96]" />
          </div>
          <div className="cpl-eyebrow text-[#4B9D96] mb-4">Request Logged</div>
          <h1 className="cpl-display text-4xl md:text-5xl font-bold text-[#F2F2F2] mb-5 leading-[0.95]">
            Your request is in.
          </h1>
          <p className="text-[#A3A8A3] text-lg mb-10 max-w-md mx-auto">
            Thanks for reaching out. We'll call or email you within one business day. Need it sooner?
          </p>
          <a
            href="tel:7043100755"
            className="cpl-display text-sm px-7 py-4 bg-[#D96C4B] text-[#111311] font-semibold hover:bg-[#e08366] transition-colors inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4" /> Call 704-310-0755
          </a>
          <div className="mt-10">
            <a href="/" className="cpl-eyebrow text-[#A3A8A3] hover:text-[#F2F2F2] transition-colors inline-flex items-center gap-2">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to home
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-6 text-center">
          <div className="cpl-eyebrow text-[#A3A8A3]">© {new Date().getFullYear()} Carolina Precision Landworks</div>
        </div>
      </footer>
    </main>
  );
}