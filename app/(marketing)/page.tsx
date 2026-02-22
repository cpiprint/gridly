import { Comparison } from "@/features/landing/Comparison";
import { FAQ } from "@/features/landing/FAQ";
import { Features } from "@/features/landing/Features";
import { FeatureShowcase } from "@/features/landing/FeatureShowcase";
import { Footer } from "@/features/landing/Footer";
import { Header } from "@/features/landing/Header";
import { Hero } from "@/features/landing/Hero";
import Pricing from "@/features/landing/Pricing";

// ─── Alternative feature layout ──────────────────────
// Swap <FeatureShowcase /> for <Highlights /> below for a zigzag layout.
// Config lives in landingConfig.highlights (separate from features).
// import { Highlights } from "@/features/landing/Highlights";

export default function Home() {
  return (
    <main className="min-h-screen bg-background ">
      <Header />
      <Hero />
      <FeatureShowcase />
      {/* Or use <Highlights /> for a zigzag editorial layout */}
      <Features />
      <Pricing />
      <Comparison />
      <FAQ />
      <Footer />
    </main>
  );
}
