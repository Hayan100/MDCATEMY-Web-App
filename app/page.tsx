import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import FearArticle from "@/components/sections/FearArticle";
import TopperAndStars from "@/components/sections/TopperAndStars";
import AceCourse from "@/components/sections/AceCourse";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Guarantee from "@/components/sections/Guarantee";
import Scholarship from "@/components/sections/Scholarship";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-warrior-black">
      <Navbar />

      {/* 1. Hero — Headline → Inline Video → CTA */}
      <Hero />

      {/* 2. Social Proof — Moving testimonials from last year's emergency setup */}
      <SocialProof />

      {/* 3. Fear Article — The #1 reason smart students fail MDCAT */}
      <FearArticle />

      {/* 4+5. Topper + Shining Stars — Nasrin & all top scorers from 2025 */}
      <TopperAndStars />

      {/* 6. Ace MDCAT Like a Warrior — Live weekly course */}
      <AceCourse />

      {/* 7. Pricing — Join Our Study Tribe */}
      <Pricing />

      {/* 8. FAQ */}
      <FAQ />

      {/* 9. Money-Back Guarantee */}
      <Guarantee />

      {/* 10. Scholarship */}
      <Scholarship />

      {/* 10. Contact */}
      <Contact />

      <Footer />
    </main>
  );
}
