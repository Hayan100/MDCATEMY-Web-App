"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "My Camp", href: "#" },
  { label: "Pricing", href: "#pricing" },
  { label: "Courses", href: "#" },
  { label: "Books", href: "#" },
  { label: "Tests", href: "#" },
  { label: "About Us", href: "#architect" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(24, 26, 24, 0.65)" : "transparent",
          backdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px) saturate(180%)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.25)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between" style={{ height: "72px" }}>
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/images/mdcat.svg"
                alt="MDCATEMY"
                width={260}
                height={66}
                className="w-auto"
                style={{ height: "44px" }}
                priority
              />
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-inter font-medium text-mdcat-yellow hover:text-white transition-colors duration-200 uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="#"
                className="text-sm font-inter font-medium text-white/70 hover:text-white transition-colors duration-200 uppercase tracking-wider"
              >
                Login
              </a>
              <a href="#pricing" className="btn-primary text-sm px-6 py-3">
                Join the Tribe
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-mdcat-yellow p-2 rounded-xl hover:bg-white/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu — frosted glass */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22 }}
            className="fixed top-[72px] left-0 right-0 z-40 lg:hidden"
            style={{
              backgroundColor: "rgba(24, 26, 24, 0.85)",
              backdropFilter: "blur(24px) saturate(180%)",
              WebkitBackdropFilter: "blur(24px) saturate(180%)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
            }}
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-inter font-medium text-mdcat-yellow hover:text-white transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 flex flex-col gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <a href="#" className="btn-ghost text-center">Login</a>
                <a
                  href="#pricing"
                  className="btn-primary text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Join the Tribe
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
