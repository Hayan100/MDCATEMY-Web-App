"use client";

import { motion } from "framer-motion";
import { Users, Zap } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden" style={{ backgroundColor: "#181A18" }}>

      {/* Top section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mdcat-yellow/40 to-transparent" />

      {/* Tribal overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/images/tribal-bg.svg')", backgroundSize: "300px 300px", opacity: 0.04 }} />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[500px]"
          style={{ background: "radial-gradient(ellipse, rgba(255,198,0,0.06) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="section-badge mb-6 mx-auto w-fit">
            <Users size={13} className="text-mdcat-yellow" />
            <span className="text-mdcat-yellow text-xs font-inter font-bold uppercase tracking-widest">
              Limited to 100 Warriors per Season
            </span>
          </div>

          <h2
            className="font-inter font-black text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.025em" }}
          >
            Ready to join the tribe?
          </h2>
          <p className="font-inter text-lg max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.55)" }}>
            Pick your plan. Claim your seat. Everything is included — no upsells, no surprises.
          </p>
        </motion.div>

        {/* Two pricing cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-6">

          {/* Option 1 — Upfront (dominant card) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -8 }}
            className="relative rounded-2xl p-8 text-center cursor-default"
            style={{
              backgroundColor: "#222422",
              border: "2px solid #FFC600",
              boxShadow: "0 0 40px rgba(255,198,0,0.15), 0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-mdcat-yellow text-warrior-black text-xs font-inter font-black px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap">
              Best Value — Save Rs. 997
            </div>
            <p className="text-white/50 font-inter font-bold text-sm uppercase tracking-wide mb-3 mt-2">Pay Upfront</p>
            <p className="font-inter font-black text-white" style={{ fontSize: "2.8rem", lineHeight: 1 }}>
              Rs. 26,999
            </p>
            <p className="text-white/40 font-inter text-sm mt-2 mb-7">One-time · Full season access</p>
            <a
              href="#"
              className="block w-full bg-mdcat-yellow text-warrior-black font-inter font-black text-sm uppercase tracking-wider py-3.5 rounded-xl hover:opacity-90 transition-all duration-200"
            >
              Claim Your Seat — Upfront
            </a>
          </motion.div>

          {/* Option 2 — Installments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            whileHover={{ y: -8 }}
            className="rounded-2xl p-8 text-center cursor-default"
            style={{
              backgroundColor: "#222422",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
            }}
          >
            <p className="text-white/50 font-inter font-bold text-sm uppercase tracking-wide mb-3">Installment Plan</p>
            <div className="flex items-end justify-center gap-2 mb-1">
              <p className="font-inter font-black text-white" style={{ fontSize: "2.8rem", lineHeight: 1 }}>
                Rs. 6,999
              </p>
              <p className="text-white/40 font-inter text-base pb-1">/ mo</p>
            </div>
            <p className="text-mdcat-yellow font-inter font-bold text-sm mb-1">× 4 months</p>
            <p className="text-white/30 font-inter text-xs mb-7">Total: Rs. 27,996 · Same access, spread out</p>
            <a
              href="#"
              className="block w-full font-inter font-black text-sm uppercase tracking-wider py-3.5 rounded-xl transition-all duration-200 hover:border-mdcat-yellow hover:text-mdcat-yellow"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.7)" }}
            >
              Claim Your Seat — Installments
            </a>
          </motion.div>
        </div>

        {/* Identical access note */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex items-start gap-3 rounded-xl p-4 mb-6"
          style={{ backgroundColor: "rgba(255,198,0,0.06)", border: "1px solid rgba(255,198,0,0.2)" }}
        >
          <Zap size={16} className="text-mdcat-yellow flex-shrink-0 mt-0.5" />
          <p className="font-inter text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            <span className="text-white font-bold">Both plans give you identical access</span> — every feature, every session, every resource. The installment plan simply spreads the cost across 4 months.
          </p>
        </motion.div>

        {/* Footer note */}
        <p className="text-center font-inter text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
          Seats are capped at <strong className="text-white/60">100 warriors per season</strong>. Once filled, enrollment closes until the next season opens. Need help with the cost? Scholarships are available — see below.
        </p>

      </div>
    </section>
  );
}
