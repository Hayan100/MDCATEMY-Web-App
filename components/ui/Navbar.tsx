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
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-warrior-black/97 backdrop-blur-md border-b border-warrior-border shadow-lg shadow-black/40"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src="/images/logo.svg"
                alt="MDCATEMY"
                width={220}
                height={56}
                className="h-12 lg:h-14 w-auto"
                priority
              />
            </a>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-inter font-medium text-warrior-text hover:text-white transition-colors duration-200 uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="#"
                className="text-sm font-inter font-medium text-warrior-text hover:text-white transition-colors duration-200 uppercase tracking-wider"
                onClick={() => console.log("Navigating to /login")}
              >
                Login
              </a>
              <a
                href="#pricing"
                className="btn-primary text-sm px-6 py-3"
                onClick={() => console.log("Navigating to /register")}
              >
                Join the Tribe
              </a>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white p-2 rounded"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-16 left-0 right-0 z-40 bg-dark-charcoal border-b border-warrior-border lg:hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-inter font-medium text-warrior-text hover:text-white transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-warrior-border flex flex-col gap-3">
                <a
                  href="#"
                  className="btn-ghost text-center"
                  onClick={() => console.log("Navigating to /login")}
                >
                  Login
                </a>
                <a
                  href="#pricing"
                  className="btn-primary text-center"
                  onClick={() => { setMobileOpen(false); console.log("Navigating to /register"); }}
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
