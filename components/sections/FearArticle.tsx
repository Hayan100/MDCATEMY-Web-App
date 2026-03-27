"use client";

import { motion } from "framer-motion";
import { Swords } from "lucide-react";

const FEAR_VIDEO_ID = "tINobSnUpB0";

/* ── Crossed Swords Illustration ── */
function WarriorIllustration() {
  return (
    <svg viewBox="0 0 160 160" width="120" height="120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="80" cy="80" r="72" fill="rgba(255,198,0,0.04)" stroke="rgba(255,198,0,0.15)" strokeWidth="1" />
      <circle cx="80" cy="80" r="55" fill="rgba(255,198,0,0.03)" stroke="rgba(255,198,0,0.1)" strokeWidth="0.5" />
      <line x1="30" y1="30" x2="130" y2="130" stroke="#FFC600" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      <polygon points="122,122 130,130 122,138 114,130" fill="#FFC600" opacity="0.9" />
      <line x1="45" y1="55" x2="55" y2="45" stroke="#FFC600" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />
      <rect x="24" y="22" width="8" height="18" rx="3" fill="#FFC600" opacity="0.5" transform="rotate(45 28 31)" />
      <line x1="130" y1="30" x2="30" y2="130" stroke="#FFC600" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      <polygon points="38,122 30,130 38,138 46,130" fill="#FFC600" opacity="0.9" />
      <line x1="115" y1="55" x2="105" y2="45" stroke="#FFC600" strokeWidth="3.5" strokeLinecap="round" opacity="0.7" />
      <rect x="124" y="22" width="8" height="18" rx="3" fill="#FFC600" opacity="0.5" transform="rotate(-45 128 31)" />
      <circle cx="80" cy="80" r="6" fill="#FFC600" opacity="0.9" />
      <circle cx="80" cy="80" r="10" fill="rgba(255,198,0,0.3)" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
        <line
          key={i}
          x1={80 + Math.cos((deg * Math.PI) / 180) * 13}
          y1={80 + Math.sin((deg * Math.PI) / 180) * 13}
          x2={80 + Math.cos((deg * Math.PI) / 180) * 20}
          y2={80 + Math.sin((deg * Math.PI) / 180) * 20}
          stroke="#FFC600" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"
        />
      ))}
    </svg>
  );
}

export default function FearArticle() {
  return (
    <section className="py-24 bg-warrior-black relative overflow-hidden">

      {/* Top section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mdcat-yellow/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 top-1/3 -translate-x-1/2 w-[700px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,198,0,0.04) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-[720px] mx-auto px-6 lg:px-8">

        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-mdcat-yellow/10 border border-mdcat-yellow/20 rounded-full px-5 py-2">
            <Swords size={13} className="text-mdcat-yellow" />
            <span className="text-mdcat-yellow text-xs font-inter font-bold uppercase tracking-widest">
              Hayan Khan&apos;s Insight
            </span>
          </div>
        </motion.div>

        {/* Article title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="font-inter font-black text-white leading-tight mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", letterSpacing: "-0.025em" }}
        >
          The <span className="text-gradient-yellow">#1 Reason</span> Smart Students Fail MDCAT
        </motion.h2>

        {/* Intro line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="text-warrior-text font-inter text-xl mb-10 leading-relaxed"
        >
          It is not your preparation. It is not your intelligence. It is something else entirely.
        </motion.p>

        {/* Illustration + opening paragraph side by side */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex flex-col sm:flex-row items-start gap-6 mb-8"
        >
          <div className="flex-shrink-0 sm:pt-1">
            <WarriorIllustration />
          </div>
          <div className="space-y-5 font-inter text-warrior-text text-[17px] leading-[1.85]">
            <p>
              I scored <span className="text-mdcat-yellow font-bold">184/200</span> in MDCAT 2024. And the single biggest thing I realised after going through it myself is this: MDCAT is an easy test by design. The examiners intentionally keep it accessible — because students from backward areas of Pakistan deserve a fair shot at MBBS too.
            </p>
            <p>
              The test is not your enemy. Your <span className="text-white font-semibold">fear of the test</span> is.
            </p>
          </div>
        </motion.div>

        {/* Article body — flowing paragraphs */}
        <div className="space-y-6 font-inter text-warrior-text text-[17px] leading-[1.85]">

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            The moment you are scared of failing, something changes in your body. Your hands shake. Your mind goes blank. You start second-guessing every answer you know. You overthink. You tick the wrong option. And then you walk out of the exam hall knowing — with absolute certainty — that you knew the material. You just could not perform under pressure.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.04 }}
          >
            That is the fear of failure making your exam harder than it actually is. And the second root cause is practice — or the lack of it. MDCAT cannot be conquered by reading alone. You must practise under actual test conditions. The first time your body experiences a high-stakes, timed, 200-question exam should <em>not</em> be MDCAT day.
          </motion.p>

          {/* Pull quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="border-l-4 border-mdcat-yellow pl-6 my-10"
          >
            <p className="font-inter font-black text-white text-2xl leading-snug mb-2">
              &ldquo;If you fear being conquered, you are sure of defeat.&rdquo;
            </p>
            <p className="text-mdcat-yellow font-inter font-bold text-sm uppercase tracking-widest">— Napoleon Bonaparte</p>
          </motion.blockquote>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            Napoleon understood it. The warrior who walks into battle already defeated in his mind has already lost. The same is true in that exam hall. The student who sits down terrified does not give themselves a fair chance — regardless of how hard they studied.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.04 }}
          >
            <span className="text-white font-semibold">The solution has two parts.</span> First, you must make peace with the outcome. You are responsible for your effort — but success and failure belong to Allah. When you truly internalise this, the fear of failure loses its grip. You cannot fear something that is not in your hands. Second, you must build comfort through repetition. Give mock tests. Enter Aga Khan, NUST, NUMS exams as battle simulations. Your body needs to recognise that environment. Confidence is not found in textbooks. It is built through doing.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.04 }}
          >
            The brave student — the one who walks in calm and focused — is not necessarily more intelligent than the fearful one. They are simply more prepared. Prepared not just in knowledge, but in mindset. They have sat in that environment enough times that their body knows what to do. Their hands do not shake. Their mind does not blank. They trust their first instinct. And they get in.
          </motion.p>

        </div>

        {/* ═══════════ Video Embed ═══════════ */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="my-14"
        >
          <p className="text-center text-warrior-text text-sm font-inter font-bold uppercase tracking-widest mb-5">
            ▶ Watch Hayan Khan explain this in his own words
          </p>
          <div
            className="relative w-full rounded-xl overflow-hidden"
            style={{
              aspectRatio: "16/9",
              border: "1px solid rgba(255,198,0,0.2)",
              boxShadow: "0 0 60px rgba(255,198,0,0.1), 0 30px 80px rgba(0,0,0,0.6)",
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${FEAR_VIDEO_ID}?rel=0&modestbranding=1&color=white`}
              title="Fear of MDCAT — Hayan Khan"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="text-center text-warrior-text text-xs font-inter mt-3 opacity-50">
            MDCAT Fear, Nervousness &amp; Anxiety — How to Overcome Them
          </p>
        </motion.div>

      </div>

      {/* ══ Hayan Khan's Core Teaching — Full-Width Yellow Block (after article) ══ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full bg-mdcat-yellow mt-10"
      >
        <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16 text-center">
          <p className="font-inter font-black text-warrior-black uppercase tracking-widest text-xs mb-4">
            Hayan Khan&apos;s Core Teaching
          </p>
          <h2
            className="font-inter font-black text-warrior-black leading-tight mb-4"
            style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.2rem)", letterSpacing: "-0.02em" }}
          >
            We make you a courageous warrior
            <br />
            that doesn&apos;t fear anything.
          </h2>
          <p className="font-inter text-warrior-black/75 text-lg max-w-xl mx-auto font-semibold mb-8">
            MDCAT is not the problem. Your fear of MDCAT is. And that is exactly what we fix.
          </p>
          <a
            href="#pricing"
            className="inline-block bg-warrior-black text-mdcat-yellow font-inter font-black text-sm uppercase tracking-wider px-10 py-4 rounded-xl hover:bg-warrior-black/90 transition-all duration-200"
            style={{ letterSpacing: "0.08em" }}
          >
            Become Fearless with MDCATemy!
          </a>
        </div>
      </motion.div>

    </section>
  );
}
