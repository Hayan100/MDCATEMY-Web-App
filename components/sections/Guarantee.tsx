"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, Mail } from "lucide-react";

const CONDITIONS = [
  "You attended every live session in the first month",
  "You completed your daily tasks and stayed active on the platform",
  "You engaged with your Veteran Coach and participated in weekly reviews",
  "You email us within 30 days with your reason and one suggestion for how we can improve",
];

export default function Guarantee() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#181A18" }}>

      {/* Top section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mdcat-yellow/40 to-transparent" />

      {/* Tribal overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/images/tribal-bg.svg')", backgroundSize: "200px 200px", opacity: 0.04 }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="rounded-2xl overflow-hidden"
          style={{ backgroundColor: "#222422", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 6px 28px rgba(0,0,0,0.3)" }}
        >
          {/* Header */}
          <div className="border-b border-white/10 p-6 lg:p-8">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-mdcat-yellow/10 border border-mdcat-yellow/30 rounded-xl flex items-center justify-center">
                <ShieldCheck size={34} className="text-mdcat-yellow" />
              </div>
              <div>
                <p className="text-white/40 text-xs font-inter font-black uppercase tracking-widest mb-1">
                  30-Day Money-Back Guarantee
                </p>
                <h2
                  className="font-inter font-black text-mdcat-yellow"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
                >
                  Train for 30 days. If it&apos;s not for you,
                  <br />we return every rupee.
                </h2>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 lg:p-10">
            <p className="text-white/75 font-inter text-lg leading-relaxed mb-5">
              We are not going to hide behind fine print. If you join the Study Tribe, give it a genuine first month — show up to every live session, work with your coach, complete your daily tasks — and it still is not right for you, email us. We will process a{" "}
              <span className="text-mdcat-yellow font-bold">full 100% refund</span>. No long forms. No delayed responses. Every single rupee, returned.
            </p>
            <p className="text-white/60 font-inter text-lg leading-relaxed mb-8">
              The only thing we ask is that you actually try. Not because we want to make the refund difficult — but because one honest month is what this system needs to show you what it can genuinely do.
            </p>

            {/* Conditions */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
              <p className="text-white font-inter font-black text-sm mb-5">
                To qualify for a refund, all of the following must be true:
              </p>
              <ul className="space-y-3">
                {CONDITIONS.map((c, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={16} className="text-mdcat-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-white/70 font-inter text-sm leading-relaxed">{c}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* How to claim */}
            <div className="flex items-start gap-4 bg-mdcat-yellow/10 border border-mdcat-yellow/25 rounded-xl p-5 mb-6">
              <div className="flex-shrink-0 w-9 h-9 bg-mdcat-yellow/10 border border-mdcat-yellow/30 rounded-xl flex items-center justify-center">
                <Mail size={16} className="text-mdcat-yellow" />
              </div>
              <div>
                <p className="font-inter font-bold text-white text-sm mb-1">How to claim:</p>
                <p className="text-white/60 font-inter text-sm leading-relaxed">
                  Email us at{" "}
                  <a href="mailto:info@mdcatemy.com" className="text-mdcat-yellow font-bold hover:underline">
                    info@mdcatemy.com
                  </a>{" "}
                  within your first month. Tell us your reason and share one suggestion for how we can improve. That is all we ask.
                </p>
              </div>
            </div>

            {/* Closing */}
            <p className="text-white/40 font-inter text-sm italic border-l-2 border-mdcat-yellow/40 pl-4">
              A warrior who shows up fully and still does not feel the value? We will be the first to say: fair enough. We do not want to keep a single rupee we did not earn.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
