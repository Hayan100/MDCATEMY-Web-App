"use client";

import { motion } from "framer-motion";

export default function PainPoint() {
  return (
    <section className="py-24 bg-warrior-black tribal-overlay relative">
      <div className="relative z-10 max-w-[680px] mx-auto px-6 lg:px-8">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-mdcat-yellow text-xs font-inter font-semibold uppercase tracking-widest mb-6"
        >
          The Hard Truth
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-poppins font-black text-white mb-10"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: "1.1" }}
        >
          Why Most MDCAT Students Fail.
          <br />
          <span className="text-mdcat-yellow">And Why You Don&apos;t Have To.</span>
        </motion.h2>

        {/* Article body */}
        <div className="space-y-6 font-inter text-warrior-text text-[17px] leading-[1.8]">
          {[
            {
              text: "Every year, hundreds of thousands of students sit for MDCAT. Most of them studied. Most of them watched lectures. Most of them bought notes. And most of them did not get in. Not because they were not smart enough. Not because they did not work hard. But because no one built a system around them.",
            },
            {
              text: "The biggest lie in MDCAT prep is that content is the problem. It is not. The real killers are inconsistency, anxiety, wasted hours, and the complete absence of anyone checking whether your plan is actually working for you. Generic timetables fail generic students. They were never going to work for you.",
            },
            {
              text: "Most academies hand you lectures and call it preparation. They give you MCQs and call it practice. But when you sit in that exam hall, what actually separates the ones who get in from the ones who do not is not the number of lectures watched. It is the quality of their preparation system. Their discipline. Their mindset. Their clarity under pressure.",
            },
            {
              text: "No academy in Pakistan gives you a coach. A real one. Someone who has sat in that exact hall, gotten the score, walked into a medical college, and came back to build you. Someone who checks on you. Who adjusts your plan when life gets in the way. Who knows when you are burning out and when you are making excuses.",
            },
            {
              text: "The warrior who gets in is not necessarily the most talented. He is the most prepared. Prepared with the right structure, the right accountability, and the right mindset. That is what we built at MDCATemy.",
            },
          ].map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
            >
              {para.text}
            </motion.p>
          ))}
        </div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="my-14 py-10 border-t border-b border-warrior-border"
        >
          <p
            className="font-poppins font-black text-mdcat-yellow text-center leading-tight"
            style={{ fontSize: "clamp(1.4rem, 3.5vw, 2.2rem)" }}
          >
            You do not need more resources.
            <br />
            You need a system that holds you together when everything else falls apart.
          </p>
        </motion.div>

        {/* Interactive text link CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <p className="text-white/70 text-base font-inter">
            We built something that solves this.
          </p>
          <a
            href="#pricing"
            className="group inline-flex items-center gap-3 text-mdcat-yellow font-poppins font-black text-lg hover:gap-5 transition-all duration-300"
            onClick={() => console.log("Navigating to #pricing")}
          >
            <span className="border-b-2 border-mdcat-yellow/40 group-hover:border-mdcat-yellow transition-colors duration-200">
              Get the system that solves this
            </span>
            <span className="text-2xl transition-transform duration-300 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
