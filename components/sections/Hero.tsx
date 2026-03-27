"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Users } from "lucide-react";

const YOUTUBE_VIDEO_ID = "qk93OJhJJbk";
const YOUTUBE_START = 875;

/* ─────────────────────────────────────────────
   War Council Illustrated SVG Background
   Warriors around fire, map on ground, Ottoman tent
───────────────────────────────────────────── */
function WarCouncilBackground() {
  return (
    <div
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ zIndex: 1 }}
    >
      <svg
        viewBox="0 0 1440 900"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "absolute", inset: 0, opacity: 0.18 }}
      >
        {/* ── Sky / distant mountains ── */}
        <path d="M0 600 L180 440 L300 520 L450 370 L600 480 L720 350 L860 460 L1000 390 L1150 500 L1300 410 L1440 480 L1440 900 L0 900 Z" fill="#181A18" />
        <path d="M0 650 L100 560 L200 610 L350 530 L500 590 L640 510 L780 570 L920 500 L1100 560 L1250 510 L1440 560 L1440 900 L0 900 Z" fill="#1e201e" />

        {/* ── Ottoman tent / pavilion arch at top center ── */}
        <path d="M560 0 Q720 160 880 0" stroke="#FFC600" strokeWidth="3" fill="none" opacity="0.5" />
        <path d="M580 0 Q720 140 860 0" stroke="#FFC600" strokeWidth="1" fill="none" opacity="0.25" />
        {/* Tent fabric panels */}
        <path d="M560 0 L560 200 Q720 260 880 200 L880 0 Q720 160 560 0 Z" fill="#1a1c1a" opacity="0.8" />
        <path d="M560 0 Q720 160 880 0" fill="rgba(255,198,0,0.04)" />
        {/* Tent center pole drape */}
        <line x1="720" y1="0" x2="720" y2="220" stroke="#FFC600" strokeWidth="1.5" opacity="0.3" />
        {/* Ornamental tassels */}
        {[620, 670, 720, 770, 820].map((x, i) => (
          <g key={i}>
            <circle cx={x} cy={160 + Math.sin((i / 4) * Math.PI) * 30} r="4" fill="#FFC600" opacity="0.35" />
            <line
              x1={x} y1={160 + Math.sin((i / 4) * Math.PI) * 30 + 4}
              x2={x} y2={160 + Math.sin((i / 4) * Math.PI) * 30 + 18}
              stroke="#FFC600" strokeWidth="1" opacity="0.25"
            />
          </g>
        ))}
        {/* Tent side poles */}
        <line x1="560" y1="0" x2="520" y2="340" stroke="#FFC600" strokeWidth="2" opacity="0.3" />
        <line x1="880" y1="0" x2="920" y2="340" stroke="#FFC600" strokeWidth="2" opacity="0.3" />
        <line x1="440" y1="0" x2="420" y2="280" stroke="#FFC600" strokeWidth="1.5" opacity="0.2" />
        <line x1="1000" y1="0" x2="1020" y2="280" stroke="#FFC600" strokeWidth="1.5" opacity="0.2" />

        {/* ── Central campfire ── */}
        {/* Ground circle */}
        <ellipse cx="720" cy="680" rx="80" ry="22" fill="rgba(255,198,0,0.05)" />
        {/* Log base */}
        <ellipse cx="720" cy="688" rx="38" ry="8" fill="#2C1A10" opacity="0.9" />
        <line x1="684" y1="688" x2="756" y2="688" stroke="#1A0C08" strokeWidth="8" strokeLinecap="round" opacity="0.7" />
        <line x1="698" y1="680" x2="742" y2="696" stroke="#1A0C08" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
        {/* Fire flames */}
        <path d="M710 688 Q712 660 720 640 Q728 660 730 688 Z" fill="#FFC600" opacity="0.8" />
        <path d="M714 688 Q715 655 720 635 Q725 655 726 688 Z" fill="#FFD740" opacity="0.7" />
        <path d="M706 688 Q709 668 716 652 Q720 668 718 688 Z" fill="#FF8C00" opacity="0.6" />
        <path d="M722 688 Q726 666 724 650 Q730 668 734 688 Z" fill="#FF8C00" opacity="0.6" />
        {/* Fire glow ring */}
        <ellipse cx="720" cy="675" rx="55" ry="35" fill="rgba(255,198,0,0.06)" />
        <ellipse cx="720" cy="675" rx="80" ry="50" fill="rgba(255,198,0,0.03)" />

        {/* ── Map table / war council table ── */}
        <rect x="580" y="710" width="280" height="6" rx="3" fill="#3D2810" opacity="0.8" />
        <rect x="600" y="716" width="240" height="50" rx="4" fill="#2A1D0E" opacity="0.7" />
        {/* Map parchment */}
        <rect x="615" y="718" width="210" height="45" rx="2" fill="rgba(255,198,0,0.06)" stroke="rgba(255,198,0,0.15)" strokeWidth="0.5" />
        {/* Map grid lines */}
        {[630, 650, 670, 690, 710, 730, 750, 770, 790, 810].map((x, i) => (
          <line key={`vg-${i}`} x1={x} y1="718" x2={x} y2="763" stroke="#FFC600" strokeWidth="0.4" opacity="0.2" />
        ))}
        {[728, 740, 752].map((y, i) => (
          <line key={`hg-${i}`} x1="615" y1={y} x2="825" y2={y} stroke="#FFC600" strokeWidth="0.4" opacity="0.2" />
        ))}
        {/* Map X markers */}
        <text x="640" y="735" fill="#FFC600" fontSize="8" opacity="0.4">✕</text>
        <text x="700" y="730" fill="#FFC600" fontSize="6" opacity="0.35">✕</text>
        <text x="780" y="738" fill="#FFC600" fontSize="7" opacity="0.4">✕</text>
        {/* Table legs */}
        <rect x="608" y="766" width="8" height="30" rx="2" fill="#2A1D0E" opacity="0.6" />
        <rect x="824" y="766" width="8" height="30" rx="2" fill="#2A1D0E" opacity="0.6" />

        {/* ── Warrior silhouettes around the fire ── */}
        {/* Left warrior — standing, holding spear */}
        <g transform="translate(480, 580)" opacity="0.75">
          <circle cx="22" cy="0" r="14" fill="#1e201e" />
          <path d="M10 14 Q22 22 34 14 L38 80 L6 80 Z" fill="#1e201e" />
          {/* Turban/helmet */}
          <path d="M8 -2 Q22 -18 36 -2 Q38 8 22 10 Q6 8 8 -2 Z" fill="#222422" />
          {/* Spear */}
          <line x1="40" y1="-40" x2="40" y2="90" stroke="#FFC600" strokeWidth="2" opacity="0.6" />
          <polygon points="40,-40 36,-25 44,-25" fill="#FFC600" opacity="0.7" />
          {/* Cape */}
          <path d="M8 14 Q0 50 4 80 L6 80 Z" fill="#222422" />
        </g>

        {/* Left-center warrior — seated, cross-legged */}
        <g transform="translate(570, 650)" opacity="0.7">
          <circle cx="22" cy="0" r="12" fill="#1e201e" />
          <path d="M10 12 Q22 18 34 12 L36 55 L8 55 Z" fill="#1e201e" />
          {/* Turban */}
          <ellipse cx="22" cy="-6" rx="16" ry="8" fill="#252725" />
          {/* Seated legs */}
          <path d="M8 55 Q14 70 8 80 L34 80 Q28 70 36 55 Z" fill="#1e201e" />
          {/* Arm reaching to table */}
          <path d="M34 30 Q60 40 80 45" stroke="#1e201e" strokeWidth="10" strokeLinecap="round" fill="none" />
        </g>

        {/* Right-center warrior — seated, gesturing */}
        <g transform="translate(830, 650)" opacity="0.7">
          <circle cx="22" cy="0" r="12" fill="#1e201e" />
          <path d="M10 12 Q22 18 34 12 L36 55 L8 55 Z" fill="#1e201e" />
          {/* Helmet */}
          <path d="M6 -2 Q22 -20 38 -2 Q40 10 22 12 Q4 10 6 -2 Z" fill="#222422" />
          {/* Seated legs */}
          <path d="M8 55 Q14 70 8 80 L34 80 Q28 70 36 55 Z" fill="#1e201e" />
          {/* Arm pointing */}
          <path d="M8 30 Q-10 35 -30 32" stroke="#1e201e" strokeWidth="9" strokeLinecap="round" fill="none" />
        </g>

        {/* Right warrior — standing with shield */}
        <g transform="translate(920, 575)" opacity="0.75">
          <circle cx="22" cy="0" r="14" fill="#1e201e" />
          <path d="M10 14 Q22 22 34 14 L38 80 L6 80 Z" fill="#1e201e" />
          {/* Ottoman-style turban */}
          <path d="M6 -4 Q22 -22 38 -4 Q42 10 22 12 Q2 10 6 -4 Z" fill="#252725" />
          {/* Shield */}
          <path d="M-14 10 Q-22 0 -16 -15 Q-8 -20 -14 10 Z" fill="#222422" stroke="#FFC600" strokeWidth="1" opacity="0.7" />
          <circle cx="-16" cy="-2" r="3" fill="#FFC600" opacity="0.4" />
          {/* Spear */}
          <line x1="40" y1="-50" x2="36" y2="90" stroke="#FFC600" strokeWidth="1.5" opacity="0.5" />
        </g>

        {/* Far-left standing warrior */}
        <g transform="translate(300, 520)" opacity="0.5">
          <circle cx="20" cy="0" r="12" fill="#1e201e" />
          <path d="M8 12 Q20 20 32 12 L34 75 L6 75 Z" fill="#1e201e" />
          <path d="M6 -2 Q20 -18 34 -2 Q36 8 20 10 Q4 8 6 -2 Z" fill="#252725" />
          <line x1="36" y1="-55" x2="36" y2="85" stroke="#FFC600" strokeWidth="1.5" opacity="0.4" />
          <polygon points="36,-55 32,-38 40,-38" fill="#FFC600" opacity="0.5" />
        </g>

        {/* Far-right standing warrior */}
        <g transform="translate(1110, 520)" opacity="0.5">
          <circle cx="20" cy="0" r="12" fill="#1e201e" />
          <path d="M8 12 Q20 20 32 12 L34 75 L6 75 Z" fill="#1e201e" />
          <path d="M6 -2 Q20 -18 34 -2 Q36 8 20 10 Q4 8 6 -2 Z" fill="#252725" />
          <line x1="4" y1="-55" x2="4" y2="85" stroke="#FFC600" strokeWidth="1.5" opacity="0.4" />
          <polygon points="4,-55 0,-38 8,-38" fill="#FFC600" opacity="0.5" />
        </g>

        {/* ── Torches on sides ── */}
        {/* Left torch */}
        <g transform="translate(170, 420)">
          <rect x="8" y="40" width="6" height="60" rx="2" fill="#2C1A10" opacity="0.8" />
          <rect x="4" y="28" width="14" height="18" rx="3" fill="#1A0C08" opacity="0.9" />
          <path d="M6 28 Q11 10 11 0 Q17 12 16 28 Z" fill="#FFC600" opacity="0.7" />
          <path d="M8 28 Q11 8 11 -2 Q15 10 14 28 Z" fill="#FFD740" opacity="0.6" />
          <ellipse cx="11" cy="26" rx="10" ry="14" fill="rgba(255,198,0,0.06)" />
        </g>
        {/* Right torch */}
        <g transform="translate(1258, 420)">
          <rect x="8" y="40" width="6" height="60" rx="2" fill="#2C1A10" opacity="0.8" />
          <rect x="4" y="28" width="14" height="18" rx="3" fill="#1A0C08" opacity="0.9" />
          <path d="M6 28 Q11 10 11 0 Q17 12 16 28 Z" fill="#FFC600" opacity="0.7" />
          <path d="M8 28 Q11 8 11 -2 Q15 10 14 28 Z" fill="#FFD740" opacity="0.6" />
          <ellipse cx="11" cy="26" rx="10" ry="14" fill="rgba(255,198,0,0.06)" />
        </g>

        {/* ── Hanging lanterns ── */}
        <g transform="translate(340, 180)">
          <line x1="10" y1="0" x2="10" y2="20" stroke="#FFC600" strokeWidth="1" opacity="0.35" />
          <path d="M4 20 Q10 50 4 55 Q10 58 16 55 Q10 50 16 20 Z" fill="#1e201e" stroke="#FFC600" strokeWidth="0.8" opacity="0.5" />
          <ellipse cx="10" cy="37" rx="4" ry="3" fill="#FFC600" opacity="0.25" />
        </g>
        <g transform="translate(1080, 180)">
          <line x1="10" y1="0" x2="10" y2="20" stroke="#FFC600" strokeWidth="1" opacity="0.35" />
          <path d="M4 20 Q10 50 4 55 Q10 58 16 55 Q10 50 16 20 Z" fill="#1e201e" stroke="#FFC600" strokeWidth="0.8" opacity="0.5" />
          <ellipse cx="10" cy="37" rx="4" ry="3" fill="#FFC600" opacity="0.25" />
        </g>

        {/* ── Decorative sword cross at center top ── */}
        <g transform="translate(680, 300)" opacity="0.3">
          <line x1="40" y1="0" x2="0" y2="80" stroke="#FFC600" strokeWidth="2" />
          <line x1="0" y1="0" x2="40" y2="80" stroke="#FFC600" strokeWidth="2" />
          <circle cx="20" cy="40" r="5" fill="#FFC600" />
          <line x1="10" y1="18" x2="30" y2="18" stroke="#FFC600" strokeWidth="2.5" />
          <line x1="10" y1="62" x2="30" y2="62" stroke="#FFC600" strokeWidth="2.5" />
        </g>

        {/* ── Decorative corner ornaments ── */}
        {/* Top-left */}
        <path d="M0 0 L120 0 L0 120 Z" fill="rgba(255,198,0,0.03)" />
        <path d="M0 0 L80 0" stroke="#FFC600" strokeWidth="1.5" opacity="0.3" />
        <path d="M0 0 L0 80" stroke="#FFC600" strokeWidth="1.5" opacity="0.3" />
        <circle cx="0" cy="0" r="40" fill="none" stroke="#FFC600" strokeWidth="0.8" opacity="0.15" />
        {/* Top-right */}
        <path d="M1440 0 L1320 0 L1440 120 Z" fill="rgba(255,198,0,0.03)" />
        <path d="M1440 0 L1360 0" stroke="#FFC600" strokeWidth="1.5" opacity="0.3" />
        <path d="M1440 0 L1440 80" stroke="#FFC600" strokeWidth="1.5" opacity="0.3" />
        <circle cx="1440" cy="0" r="40" fill="none" stroke="#FFC600" strokeWidth="0.8" opacity="0.15" />

        {/* ── Stars / night sky dots ── */}
        {[
          [200, 80], [350, 140], [500, 60], [820, 100], [950, 50], [1100, 120], [1300, 75],
          [150, 200], [1350, 180], [250, 300], [1200, 260],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 2 : 1.2} fill="#FFC600" opacity={i % 3 === 0 ? 0.3 : 0.18} />
        ))}

        {/* ── Ottoman crescent moon ── */}
        <path d="M1370 80 Q1385 60 1400 80 Q1387 90 1370 80 Z" fill="#FFC600" opacity="0.25" />
        <circle cx="1392" cy="68" r="12" fill="#181A18" opacity="0.9" />
      </svg>
    </div>
  );
}

/* ─────────────────────────────────────────────
   3-D Warrior Particle Canvas Background
───────────────────────────────────────────── */
function WarriorParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
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

    const embers: Ember[] = Array.from({ length: 70 }, () => makeEmber(true));
    let gridOff = 0;

    const draw = () => {
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      gridOff = (gridOff + 0.25) % 1;

      /* Subtle perspective grid */
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
        ctx.globalAlpha = 0.025 + t * 0.04;
        ctx.beginPath(); ctx.moveTo(vpX - hw, y); ctx.lineTo(vpX + hw, y); ctx.stroke();
      }
      ctx.globalAlpha = 0.025;
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
        const alpha = (e.life / e.maxLife) * persp * 0.9;
        const r = Math.max(0.2, e.size * persp);
        ctx.save();
        ctx.globalAlpha = alpha;
        ctx.fillStyle = `hsl(${e.hue}, 100%, 65%)`;
        ctx.shadowBlur = r * 6;
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

      {/* Base dark background */}
      <div className="absolute inset-0 bg-warrior-black" style={{ zIndex: 0 }} />

      {/* War Council Illustrated SVG background */}
      <WarCouncilBackground />

      {/* 3-D ember particles */}
      <WarriorParticles />

      {/* Tribal pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 3, backgroundImage: "url('/images/tribal-bg.svg')", backgroundSize: "300px 300px", opacity: 0.05 }}
      />

      {/* Radial yellow glow from center */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 3 }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,198,0,0.07) 0%, rgba(255,198,0,0.02) 45%, transparent 70%)" }}
        />
      </div>

      {/* Bottom vignette */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ zIndex: 3, background: "linear-gradient(to bottom, transparent, #181A18)" }}
      />

      {/* ── Page Content ── */}
      <div className="relative w-full max-w-6xl mx-auto px-6 lg:px-8 flex flex-col items-center gap-7 py-16" style={{ zIndex: 10 }}>

        {/* Limited seats badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-2 bg-mdcat-yellow/10 border border-mdcat-yellow/30 rounded-full px-5 py-2"
        >
          <Users size={14} className="text-mdcat-yellow" />
          <span className="text-mdcat-yellow text-xs font-inter font-bold uppercase tracking-widest">
            Limited to 100 Warriors per Season
          </span>
        </motion.div>

        {/* Main headline — medium size */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-inter font-black text-gradient-yellow leading-tight"
          style={{ fontSize: "clamp(1.9rem, 4.5vw, 3.5rem)", letterSpacing: "-0.025em" }}
        >
          MDCAT is a War,
          <br />
          Train Like a Warrior!
        </motion.h1>

        {/* Sub-tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-warrior-text text-base lg:text-lg max-w-xl leading-relaxed font-inter font-light"
        >
          Join the tribe, get a Veteran coach, and train with a system built to take you into a medical college.
        </motion.p>

        {/* ═══════════════════════════════
            INLINE YOUTUBE VIDEO — full width
        ═══════════════════════════════ */}
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
              border: "1px solid rgba(255,198,0,0.3)",
              boxShadow: "0 0 0 1px rgba(255,198,0,0.08), 0 0 90px rgba(255,198,0,0.18), 0 40px 100px rgba(0,0,0,0.7)",
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
          <p className="mt-3 text-warrior-text text-sm font-inter font-medium text-center opacity-50 tracking-wide">
            ▶ Watch: The Study Tribe System Explained
          </p>
        </motion.div>

        {/* ═══════════════════════════════
            SINGLE CTA (below video)
        ═══════════════════════════════ */}
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
            Become a Warrior
          </a>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="flex flex-col items-center gap-2 mt-2"
        >
          <span className="text-warrior-text text-xs uppercase tracking-widest font-inter">Scroll to continue</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
            <ChevronDown size={20} className="text-mdcat-yellow opacity-60" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
