"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  UserCheck, Users, Target, Sword, BarChart2, BookOpen,
  ChevronDown, CheckCircle, Brain, Zap, Shield, Award,
} from "lucide-react";

/* ─────────────────────────────────────────────
   6-Week Live Course Modules
───────────────────────────────────────────── */
const MODULES = [
  {
    week: "Week 01",
    title: "The Warrior Mindset — Conquer Fear & Build Unbreakable Confidence",
    icon: Brain,
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
    topics: [
      "How to attempt 200 MCQs without losing focus",
      "The elimination method — crossing out wrong options fast",
      "What to do when you go blank on a question",
      "Time management inside the exam hall",
      "The mindset shift that separates 165 scorers from 180 scorers",
    ],
  },
  {
    week: "Week 05",
    title: "Mock Tests — Your Battle Simulations",
    icon: BarChart2,
    topics: [
      "How to use mock tests strategically — not just to practice",
      "Post-mock review: extracting maximum learning from every test",
      "Using Aga Khan, NUST, NUMS exams as real battle simulations",
      "Getting your body comfortable with a high-pressure environment",
      "How to build from 160 to 175+ in the final weeks",
    ],
  },
  {
    week: "Week 06",
    title: "Live Q&A, Personal Guidance & Your Final Game Plan",
    icon: Award,
    topics: [
      "Open live session — your questions, Hayan's direct answers",
      "Exam day checklist — what to do the night before and morning of",
      "Last-week strategy: what to revise and what to drop",
      "Mental and physical preparation for peak performance",
      "Your path from this session straight into MBBS",
    ],
  },
];

/* ─────────────────────────────────────────────
   Pillar Data
───────────────────────────────────────────── */
const PILLARS = [
  {
    icon: UserCheck,
    title: "Your Veteran Coach",
    shortDesc: "A real MDCAT scorer assigned personally to you — who checks on you every single day.",
    details: [
      "Before you open a single book, your Veteran Coach sits with you for a full 1-on-1 diagnosis session — your daily routine, your weak subjects, your life situation, your goal score. Everything.",
      "Every day, your coach checks your platform activity and follows up directly on WhatsApp. If you miss a day, they notice. If you're falling behind, they adjust before it becomes a problem.",
      "Every week you sit down together for a review — what worked, what didn't, and what changes to make going forward. Your plan never goes stale.",
      "Your Veteran Coach is not a teacher. They are your personal MDCAT manager — someone who has sat in that exact exam hall, scored, and came back to make sure you do the same.",
    ],
  },
  {
    icon: Users,
    title: "Your Family of 5",
    shortDesc: "Five warriors. One coach. One shared mission to get into medical college.",
    details: [
      "Inside the tribe, you are placed in a Family of 5 — a small group of students who share your Veteran Coach and go through the season together.",
      "On the platform, you can see each other's live online status. When your family is studying and you are not, you feel it. That silent accountability is more powerful than any reminder.",
      "Your Family has a dedicated discussion group for questions, study sessions, and motivation. Not enforced — but most families use it every single day.",
      "The Family of 5 exists because the hardest part of MDCAT is staying consistent when no one around you is doing the same. In the tribe, someone always is.",
    ],
  },
  {
    icon: Target,
    title: "Your Personal Battle Plan",
    shortDesc: "A daily plan built around your actual life — not a generic timetable designed for no one.",
    details: [
      "Your preparation starts with a 1-on-1 diagnosis session. Your coach learns your routine, your strongest and weakest subjects, your learning pace, and what has gone wrong in your preparation before.",
      "From that session, they build your personal daily preparation calendar — what to study today, tomorrow, and every day until MDCAT. It lives on your dashboard, always up to date.",
      "The plan adapts with you. If a week goes badly, your coach adjusts it. If you progress faster in one subject, they shift the focus. A plan that never adapts is not a plan — it is a wish.",
      "A generic timetable fails because it was designed for no one in particular. Your plan works because it was designed for exactly you.",
    ],
  },
  {
    icon: BarChart2,
    title: "The Training Ground",
    shortDesc: "Our premium MCQ practice platform — built specifically for MDCAT, not adapted from something else.",
    details: [
      "The Training Ground is MDCATemy's dedicated MCQ platform — chapter-wise and subject-wise practice across Biology, Chemistry, Physics, English, and Logical Reasoning.",
      "A full past paper bank so you practice against real MDCAT question patterns — not made-up MCQs that don't reflect what the exam actually tests.",
      "Every wrong MCQ you attempt is stored in your Mistakes Copy — a running record of every error. Your coach reviews it. You revisit it regularly. You stop repeating the same mistakes twice.",
      "The Score Predictor tracks your practice performance and tells you in real time where your MDCAT score stands today — and exactly what you need to fix to hit your target.",
    ],
  },
  {
    icon: BookOpen,
    title: "The Full Arsenal",
    shortDesc: "Lectures, notes, flashcards, and weekly full-length tests — everything in one place.",
    details: [
      "Video lectures for every chapter in Biology, Chemistry, Physics, English, and Logical Reasoning — built for MDCAT, not a repetition of FSc content.",
      "Clean, exam-focused PDF notes for every chapter — not textbook summaries, but study-ready material built for revision under time pressure.",
      "Active recall flashcards with spaced repetition built in, so you actually retain what you learn instead of forgetting it three weeks later.",
      "A full-length MDCAT paper every week under real exam conditions, followed by a post-test discussion session where every MCQ and concept is clarified. Your score tracked from Week 1 to exam day.",
    ],
  },
];

/* ─────────────────────────────────────────────
   Module Item (nested accordion inside Ace Course)
───────────────────────────────────────────── */
function ModuleItem({ mod, index }: { mod: typeof MODULES[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-4 py-3.5 text-left transition-colors duration-200 group"
        style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.07)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.04)"; }}
      >
        <div className="flex-shrink-0 w-14 text-center">
          <span className="text-mdcat-yellow text-[10px] font-inter font-black uppercase tracking-wider">{mod.week}</span>
        </div>
        <div className="flex-shrink-0 w-px h-6" style={{ backgroundColor: "rgba(255,255,255,0.1)" }} />
        <div className="flex-shrink-0 w-6 h-6 rounded flex items-center justify-center" style={{ backgroundColor: "rgba(255,198,0,0.12)", border: "1px solid rgba(255,198,0,0.2)" }}>
          <mod.icon size={11} className="text-mdcat-yellow" />
        </div>
        <span className="flex-1 font-inter font-semibold text-sm pr-2 leading-snug transition-colors duration-200 group-hover:text-mdcat-yellow" style={{ color: "rgba(255,255,255,0.75)" }}>
          {mod.title}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.22 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={14} style={{ color: "rgba(255,255,255,0.3)" }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mod-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 pt-3" style={{ backgroundColor: "rgba(0,0,0,0.2)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              <ul className="space-y-2">
                {mod.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle size={12} className="text-mdcat-yellow flex-shrink-0 mt-0.5" />
                    <span className="font-inter text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Expandable Pillar Card
───────────────────────────────────────────── */
function PillarCard({
  pillar,
  index,
  isAce = false,
}: {
  pillar: { icon: React.ElementType; title: string; shortDesc: string; details?: string[] };
  index: number;
  isAce?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.07 }}
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "#222422",
        border: open ? "1px solid rgba(255,198,0,0.35)" : "1px solid rgba(255,255,255,0.08)",
        boxShadow: open ? "0 8px 32px rgba(0,0,0,0.4)" : "0 2px 8px rgba(0,0,0,0.2)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Card Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-5 p-7 text-left group transition-colors duration-200"
        style={{ backgroundColor: open ? "rgba(255,198,0,0.04)" : "transparent" }}
      >
        {/* Icon */}
        <div
          className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-300"
          style={{
            backgroundColor: open ? "#FFC600" : "rgba(255,198,0,0.1)",
            border: open ? "none" : "1px solid rgba(255,198,0,0.25)",
          }}
        >
          <pillar.icon size={26} style={{ color: open ? "#181A18" : "#FFC600" }} />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="font-inter font-black text-mdcat-yellow text-base leading-snug mb-2">
            {pillar.title}
          </p>
          <p className="font-inter text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
            {pillar.shortDesc}
          </p>
        </div>

        {/* Chevron */}
        <div className="flex-shrink-0 mt-1">
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="w-8 h-8 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <ChevronDown size={15} style={{ color: "rgba(255,255,255,0.35)" }} />
          </motion.div>
        </div>
      </button>

      {/* Expanded Content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="pillar-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              {isAce ? (
                <div className="p-5 space-y-4">
                  <div className="rounded-xl p-4" style={{ backgroundColor: "rgba(255,198,0,0.07)", border: "1px solid rgba(255,198,0,0.18)" }}>
                    <p className="font-inter text-sm leading-relaxed mb-1" style={{ color: "rgba(255,255,255,0.8)" }}>
                      <span className="font-bold text-white">6 live interactive sessions. One per week.</span> Led personally by Hayan Khan — not a recording, not a substitute. Live, so you can ask questions and get real answers in the moment.
                    </p>
                    <p className="font-inter text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                      Mindset, strategy, study technique, exam performance — everything that turns a nervous student into a warrior who walks in prepared.
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-inter font-black uppercase tracking-widest mb-3" style={{ color: "rgba(255,255,255,0.25)" }}>
                      Course Curriculum — 6 Live Sessions
                    </p>
                    <div className="space-y-2">
                      {MODULES.map((mod, i) => (
                        <ModuleItem key={i} mod={mod} index={i} />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-7 pt-5">
                  <ul className="space-y-4">
                    {pillar.details?.map((detail, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: "rgba(255,198,0,0.1)", border: "1px solid rgba(255,198,0,0.25)" }}>
                          <CheckCircle size={11} className="text-mdcat-yellow" />
                        </div>
                        <p className="font-inter text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>{detail}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Main Section
───────────────────────────────────────────── */
export default function WhatIsStudyTribe() {
  return (
    <section className="relative">

      {/* ══════════════════════════════════════
          PART 1 — The Problem Article (Yellow bg)
      ══════════════════════════════════════ */}
      <div className="py-24 bg-mdcat-yellow relative tribal-overlay">
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-warrior-black rounded-2xl p-8 lg:p-12"
            style={{ boxShadow: "0 6px 28px rgba(24,26,24,0.25)" }}
          >

            <p className="text-white/40 text-xs font-inter font-bold uppercase tracking-widest mb-5">
              The Real Problem
            </p>

            <h2
              className="font-inter font-black text-white mb-10 leading-[1.08]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", letterSpacing: "-0.025em" }}
            >
              You don&apos;t have a knowledge problem.
              <br />
              <span className="text-mdcat-yellow">You have a system problem.</span>
            </h2>

            <div className="space-y-6 font-inter text-white/70 text-[17px] leading-[1.85]">
              <p>
                You have watched the lectures. You have made the notes. You have built timetables that lasted three days. And somewhere in the middle of all of it, you have sat alone at midnight staring at your books, wondering why it still does not feel like enough. You are not lazy. You are not incapable. But nobody has ever built a real system around you.
              </p>
              <p>
                Every year, thousands of MDCAT students walk into that exam hall having genuinely worked hard. Most of them studied. Most of them tried. And most of them did not get in — not because they lacked intelligence, but because they had no structure that could survive the pressure. No one checking whether their plan was actually working. No one catching them when they slipped for a week and quietly stopped.
              </p>
              <p>
                We spoke to over fifty students who signed up for our waitlist — from Peshawar to Karachi, from Swabi to Karak, from small cities where getting into a medical college is everything. Different backgrounds, different stories. But the same things kept coming up every single time. Consistency that collapsed after a few days. Fear that froze them in practice. Hours lost between resources with no direction. And a deep, exhausting feeling of doing this completely alone.
              </p>
              <p>
                Many had already joined an academy. Some had joined two or three. And still felt like a number in a roster — not a student anyone actually knew. They had access to all the content they needed. But nobody was checking whether they were on track. Nobody was there when the anxiety hit at 11pm before a test. That is not a resource problem. That is the absence of a system.
              </p>
              <p>
                Every other academy sells you content and calls it preparation. But on MDCAT day, what separates the warrior who gets in from the one who does not is not the number of lectures watched. It is who had someone genuinely in their corner — a coach who knew their name, their weak points, and exactly where they were falling short.
              </p>
            </div>

            {/* Closing — integrated into the same card */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p
                className="font-inter font-black leading-[1.3]"
                style={{ fontSize: "clamp(1.2rem, 2.8vw, 1.6rem)" }}
              >
                <span className="text-white">That is why we built the Study Tribe</span>
                <span className="text-white/60"> — because you don&apos;t need more resources.</span>
                <span className="text-mdcat-yellow"> You need a system built specifically for you.</span>
              </p>
            </div>

          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          PART 2 — Expandable Pillars (Dark, overlaps yellow above)
      ══════════════════════════════════════ */}
      <div
        className="pt-24 pb-24 relative z-10"
        style={{
          backgroundColor: "#181A18",
          marginTop: "-3rem",
          borderRadius: "2rem 2rem 0 0",
        }}
      >

        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute left-1/2 -translate-x-1/2 top-0 w-[900px] h-[500px]"
            style={{ background: "radial-gradient(ellipse, rgba(255,198,0,0.05) 0%, transparent 70%)" }}
          />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8">

          {/* Transition + Section header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="font-inter text-base mb-5 italic" style={{ color: "rgba(255,255,255,0.35)" }}>
              This is why we built the Study Tribe.
            </p>
            <h2
              className="font-inter font-black text-white leading-[1.1] mb-4"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.7rem)", letterSpacing: "-0.025em" }}
            >
              Okay, I get it.
              <br />
              <span className="text-mdcat-yellow">But what&apos;s actually inside?</span>
            </h2>
            <p className="font-inter text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              Six things, working together — expand each to learn more.
            </p>
          </motion.div>

          {/* Full-width vertical list */}
          <div className="space-y-3">
            {PILLARS.map((pillar, i) => (
              <PillarCard key={i} pillar={pillar} index={i} />
            ))}
            <PillarCard
              pillar={{
                icon: Sword,
                title: "Ace MDCAT Like a Warrior — Live Course",
                shortDesc: "6 live sessions. One per week. Led personally by Hayan Khan. Expand to see the full curriculum.",
              }}
              index={5}
              isAce
            />
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl p-8 text-center mt-8"
            style={{ backgroundColor: "#222422", border: "1px solid rgba(255,255,255,0.07)", boxShadow: "0 6px 28px rgba(0,0,0,0.3)" }}
          >
            <p className="font-inter font-black text-mdcat-yellow text-lg mb-2">
              Everything. One system. Built around you.
            </p>
            <p className="font-inter text-sm mb-6 max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              This is not a collection of resources with a fancy name. It is a complete preparation system — coaching, accountability, live course, practice platform, weekly tests, and a community — working together from Day 1 to MDCAT day.
            </p>
            <a href="#pricing" className="btn-primary inline-block">
              See Pricing &amp; Join the Tribe
            </a>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
