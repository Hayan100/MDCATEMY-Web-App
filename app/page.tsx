import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import WhatIsStudyTribe from "@/components/sections/WhatIsStudyTribe";
import Pricing from "@/components/sections/Pricing";
import Guarantee from "@/components/sections/Guarantee";
import Scholarship from "@/components/sections/Scholarship";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-page-warm">
      <Navbar />

      {/* 1. Hero — Headline → Video → CTA */}
      <Hero />

      {/* 2. What Is the Study Tribe — Problem + Solution + Full Breakdown */}
      <WhatIsStudyTribe />

      {/* 5. Pricing — Join Our Study Tribe */}
      <Pricing />

      {/* 6. Money-Back Guarantee */}
      <Guarantee />

      {/* 7. Scholarship */}
      <Scholarship />

      {/* 8. FAQ */}
      <FAQ />

      {/* 9. Contact */}
      <Contact />

      <Footer />
    </main>
  );
}
