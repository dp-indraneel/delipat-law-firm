import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import RealityCheck from "@/components/sections/RealityCheck";
import InvisibleLeak from "@/components/sections/InvisibleLeak";
import MathSection from "@/components/sections/MathSection";
import FounderNoteSection from "@/components/sections/FounderNoteSection";
import Reframe from "@/components/sections/Reframe";
import Solution from "@/components/sections/Solution";
import HowItWorks from "@/components/sections/HowItWorks";
import Proof from "@/components/sections/Proof";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main id="top" className="overflow-x-hidden bg-[#FAFAFA] text-[#0A1628]">
      <Navbar />
      <Hero />
      <RealityCheck />
      <InvisibleLeak />
      <MathSection />
      <FounderNoteSection />
      <Reframe />
      {/* <Solution /> */}
      <HowItWorks />
      <Proof />
      <FAQSection />
      {/* <WhoThisIsFor /> */}
      <FinalCTA />
      <Footer />
    </main>
  );
}
