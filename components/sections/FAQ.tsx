"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  {
    q: "Who is the Study Tribe for?",
    a: "The Study Tribe is built for FSc Pre-Medical students preparing for MDCAT — both freshers sitting for the first time and repeaters who want to do it differently this season. If you are serious about getting into a medical college and you want a structured system with real accountability, this is for you.",
  },
  {
    q: "What exactly does a Veteran coach do?",
    a: "Your Veteran coach is an MDCAT scholar who has appeared in the exam and scored highly. They oversee your entire preparation journey — from your diagnosis session at the start, to checking your daily progress, adjusting your plan when needed, and being available on WhatsApp for direct check-ins. They are not a teacher. They are your preparation manager.",
  },
  {
    q: "How is this different from other online academies?",
    a: "Every other academy gives you resources: lectures, notes, MCQs. We give you those too — but the Study Tribe adds what no one else has: a personal Veteran coach, a family of 5 to train with, a personalized daily plan, weekly reviews, counseling sessions, and an accountability system that follows you every single day. Resources are not the problem. The system is.",
  },
  {
    q: "What does the 'Family of 5' mean?",
    a: "Inside the tribe, you are placed in a family of 5 students who share a coach. You can see each other's online status on the platform, have a shared discussion group for study sessions, and move through the season together. It is peer accountability built directly into the structure.",
  },
  {
    q: "When does the season start and how long does it run?",
    a: "The season is timed around the MDCAT calendar. Once you enroll, your diagnosis session is scheduled within 48 hours and your personalized plan begins immediately. The season runs until the day of your MDCAT.",
  },
  {
    q: "Is the Ace MDCAT Like a Warrior course really free?",
    a: "Yes. Every Study Tribe warrior gets full access to Ace MDCAT Like a Warrior at no extra cost. It is included as part of your enrollment. This course focuses entirely on mindset, goal architecture, and the discipline system — the things that hold your preparation together when the pressure builds.",
  },
  {
    q: "What if I cannot afford the full payment?",
    a: "That is exactly why we offer the monthly installment plan at Rs. 6,500 per month. You get identical access to everything in the Study Tribe. There are also limited scholarships available for students who qualify. See the scholarship section below for eligibility.",
  },
  {
    q: "What does the 14-day guarantee actually cover?",
    a: "If you join, attend all sessions, stay active for a full month, and still feel this system is not right for you — email us at info@mdcatemy.com with your reason and one suggestion on how we can improve. We will process a 100% refund with no drama. The only requirement is that you genuinely gave it a full month — because the system needs time to work.",
  },
];

function FAQItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="rounded-2xl overflow-hidden"
      style={{
        backgroundColor: "#222422",
        border: open ? "1px solid rgba(255,198,0,0.3)" : "1px solid rgba(255,255,255,0.07)",
        boxShadow: open ? "inset 3px 0 0 #FFC600" : "none",
        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left transition-colors duration-200"
        style={{ backgroundColor: open ? "rgba(255,198,0,0.04)" : "transparent" }}
      >
        <span className={`font-inter font-semibold text-base pr-4 transition-colors duration-200 ${open ? "text-mdcat-yellow" : "text-white/70"}`}>
          {faq.q}
        </span>
        <div className="flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
          {open ? (
            <Minus size={14} className="text-mdcat-yellow" />
          ) : (
            <Plus size={14} style={{ color: "rgba(255,255,255,0.4)" }} />
          )}
        </div>
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
            <div className="px-6 pb-6" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
              <p className="font-inter text-base leading-relaxed pt-5" style={{ color: "rgba(255,255,255,0.7)" }}>
                {faq.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section className="py-24 relative" style={{ backgroundColor: "#181A18" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mdcat-yellow/30 to-transparent" />
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="text-mdcat-yellow text-xs font-inter font-semibold uppercase tracking-widest mb-4"
          >
            Frequently Asked
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-inter font-black text-white"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
          >
            Questions Warriors Ask
          </motion.h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
