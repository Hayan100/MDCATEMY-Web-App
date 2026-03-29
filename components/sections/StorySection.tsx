"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";

/* ─────────────────────────────────────────────
   Animation Variants
───────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 32 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─────────────────────────────────────────────
   Reusable: scroll-triggered wrapper
───────────────────────────────────────────── */
function InView({
  children,
  variants = fadeUp,
  custom = 0,
  className = "",
}: {
  children: React.ReactNode;
  variants?: Variants;
  custom?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={custom}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   Decorative vertical rule
───────────────────────────────────────────── */
function YellowRule() {
  return (
    <div
      className="mx-auto my-12"
      style={{
        width: "2px",
        height: "72px",
        background: "linear-gradient(to bottom, transparent, #FFC600, transparent)",
      }}
    />
  );
}

/* ─────────────────────────────────────────────
   StorySection
───────────────────────────────────────────── */
export default function StorySection() {
  return (
    <section
      style={{ backgroundColor: "#181A18", fontFamily: "var(--font-inter, Inter, sans-serif)" }}
      className="relative overflow-hidden"
    >
      {/* Subtle noise texture overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E\")",
          zIndex: 0,
        }}
      />

      <div className="relative" style={{ zIndex: 1 }}>

        {/* ══════════════════════════════════════
            BLOCK 1 — THE HOOK
        ══════════════════════════════════════ */}
        <div
          className="flex flex-col items-center justify-center text-center px-6 lg:px-8"
          style={{ minHeight: "100vh", paddingTop: "7rem", paddingBottom: "7rem" }}
        >
          <InView custom={0}>
            <p
              className="mb-3 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em]"
              style={{
                color: "#FFC600",
                border: "1px solid rgba(255,198,0,0.3)",
                background: "rgba(255,198,0,0.07)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Ek Seedhi Baat
            </p>
          </InView>

          <InView custom={0.1}>
            <h2
              className="max-w-3xl leading-snug"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3.8vw, 3rem)",
                color: "#ffffff",
                letterSpacing: "-0.02em",
              }}
            >
              MDCAT ek bohat hi{" "}
              <em style={{ color: "#FFC600", fontStyle: "normal" }}>aasan</em> test hai.
              <br />
              Aur sab is ke liye study karte hain...
              <br />
              lekin sirf{" "}
              <span
                style={{
                  borderBottom: "2px solid rgba(255,198,0,0.5)",
                  paddingBottom: "2px",
                }}
              >
                chand students
              </span>{" "}
              hi isay crack kar paate hain.
            </h2>
          </InView>

          <InView custom={0.22}>
            <div className="mt-10">
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.4rem, 6vw, 5rem)",
                  color: "#FFC600",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                  textShadow: "0 0 60px rgba(255,198,0,0.3)",
                }}
              >
                Aisa kyun hai?
              </p>
            </div>
          </InView>

          <InView custom={0.34}>
            <div className="mt-16 flex items-center gap-3">
              <div style={{ width: "32px", height: "2px", backgroundColor: "#FFC600", opacity: 0.5 }} />
              <p style={{ color: "#888", fontSize: "0.8rem", fontFamily: "Inter, sans-serif", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Scroll karo, samjho
              </p>
              <div style={{ width: "32px", height: "2px", backgroundColor: "#FFC600", opacity: 0.5 }} />
            </div>
          </InView>
        </div>

        {/* ══════════════════════════════════════
            BLOCK 2 — THE CORE PROBLEM
        ══════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text Left */}
            <div>
              <InView custom={0}>
                <p
                  className="mb-5 text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{ color: "#FFC600", fontFamily: "Inter, sans-serif" }}
                >
                  Asli Waja
                </p>
              </InView>
              <InView custom={0.1}>
                <h3
                  className="mb-6 leading-tight"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
                    color: "#ffffff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Not knowing what works —{" "}
                  <span style={{ color: "#FFC600" }}>and what not.</span>
                </h3>
              </InView>
              <InView custom={0.18}>
                <p
                  className="mb-5 leading-relaxed"
                  style={{ color: "#CCCCCC", fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
                >
                  Students ko pata hi nahi hota ke MDCAT ko crack karne ke liye unhe actual mein karna kya hai. Kya cheez matter karti hai, aur kya nahi.
                </p>
              </InView>
              <InView custom={0.26}>
                <p
                  className="leading-relaxed"
                  style={{ color: "#CCCCCC", fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
                >
                  Zyada door nahi jate, MDCAT 2025 ko hi dekh lein. Test bohat aasan tha aur poora aapki books mein se aaya tha. Lekin bohat saare students is liye fail ho gaye kyunke unhe lagta tha test out-of-syllabus aayega. Unhon ne apna poora time mushkil aur out-of-syllabus cheezein seekhne mein zaya kar diya —{" "}
                  <span style={{ color: "#ffffff", fontWeight: 500 }}>aur aasan MCQs un se reh gaye.</span>
                </p>
              </InView>
            </div>

            {/* Image Right */}
            <InView custom={0.12} className="w-full">
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{
                  boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,198,0,0.12)",
                  aspectRatio: "4/3",
                }}
              >
                <Image
                  src="/images/pic1.png"
                  alt="Students struggling with MDCAT preparation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(24,26,24,0.25) 0%, transparent 60%)",
                  }}
                />
              </div>
            </InView>
          </div>
        </div>

        <YellowRule />

        {/* ══════════════════════════════════════
            BLOCK 3 — THE ACADEMY TRAP
        ══════════════════════════════════════ */}
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
          <InView variants={scaleIn}>
            <div
              className="rounded-2xl p-8 lg:p-12"
              style={{
                backgroundColor: "#222422",
                borderLeft: "4px solid #FFC600",
                boxShadow: "0 8px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <InView custom={0}>
                <p
                  className="mb-3 text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{ color: "#FFC600", fontFamily: "Inter, sans-serif" }}
                >
                  Asli Dushman
                </p>
              </InView>
              <InView custom={0.08}>
                <h3
                  className="mb-6 leading-tight"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.3rem, 2.6vw, 2.1rem)",
                    color: "#ffffff",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Academies ne students ko{" "}
                  <span style={{ color: "#FFC600" }}>akela chhor diya.</span>
                </h3>
              </InView>
              <InView custom={0.14}>
                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: "#CCCCCC", fontSize: "clamp(0.95rem, 1.6vw, 1.08rem)", fontFamily: "Inter, sans-serif", lineHeight: 1.85 }}
                >
                  Is mein saari ghalti students ki nahi thi. Ghalti un preparation platforms ki bhi thi jinhon ne unko out-of-syllabus cheezein parhain. Jinka MCQ bank mushkil-e-zamana aur out-of-book sawalon se bhara para hai. Jo students ko faide se zyada nuqsan de rahe thay.
                </p>
              </InView>
              <InView custom={0.2}>
                <p
                  className="leading-relaxed"
                  style={{ color: "#CCCCCC", fontSize: "clamp(0.95rem, 1.6vw, 1.08rem)", fontFamily: "Inter, sans-serif", lineHeight: 1.85 }}
                >
                  Ab ye baat student ko kaun bataye ga? Student jo ghaltiyan kar raha hai, usay note kaun kare ga? Ye saari academies toh bas recorded lectures pakra deti hain aur phir ghaib ho jaati hain. Student ko toh koi roadmap nahi deta. Usko kya problems aa rahi hain, kahan wo confuse hai, kyun wo stress mein hai —{" "}
                  <span
                    style={{
                      color: "#ffffff",
                      fontWeight: 600,
                      fontStyle: "italic",
                    }}
                  >
                    ye toh koi nahi dekh raha. He is completely alone in this journey.
                  </span>
                </p>
              </InView>
            </div>
          </InView>
        </div>

        <YellowRule />

        {/* ══════════════════════════════════════
            BLOCK 4 — THE SILENT KILLER
        ══════════════════════════════════════ */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image Left */}
            <InView custom={0.1} className="w-full order-2 md:order-1">
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{
                  boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,198,0,0.12)",
                  aspectRatio: "4/3",
                }}
              >
                <Image
                  src="/images/pic2.png"
                  alt="MDCAT anxiety and fear"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(225deg, rgba(24,26,24,0.25) 0%, transparent 60%)",
                  }}
                />
              </div>
            </InView>

            {/* Text Right */}
            <div className="order-1 md:order-2">
              <InView custom={0}>
                <p
                  className="mb-5 text-xs font-semibold uppercase tracking-[0.16em]"
                  style={{ color: "#FFC600", fontFamily: "Inter, sans-serif" }}
                >
                  Khamoshi ka Zeher
                </p>
              </InView>
              <InView custom={0.1}>
                <p
                  className="mb-5 leading-relaxed"
                  style={{ color: "#CCCCCC", fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
                >
                  Kya sirf yahi ek waja thi MDCAT ko fail karne ki? Nahi. Ek aur waja bhi hai.
                </p>
              </InView>
              <InView custom={0.18}>
                <h3
                  className="mb-6 leading-tight"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.4rem, 2.8vw, 2.2rem)",
                    color: "#FFC600",
                    letterSpacing: "-0.02em",
                    textShadow: "0 0 40px rgba(255,198,0,0.25)",
                  }}
                >
                  MDCAT Anxiety. Fail hone ka darr!
                </h3>
              </InView>
              <InView custom={0.26}>
                <p
                  className="leading-relaxed"
                  style={{ color: "#CCCCCC", fontSize: "clamp(0.95rem, 1.6vw, 1.1rem)", fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
                >
                  Koi platform is baare mein baat hi nahi kar raha ke aapka sab se bara dushman aapka khauf hai. Yahi khauf hi aapse test fail karwayega kyunke jab aap darr rahe hote hain toh aapka dimagh sahi kaam nahi karta. Us pressure walay mahol mein,{" "}
                  <span style={{ color: "#ffffff", fontWeight: 500 }}>
                    aap un sawalaat ko bhi ghalat kar dete hain jo aapko aate thay.
                  </span>
                </p>
              </InView>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            BLOCK 5 — THE WARRIOR SOLUTION
        ══════════════════════════════════════ */}
        <div
          className="relative text-center px-6 lg:px-8 py-28 lg:py-40 overflow-hidden"
          style={{
            background: "linear-gradient(to bottom, #181A18 0%, #1e2010 50%, #181A18 100%)",
          }}
        >
          {/* Background glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2"
            style={{
              transform: "translate(-50%, -50%)",
              width: "600px",
              height: "400px",
              background: "radial-gradient(ellipse at center, rgba(255,198,0,0.07) 0%, transparent 70%)",
              zIndex: 0,
            }}
          />

          <div className="relative max-w-3xl mx-auto" style={{ zIndex: 1 }}>
            <InView custom={0}>
              <p
                className="mb-5 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em]"
                style={{
                  color: "#FFC600",
                  border: "1px solid rgba(255,198,0,0.3)",
                  background: "rgba(255,198,0,0.07)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                The Solution
              </p>
            </InView>

            <InView custom={0.1}>
              <p
                className="mb-6 leading-relaxed"
                style={{ color: "#CCCCCC", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", fontFamily: "Inter, sans-serif", lineHeight: 1.85 }}
              >
                MDCAT ko crack karne ke liye ye darr aapko mitana hoga. Aur kyunke koi academy is kaam ke liye tayar nahi thi, is liye we built{" "}
                <span style={{ color: "#ffffff", fontWeight: 600 }}>MDCATEMY</span> aur{" "}
                <span style={{ color: "#ffffff", fontWeight: 600 }}>Study Tribe</span> taake aapko kabhi ye feel na ho ke aap is journey mein akele hain.
              </p>
            </InView>

            <InView custom={0.2}>
              <p
                className="mb-14 leading-relaxed"
                style={{ color: "#CCCCCC", fontSize: "clamp(1rem, 1.8vw, 1.15rem)", fontFamily: "Inter, sans-serif", lineHeight: 1.85 }}
              >
                Student koi mistake kare toh hum usay samjhayein aur sahi raste par layein. Student kabhi stressed ho toh hum uski counselling karein. Hum aapki efficiency increase karna chahte hain, aapko ek aisi Tribe aur aisa roadmap dena chahte hain taake aapko ek{" "}
                <span style={{ color: "#ffffff", fontWeight: 600 }}>Warrior</span> banaya ja sake...
              </p>
            </InView>

            <InView custom={0.3}>
              <div
                className="relative inline-block"
              >
                {/* Decorative lines flanking */}
                <div
                  className="absolute left-0 top-1/2 hidden lg:block"
                  style={{
                    transform: "translateX(-120%) translateY(-50%)",
                    width: "80px",
                    height: "2px",
                    background: "linear-gradient(to right, transparent, #FFC600)",
                  }}
                />
                <div
                  className="absolute right-0 top-1/2 hidden lg:block"
                  style={{
                    transform: "translateX(120%) translateY(-50%)",
                    width: "80px",
                    height: "2px",
                    background: "linear-gradient(to left, transparent, #FFC600)",
                  }}
                />

                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 900,
                    fontSize: "clamp(1.6rem, 4vw, 3.2rem)",
                    color: "#FFC600",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.2,
                    textShadow: "0 0 80px rgba(255,198,0,0.4)",
                  }}
                >
                  Kyunke Warriors bahadur hote hain...
                  <br />
                  <span style={{ color: "#ffffff" }}>aur wo kisi cheez se nahi darte!</span>
                </p>
              </div>
            </InView>
          </div>
        </div>

      </div>
    </section>
  );
}
