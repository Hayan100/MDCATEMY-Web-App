"use client";

import Image from "next/image";
import { Instagram, Youtube, Twitter } from "lucide-react";

const LINKS = {
  Platform: [
    { label: "Study Tribe", href: "#pricing" },
    { label: "Courses", href: "#" },
    { label: "Books", href: "#" },
    { label: "Tests", href: "#" },
    { label: "Training Ground", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#architect" },
    { label: "Join as Veteran", href: "#" },
    { label: "Scholarship", href: "#scholarship" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Refund Policy", href: "#" },
  ],
};

const SOCIALS = [
  { icon: Instagram, href: "https://instagram.com/mdcatemy", label: "Instagram" },
  { icon: Youtube, href: "https://youtube.com/@mdcatemy", label: "YouTube" },
  { icon: Twitter, href: "https://twitter.com/mdcatemy", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-charcoal border-t border-warrior-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <Image
              src="/images/logo.svg"
              alt="MDCATEMY"
              width={140}
              height={36}
              className="h-8 w-auto mb-5"
            />
            <p className="text-warrior-text font-inter text-sm leading-relaxed max-w-xs">
              Pakistan&apos;s most intensive MDCAT preparation system. Built by a warrior, for warriors.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-sm bg-warrior-black border border-warrior-border flex items-center justify-center hover:border-mdcat-yellow hover:text-mdcat-yellow text-warrior-text transition-colors duration-200"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link groups */}
          {Object.entries(LINKS).map(([group, links]) => (
            <div key={group}>
              <p className="text-white font-poppins font-semibold text-xs uppercase tracking-widest mb-5">
                {group}
              </p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-warrior-text text-sm font-inter hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-warrior-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-warrior-text text-sm font-inter">
            &copy; {new Date().getFullYear()} MDCATEMY. All rights reserved.
          </p>
          <p className="text-warrior-text text-xs font-inter">
            Train Like a Warrior. Score Like a Legend.
          </p>
        </div>
      </div>
    </footer>
  );
}
