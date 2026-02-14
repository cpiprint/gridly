import { Comparison } from "@/features/landing/Comparison";
import { FAQ } from "@/features/landing/FAQ";
import { Features } from "@/features/landing/Features";
import { Footer } from "@/features/landing/Footer";
import { Header } from "@/features/landing/Header";
import { Hero } from "@/features/landing/Hero";
import Pricing from "@/features/landing/Pricing";

export default function Home() {
/* AVAILBLE SECTIONS 
<Highlights />
<Features />
<Pricing />
<Comparison />
<FAQ />
<Footer />
*/
  return (
    <main className="min-h-screen bg-background ">
      <Header />
      <Hero />

      <Features />
      <Pricing />
      <Comparison />
      <FAQ />
      <Footer />
    </main>
  );
}
