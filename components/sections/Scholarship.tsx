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
    <section className="py-20 bg-dark-charcoal relative overflow-hidden">
      {/* Top section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mdcat-yellow/40 to-transparent" />
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="group bg-warrior-black border border-warrior-border rounded-2xl p-8 lg:p-12 cursor-default"
          style={{ transition: "background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease" }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "#FFC600";
            e.currentTarget.style.borderColor = "#FFC600";
            e.currentTarget.style.boxShadow = "0 0 50px rgba(255,198,0,0.35), 0 0 100px rgba(255,198,0,0.12)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = "";
            e.currentTarget.style.borderColor = "";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div className="flex items-start gap-5 mb-8">
            <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-mdcat-yellow/10 group-hover:bg-warrior-black/10 border border-mdcat-yellow/30 group-hover:border-warrior-black/20 flex items-center justify-center transition-all duration-300">
              <Award size={28} className="text-mdcat-yellow group-hover:text-warrior-black transition-colors duration-300" />
            </div>
            <div>
              <p className="text-mdcat-yellow group-hover:text-warrior-black/70 text-xs font-inter font-semibold uppercase tracking-widest mb-2 transition-colors duration-300">
                Scholarship Program
              </p>
              <h2
                className="font-inter font-black text-white group-hover:text-warrior-black transition-colors duration-300"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
              >
                Talent Should Never Be Blocked by Finances
              </h2>
            </div>
          </div>

          <p className="text-warrior-text group-hover:text-warrior-black/75 font-inter text-lg leading-relaxed mb-8 transition-colors duration-300">
            We reserve a limited number of partial scholarships each season for students who demonstrate both academic potential and genuine financial need. If that is you, apply. We read every application personally.
          </p>

          <div className="mb-8">
            <h3 className="font-inter font-bold text-white group-hover:text-warrior-black text-base mb-5 transition-colors duration-300">Eligibility Criteria</h3>
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
                  <CheckCircle size={16} className="text-mdcat-yellow group-hover:text-warrior-black flex-shrink-0 mt-1 transition-colors duration-300" />
                  <span className="text-white/80 group-hover:text-warrior-black/80 font-inter text-sm leading-relaxed transition-colors duration-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-warrior-border group-hover:border-warrior-black/20 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between transition-colors duration-300">
            <p className="text-warrior-text group-hover:text-warrior-black/70 text-sm font-inter transition-colors duration-300">
              Applications are reviewed on a rolling basis. Apply early — spots are limited.
            </p>
            <a
              href="mailto:info@mdcatemy.com?subject=Scholarship Application"
              className="inline-block border border-warrior-border group-hover:border-warrior-black text-white group-hover:text-warrior-black font-inter font-black text-sm uppercase tracking-wider px-6 py-3 rounded-xl hover:opacity-80 transition-all duration-300 whitespace-nowrap"
            >
              Apply for Scholarship
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
