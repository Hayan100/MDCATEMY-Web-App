import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "warrior-black": "#181A18",
        "dark-charcoal": "#222422",
        "mdcat-yellow": "#FFC600",
        "mdcat-yellow-dark": "#E6B200",
        "warrior-gray": "#2A2C2A",
        "warrior-text": "#A8ACA8",
        "warrior-border": "#2E302E",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "hero-xl": ["clamp(2.5rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "section-xl": ["clamp(1.8rem, 4vw, 3rem)", { lineHeight: "1.1" }],
      },
      animation: {
        marquee: "marquee 35s linear infinite",
        "marquee-reverse": "marquee-reverse 35s linear infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(255, 198, 0, 0)" },
          "50%": { boxShadow: "0 0 24px 8px rgba(255, 198, 0, 0.25)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "tribal-pattern": "url('/images/tribal-bg.svg')",
        "gradient-warrior": "linear-gradient(180deg, #181A18 0%, #222422 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
