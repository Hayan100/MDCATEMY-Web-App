"use client";

import { motion } from "framer-motion";
import { Star, Flame } from "lucide-react";

const TESTIMONIALS = [
  { name: "Mubashra Sahar", text: "MDCATemy FLPs went really well overall. The tests taught me a lot and made me aware of my weak areas. Thanks to the entire team." },
  { name: "M. Salman", text: "MDCATemy's online FLPs 2025 was amazing! The teachers were great and the study materials were very helpful. I look forward to being part of MDCATemy's future initiatives." },
  { name: "Shumaila", text: "The way you guys put effort in explanation — written as well as YouTube videos — was superb. Even though I joined another series, it didn't help me like MDCATemy did." },
  { name: "Maliha Yunas", text: "You have no idea how much you've helped us, even while being a student yourself. You understood exactly what we needed and how to help us. I'm really grateful for that." },
  { name: "Sabah", text: "Each test was thoughtfully designed, conceptually strong, and closely reflected the actual MDCAT pattern. The session greatly enhanced my confidence and exam readiness." },
  { name: "Adnan Amin", text: "Each discussion cleared doubts and boosted my confidence. It truly felt like learning under mentors who understand what MDCAT demands. Thank you so much." },
  { name: "Spogmai", text: "The FLPs really helped me stay consistent and disciplined with my MDCAT prep. I'm really glad I was part of this community. Can't wait to see MDCATemy launch officially." },
  { name: "Benyamin", text: "Sometimes we lose our track but these tests brought me back on it. I'm truly thankful to you and your team who helped clarify so many concepts through MCQs." },
  { name: "Sarwat Gul", text: "You have the ability for fostering a positive mindset and making students believe in their abilities. I'm also excited to hear about plans to launch MDCATemy next year." },
  { name: "Waleed Khan", text: "The practice under timed conditions enhanced my test-taking strategies and built stamina for the actual exam. Thanks for the dedication and effort in helping students succeed." },
  { name: "Aliba Ali", text: "I truly felt guided throughout. All teachers guided me the way I needed. It actually taught us how to learn for MDCAT. Jazakallah Khair for all your efforts." },
  { name: "Saima Mushtaq", text: "I had approached many FLPs before joining MDCATemy but none helped me like this. I got FLPs that were exactly what I needed — and every MDCAT aspirant needs." },
  { name: "Zeeshan Khan", text: "The FLPs were so conceptual and according to the PMDC syllabus. Physics and chemistry were very good and conceptual. In sha Allah, Allah will give you success in launching MDCATemy." },
  { name: "Mudassir", text: "It was a great experience. All the mentor teachers were so cooperative and available. I'll suggest everyone to join MDCATemy mentorship — you'll learn a lot beyond just studying." },
  { name: "Aleeza", text: "Your teaching skills, strategy and tests were outstanding — literally fully conceptual and mind-blowing. I think MDCATemy would be worthwhile for every student in 2026." },
  { name: "Saddam Hussain", text: "MDCATemy helped me understand how well my preparation was going. I gained a lot of knowledge and built my concepts. It will be very beneficial for many students. Jazakallah." },
  { name: "Hajra Shabir", text: "I found the material so useful I made photocopies and studied them again and again. The video lectures were also great and helped me understand everything better." },
  { name: "Zain Khan", text: "The physics and chemistry portions were top-notch. Our teachers also helped us in the group when we asked questions. In sha Allah I will crack MDCAT because of this test session." },
];

function Card({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div
      className="group flex-shrink-0 w-[300px] mx-3 bg-white border border-gray-200 rounded-xl p-6 flex flex-col gap-4 cursor-default transition-all duration-300 hover:bg-mdcat-yellow hover:border-mdcat-yellow"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
      onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 30px rgba(255,198,0,0.35), 0 2px 8px rgba(0,0,0,0.06)")}
      onMouseLeave={e => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)")}
    >
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={11} className="text-mdcat-yellow fill-mdcat-yellow group-hover:text-warrior-black group-hover:fill-warrior-black transition-colors duration-300" />
        ))}
      </div>
      <p className="text-gray-700 group-hover:text-warrior-black text-sm font-inter leading-relaxed flex-1 font-medium transition-colors duration-300">
        &ldquo;{t.text}&rdquo;
      </p>
      <div className="pt-4 border-t border-gray-200 group-hover:border-warrior-black/20 transition-colors duration-300">
        <p className="text-gray-900 group-hover:text-warrior-black font-inter font-black text-sm transition-colors duration-300">— {t.name}</p>
        <p className="text-gray-500 group-hover:text-warrior-black/60 text-xs font-inter mt-0.5 font-semibold transition-colors duration-300">
          MDCATemy FLP Session 2025
        </p>
      </div>
    </div>
  );
}

export default function SocialProof() {
  const row1 = [...TESTIMONIALS.slice(0, 9), ...TESTIMONIALS.slice(0, 9)];
  const row2 = [...TESTIMONIALS.slice(9), ...TESTIMONIALS.slice(9)];

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">

      {/* Top section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mdcat-yellow/40 to-transparent" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 px-6"
        >
          <div className="inline-flex items-center gap-2 bg-mdcat-yellow/10 border border-mdcat-yellow/30 rounded-full px-5 py-2 mb-5">
            <Flame size={13} className="text-mdcat-yellow" />
            <span className="text-mdcat-yellow text-xs font-inter font-bold uppercase tracking-widest">
              Real Students. Real Words.
            </span>
          </div>
          <h2
            className="font-inter font-black text-gray-900"
            style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)" }}
          >
            Last year we ran an emergency FLP setup.
          </h2>
          <p className="text-mdcat-yellow font-inter font-black mt-1" style={{ fontSize: "clamp(1.3rem, 2.8vw, 2rem)" }}>
            Here is what 20+ students had to say.
          </p>
        </motion.div>

        <div className="marquee-track overflow-hidden mb-4">
          <div className="marquee-inner flex animate-marquee">
            {row1.map((t, i) => <Card key={i} t={t} />)}
          </div>
        </div>

        <div className="marquee-track overflow-hidden">
          <div className="marquee-inner flex animate-marquee-reverse">
            {[...row2].reverse().map((t, i) => <Card key={i} t={t} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
