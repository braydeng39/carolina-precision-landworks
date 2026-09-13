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
        <div className="grid grid-cols-12 gap-4 items-center">
          {/* Left: PRECISION */}
          <div className="col-span-12 md:col-span-5">
            <div className="cpl-eyebrow mb-6 text-[#D96C4B]">Carolina · Est. Precision</div>
            <h1 className="cpl-display text-[#F2F2F2] text-[18vw] md:text-[8.5rem] leading-[0.85] font-bold">
              Precision
            </h1>
          </div>

          {/* Center: Site Data */}
          <div className="col-span-12 md:col-span-2 flex md:flex-col items-center justify-center gap-6 md:py-8 md:border-l md:border-r border-white/15">
            <div className="hidden md:block cpl-eyebrow text-[10px] [writing-mode:vertical-rl] rotate-180">
              Site Data
            </div>
            <div className="flex md:flex-col gap-4 md:gap-2 text-center md:text-left">
              <a href="tel:7043100755" className="cpl-display text-[11px] text-[#F2F2F2] hover:text-[#D96C4B] transition-colors md:[writing-mode:vertical-rl] md:rotate-180">
                704-310-0755
              </a>
              <span className="hidden md:inline-block w-8 h-px bg-white/20" />
              <a href="mailto:CarolinaPrecisionLandworks@gmail.com" className="cpl-display text-[10px] text-[#A3A8A3] hover:text-[#D96C4B] transition-colors md:[writing-mode:vertical-rl] md:rotate-180">
                CarolinaPrecision
              </a>
            </div>
          </div>

          {/* Right: LANDWORKS */}
          <div className="col-span-12 md:col-span-5 md:text-right">
            <h1 className="cpl-display text-[#F2F2F2] text-[18vw] md:text-[8.5rem] leading-[0.85] font-bold">
              Landworks
            </h1>
          </div>
        </div>

        {/* Subline */}
        <div className="mt-12 md:mt-16 grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 md:col-start-6">
            <p className="text-[#F2F2F2]/85 text-lg md:text-xl leading-relaxed max-w-xl font-light">
              We sculpt the land with surgical precision — grading, clearing,
              hardscaping, and drainage engineered to last. Heavy machinery,
              meticulous craft, and an obsession with the finished grade.
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
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <div className="cpl-eyebrow text-[9px] text-[#A3A8A3]">Scroll</div>
        <div className="w-px h-10 bg-gradient-to-b from-[#D96C4B] to-transparent" />
      </div>
    </section>
  );
}