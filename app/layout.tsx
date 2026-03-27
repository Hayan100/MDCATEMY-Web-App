import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MDCATEMY | Train Like a Warrior. Score Like a Legend.",
  description:
    "Join the Study Tribe — Pakistan's most intensive MDCAT preparation system. Veteran coaching, personalized plans, and the accountability system built to get you into a medical college.",
  keywords: ["MDCAT", "MDCAT preparation", "Study Tribe", "MDCATEMY", "medical college Pakistan"],
  openGraph: {
    title: "MDCATEMY | MDCAT is a War. Prepare Like a Warrior.",
    description:
      "Join the Study Tribe — the only MDCAT prep system that pairs you with a Veteran coach, a family of 5, and a daily accountability system.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-warrior-black text-white font-inter antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
