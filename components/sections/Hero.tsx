"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Users } from "lucide-react";

const YOUTUBE_VIDEO_ID = "qk93OJhJJbk";
const YOUTUBE_START = 875;

/* ─────────────────────────────────────────────
   Simplified SVG Background — mountains + stars
───────────────────────────────────────────── */
function WarCouncilBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Mountain silhouette layers */}
      <svg
        viewBox="0 0 1440 900"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0, opacity: 0.15 }}
      >
        <path d="M0 600 L180 440 L300 520 L450 370 L600 480 L720 350 L860 460 L1000 390 L1150 500 L1300 410 L1440 480 L1440 900 L0 900 Z" fill="#E6A800" />
        <path d="M0 650 L100 560 L200 610 L350 530 L500 590 L640 510 L780 570 L920 500 L1100 560 L1250 510 L1440 560 L1440 900 L0 900 Z" fill="#FFC600" />
      </svg>

      {/* Stars + crescent only */}
      <svg
        viewBox="0 0 1440 900"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0, opacity: 0.5 }}
      >
        {/* Stars */}
        {[
          [200, 80], [350, 140], [500, 60], [820, 100], [950, 50],
          [1100, 120], [1300, 75], [150, 200], [1350, 180], [250, 300], [1200, 260],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 2 : 1.2} fill="#FFC600" opacity={i % 3 === 0 ? 0.4 : 0.2} />
        ))}

        {/* Crescent moon */}
        <path d="M1370 80 Q1385 60 1400 80 Q1387 90 1370 80 Z" fill="#FFC600" opacity="0.35" />
        <circle cx="1392" cy="68" r="12" fill="#181A18" opacity="1" />

        {/* Corner ornaments */}
        <path d="M0 0 L80 0" stroke="#FFC600" strokeWidth="1.5" opacity="0.3" />
        <path d="M0 0 L0 80" stroke="#FFC600" strokeWidth="1.5" opacity="0.3" />
        <path d="M1440 0 L1360 0" stroke="#FFC600" strokeWidth="1.5" opacity="0.3" />
        <path d="M1440 0 L1440 80" stroke="#FFC600" strokeWidth="1.5" opacity="0.3" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Floating Ember Particle Canvas
───────────────────────────────────────────── */
function WarriorParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Skip particles on mobile — saves battery and prevents jank
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

    const embers: Ember[] = Array.from({ length: 20 }, () => makeEmber(true));
    let gridOff = 0;

    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      gridOff = (gridOff + 0.25) % 1;

      /* Subtle perspective grid — very light on white */
      const vpX = W / 2, vpY = H * 0.55, NLINES = 10;
      ctx.save();
      ctx.strokeStyle = "#FFC600";
      ctx.lineWidth = 0.6;
      for (let i = 0; i < NLINES; i++) {
        const raw = (i / NLINES + gridOff) % 1;
        const t = raw * raw;
        if (t < 0.001) continue;
        const y = vpY + (H - vpY) * t;
        const hw = W * 0.7 * t;
        ctx.globalAlpha = 0.015 + t * 0.025;
        ctx.beginPath(); ctx.moveTo(vpX - hw, y); ctx.lineTo(vpX + hw, y); ctx.stroke();
      }
      ctx.globalAlpha = 0.015;
      const NV = 12;
      for (let i = 0; i <= NV; i++) {
        const angle = ((i / NV) - 0.5) * Math.PI * 0.6;
        ctx.beginPath(); ctx.moveTo(vpX, vpY);
        ctx.lineTo(vpX + Math.tan(angle) * W * 1.2, H + 20); ctx.stroke();
      }
      ctx.restore();

      /* Embers */
      embers.forEach(e => {
        e.x += e.vx; e.y += e.vy; e.z += e.vz;
        e.vx += (Math.random() - 0.5) * 0.07;
        e.life--;
        if (e.y < -12 || e.life <= 0) resetEmber(e);
        const persp = Math.max(0.15, 800 / (800 + Math.abs(e.z)));
        const alpha = (e.life / e.maxLife) * persp * 0.6;
        const r = Math.max(0.2, e.size * persp);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = `hsl(${e.hue}, 100%, 55%)`;
        ctx.shadowBlur = r * 8;
        ctx.shadowColor = "#FFC600";
        ctx.beginPath(); ctx.arc(e.x, e.y, r, 0, Math.PI * 2); ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", setSize); };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 2 }} />;
}

/* ─────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden pt-20">

      {/* Solid dark background */}
      <div className="absolute inset-0" style={{ zIndex: 0, backgroundColor: "#181A18" }} />

      {/* Ember particles — subtle atmosphere only */}
      <WarriorParticles />

      {/* ── Page Content ── */}
      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-7 py-16" style={{ zIndex: 10 }}>

        {/* Limited seats badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-mdcat-yellow/10 border border-mdcat-yellow/40 rounded-full px-5 py-2"
        >
          <Users size={14} className="text-mdcat-yellow" />
          <span className="text-mdcat-yellow text-xs font-inter font-bold uppercase tracking-widest">
            Limited to 100 Warriors per Season
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter font-black text-white leading-tight"
          style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", letterSpacing: "-0.03em" }}
        >
          MDCAT is a War,
          <br />
          <span className="text-mdcat-yellow">Train Like a Warrior!</span>
        </motion.h1>


        {/* YouTube Video */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="w-full lg:w-[120%] lg:-mx-[10%]"
        >
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{
              aspectRatio: "16/9",
              border: "1px solid rgba(255,198,0,0.35)",
              boxShadow: "0 0 0 1px rgba(255,198,0,0.1), 0 8px 40px rgba(0,0,0,0.1), 0 0 60px rgba(255,198,0,0.1)",
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
        >
          <a
            href="#pricing"
            className="btn-primary animate-pulse-glow inline-block"
            style={{ fontSize: "1.05rem", letterSpacing: "0.06em" }}
          >
            Join the Tribe
          </a>
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
