"use client";

import { motion } from "framer-motion";
import { CheckCircle, Brain, Target, Zap, Shield, BookOpen } from "lucide-react";

const CHECKLIST = [
  {
    icon: Brain,
    title: "The Warrior Mindset Module",
    desc: "Destroy the fear of MDCAT. Build the mental frame of someone who is going to walk in and perform.",
  },
  {
    icon: Target,
    title: "Your Personal Battle Plan",
    desc: "A daily system built around your intelligence, schedule, and weak zones. Not a template. Yours.",
  },
  {
    icon: Zap,
    title: "The Discipline Engine",
    desc: "How to build study habits that survive bad days, family pressure, and anxiety spirals.",
  },
  {
    icon: Shield,
    title: "The Anti-Burnout Protocol",
    desc: "The exact system to protect your energy across months of preparation without breaking down.",
  },
  {
    icon: BookOpen,
    title: "Goal Architecture",
    desc: "How to break the 200 score into daily targets so every day you know exactly if you are on track.",
  },
];

// Dashboard mockup component
function DashboardMockup() {
  return (
    <div className="relative">
      <div className="bg-dark-charcoal border border-warrior-border rounded-sm overflow-hidden shadow-2xl shadow-black/60">
        {/* Mockup header */}
        <div className="bg-warrior-black px-4 py-3 border-b border-warrior-border flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <p className="text-warrior-text text-xs font-inter ml-2">mdcatemy.com / my-camp</p>
        </div>

        <div className="p-5 space-y-4">
          {/* Score predictor */}
          <div className="bg-warrior-black rounded-sm p-4 border border-warrior-border">
            <p className="text-warrior-text text-xs font-inter mb-3 uppercase tracking-wider">Score Predictor</p>
            <div className="flex items-end gap-4">
              <div className="flex-1">
                <div className="relative h-3 bg-warrior-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "78%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    className="absolute inset-y-0 left-0 bg-mdcat-yellow rounded-full"
                  />
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-warrior-text text-xs">0</span>
                  <span className="text-warrior-text text-xs">200</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-mdcat-yellow font-poppins font-black text-2xl">156</span>
                <span className="text-warrior-text text-xs font-inter block">/200</span>
              </div>
            </div>
          </div>

          {/* Subject progress */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { sub: "Biology", pct: 72, color: "bg-green-500" },
              { sub: "Chemistry", pct: 58, color: "bg-mdcat-yellow" },
              { sub: "Physics", pct: 45, color: "bg-orange-500" },
              { sub: "English", pct: 88, color: "bg-green-400" },
            ].map((item) => (
              <div key={item.sub} className="bg-warrior-black rounded-sm p-3 border border-warrior-border">
                <div className="flex justify-between mb-2">
                  <span className="text-white text-xs font-inter font-medium">{item.sub}</span>
                  <span className="text-warrior-text text-xs">{item.pct}%</span>
                </div>
                <div className="h-1.5 bg-warrior-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
                    className={`h-full rounded-full ${item.color}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Daily tasks */}
          <div className="bg-warrior-black rounded-sm p-4 border border-warrior-border">
            <p className="text-warrior-text text-xs font-inter mb-3 uppercase tracking-wider">Today&apos;s Battle Plan</p>
            <div className="space-y-2">
              {[
                { task: "Biology — Cell Division (Lecture 12)", done: true },
                { task: "Chemistry MCQs — Organic (40 MCQs)", done: true },
                { task: "Physics — Waves Revision", done: false },
                { task: "Flashcard Session — English", done: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-sm border flex items-center justify-center flex-shrink-0 ${
                    item.done ? "bg-mdcat-yellow border-mdcat-yellow" : "border-warrior-border"
                  }`}>
                    {item.done && <CheckCircle size={10} className="text-warrior-black" />}
                  </div>
                  <span className={`text-xs font-inter ${item.done ? "text-warrior-text line-through" : "text-white"}`}>
                    {item.task}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Family status */}
          <div className="bg-warrior-black rounded-sm p-4 border border-warrior-border">
            <p className="text-warrior-text text-xs font-inter mb-3 uppercase tracking-wider">Your Family</p>
            <div className="flex items-center gap-3">
              {["A", "Z", "H", "F", "U"].map((initial, i) => (
                <div key={i} className="flex flex-col items-center gap-1">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-warrior-border flex items-center justify-center">
                      <span className="text-white text-xs font-poppins font-bold">{initial}</span>
                    </div>
                    <div className={`absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border border-dark-charcoal ${
                      i < 3 ? "bg-green-400" : "bg-warrior-border"
                    }`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div
        className="absolute -inset-4 -z-10 opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #FFC600 0%, transparent 70%)" }}
      />
    </div>
  );
}

export default function TheSystem() {
  return (
    <section className="py-24 bg-dark-charcoal relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 bg-mdcat-yellow/10 border border-mdcat-yellow/25 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="text-mdcat-yellow text-xs font-inter font-semibold uppercase tracking-widest">
                Included Free with Study Tribe
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-poppins font-black text-white mb-4"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", lineHeight: "1.1" }}
            >
              Ace MDCAT
              <br />
              <span className="text-mdcat-yellow">Like a Warrior.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="text-warrior-text font-inter text-lg leading-relaxed mb-10"
            >
              Every Study Tribe warrior gets full access to our flagship mindset course. Before you open a single lecture, you build the frame that holds everything together under pressure.
            </motion.p>

            {/* Checklist */}
            <div className="space-y-5">
              {CHECKLIST.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-sm bg-mdcat-yellow/10 border border-mdcat-yellow/25 flex items-center justify-center group-hover:bg-mdcat-yellow/20 transition-colors duration-200">
                    <item.icon size={18} className="text-mdcat-yellow" />
                  </div>
                  <div>
                    <p className="text-white font-poppins font-semibold text-sm mb-0.5">{item.title}</p>
                    <p className="text-warrior-text text-sm font-inter leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.4 }}
              className="mt-10"
            >
              <a href="#pricing" className="btn-primary inline-block">
                Get the Course Free
              </a>
            </motion.div>
          </div>

          {/* Right: Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <DashboardMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
