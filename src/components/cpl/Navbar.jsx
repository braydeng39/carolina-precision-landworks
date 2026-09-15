import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Quote", href: "#quote" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-[#111311]/85 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-9 h-9 border border-[#D96C4B] flex items-center justify-center rotate-45 group-hover:bg-[#D96C4B] transition-colors">
            <div className="w-3 h-3 bg-[#D96C4B] group-hover:bg-[#111311] transition-colors" />
          </div>
          <div className="leading-none">
            <div className="cpl-display text-[#F2F2F2] text-[13px] md:text-sm font-bold tracking-tight">Carolina Precision</div>
            <div className="cpl-display text-[#D96C4B] text-[10px] md:text-[11px] font-semibold tracking-[0.18em]">LANDWORKS</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="cpl-display text-xs text-[#A3A8A3] hover:text-[#F2F2F2] transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D96C4B] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <span className="cpl-display text-[10px] text-[#A3A8A3]">704-310-0755</span>
          <a
            href="tel:7043100755"
            className="cpl-display text-[10px] px-3 py-2 border border-[#D96C4B] text-[#D96C4B] hover:bg-[#D96C4B] hover:text-[#111311] transition-colors"
          >
            Call
          </a>
          <a
            href="sms:7043100755"
            className="cpl-display text-[10px] px-3 py-2 bg-[#D96C4B] text-[#111311] hover:bg-[#e08366] transition-colors"
          >
            Text
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span className={`w-6 h-px bg-[#F2F2F2] transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-px bg-[#F2F2F2] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-px bg-[#F2F2F2] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#111311] border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="cpl-display text-sm text-[#A3A8A3] hover:text-[#F2F2F2]"
            >
              {l.label}
            </a>
          ))}
          <div className="grid grid-cols-2 gap-3 mt-2">
            <a
              href="tel:7043100755"
              onClick={() => setOpen(false)}
              className="cpl-display text-xs text-center px-4 py-3 border border-[#D96C4B] text-[#D96C4B]"
            >
              Call
            </a>
            <a
              href="sms:7043100755"
              onClick={() => setOpen(false)}
              className="cpl-display text-xs text-center px-4 py-3 bg-[#D96C4B] text-[#111311]"
            >
              Text
            </a>
          </div>
          <div className="cpl-display text-[10px] text-[#A3A8A3] text-center">704-310-0755</div>
        </div>
      )}
    </header>
  );
}