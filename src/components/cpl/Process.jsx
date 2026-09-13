import React from "react";
import { Compass, Ruler, HardHat, ShieldCheck } from "lucide-react";

const steps = [
  {
    n: "01",
    title: "Site Walk & Consult",
    desc: "We walk your property, read the grade, and listen to what you want built. No charge, no pressure.",
    icon: Compass,
  },
  {
    n: "02",
    title: "Scope & Estimate",
    desc: "You get a clear, itemized quote — earthwork, materials, timeline. Numbers you can plan around.",
    icon: Ruler,
  },
  {
    n: "03",
    title: "Precision Execution",
    desc: "Crew and machines on site on the scheduled day. Graded, built, and finished to spec.",
    icon: HardHat,
  },
  {
    n: "04",
    title: "Final Grade & Walk",
    desc: "We walk it with you, confirm drainage and finish, and leave the site cleaner than we found it.",
    icon: ShieldCheck,
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-[#111311] py-24 md:py-32 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-12 md:col-span-6">
            <div className="cpl-eyebrow text-[#D96C4B] mb-4">The Operating Procedure</div>
            <h2 className="cpl-display text-4xl md:text-6xl font-bold text-[#F2F2F2] leading-[0.95]">
              How a job<br />actually runs.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {steps.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.n} className="bg-[#111311] p-8 md:p-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-11 h-11 border border-[#D96C4B]/40 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#D96C4B]" />
                  </div>
                  <span className="cpl-display text-3xl font-bold text-white/10">{s.n}</span>
                </div>
                <h3 className="cpl-display text-xl font-bold text-[#F2F2F2] mb-3">{s.title}</h3>
                <p className="text-[#A3A8A3] text-base leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}