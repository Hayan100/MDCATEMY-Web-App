"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const CRITERIA = [
  "Matric marks of 90% or above (board certificate required)",
  "FSc First Year marks of 85% or above (if completed)",
  "Financial need verified through a brief written statement",
  "Completion of the scholarship application form with full details",
  "A 5-minute voice note or short video explaining your situation and your goal",
];

export default function Scholarship() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#181A18" }}>
      {/* Top section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mdcat-yellow/30 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: "#222422", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 6px 28px rgba(0,0,0,0.4)" }}
        >
          {/* Header */}
          <div className="border-b p-6 lg:p-8" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(255,198,0,0.1)", border: "1px solid rgba(255,198,0,0.3)" }}>
                <Award size={32} className="text-mdcat-yellow" />
              </div>
              <div>
                <p className="text-xs font-inter font-black uppercase tracking-widest mb-1" style={{ color: "rgba(255,255,255,0.35)" }}>
                  Scholarship Program
                </p>
                <h2 className="font-inter font-black text-mdcat-yellow" style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}>
                  Talent Should Never Be Blocked by Finances
                </h2>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 lg:p-10">
            <p className="font-inter text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.72)" }}>
              We reserve a limited number of partial scholarships each season for students who demonstrate both academic potential and genuine financial need. If that is you, apply. We read every application personally.
            </p>

            <div className="mb-8">
              <p className="font-inter font-bold text-white text-base mb-5">Eligibility Criteria</p>
              <div className="space-y-3">
                {CRITERIA.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={16} className="text-mdcat-yellow flex-shrink-0 mt-1" />
                    <span className="font-inter text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <p className="font-inter text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                Applications are reviewed on a rolling basis. Apply early — spots are limited.
              </p>
              <a
                href="mailto:info@mdcatemy.com?subject=Scholarship Application"
                className="inline-block bg-mdcat-yellow text-warrior-black font-inter font-black text-sm uppercase tracking-wider px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-200 whitespace-nowrap"
              >
                Apply for Scholarship
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
