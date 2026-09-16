import React from "react";
import { Image } from "@/components/ui/image";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden bg-[#111311]">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://media.base44.com/images/public/6aa726b164e18a9854734912/e530af0a3_generated_252a4b91.jpg"
          alt="Heavy excavator at blue hour over leveled earth"
          className="w-full h-full object-cover"
          fittingType="fill"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111311] via-[#111311]/70 to-[#111311]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111311] via-transparent to-[#111311]/40" />
      </div>

      {/* Topographic drift overlay */}
      <div className="absolute inset-0 cpl-topo cpl-drift pointer-events-none opacity-60" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center max-w-[1400px] mx-auto px-6 md:px-10 pt-20">
        <div className="max-w-4xl">
          <div className="cpl-eyebrow mb-6 text-[#D96C4B]">
            Landscaping · Hardscaping · Land Clearing · Grading · Drainage · Site Prep & Excavation
          </div>
          <h1 className="cpl-display text-[#F2F2F2] text-[10.5vw] md:text-[7rem] leading-[0.9] font-bold tracking-tight">
            Carolina Precision
            <span className="block text-[#D96C4B]">Landworks</span>
          </h1>

          <p className="mt-8 text-[#F2F2F2]/85 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
            Any project — big or small, commercial or residential.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#quote"
              className="cpl-display text-xs px-7 py-4 bg-[#D96C4B] text-[#111311] font-semibold hover:bg-[#e08366] transition-colors"
            >
              Request a Quote
            </a>
            <a
              href="#services"
              className="cpl-display text-xs px-7 py-4 border border-white/25 text-[#F2F2F2] hover:border-[#D96C4B] hover:text-[#D96C4B] transition-colors"
            >
              Explore Capabilities
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}