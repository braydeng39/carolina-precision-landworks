import React from "react";

const stats = [
  { value: "100%", label: "Grade-checked finish" },
  { value: "1-day", label: "Quote turnaround" },
  { value: "Local", label: "Carolina owned & run" },
  { value: "Insured", label: "Licensed & covered" },
];

export default function Stats() {
  return (
    <section className="bg-[#111311] border-y border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="p-8 md:p-12 text-center md:text-left border-l border-white/10">
            <div className="cpl-display text-3xl md:text-5xl font-bold text-[#D96C4B] mb-2">
              {s.value}
            </div>
            <div className="text-[#A3A8A3] text-sm">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}