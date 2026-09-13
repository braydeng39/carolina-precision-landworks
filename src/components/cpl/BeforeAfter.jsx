import React, { useRef, useState, useCallback } from "react";
import { Image } from "@/components/ui/image";

export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, pct)));
  }, []);

  const onDown = (e) => {
    dragging.current = true;
    updateFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onMove = (e) => {
    if (!dragging.current) return;
    updateFromClientX(e.touches ? e.touches[0].clientX : e.clientX);
  };
  const onUp = () => { dragging.current = false; };

  return (
    <section id="work" className="relative bg-[#1a1d1a] py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-4 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-5">
            <div className="cpl-eyebrow text-[#D96C4B] mb-4">The Terra-Form Reveal</div>
            <h2 className="cpl-display text-4xl md:text-6xl font-bold text-[#F2F2F2] leading-[0.95]">
              Before.<br />After.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 flex items-end">
            <p className="text-[#A3A8A3] text-lg leading-relaxed">
              Drag the line to see what precision grading and hardscaping do to
              raw land. This is the difference a real crew makes.
            </p>
          </div>
        </div>

        <div
          ref={containerRef}
          onMouseDown={onDown}
          onMouseMove={onMove}
          onMouseUp={onUp}
          onMouseLeave={onUp}
          onTouchStart={onDown}
          onTouchMove={onMove}
          onTouchEnd={onUp}
          className="relative w-full aspect-[16/9] overflow-hidden border border-white/10 select-none cursor-ew-resize"
        >
          {/* After (full) */}
          <Image
            src="https://media.base44.com/images/public/6aa726b164e18a9854734912/db1d8fa78_generated_image.png"
            alt="Finished graded and hardscaped lot"
            className="absolute inset-0 w-full h-full object-cover"
            fittingType="fill"
          />
          <div className="absolute top-6 right-6 cpl-display text-xs px-3 py-1.5 bg-[#111311]/80 text-[#4B9D96] border border-[#4B9D96]/40">
            After
          </div>

          {/* Before (clipped via clip-path so the image stays full-width) */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          >
            <Image
              src="https://media.base44.com/images/public/6aa726b164e18a9854734912/f6d420bb3_generated_image.png"
              alt="Raw overgrown lot before work"
              className="absolute inset-0 w-full h-full object-cover"
              fittingType="fill"
            />
            <div className="absolute top-6 left-6 cpl-display text-xs px-3 py-1.5 bg-[#111311]/80 text-[#D96C4B] border border-[#D96C4B]/40">
              Before
            </div>
          </div>

          {/* Handle */}
          <div
            className="absolute top-0 bottom-0 w-px bg-[#D96C4B] pointer-events-none"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#D96C4B] flex items-center justify-center">
              <div className="flex gap-0.5">
                <span className="w-1 h-4 bg-[#111311]" />
                <span className="w-1 h-4 bg-[#111311]" />
              </div>
            </div>
          </div>
        </div>
        <p className="mt-4 cpl-eyebrow text-center text-[#A3A8A3]/60">
          Drag ← → to compare
        </p>
      </div>
    </section>
  );
}