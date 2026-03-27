"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sword, ChevronDown, Video, Users, Clock, Zap, CheckCircle, Brain, Target, Shield, BarChart2, Award } from "lucide-react";
import Image from "next/image";

/* ─────────────────────────────────────────
   Course Module Data
───────────────────────────────────────── */
const MODULES = [
  {
    week: "Week 01",
    title: "The Warrior Mindset — Conquer Fear & Build Unbreakable Confidence",
    icon: Brain,
    color: "from-yellow-500/10 to-transparent",
    topics: [
      "Why MDCAT is an easy test — and how fear makes it hard",
      "Understanding the two root causes of MDCAT anxiety",
      "The Tawakkul Framework — how trust in Allah removes test fear",
      "Building an unbreakable belief system before the exam",
      "Napoleon's lesson applied to your MDCAT preparation",
    ],
  },
  {
    week: "Week 02",
    title: "The MDCAT Battle Plan — Strategy, Structure & Time Management",
    icon: Target,
    color: "from-yellow-500/10 to-transparent",
    topics: [
      "How to reverse-engineer MDCAT from the exam date backwards",
      "The 80/20 rule of MDCAT subjects — what really matters",
      "Building your personalised preparation calendar",
      "How to use the Score Predictor to track your trajectory",
      "The art of strategic revision vs. new content",
    ],
  },
  {
    week: "Week 03",
    title: "Study Techniques That Win — Active Recall & Spaced Repetition",
    icon: Zap,
    color: "from-yellow-500/10 to-transparent",
    topics: [
      "Why passive reading is the enemy of MDCAT success",
      "Active recall — how to force your brain to actually retain",
      "The Spaced Repetition system built into your flashcards",
      "How to maintain a Mistakes Copy that actually fixes errors",
      "The daily study routine of a top scorer",
    ],
  },
  {
    week: "Week 04",
    title: "Mastering Test Performance — Staying Sharp Under Pressure",
    icon: Shield,
    color: "from-yellow-500/10 to-transparent",
    topics: [
      "How to attempt 200 MCQs without losing focus",
      "The elimination method — crossing out wrong options fast",
      "What to do when you are blank on a question",
      "Time management inside the exam hall",
      "The mindset shift that separates 165 scorers from 180 scorers",
    ],
  },
  {
    week: "Week 05",
    title: "Mock Tests — Your Battle Simulations",
    icon: BarChart2,
    color: "from-yellow-500/10 to-transparent",
    topics: [
      "How to use mock tests strategically — not just to practice",
      "Post-mock test review: extracting maximum learning per test",
      "Entering other exams (Aga Khan, NUST, NUMS) as battle simulations",
      "Getting your body comfortable with a high-pressure environment",
      "How to build from 160 to 175+ in the final weeks",
    ],
  },
  {
    week: "Week 06",
    title: "Live Q&A, Personal Guidance & Your Final Game Plan",
    icon: Award,
    color: "from-yellow-500/10 to-transparent",
    topics: [
      "Open live session — your questions, Hayan's direct answers",
      "Exam day checklist — what to do the night before and morning of",
      "Last-week strategy: what to study and what to drop",
      "Mental and physical preparation for peak performance",
      "Your path from this session straight to MBBS",
    ],
  },
];

/* ─────────────────────────────────────────
   Module Item (expandable)
───────────────────────────────────────── */
function ModuleItem({ mod, index }: { mod: typeof MODULES[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="border border-warrior-border rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-5 text-left bg-dark-charcoal hover:bg-warrior-gray transition-colors duration-200 group"
      >
        {/* Week badge */}
        <div className="flex-shrink-0 w-16 text-center">
          <span className="text-mdcat-yellow text-xs font-inter font-black uppercase tracking-wider">{mod.week}</span>
        </div>

        {/* Divider */}
        <div className="flex-shrink-0 w-px h-8 bg-warrior-border" />

        {/* Icon */}
        <div className="flex-shrink-0 w-8 h-8 bg-mdcat-yellow/10 border border-mdcat-yellow/20 rounded-sm flex items-center justify-center">
          <mod.icon size={14} className="text-mdcat-yellow" />
        </div>

        {/* Title */}
        <span className="flex-1 font-inter font-bold text-white text-sm lg:text-base group-hover:text-mdcat-yellow transition-colors duration-200 pr-2">
          {mod.title}
        </span>

        {/* Toggle */}
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="flex-shrink-0 w-7 h-7 bg-warrior-black border border-warrior-border rounded-sm flex items-center justify-center"
        >
          <ChevronDown size={13} className="text-warrior-text" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 bg-warrior-black border-t border-warrior-border">
              <p className="text-warrior-text text-xs font-inter font-bold uppercase tracking-widest mt-4 mb-3">
                What you&apos;ll learn in this session:
              </p>
              <ul className="space-y-2.5">
                {mod.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={14} className="text-mdcat-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 font-inter text-sm leading-relaxed">{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   Instructor Card SVG — Hayan Khan
───────────────────────────────────────── */
function InstructorAvatar() {
  return (
    <svg viewBox="0 0 120 120" width="100" height="100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="56" fill="#222422" stroke="#FFC600" strokeWidth="2" />
      {/* Hair */}
      <ellipse cx="60" cy="45" rx="28" ry="22" fill="#1A0C08" />
      <ellipse cx="60" cy="40" rx="26" ry="18" fill="#2C1A10" />
      {/* Neck */}
      <rect x="52" y="72" width="16" height="14" rx="4" fill="#C68642" />
      {/* Shirt */}
      <path d="M35 90 Q50 78 60 80 Q70 78 85 90 L90 120 L30 120 Z" fill="#181A18" />
      {/* Collar */}
      <path d="M50 80 L60 88 L70 80 L65 90 L60 93 L55 90 Z" fill="#444" />
      {/* Face */}
      <ellipse cx="60" cy="64" rx="24" ry="26" fill="#C68642" />
      {/* Stubble/beard shade */}
      <ellipse cx="60" cy="75" rx="16" ry="9" fill="#A0622A" opacity="0.4" />
      {/* Eyes */}
      <circle cx="51" cy="60" r="4.5" fill="white" />
      <circle cx="69" cy="60" r="4.5" fill="white" />
      <circle cx="51.5" cy="60.5" r="3" fill="#1A0C08" />
      <circle cx="69.5" cy="60.5" r="3" fill="#1A0C08" />
      <circle cx="52.5" cy="59" r="1.2" fill="white" opacity="0.8" />
      <circle cx="70.5" cy="59" r="1.2" fill="white" opacity="0.8" />
      {/* Eyebrows */}
      <path d="M46 55 Q51 52 56 55" stroke="#1A0C08" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M64 55 Q69 52 74 55" stroke="#1A0C08" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Nose */}
      <path d="M58 67 Q60 71 62 67" stroke="#A0622A" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {/* Confident smile */}
      <path d="M50 74 Q60 82 70 74" stroke="#8B4513" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Warrior mark on forehead */}
      <path d="M56 44 L60 38 L64 44" stroke="#FFC600" strokeWidth="1.5" fill="none" opacity="0.8" />
    </svg>
  );
}

/* ─────────────────────────────────────────
   Main Component
───────────────────────────────────────── */
export default function AceCourse() {
  return (
    <section id="ace-course" className="py-24 bg-dark-charcoal tribal-overlay relative overflow-hidden">

      {/* Top section divider line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mdcat-yellow/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,198,0,0.05) 0%, transparent 70%)" }}
        />
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
          <div className="inline-flex items-center gap-2 bg-mdcat-yellow/10 border border-mdcat-yellow/20 rounded-full px-5 py-2 mb-6">
            <Sword size={13} className="text-mdcat-yellow" />
            <span className="text-mdcat-yellow text-xs font-inter font-bold uppercase tracking-widest">
              Included Free with Study Tribe
            </span>
          </div>

          <h2
            className="font-inter font-black text-white leading-tight mb-3"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)", letterSpacing: "-0.025em" }}
          >
            Ace MDCAT{" "}
            <span className="text-gradient-yellow">Like a Warrior</span>
          </h2>
          <p className="text-mdcat-yellow font-inter font-bold text-sm uppercase tracking-widest mb-4">
            Our Interactive Live Course
          </p>
          <p className="text-warrior-text font-inter text-xl max-w-2xl mx-auto">
            6 live, interactive sessions — one per week — led personally by Hayan Khan.
            Mindset. Strategy. Study techniques. Guidance. Everything that turns a nervous student into a battle-ready warrior.
          </p>
        </motion.div>

        {/* Course stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12"
        >
          {[
            { icon: Video, label: "6 Live Sessions", sub: "One per week" },
            { icon: Users, label: "Interactive", sub: "Ask questions live" },
            { icon: Clock, label: "Weekly Schedule", sub: "Flexible timing" },
            { icon: Zap, label: "FREE Included", sub: "With Study Tribe" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-dark-charcoal border border-warrior-border rounded-sm p-4 flex flex-col items-center text-center gap-2"
            >
              <div className="w-9 h-9 bg-mdcat-yellow/10 border border-mdcat-yellow/20 rounded-sm flex items-center justify-center">
                <stat.icon size={15} className="text-mdcat-yellow" />
              </div>
              <p className="font-inter font-black text-white text-sm">{stat.label}</p>
              <p className="font-inter text-warrior-text text-xs">{stat.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Instructor card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="bg-dark-charcoal border border-warrior-border rounded-xl p-6 lg:p-8 mb-10 flex flex-col sm:flex-row gap-6 items-center"
        >
          <div className="flex-shrink-0">
            <div className="relative w-24 h-24 rounded-xl overflow-hidden border-2 border-mdcat-yellow/50" style={{ boxShadow: "0 0 20px rgba(255,198,0,0.2)" }}>
              <Image
                src="/images/hayan.jpg.jpeg"
                alt="Hayan Khan — Founder of MDCATemy"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
          <div>
            <p className="text-mdcat-yellow text-xs font-inter font-black uppercase tracking-widest mb-2">
              Your Instructor
            </p>
            <h3 className="font-inter font-black text-white text-xl mb-2">Hayan Khan</h3>
            <p className="text-warrior-text font-inter text-sm leading-relaxed">
              Scored <span className="text-mdcat-yellow font-bold">184/200</span> in MDCAT 2024 with an aggregate of <span className="text-mdcat-yellow font-bold">32.7</span>.
              Hayan built MDCATemy after realising that the biggest barrier between students and MBBS seats is not knowledge — it is fear, lack of strategy, and the absence of a real system.
              This course is his personal playbook, distilled into 6 live sessions.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {["184/200 in MDCAT 2024", "Aggregate 32.7", "Veteran Coach", "Founder of MDCATemy"].map((tag, i) => (
                <span key={i} className="bg-mdcat-yellow/10 border border-mdcat-yellow/20 text-mdcat-yellow text-xs font-inter font-bold px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Module list */}
        <div className="mb-10">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-warrior-text text-xs font-inter font-black uppercase tracking-widest mb-5"
          >
            Course Curriculum — 6 Live Sessions
          </motion.p>

          <div className="space-y-2.5">
            {MODULES.map((mod, i) => (
              <ModuleItem key={i} mod={mod} index={i} />
            ))}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="bg-mdcat-yellow/5 border border-mdcat-yellow/20 rounded-xl p-6 text-center"
        >
          <p className="text-mdcat-yellow font-inter font-black text-base mb-1">
            This course is not sold separately.
          </p>
          <p className="text-warrior-text font-inter text-sm">
            Ace MDCAT Like a Warrior is included <strong className="text-white">free</strong> with every Study Tribe enrollment. You get the live sessions, the community, and the system — all in one.
          </p>
          <a href="#pricing" className="btn-primary inline-block mt-5">
            Join the Tribe to Get Access
          </a>
        </motion.div>

      </div>
    </section>
  );
}
