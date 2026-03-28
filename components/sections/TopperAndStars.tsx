"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Quote } from "lucide-react";

/* ─────────────────────────────────────────
   Nasrin Ghafoor — Animated SVG Avatar
───────────────────────────────────────── */
function NasrinAvatar() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      className="relative"
    >
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,198,0,0.25) 0%, transparent 70%)" }}
      />

      <svg viewBox="0 0 220 220" width="220" height="220" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(148, 12)">
          <rect x="0" y="0" width="64" height="30" rx="6" fill="#FFC600" />
          <text x="32" y="20" textAnchor="middle" fill="#181A18" fontSize="13" fontWeight="900" fontFamily="Inter, sans-serif">
            175/180
          </text>
        </g>
        <g transform="translate(8, 10)">
          <circle cx="20" cy="20" r="18" fill="rgba(255,198,0,0.12)" stroke="rgba(255,198,0,0.4)" strokeWidth="1" />
          <text x="20" y="26" textAnchor="middle" fontSize="18">🏆</text>
        </g>
        <circle cx="110" cy="118" r="82" fill="#3B6CB7" />
        <circle cx="110" cy="118" r="82" fill="url(#nasrinBlueGrad)" />
        <defs>
          <radialGradient id="nasrinBlueGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#5A8DD4" />
            <stop offset="100%" stopColor="#2B4F8A" />
          </radialGradient>
        </defs>
        <path d="M68 178 Q90 165 110 165 Q130 165 152 178 L162 220 L58 220 Z" fill="#F0F0F0" />
        <path d="M95 165 L110 172 L125 165 L120 175 L110 178 L100 175 Z" fill="#DDD" />
        <rect x="97" y="153" width="26" height="18" rx="5" fill="#F4C89E" />
        <ellipse cx="110" cy="108" rx="50" ry="55" fill="#4A2C0A" />
        <path d="M62 118 Q55 135 58 160 Q64 175 72 178 L68 178 Q60 165 58 148 Q55 130 62 118 Z" fill="#4A2C0A" />
        <path d="M158 118 Q165 135 162 160 Q156 175 148 178 L152 178 Q160 165 162 148 Q165 130 158 118 Z" fill="#4A2C0A" />
        <ellipse cx="110" cy="122" rx="40" ry="44" fill="#F4C89E" />
        <ellipse cx="110" cy="93" rx="48" ry="36" fill="#5C3317" />
        <path d="M107 78 Q110 72 113 78 Q115 88 110 90 Q105 88 107 78 Z" fill="#7A4520" opacity="0.6" />
        <ellipse cx="68" cy="120" rx="9" ry="25" fill="#5C3317" />
        <ellipse cx="152" cy="120" rx="9" ry="25" fill="#5C3317" />
        <path d="M90 110 Q98 106 106 110" stroke="#3D2314" strokeWidth="2.8" fill="none" strokeLinecap="round" />
        <path d="M114 110 Q122 106 130 110" stroke="#3D2314" strokeWidth="2.8" fill="none" strokeLinecap="round" />
        <ellipse cx="96" cy="118" rx="7" ry="7.5" fill="white" />
        <ellipse cx="124" cy="118" rx="7" ry="7.5" fill="white" />
        <circle cx="96" cy="119" r="4.5" fill="#3D2314" />
        <circle cx="124" cy="119" r="4.5" fill="#3D2314" />
        <circle cx="96" cy="119" r="2.5" fill="#1A0C08" />
        <circle cx="124" cy="119" r="2.5" fill="#1A0C08" />
        <circle cx="97.5" cy="117.5" r="1.5" fill="white" opacity="0.85" />
        <circle cx="125.5" cy="117.5" r="1.5" fill="white" opacity="0.85" />
        <path d="M89 113 Q90 110 91 113" stroke="#3D2314" strokeWidth="1.2" fill="none" />
        <path d="M103 113 Q102 110 101 113" stroke="#3D2314" strokeWidth="1.2" fill="none" />
        <path d="M107 126 Q110 131 113 126" stroke="#C17B5A" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M98 136 Q110 146 122 136" stroke="#C17B5A" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <ellipse cx="82" cy="130" rx="9" ry="5" fill="#F4A0A0" opacity="0.35" />
        <ellipse cx="138" cy="130" rx="9" ry="5" fill="#F4A0A0" opacity="0.35" />
        <text x="185" y="80" fontSize="14" opacity="0.7">⭐</text>
        <text x="25" y="170" fontSize="12" opacity="0.5">✨</text>
      </svg>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Warrior-Themed Topper Avatars
───────────────────────────────────────── */
function WarriorMaleAvatar({ glasses = false }: { glasses?: boolean }) {
  return (
    <svg viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Dark warrior circle bg */}
      <circle cx="40" cy="40" r="38" fill="#1e1e1e" stroke="#FFC600" strokeWidth="1.5" />
      {/* Ottoman turban */}
      <ellipse cx="40" cy="22" rx="22" ry="14" fill="#2C1A10" />
      <ellipse cx="40" cy="16" rx="20" ry="10" fill="#3D2314" />
      {/* Turban stripe */}
      <path d="M20 20 Q40 12 60 20" stroke="#FFC600" strokeWidth="1" fill="none" opacity="0.6" />
      {/* Neck */}
      <rect x="33" y="50" width="14" height="10" rx="3" fill="#C68642" />
      {/* Warrior robe / dark cloak */}
      <path d="M18 62 Q30 54 40 56 Q50 54 62 62 L66 80 L14 80 Z" fill="#1A1A1A" />
      {/* Yellow collar/cape edge */}
      <path d="M30 56 L40 60 L50 56" stroke="#FFC600" strokeWidth="1" fill="none" opacity="0.7" />
      {/* Face */}
      <ellipse cx="40" cy="40" rx="17" ry="18" fill="#C68642" />
      {/* Eyes */}
      <circle cx="33" cy="38" r="3.5" fill="white" />
      <circle cx="47" cy="38" r="3.5" fill="white" />
      <circle cx="33" cy="38.5" r="2" fill="#1A0C08" />
      <circle cx="47" cy="38.5" r="2" fill="#1A0C08" />
      <circle cx="33.8" cy="37.5" r="0.9" fill="white" opacity="0.8" />
      <circle cx="47.8" cy="37.5" r="0.9" fill="white" opacity="0.8" />
      {/* Eyebrows */}
      <path d="M29 34 Q33 31 37 34" stroke="#1A0C08" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M43 34 Q47 31 51 34" stroke="#1A0C08" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <path d="M38.5 42 Q40 45 41.5 42" stroke="#A0622A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Confident smile */}
      <path d="M34 47 Q40 53 46 47" stroke="#8B4513" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Warrior mark on forehead */}
      <path d="M37 26 L40 22 L43 26" stroke="#FFC600" strokeWidth="1.2" fill="none" opacity="0.8" />
      {glasses && (
        <>
          <rect x="27" y="34" width="11" height="8" rx="3" fill="none" stroke="#FFC600" strokeWidth="1.5" />
          <rect x="42" y="34" width="11" height="8" rx="3" fill="none" stroke="#FFC600" strokeWidth="1.5" />
          <line x1="38" y1="38" x2="42" y2="38" stroke="#FFC600" strokeWidth="1" />
        </>
      )}
    </svg>
  );
}

function WarriorFemaleAvatar({ hijab = false }: { hijab?: boolean }) {
  return (
    <svg viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#1e1e1e" stroke="#FFC600" strokeWidth="1.5" />
      {hijab ? (
        <>
          <ellipse cx="40" cy="36" rx="25" ry="28" fill="#2C1A10" />
          <ellipse cx="40" cy="62" rx="28" ry="12" fill="#2C1A10" />
          {/* Hijab highlight */}
          <path d="M16 36 Q40 20 64 36" stroke="#FFC600" strokeWidth="0.8" fill="none" opacity="0.4" />
        </>
      ) : (
        <>
          <ellipse cx="40" cy="28" rx="22" ry="18" fill="#4A2C0A" />
          <ellipse cx="22" cy="44" rx="7" ry="18" fill="#4A2C0A" />
          <ellipse cx="58" cy="44" rx="7" ry="18" fill="#4A2C0A" />
        </>
      )}
      {/* Warrior crown/mark on top */}
      <path d="M37 14 L40 10 L43 14" stroke="#FFC600" strokeWidth="1.2" fill="none" opacity={hijab ? "0" : "0.8"} />
      <rect x="33" y="50" width="14" height="10" rx="3" fill="#F4C89E" />
      {/* Warrior robe */}
      <path d="M16 62 Q28 56 40 58 Q52 56 64 62 L68 80 L12 80 Z" fill="#1A1A1A" />
      <path d="M30 58 L40 62 L50 58" stroke="#FFC600" strokeWidth="0.8" fill="none" opacity="0.6" />
      <ellipse cx="40" cy="40" rx="16" ry="17" fill="#F4C89E" />
      <circle cx="33.5" cy="38" r="3.5" fill="white" />
      <circle cx="46.5" cy="38" r="3.5" fill="white" />
      <circle cx="33.5" cy="38.5" r="2" fill="#2C1810" />
      <circle cx="46.5" cy="38.5" r="2" fill="#2C1810" />
      <circle cx="34.3" cy="37.5" r="0.9" fill="white" opacity="0.8" />
      <circle cx="47.3" cy="37.5" r="0.9" fill="white" opacity="0.8" />
      <path d="M29.5 34 Q33.5 31 37.5 34" stroke="#3D2314" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M42.5 34 Q46.5 31 50.5 34" stroke="#3D2314" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M38.5 42 Q40 45 41.5 42" stroke="#C17B5A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <path d="M34.5 47 Q40 53 45.5 47" stroke="#C17B5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="28" cy="43" r="4.5" fill="#F4A0A0" opacity="0.3" />
      <circle cx="52" cy="43" r="4.5" fill="#F4A0A0" opacity="0.3" />
    </svg>
  );
}

function WarriorAvatar({ gender }: { gender: string }) {
  if (gender === "f") return <WarriorFemaleAvatar />;
  if (gender === "fh") return <WarriorFemaleAvatar hijab />;
  if (gender === "mg") return <WarriorMaleAvatar glasses />;
  return <WarriorMaleAvatar />;
}

/* ─────────────────────────────────────────
   Stars Data
───────────────────────────────────────── */
const STARS = [
  { name: "Haris Iqbal",   roll: "5680570", score: 174, gender: "m",  rank: 1 },
  { name: "Umair Ali",     roll: "—",       score: 172, gender: "m",  rank: 2 },
  { name: "Laiba Khan",    roll: "5820139", score: 172, gender: "f",  rank: 2 },
  { name: "Hafsa Karim",   roll: "5680570", score: 170, gender: "fh", rank: 3 },
  { name: "Saima Mushtaq", roll: "5640196", score: 170, gender: "f",  rank: 3 },
  { name: "M. Mujtaba",    roll: "5210034", score: 170, gender: "mg", rank: 3 },
  { name: "Iqra Rehman",   roll: "—",       score: 170, gender: "f",  rank: 3 },
  { name: "Muzaid Shah",   roll: "5760132", score: 169, gender: "m",  rank: 4 },
  { name: "Adnan Amin",    roll: "5700115", score: 169, gender: "m",  rank: 4 },
  { name: "Zeeshan Khan",  roll: "5760132", score: 168, gender: "m",  rank: 5 },
  { name: "Abdul Baseer",  roll: "5870111", score: 168, gender: "m",  rank: 5 },
  { name: "Noor E Sahar",  roll: "—",       score: 168, gender: "f",  rank: 5 },
];

function scoreColor(score: number) {
  if (score >= 174) return "bg-mdcat-yellow text-warrior-black";
  if (score >= 172) return "bg-mdcat-yellow/90 text-warrior-black";
  if (score >= 170) return "bg-mdcat-yellow/80 text-warrior-black";
  return "bg-mdcat-yellow/70 text-warrior-black";
}

function StarCard({ s, index }: { s: typeof STARS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-xl p-5 hover:border-mdcat-yellow/50 transition-colors duration-300 cursor-default"
    >
      <div className="relative mb-3">
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,198,0,0.12) 0%, transparent 70%)" }}
        />
        <WarriorAvatar gender={s.gender} />
        {s.rank === 1 && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="text-lg">👑</span>
          </div>
        )}
      </div>

      <p className="font-inter font-black text-gray-900 text-sm text-center leading-tight mb-1">
        {s.name}
      </p>

      {s.roll !== "—" && (
        <p className="text-warrior-text font-inter text-xs mb-2">Roll # {s.roll}</p>
      )}

      <div className={`${scoreColor(s.score)} font-inter font-black text-base px-4 py-1.5 rounded-lg mt-auto`}>
        {s.score}/180
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Single Combined Section: Meet Our Toppers!
───────────────────────────────────────────── */
export default function TopperAndStars() {
  return (
    <section className="py-24 bg-page-warm-alt relative overflow-hidden">

      {/* Top section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mdcat-yellow/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[800px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(255,198,0,0.05) 0%, transparent 70%)" }}
        />
      </div>

      {/* Yellow accent lines in bg */}
      <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-8">
        <svg viewBox="0 0 288 288" fill="none">
          <line x1="288" y1="0" x2="0" y2="288" stroke="#FFC600" strokeWidth="1" opacity="0.06" />
          <line x1="288" y1="60" x2="60" y2="288" stroke="#FFC600" strokeWidth="0.5" opacity="0.04" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* ── Section Header ── */}
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
              MDCAT 2025 — Top Warriors
            </span>
          </div>

          <h2
            className="font-inter font-black text-gray-900 leading-tight mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", letterSpacing: "-0.025em" }}
          >
            Before we launched,
            <br />
            <span className="text-mdcat-yellow">we ran a pilot. Here are the results.</span>
          </h2>
          <p className="text-gray-600 font-inter text-lg max-w-2xl mx-auto">
            Last year, before MDCATemy officially launched, Hayan ran an emergency pilot — a series of full-length practice tests, post-test discussion sessions, and direct guidance. No full coaching system. No personal plans. Just the tests and the community. These warriors came through it.{" "}
            <span className="text-gray-900 font-semibold">Imagine what the full Study Tribe will do.</span>
          </p>
        </motion.div>

        {/* ── Stats strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-14"
        >
          {[
            { value: "13+", label: "Top Scorers" },
            { value: "175/180", label: "Highest Score" },
            { value: "168–175", label: "Score Range" },
          ].map((s, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-4 text-center">
              <p className="font-inter font-black text-mdcat-yellow text-xl">{s.value}</p>
              <p className="text-warrior-text font-inter text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Nasrin Ghafoor — Big Feature Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative bg-white border border-mdcat-yellow/30 rounded-2xl overflow-hidden mb-16"
        >
          {/* Top yellow bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-mdcat-yellow" />

          <div className="flex flex-col lg:flex-row gap-0">

            {/* Left — avatar + stats */}
            <div className="lg:w-2/5 flex flex-col items-center justify-center p-10 border-b lg:border-b-0 lg:border-r border-gray-200">
              <NasrinAvatar />

              <div className="mt-6 text-center">
                <h3 className="font-inter font-black text-gray-900 text-2xl tracking-tight">Nasrin Ghafoor</h3>
                <p className="text-gray-500 font-inter text-sm mt-1">Roll # 5830006</p>

                <div className="mt-4 inline-block bg-mdcat-yellow rounded-xl px-6 py-3">
                  <span className="font-inter font-black text-warrior-black text-3xl">175/180</span>
                </div>

                <div className="mt-3 inline-flex items-center gap-2 bg-mdcat-yellow/10 border border-mdcat-yellow/30 rounded-full px-4 py-1.5">
                  <Trophy size={12} className="text-mdcat-yellow" />
                  <span className="text-mdcat-yellow text-xs font-inter font-bold">
                    4th Position — KPK KMU MDCAT
                  </span>
                </div>

                <div className="flex justify-center gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-mdcat-yellow fill-mdcat-yellow" />
                  ))}
                </div>
              </div>
            </div>

            {/* Right — full quote */}
            <div className="lg:w-3/5 p-10 flex flex-col justify-center">
              <div className="w-10 h-10 bg-mdcat-yellow/10 border border-mdcat-yellow/30 rounded-xl flex items-center justify-center mb-6">
                <Quote size={18} className="text-mdcat-yellow" />
              </div>

              <blockquote className="text-gray-700 font-inter text-lg leading-relaxed italic space-y-4">
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

              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap gap-3">
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

        {/* ── Rest of Toppers — Warriors Grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="font-inter font-black text-gray-900 text-2xl mb-2">
            Our <span className="text-mdcat-yellow">Shining Warriors</span>
          </h3>
          <p className="text-gray-500 font-inter text-base">
            More warriors who conquered MDCAT through our system.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
          {STARS.map((s, i) => (
            <StarCard key={i} s={s} index={i} />
          ))}
        </div>

        {/* Stars decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex justify-center gap-2 mb-8"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="text-mdcat-yellow fill-mdcat-yellow" />
          ))}
        </motion.div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center bg-white border border-gray-200 rounded-xl p-6 max-w-2xl mx-auto mb-10"
        >
          <p className="text-gray-900 font-inter font-bold text-base italic mb-2">
            &ldquo;I will try to be honest. The FLPs were actually good as they helped me a lot. In sha Allah I will crack my MDCAT because of this test session.&rdquo;
          </p>
          <p className="text-mdcat-yellow font-inter font-bold text-sm">— Zain Khan, FLP 2025</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-center"
        >
          <a href="#pricing" className="btn-primary inline-block animate-pulse-glow">
            Join the Tribe — Be Next
          </a>
        </motion.div>

      </div>
    </section>
  );
}
