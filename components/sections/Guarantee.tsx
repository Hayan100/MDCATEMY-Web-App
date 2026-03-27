"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle, Mail } from "lucide-react";

const CONDITIONS = [
  "You have attended every live session in the first month",
  "You have been active on the platform with daily task completion",
  "You have engaged with your Veteran coach and participated in reviews",
  "You email us the reason and tell us how we can improve",
];

export default function Guarantee() {
  return (
    <section className="py-20 bg-warrior-black relative overflow-hidden">

      {/* Top section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-mdcat-yellow/40 to-transparent" />

      {/* Tribal overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/images/tribal-bg.svg')", backgroundSize: "200px 200px", opacity: 0.04 }} />

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[700px] h-[400px]"
          style={{ background: "radial-gradient(ellipse, rgba(255,198,0,0.05) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="group relative bg-dark-charcoal border border-warrior-border rounded-2xl overflow-hidden cursor-default"
          style={{ transition: "background-color 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease" }}
          onMouseEnter={e => {
            e.currentTarget.style.backgroundColor = "#FFC600";
            e.currentTarget.style.borderColor = "#FFC600";
            e.currentTarget.style.boxShadow = "0 0 50px rgba(255,198,0,0.35), 0 0 100px rgba(255,198,0,0.12)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.backgroundColor = "";
            e.currentTarget.style.borderColor = "";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          {/* Top yellow bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-mdcat-yellow group-hover:bg-warrior-black transition-colors duration-300" />

          {/* Header strip */}
          <div className="border-b border-warrior-border group-hover:border-warrior-black/20 p-6 lg:p-8 transition-colors duration-300">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0 w-16 h-16 bg-mdcat-yellow/10 group-hover:bg-warrior-black/10 border-2 border-mdcat-yellow/40 group-hover:border-warrior-black/30 rounded-xl flex items-center justify-center transition-all duration-300">
                <ShieldCheck size={34} className="text-mdcat-yellow group-hover:text-warrior-black transition-colors duration-300" />
              </div>
              <div>
                <p className="text-mdcat-yellow group-hover:text-warrior-black/70 text-xs font-inter font-black uppercase tracking-widest mb-1 transition-colors duration-300">
                  100% Satisfaction Guarantee
                </p>
                <h2
                  className="font-inter font-black text-white group-hover:text-warrior-black transition-colors duration-300"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)" }}
                >
                  Our Money-Back Promise
                </h2>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 lg:p-10">
            <p className="text-white group-hover:text-warrior-black font-inter text-lg leading-relaxed mb-3 transition-colors duration-300">
              We are completely confident in this system. So we are willing to back it with something real.
            </p>
            <p className="text-warrior-text group-hover:text-warrior-black/70 font-inter text-lg leading-relaxed mb-8 transition-colors duration-300">
              If you join the Study Tribe, give it a full first month — attend every session, stay active, work with your coach — and you still feel it is not right for you, we will give you{" "}
              <strong className="text-white group-hover:text-warrior-black transition-colors duration-300">100% of your money back</strong>. No questions, no drama.
            </p>

            {/* Conditions */}
            <div className="bg-warrior-black/30 group-hover:bg-warrior-black/10 border border-warrior-border group-hover:border-warrior-black/20 rounded-xl p-6 mb-8 transition-all duration-300">
              <p className="text-white group-hover:text-warrior-black font-inter font-black text-sm mb-5 transition-colors duration-300">
                To qualify for a refund, all of the following must be true:
              </p>
              <ul className="space-y-3">
                {CONDITIONS.map((c, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle size={16} className="text-mdcat-yellow group-hover:text-warrior-black flex-shrink-0 mt-0.5 transition-colors duration-300" />
                    <span className="text-white/80 group-hover:text-warrior-black/80 font-inter text-sm leading-relaxed transition-colors duration-300">{c}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* How to claim */}
            <div className="flex items-start gap-4 bg-mdcat-yellow/10 group-hover:bg-warrior-black/10 border border-mdcat-yellow/30 group-hover:border-warrior-black/20 rounded-xl p-5 mb-6 transition-all duration-300">
              <div className="flex-shrink-0 w-9 h-9 bg-mdcat-yellow/10 group-hover:bg-warrior-black/10 border border-mdcat-yellow/30 group-hover:border-warrior-black/20 rounded-xl flex items-center justify-center transition-all duration-300">
                <Mail size={16} className="text-mdcat-yellow group-hover:text-warrior-black transition-colors duration-300" />
              </div>
              <div>
                <p className="font-inter font-bold text-white group-hover:text-warrior-black text-sm mb-1 transition-colors duration-300">How to claim:</p>
                <p className="text-warrior-text group-hover:text-warrior-black/70 font-inter text-sm leading-relaxed transition-colors duration-300">
                  Email us at{" "}
                  <a href="mailto:info@mdcatemy.com" className="text-mdcat-yellow group-hover:text-warrior-black font-bold hover:underline transition-colors duration-300">
                    info@mdcatemy.com
                  </a>{" "}
                  within your first month. Tell us your reason and share one suggestion for how we can improve. That is all we ask — because your feedback genuinely helps us build a better system.
                </p>
              </div>
            </div>

            {/* Closing statement */}
            <p className="text-warrior-text group-hover:text-warrior-black/70 font-inter text-sm italic border-l-2 border-mdcat-yellow/40 group-hover:border-warrior-black/30 pl-4 transition-all duration-300">
              We are not in the business of keeping money from people who did not get value. If the system did not work for you — and you truly gave it a fair shot — we do not want your money. Simple as that.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
