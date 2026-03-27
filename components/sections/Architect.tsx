"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const TIMELINE = [
  { year: "2022", event: "Appeared in MDCAT and scored 184 — top percentile nationally." },
  { year: "2023", event: "Started coaching MDCAT students one-on-one. Saw the same problems in every student: no system, no accountability, no mindset work." },
  { year: "2024", event: "Built the first version of the Study Tribe with 30 students. Results were immediately different from any other academy." },
  { year: "2025", event: "Study Tribe Warriors went on to secure top positions: 4th in KMU KPK, multiple 170+ scorers. MDCATemy proved the model works." },
  { year: "2026", event: "Opening Season 2 — 100 seats, one mission: get every warrior into a medical college." },
];

export default function Architect() {
  return (
    <section id="architect" className="py-24 bg-warrior-black relative overflow-hidden">
      {/* Faint background grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#FFC600" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-mdcat-yellow text-xs font-inter font-semibold uppercase tracking-widest mb-12 text-center"
        >
          Meet the Architect
        </motion.p>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden border border-warrior-border">
              <Image
                src="/images/hayan.jpg"
                alt="Hayan Khan — Founder of MDCATEMY"
                width={580}
                height={700}
                className="w-full object-cover object-top"
                style={{ maxHeight: "580px" }}
              />
              {/* Yellow overlay gradient at bottom */}
              <div className="absolute bottom-0 left-0 right-0 h-32"
                style={{ background: "linear-gradient(to top, #181A18, transparent)" }}
              />
            </div>

            {/* Score badge */}
            <div className="absolute -bottom-5 -right-5 bg-mdcat-yellow text-warrior-black rounded-sm p-5 shadow-lg shadow-black/50">
              <p className="font-poppins font-black text-3xl leading-none">184</p>
              <p className="font-inter text-xs font-semibold uppercase tracking-wider mt-1">MDCAT Score</p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h2
              className="font-poppins font-black text-white mb-2"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
            >
              Hayan Khan
            </h2>
            <p className="text-mdcat-yellow font-inter font-semibold text-lg mb-6">
              Founder, MDCATEMY
            </p>

            <p className="text-warrior-text font-inter text-lg leading-relaxed mb-10">
              I scored 184 in MDCAT. Not because I was the smartest student in the room. But because I built the right system around myself — one that survived the anxiety, the bad days, and the months of uncertainty. After I got in, I kept asking myself: why do so many students who work just as hard not make it? The answer was always the same. No system. No accountability. No one checking on them. So I built what I wish I had.
            </p>

            {/* Timeline */}
            <div className="space-y-6">
              <h3 className="font-poppins font-bold text-white text-base uppercase tracking-wider mb-4">
                The Timeline
              </h3>
              {TIMELINE.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex gap-5"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-sm bg-mdcat-yellow/10 border border-mdcat-yellow/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-mdcat-yellow font-poppins font-black text-xs">{item.year}</span>
                    </div>
                    {i < TIMELINE.length - 1 && (
                      <div className="w-px flex-1 bg-warrior-border mt-2" />
                    )}
                  </div>
                  <div className="pb-6">
                    <p className="text-white/85 font-inter text-sm leading-relaxed">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
