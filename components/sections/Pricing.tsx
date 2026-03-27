"use client";

import { motion } from "framer-motion";
import { Users, Check, Zap, Shield } from "lucide-react";

/* ──────────────────────────────────────────
   What's Included in Study Tribe
────────────────────────────────────────── */
const FEATURES = [
  {
    category: "Live Course",
    items: [
      "Ace MDCAT Like a Warrior — 6 live weekly sessions with Hayan Khan",
      "Live Q&A in every session — ask questions directly",
      "Mindset, strategy, and study technique training",
    ],
  },
  {
    category: "Weekly Full-Length Tests",
    items: [
      "Full-length MDCAT papers every week under real exam conditions",
      "Post-test discussion sessions — every concept clarified",
      "Performance analytics after each test",
    ],
  },
  {
    category: "Learning Resources",
    items: [
      "Video lectures — Biology, Chemistry, Physics, English & LR",
      "PDF notes — clean, exam-focused revision material",
      "Active recall flashcards with built-in spaced repetition",
      "Training Ground — MCQ quiz builder and curated past papers",
      "Score Predictor & real-time analytics dashboard",
      "Mistakes Copy — every wrong MCQ stored and reviewed",
    ],
  },
  {
    category: "Community & Accountability",
    items: [
      "Premium private community — warriors, coaches & Hayan Khan",
      "Family of 5 — peer accountability with live online status",
      "WhatsApp accountability check-ins",
    ],
  },
  {
    category: "Coaching & Support",
    items: [
      "Veteran Coach — a personal MDCAT scorer assigned to you",
      "1-on-1 diagnosis session from Day 1",
      "Personalised preparation plan built around your gaps",
      "Daily task calendar on your dashboard",
      "Weekly review system with your Veteran Coach",
      "Counselling sessions for anxiety, burnout & mental prep",
    ],
  },
];

/* ──────────────────────────────────────────
   Main Component
────────────────────────────────────────── */
export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-warrior-black relative overflow-hidden">

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

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-mdcat-yellow/10 border border-mdcat-yellow/20 rounded-full px-5 py-2 mb-6">
            <Users size={13} className="text-mdcat-yellow" />
            <span className="text-mdcat-yellow text-xs font-inter font-bold uppercase tracking-widest">
              Limited to 100 Warriors per Season
            </span>
          </div>

          <h2
            className="font-inter font-black text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", letterSpacing: "-0.025em" }}
          >
            Join Our{" "}
            <span className="text-gradient-yellow">Study Tribe</span>
          </h2>
          <p className="text-warrior-text font-inter text-xl max-w-2xl mx-auto">
            One plan. Everything included. The complete system that takes you from wherever you are straight into a medical college.
          </p>
        </motion.div>

        {/* ── Main Plan Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-dark-charcoal border border-mdcat-yellow/40 rounded-2xl overflow-hidden mb-8"
          style={{ boxShadow: "0 0 60px rgba(255,198,0,0.1), 0 40px 80px rgba(0,0,0,0.5)" }}
        >
          {/* Top yellow bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-mdcat-yellow" />

          {/* Plan header */}
          <div className="p-8 lg:p-10 border-b border-warrior-border">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-mdcat-yellow/10 border border-mdcat-yellow/30 rounded-full px-4 py-1.5 mb-3">
                  <Shield size={12} className="text-mdcat-yellow" />
                  <span className="text-mdcat-yellow text-xs font-inter font-bold uppercase tracking-widest">The Complete Package</span>
                </div>
                <h3 className="font-inter font-black text-white text-3xl mb-2">Study Tribe</h3>
                <p className="text-warrior-text font-inter text-base">Everything you need to conquer MDCAT — in one complete system.</p>
              </div>

              {/* Price display */}
              <div className="flex-shrink-0 text-center sm:text-right">
                <p className="text-warrior-text font-inter text-xs uppercase tracking-widest mb-1">Starting from</p>
                <p className="font-inter font-black text-mdcat-yellow" style={{ fontSize: "clamp(2rem, 5vw, 2.8rem)", lineHeight: 1 }}>
                  Rs. 24,000
                </p>
                <p className="text-warrior-text font-inter text-sm mt-1">Full season access</p>
              </div>
            </div>
          </div>

          {/* Features list */}
          <div className="p-8 lg:p-10">
            <p className="text-warrior-text font-inter text-xs font-black uppercase tracking-widest mb-8">
              Everything Included in Your Study Tribe Membership
            </p>

            <div className="space-y-8">
              {FEATURES.map((group, gi) => (
                <motion.div
                  key={gi}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: gi * 0.07 }}
                >
                  <p className="text-mdcat-yellow font-inter font-black text-xs uppercase tracking-widest mb-3">
                    {group.category}
                  </p>
                  <ul className="space-y-2.5">
                    {group.items.map((item, ii) => (
                      <li key={ii} className="flex items-start gap-3">
                        <Check size={15} className="text-mdcat-yellow flex-shrink-0 mt-0.5" />
                        <span className="text-white/80 font-inter text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── Two Pricing Options ── */}
          <div className="p-8 lg:p-10 border-t border-warrior-border bg-warrior-black/40">
            <p className="text-warrior-text font-inter text-xs font-black uppercase tracking-widest mb-6 text-center">
              Choose Your Payment Plan
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mb-8">

              {/* Option 1 — Upfront */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="relative bg-mdcat-yellow rounded-2xl p-6 text-center"
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-warrior-black text-mdcat-yellow text-xs font-inter font-black px-4 py-1 rounded-full border border-mdcat-yellow/50 uppercase tracking-wider whitespace-nowrap">
                  Best Value — Save Rs. 2,000
                </div>
                <p className="text-warrior-black font-inter font-bold text-sm uppercase tracking-wide mb-2 mt-2">Upfront Payment</p>
                <p className="font-inter font-black text-warrior-black" style={{ fontSize: "2.6rem", lineHeight: 1 }}>
                  Rs. 24,000
                </p>
                <p className="text-warrior-black/60 font-inter text-sm mt-1 mb-5">One-time, full season access</p>
                <a
                  href="mailto:info@mdcatemy.com?subject=Study Tribe Enrollment — Upfront"
                  className="block w-full bg-warrior-black text-mdcat-yellow font-inter font-black text-sm uppercase tracking-wider py-3.5 rounded-xl hover:bg-warrior-black/90 transition-all duration-200"
                >
                  Enroll Now — Upfront
                </a>
              </motion.div>

              {/* Option 2 — Installments */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="bg-warrior-black border border-warrior-border rounded-2xl p-6 text-center hover:border-mdcat-yellow/40 transition-colors duration-300"
              >
                <p className="text-warrior-text font-inter font-bold text-sm uppercase tracking-wide mb-2">Installment Plan</p>
                <div className="flex items-end justify-center gap-2 mb-1">
                  <p className="font-inter font-black text-white" style={{ fontSize: "2.6rem", lineHeight: 1 }}>
                    Rs. 6,500
                  </p>
                  <p className="text-warrior-text font-inter text-base pb-1">/ month</p>
                </div>
                <p className="text-mdcat-yellow font-inter font-bold text-sm mb-1">× 4 months</p>
                <p className="text-warrior-text font-inter text-xs mb-5">Total: Rs. 26,000 · Same access, spread out</p>
                <a
                  href="mailto:info@mdcatemy.com?subject=Study Tribe Enrollment — Installments"
                  className="block w-full border border-warrior-border text-white font-inter font-black text-sm uppercase tracking-wider py-3.5 rounded-xl hover:border-mdcat-yellow/50 hover:text-mdcat-yellow transition-all duration-200"
                >
                  Enroll — Installments
                </a>
              </motion.div>
            </div>

            {/* Identical access note */}
            <div className="flex items-start gap-3 bg-mdcat-yellow/5 border border-mdcat-yellow/20 rounded-xl p-4">
              <Zap size={16} className="text-mdcat-yellow flex-shrink-0 mt-0.5" />
              <p className="text-warrior-text font-inter text-sm leading-relaxed">
                <span className="text-white font-bold">Both plans give you identical access</span> — every feature, every session, every resource. The installment plan simply spreads the cost across 4 months.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Footer note */}
        <p className="text-center text-warrior-text font-inter text-sm">
          Seats are limited to <strong className="text-white">100 warriors per season</strong>. Once filled, enrollment closes until the next season. Scholarships available — see the section below.
        </p>

      </div>
    </section>
  );
}
