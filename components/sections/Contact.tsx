"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 bg-mdcat-yellow relative">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-warrior-black/60 text-xs font-inter font-semibold uppercase tracking-widest mb-4"
        >
          Still Have Questions?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-inter font-black text-warrior-black mb-4"
          style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)" }}
        >
          Talk to a Real Person.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="text-warrior-black/70 font-inter text-lg leading-relaxed mb-4"
        >
          Our team responds to every message. If you have a question about the Study Tribe, pricing, or whether this is right for you — reach out.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-warrior-black/50 font-inter text-sm font-semibold mb-12"
        >
          Average response time: under 2 hours
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="mailto:info@mdcatemy.com"
            className="card-hover flex items-center gap-4 bg-warrior-black rounded-2xl px-8 py-5" style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="w-10 h-10 rounded-xl bg-mdcat-yellow/10 border border-mdcat-yellow/30 flex items-center justify-center">
              <Mail size={18} className="text-mdcat-yellow" />
            </div>
            <div className="text-left">
              <p className="text-white font-inter font-semibold text-sm">Email Us</p>
              <p className="text-white/60 text-xs font-inter">info@mdcatemy.com</p>
            </div>
          </a>

          <a
            href="https://wa.me/923000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover flex items-center gap-4 bg-warrior-black rounded-2xl px-8 py-5" style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div className="w-10 h-10 rounded-xl bg-mdcat-yellow/10 border border-mdcat-yellow/30 flex items-center justify-center">
              <MessageCircle size={18} className="text-mdcat-yellow" />
            </div>
            <div className="text-left">
              <p className="text-white font-inter font-semibold text-sm">WhatsApp</p>
              <p className="text-white/60 text-xs font-inter">Chat with our team</p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
