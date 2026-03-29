"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Users } from "lucide-react";

const YOUTUBE_VIDEO_ID = "qk93OJhJJbk";
const YOUTUBE_START = 875;

/* ─────────────────────────────────────────────
   Floating Ember Particle Canvas
───────────────────────────────────────────── */
function WarriorParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();
    window.addEventListener("resize", setSize);

    type Ember = { x: number; y: number; z: number; vx: number; vy: number; vz: number; life: number; maxLife: number; size: number; hue: number; };

    const makeEmber = (scattered = false): Ember => {
      const maxLife = 160 + Math.random() * 220;
      return {
        x: Math.random() * canvas.width,
        y: scattered ? Math.random() * canvas.height : canvas.height + 8,
        z: Math.random() * 700,
        vx: (Math.random() - 0.5) * 0.7,
        vy: -(Math.random() * 1.3 + 0.35),
        vz: (Math.random() - 0.5) * 1.8,
        life: scattered ? Math.random() * maxLife : maxLife,
        maxLife, size: Math.random() * 2.2 + 0.5,
        hue: Math.random() > 0.55 ? 44 : 36,
      };
    };
    const resetEmber = (e: Ember) => {
      const ml = 160 + Math.random() * 220;
      e.x = Math.random() * canvas.width; e.y = canvas.height + 8;
      e.z = Math.random() * 700; e.vx = (Math.random() - 0.5) * 0.7;
      e.vy = -(Math.random() * 1.3 + 0.35); e.vz = (Math.random() - 0.5) * 1.8;
      e.life = ml; e.maxLife = ml; e.size = Math.random() * 2.2 + 0.5;
      e.hue = Math.random() > 0.55 ? 44 : 36;
    };

    const embers: Ember[] = Array.from({ length: 28 }, () => makeEmber(true));

    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);

      embers.forEach(e => {
        e.x += e.vx; e.y += e.vy; e.z += e.vz;
        e.vx += (Math.random() - 0.5) * 0.07;
        e.life--;
        if (e.y < -12 || e.life <= 0) resetEmber(e);
        const persp = Math.max(0.15, 800 / (800 + Math.abs(e.z)));
        const alpha = (e.life / e.maxLife) * persp * 0.75;
        const r = Math.max(0.2, e.size * persp);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = `hsl(${e.hue}, 100%, 55%)`;
        ctx.shadowBlur = r * 10;
        ctx.shadowColor = "#FFC600";
        ctx.beginPath(); ctx.arc(e.x, e.y, r, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", setSize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 3 }} />;
}

/* ─────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20">

      {/* ── Background Image ── */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      />

      {/* ── Gradient overlays for readability ── */}
      {/* Strong top-down dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(10,10,10,0.72) 0%, rgba(10,10,10,0.55) 40%, rgba(10,10,10,0.75) 75%, rgba(10,10,10,0.96) 100%)",
          zIndex: 1,
        }}
      />
      {/* Vignette edges */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
          zIndex: 2,
        }}
      />

      {/* Ember particles */}
      <WarriorParticles />

      {/* ── Page Content ── */}
      <div
        className="relative w-full max-w-4xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-6 py-16"
        style={{ zIndex: 10 }}
      >

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full px-5 py-2"
          style={{
            background: "rgba(255,198,0,0.10)",
            border: "1px solid rgba(255,198,0,0.40)",
            backdropFilter: "blur(8px)",
          }}
        >
          <Users size={14} className="text-mdcat-yellow" />
          <span className="text-mdcat-yellow text-xs font-inter font-bold uppercase tracking-widest">
            Only 100 Seats Available This Season
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.22 }}
          className="font-inter font-black text-white leading-tight"
          style={{
            fontSize: "clamp(2.4rem, 5.5vw, 4.6rem)",
            letterSpacing: "-0.03em",
            textShadow: "0 2px 40px rgba(0,0,0,0.7)",
          }}
        >
          Make MDCAT Prep
          <br />
          <span
            style={{
              color: "#FFC600",
              WebkitTextFillColor: "#FFC600",
            }}
          >
            Our Job, Not Yours.
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="font-inter max-w-2xl mx-auto"
          style={{
            fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
            lineHeight: "1.65",
            letterSpacing: "0.01em",
            color: "rgba(255,255,255,0.92)",
            textShadow: "0 2px 20px rgba(0,0,0,0.9)",
          }}
        >
          We have created a system that eliminates confusion, builds discipline, and pushes you forward every single day so you stop stressing, start executing and secure a seat in your favourite Medical College.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.52 }}
        >
          <a
            href="#pricing"
            className="btn-primary animate-pulse-glow inline-block"
            style={{ fontSize: "0.85rem", letterSpacing: "0.03em", padding: "0.6rem 1.5rem" }}
          >
            Join the academy today
          </a>
        </motion.div>

        {/* Video */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.65 }}
          className="w-full mt-2"
        >
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{
              aspectRatio: "16/9",
              border: "1px solid rgba(255,198,0,0.35)",
              boxShadow: "0 0 0 1px rgba(255,198,0,0.08), 0 16px 60px rgba(0,0,0,0.6), 0 0 80px rgba(255,198,0,0.12)",
            }}
          >
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?start=${YOUTUBE_START}&rel=0&modestbranding=1&color=white`}
              title="MDCATEMY Study Tribe — Watch the System Explained"
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-white/40 text-sm font-inter font-medium text-center tracking-wide">
            ▶ Watch: The Study Tribe System Explained
          </p>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex flex-col items-center gap-2 mt-2"
        >
          <span className="text-white/35 text-xs uppercase tracking-widest font-inter">Scroll to continue</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={20} className="text-mdcat-yellow opacity-60" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
