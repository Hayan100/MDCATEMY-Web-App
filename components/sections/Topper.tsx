"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Quote } from "lucide-react";

/* ─────────────────────────────────────────
   Nasrin Ghafoor — Animated SVG Avatar
   (girl, long brown hair, white top,
    blue circular background)
───────────────────────────────────────── */
function NasrinAvatar() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      {/* Outer glow ring */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,198,0,0.25) 0%, transparent 70%)" }}
      />

      <svg
        viewBox="0 0 220 220"
        width="220"
        height="220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Yellow score badge floating top-right */}
        <g transform="translate(148, 12)">
          <rect x="0" y="0" width="64" height="30" rx="6" fill="#FFC600" />
          <text x="32" y="20" textAnchor="middle" fill="#181A18" fontSize="13" fontWeight="900" fontFamily="Inter">
            175/180
          </text>
        </g>

        {/* Trophy floating top-left */}
        <g transform="translate(8, 10)">
          <circle cx="20" cy="20" r="18" fill="rgba(255,198,0,0.12)" stroke="rgba(255,198,0,0.4)" strokeWidth="1" />
          <text x="20" y="26" textAnchor="middle" fontSize="18">🏆</text>
        </g>

        {/* Blue circle background */}
        <circle cx="110" cy="118" r="82" fill="#3B6CB7" />
        <circle cx="110" cy="118" r="82" fill="url(#blueGrad)" />
        <defs>
          <radialGradient id="blueGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#5A8DD4" />
            <stop offset="100%" stopColor="#2B4F8A" />
          </radialGradient>
        </defs>

        {/* ── BODY / SHIRT ── */}
        {/* White top */}
        <path d="M68 178 Q90 165 110 165 Q130 165 152 178 L162 220 L58 220 Z" fill="#F0F0F0" />
        {/* Collar shadow */}
        <path d="M95 165 L110 172 L125 165 L120 175 L110 178 L100 175 Z" fill="#DDD" />

        {/* ── NECK ── */}
        <rect x="97" y="153" width="26" height="18" rx="5" fill="#F4C89E" />

        {/* ── HAIR — back layer (long, flowing down) ── */}
        <ellipse cx="110" cy="108" rx="50" ry="55" fill="#4A2C0A" />
        {/* Side hair flowing down */}
        <path d="M62 118 Q55 135 58 160 Q64 175 72 178 L68 178 Q60 165 58 148 Q55 130 62 118 Z" fill="#4A2C0A" />
        <path d="M158 118 Q165 135 162 160 Q156 175 148 178 L152 178 Q160 165 162 148 Q165 130 158 118 Z" fill="#4A2C0A" />

        {/* ── HEAD / FACE ── */}
        <ellipse cx="110" cy="122" rx="40" ry="44" fill="#F4C89E" />

        {/* ── HAIR — front layer (top) ── */}
        <ellipse cx="110" cy="93" rx="48" ry="36" fill="#5C3317" />
        {/* Hair parting highlight */}
        <path d="M107 78 Q110 72 113 78 Q115 88 110 90 Q105 88 107 78 Z" fill="#7A4520" opacity="0.6" />
        {/* Side strands in front */}
        <ellipse cx="68" cy="120" rx="9" ry="25" fill="#5C3317" />
        <ellipse cx="152" cy="120" rx="9" ry="25" fill="#5C3317" />

        {/* ── FACE FEATURES ── */}

        {/* Eyebrows */}
        <path d="M90 110 Q98 106 106 110" stroke="#3D2314" strokeWidth="2.8" fill="none" strokeLinecap="round" />
        <path d="M114 110 Q122 106 130 110" stroke="#3D2314" strokeWidth="2.8" fill="none" strokeLinecap="round" />

        {/* Eyes — whites */}
        <ellipse cx="96" cy="118" rx="7" ry="7.5" fill="white" />
        <ellipse cx="124" cy="118" rx="7" ry="7.5" fill="white" />

        {/* Irises */}
        <circle cx="96" cy="119" r="4.5" fill="#3D2314" />
        <circle cx="124" cy="119" r="4.5" fill="#3D2314" />

        {/* Pupils + light sparkle */}
        <circle cx="96" cy="119" r="2.5" fill="#1A0C08" />
        <circle cx="124" cy="119" r="2.5" fill="#1A0C08" />
        <circle cx="97.5" cy="117.5" r="1.5" fill="white" opacity="0.85" />
        <circle cx="125.5" cy="117.5" r="1.5" fill="white" opacity="0.85" />

        {/* Eyelashes */}
        <path d="M89 113 Q90 110 91 113" stroke="#3D2314" strokeWidth="1.2" fill="none" />
        <path d="M103 113 Q102 110 101 113" stroke="#3D2314" strokeWidth="1.2" fill="none" />

        {/* Nose */}
        <path d="M107 126 Q110 131 113 126" stroke="#C17B5A" strokeWidth="1.8" fill="none" strokeLinecap="round" />

        {/* Smile */}
        <path d="M98 136 Q110 146 122 136" stroke="#C17B5A" strokeWidth="2.2" fill="none" strokeLinecap="round" />

        {/* Cheek blush */}
        <ellipse cx="82" cy="130" rx="9" ry="5" fill="#F4A0A0" opacity="0.35" />
        <ellipse cx="138" cy="130" rx="9" ry="5" fill="#F4A0A0" opacity="0.35" />

        {/* Stars floating */}
        <motion.text x="185" y="80" fontSize="14" opacity="0.7">⭐</motion.text>
        <text x="25" y="170" fontSize="12" opacity="0.5">✨</text>
      </svg>
    </motion.div>
  );
}

export default function Topper() {
  return (
    <section className="py-24 bg-dark-charcoal relative overflow-hidden">

      {/* Top angle cut */}
      <div
        className="absolute top-0 left-0 right-0 h-10 bg-warrior-black pointer-events-none"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)" }}
      />

      {/* Yellow accent lines in bg */}
      <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-10">
        <svg viewBox="0 0 288 288" fill="none">
          <line x1="288" y1="0" x2="0" y2="288" stroke="#FFC600" strokeWidth="1" />
          <line x1="288" y1="60" x2="60" y2="288" stroke="#FFC600" strokeWidth="0.5" />
          <line x1="288" y1="120" x2="120" y2="288" stroke="#FFC600" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-mdcat-yellow/10 border border-mdcat-yellow/20 rounded-full px-5 py-2 mb-5">
            <Trophy size={13} className="text-mdcat-yellow" />
            <span className="text-mdcat-yellow text-xs font-inter font-bold uppercase tracking-widest">
              Class of 2025 — Emergency Setup
            </span>
          </div>

          <h2
            className="font-inter font-black text-white leading-tight"
            style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)", letterSpacing: "-0.02em" }}
          >
            Meet Our Topper From{" "}
            <span className="text-gradient-yellow">Last Year&apos;s Emergency Setup!</span>
          </h2>
          <p className="text-warrior-text font-inter text-lg mt-3 max-w-xl mx-auto">
            She joined late. She trusted the system. She secured{" "}
            <span className="text-white font-bold">4th position in all of KPK</span>.
          </p>
        </motion.div>

        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative bg-warrior-black border border-mdcat-yellow/30 rounded-sm overflow-hidden"
        >
          {/* Top yellow accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-mdcat-yellow" />

          <div className="flex flex-col lg:flex-row gap-0">

            {/* Left — avatar + stats */}
            <div className="lg:w-2/5 flex flex-col items-center justify-center p-10 bg-gradient-to-b from-warrior-black to-dark-charcoal border-b lg:border-b-0 lg:border-r border-warrior-border">
              <NasrinAvatar />

              <div className="mt-6 text-center">
                <h3 className="font-inter font-black text-white text-2xl tracking-tight">
                  Nasrin Ghafoor
                </h3>
                <p className="text-warrior-text font-inter text-sm mt-1">Roll # 5830006</p>

                {/* Score badge */}
                <div className="mt-4 inline-block bg-mdcat-yellow rounded-sm px-6 py-3">
                  <span className="font-inter font-black text-warrior-black text-3xl">175/180</span>
                </div>

                {/* Achievement */}
                <div className="mt-3 inline-flex items-center gap-2 bg-mdcat-yellow/10 border border-mdcat-yellow/30 rounded-full px-4 py-1.5">
                  <Trophy size={12} className="text-mdcat-yellow" />
                  <span className="text-mdcat-yellow text-xs font-inter font-bold">
                    4th Position — KPK KMU MDCAT
                  </span>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-mdcat-yellow fill-mdcat-yellow" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right — full quote */}
            <div className="lg:w-3/5 p-10 flex flex-col justify-center">
              <div className="w-10 h-10 bg-mdcat-yellow/10 border border-mdcat-yellow/30 rounded-sm flex items-center justify-center mb-6">
                <Quote size={18} className="text-mdcat-yellow" />
              </div>

              <blockquote className="text-white/90 font-inter text-lg leading-relaxed italic space-y-4">
                <p>
                  &ldquo;Assalamualaikum. My name is Nasrin Ghafoor and Alhamdulillah I scored 175/180 in MDCAT 2025.
                  I joined MDCATemy for my preparation and I can confidently say that it is the best online platform for test series and guided preparation.
                </p>
                <p>
                  Their MCQs are precise, MDCAT-relevant, and free from unnecessary confusion — focusing only on what truly matters.
                  What I appreciated the most was their outstanding staff and management, specially the way they engage with students individually, helping them overcome fears and strengthen weak areas.
                </p>
                <p>
                  To every MDCAT aspirant — if you&apos;re confused or feel lost in your preparation, join MDCATemy. It will give you the direction and support you need.
                </p>
                <p>
                  Special thanks to <span className="text-mdcat-yellow font-bold not-italic">Hayan Khan</span> — whose constant motivation and personal guidance helped remove the fear of MDCAT and kept us moving forward with confidence.&rdquo;
                </p>
              </blockquote>

              <div className="mt-8 pt-6 border-t border-warrior-border flex flex-wrap gap-3">
                {["Best Platform", "Precise MCQs", "Personal Guidance", "Fear Conquered"].map((tag, i) => (
                  <span
                    key={i}
                    className="bg-mdcat-yellow/10 border border-mdcat-yellow/20 text-mdcat-yellow text-xs font-inter font-bold px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-center mt-10"
        >
          <p className="text-warrior-text font-inter text-base mb-5">
            This is what happens when fear is removed and a system takes over.
          </p>
          <a href="#pricing" className="btn-primary inline-block">
            Join the Tribe
          </a>
        </motion.div>

      </div>
    </section>
  );
}
