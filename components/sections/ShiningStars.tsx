"use client";

import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";

/* ─────────────────────────────────────────────
   Shining Stars — MDCAT 2025 Top Scorers
   Inspired by Ali Abdaal's student success grid
───────────────────────────────────────────── */

const STARS = [
  { name: "Haris Iqbal",      roll: "5680570", score: 174, gender: "m", rank: 1 },
  { name: "Umair Ali",        roll: "—",        score: 172, gender: "m", rank: 2 },
  { name: "Laiba Khan",       roll: "5820139", score: 172, gender: "f", rank: 2 },
  { name: "Hafsa Karim",      roll: "5680570", score: 170, gender: "fh", rank: 3 },
  { name: "Saima Mushtaq",    roll: "5640196", score: 170, gender: "f", rank: 3 },
  { name: "M. Mujtaba",       roll: "5210034", score: 170, gender: "mg", rank: 3 },
  { name: "Iqra Rehman",      roll: "—",        score: 170, gender: "f", rank: 3 },
  { name: "Muzaid Shah",      roll: "5760132", score: 169, gender: "m", rank: 4 },
  { name: "Adnan Amin",       roll: "5700115", score: 169, gender: "m", rank: 4 },
  { name: "Zeeshan Khan",     roll: "5760132", score: 168, gender: "m", rank: 5 },
  { name: "Abdul Baseer",     roll: "5870111", score: 168, gender: "m", rank: 5 },
  { name: "Noor E Sahar",     roll: "—",        score: 168, gender: "f", rank: 5 },
];

/* ── Generic Male Avatar ── */
function MaleAvatar({ glasses = false }: { glasses?: boolean }) {
  return (
    <svg viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="#3B6CB7" />
      {/* Hair */}
      <ellipse cx="40" cy="26" rx="18" ry="13" fill="#2C1A10" />
      {/* Neck */}
      <rect x="33" y="50" width="14" height="10" rx="3" fill="#C68642" />
      {/* Shirt */}
      <path d="M20 62 Q32 55 40 57 Q48 55 60 62 L64 80 L16 80 Z" fill="#181A18" />
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
      <path d="M29 34 Q33 31 37 34" stroke="#1A0C08" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M43 34 Q47 31 51 34" stroke="#1A0C08" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <path d="M38.5 42 Q40 45 41.5 42" stroke="#A0622A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Smile */}
      <path d="M34 47 Q40 53 46 47" stroke="#8B4513" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Glasses */}
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

/* ── Generic Female Avatar ── */
function FemaleAvatar({ hijab = false }: { hijab?: boolean }) {
  return (
    <svg viewBox="0 0 80 80" width="80" height="80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill={hijab ? "#2C5F8A" : "#3B6CB7"} />
      {/* Back hair / hijab */}
      {hijab ? (
        <>
          <ellipse cx="40" cy="36" rx="25" ry="28" fill="#222422" />
          <ellipse cx="40" cy="60" rx="28" ry="12" fill="#222422" />
        </>
      ) : (
        <>
          <ellipse cx="40" cy="28" rx="22" ry="18" fill="#4A2C0A" />
          <ellipse cx="22" cy="44" rx="7" ry="18" fill="#4A2C0A" />
          <ellipse cx="58" cy="44" rx="7" ry="18" fill="#4A2C0A" />
        </>
      )}
      {/* Neck */}
      <rect x="33" y="50" width="14" height="10" rx="3" fill="#F4C89E" />
      {/* Top */}
      <path d="M18 62 Q30 56 40 58 Q50 56 62 62 L66 80 L14 80 Z" fill="#EFEFEF" />
      {/* Face */}
      <ellipse cx="40" cy="40" rx="16" ry="17" fill="#F4C89E" />
      {/* Eyes */}
      <circle cx="33.5" cy="38" r="3.5" fill="white" />
      <circle cx="46.5" cy="38" r="3.5" fill="white" />
      <circle cx="33.5" cy="38.5" r="2" fill="#2C1810" />
      <circle cx="46.5" cy="38.5" r="2" fill="#2C1810" />
      <circle cx="34.3" cy="37.5" r="0.9" fill="white" opacity="0.8" />
      <circle cx="47.3" cy="37.5" r="0.9" fill="white" opacity="0.8" />
      {/* Eyebrows */}
      <path d="M29.5 34 Q33.5 31 37.5 34" stroke="#3D2314" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M42.5 34 Q46.5 31 50.5 34" stroke="#3D2314" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <path d="M38.5 42 Q40 45 41.5 42" stroke="#C17B5A" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      {/* Smile */}
      <path d="M34.5 47 Q40 53 45.5 47" stroke="#C17B5A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Cheeks */}
      <circle cx="28" cy="43" r="4.5" fill="#F4A0A0" opacity="0.3" />
      <circle cx="52" cy="43" r="4.5" fill="#F4A0A0" opacity="0.3" />
    </svg>
  );
}

/* ── Avatar switcher by gender code ── */
function Avatar({ gender }: { gender: string }) {
  if (gender === "f") return <FemaleAvatar />;
  if (gender === "fh") return <FemaleAvatar hijab />;
  if (gender === "mg") return <MaleAvatar glasses />;
  return <MaleAvatar />;
}

/* ── Score colour helper ── */
function scoreColor(score: number) {
  if (score >= 174) return "bg-mdcat-yellow text-warrior-black";
  if (score >= 172) return "bg-mdcat-yellow/90 text-warrior-black";
  if (score >= 170) return "bg-mdcat-yellow/80 text-warrior-black";
  return "bg-mdcat-yellow/70 text-warrior-black";
}

/* ── Star card ── */
function StarCard({ s, index }: { s: typeof STARS[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className="flex flex-col items-center bg-dark-charcoal border border-warrior-border rounded-sm p-5 hover:border-mdcat-yellow/40 transition-colors duration-300 cursor-default"
    >
      {/* Avatar with glow */}
      <div className="relative mb-3">
        <div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,198,0,0.15) 0%, transparent 70%)" }}
        />
        <Avatar gender={s.gender} />
        {/* Rank-1 crown */}
        {s.rank === 1 && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="text-lg">👑</span>
          </div>
        )}
      </div>

      {/* Name */}
      <p className="font-inter font-black text-white text-sm text-center leading-tight mb-1">
        {s.name}
      </p>

      {/* Roll */}
      {s.roll !== "—" && (
        <p className="text-warrior-text font-inter text-xs mb-2">Roll # {s.roll}</p>
      )}

      {/* Score badge */}
      <div className={`${scoreColor(s.score)} font-inter font-black text-base px-4 py-1.5 rounded-sm mt-auto`}>
        {s.score}/180
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
export default function ShiningStars() {
  return (
    <section className="py-24 bg-warrior-black relative overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(255,198,0,0.06) 0%, transparent 70%)" }}
        />
      </div>

      {/* Tribal overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/images/tribal-bg.svg')", backgroundSize: "300px 300px", opacity: 0.04 }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-mdcat-yellow/10 border border-mdcat-yellow/20 rounded-full px-5 py-2 mb-6">
            <Sparkles size={13} className="text-mdcat-yellow" />
            <span className="text-mdcat-yellow text-xs font-inter font-bold uppercase tracking-widest">
              MDCAT 2025 — Top Scorers
            </span>
          </div>

          <h2
            className="font-inter font-black text-white leading-tight mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.4rem)", letterSpacing: "-0.025em" }}
          >
            MDCATemy{" "}
            <span className="text-gradient-yellow">Shining Stars</span>
          </h2>
          <p className="text-warrior-text font-inter text-lg max-w-2xl mx-auto">
            These warriors came through our emergency FLP session last year. Now they&apos;re in medical college.
            <br />
            <span className="text-white font-semibold">Next year, this will be you.</span>
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="grid grid-cols-3 gap-3 max-w-lg mx-auto mb-12"
        >
          {[
            { value: "12+", label: "Top Scorers" },
            { value: "175/180", label: "Highest Score" },
            { value: "168–175", label: "Score Range" },
          ].map((s, i) => (
            <div key={i} className="bg-dark-charcoal border border-warrior-border rounded-sm p-4 text-center">
              <p className="font-inter font-black text-mdcat-yellow text-xl">{s.value}</p>
              <p className="text-warrior-text font-inter text-xs mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Stars grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
          {STARS.map((s, i) => (
            <StarCard key={i} s={s} index={i} />
          ))}
        </div>

        {/* Stars row — all 5 stars decoration */}
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
          className="text-center bg-dark-charcoal border border-warrior-border rounded-sm p-6 max-w-2xl mx-auto"
        >
          <p className="text-white font-inter font-bold text-base italic mb-2">
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
          className="text-center mt-10"
        >
          <a href="#pricing" className="btn-primary inline-block animate-pulse-glow">
            Join the Tribe — Be Next
          </a>
        </motion.div>

      </div>
    </section>
  );
}
