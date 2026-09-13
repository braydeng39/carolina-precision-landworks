import React from "react";
import { Image } from "@/components/ui/image";
import {
  Mountain,
  Layers,
  Trees,
  Droplets,
  Flower2,
  Tractor,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    n: "01",
    title: "Landscaping",
    desc: "Softscape design and installation — grading meets green. Beds, sod, plantings, and finish work that complete the transformation.",
    icon: Flower2,
    img: "https://media.base44.com/images/public/6aa726b164e18a9854734912/c71e02ced_generated_image.png",
  },
  {
    n: "02",
    title: "Hardscaping",
    desc: "Retaining walls, patios, walkways, and stone features built to outlast the seasons. Mortar joints laid with microscopic precision.",
    icon: Mountain,
    img: "https://media.base44.com/images/public/6aa726b164e18a9854734912/bacd76f74_generated_image.png",
  },
  {
    n: "03",
    title: "Grading",
    desc: "Precision earthmoving and slope correction. We level, contour, and grade for foundations, driveways, and drainage — every inch measured to the tenth.",
    icon: Layers,
    img: "https://media.base44.com/images/public/6aa726b164e18a9854734912/1fd95fffd_generated_379f0274.jpg",
  },
  {
    n: "04",
    title: "Land Clearing",
    desc: "Trees, brush, stumps, and debris removed clean. From small lots to full acreage, we open your land for what comes next.",
    icon: Trees,
    img: "https://media.base44.com/images/public/6aa726b164e18a9854734912/8fe8d53d0_generated_6738f070.jpg",
  },
  {
    n: "05",
    title: "Drainage Solutions",
    desc: "French drains, swales, and hidden channel systems that move water where you want it — protecting your foundation and your investment.",
    icon: Droplets,
    img: "https://media.base44.com/images/public/6aa726b164e18a9854734912/0321fc6d3_generated_image.png",
  },
  {
    n: "06",
    title: "Site Prep & Excavation",
    desc: "Full-site preparation for builds and renovations. Excavation, trenching, footing digs, and rough grade — the foundation beneath everything.",
    icon: Tractor,
    img: "https://media.base44.com/images/public/6aa726b164e18a9854734912/f7d578ebc_generated_6276273f.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-[#111311] py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-12 gap-4 mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-4">
            <div className="cpl-eyebrow text-[#D96C4B] mb-4">The Capability Matrix</div>
            <h2 className="cpl-display text-4xl md:text-6xl font-bold text-[#F2F2F2] leading-[0.95]">
              What we do.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 flex items-end">
            <p className="text-[#A3A8A3] text-lg leading-relaxed">
              Any project, big or small — commercial or residential — we can do it,
              and we do it better than anyone else. One crew, one standard, and an
              obsession with the perfect grade from the first cut of the dozer to
              the last laid stone.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.n}
                className="group relative bg-[#111311] p-8 md:p-10 hover:bg-[#1a1d1a] transition-colors duration-500 cursor-pointer overflow-hidden"
              >
                <div className="absolute top-6 right-6 cpl-display text-xs text-[#A3A8A3]/50">
                  {s.n}
                </div>
                <div className="w-12 h-12 border border-[#D96C4B]/40 flex items-center justify-center mb-8 group-hover:border-[#D96C4B] group-hover:bg-[#D96C4B]/10 transition-all">
                  <Icon className="w-5 h-5 text-[#D96C4B]" />
                </div>
                <h3 className="cpl-display text-2xl font-bold text-[#F2F2F2] mb-4 group-hover:text-[#D96C4B] transition-colors">
                  {s.title}
                </h3>
                <p className="text-[#A3A8A3] text-base leading-relaxed mb-8">{s.desc}</p>

                {/* Reveal image on hover */}
                <div className="relative h-44 overflow-hidden border border-white/10">
                  <Image
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    fittingType="fill"
                  />
                  <div className="absolute inset-0 bg-[#111311]/30 group-hover:bg-[#111311]/10 transition-colors" />
                </div>

                <a
                  href="#quote"
                  className="mt-6 inline-flex items-center gap-2 cpl-display text-xs text-[#F2F2F2] hover:text-[#D96C4B] transition-colors"
                >
                  Request this service
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}