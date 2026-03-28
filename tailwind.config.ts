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
        // Dark elements (buttons, dashboard mockup, footer accents)
        "warrior-black": "#181A18",
        "dark-charcoal": "#222422",
        // Accent
        "mdcat-yellow": "#FFC600",
        "mdcat-yellow-dark": "#E6B200",
        // Light theme surface & text tokens
        "warrior-gray": "#F3F4F6",
        "warrior-text": "#6B7280",
        "warrior-border": "#E5E7EB",
        // Page background warm palette
        "page-warm": "#F0F0F0",
        "page-warm-alt": "#E8E8E8",
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
          "50%": { boxShadow: "0 0 24px 8px rgba(255, 198, 0, 0.3)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "tribal-pattern": "url('/images/tribal-bg.svg')",
        "gradient-warrior": "linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
