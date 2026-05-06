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
import EmailCapturePopup from "@/components/EmailCapturePopup";

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://intake.delipat.com/#organization",
      name: "Delipat",
      url: "https://intake.delipat.com",
      logo: "https://intake.delipat.com/logo.avif",
      email: "connect@delipat.com",
      sameAs: [
        "https://www.linkedin.com/company/delipatit/posts/?feedView=all",
        "https://www.linkedin.com/in/growbusinesswithrajesh/",
      ],
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": "https://intake.delipat.com/#pi-intake-audit",
      name: "PI Firm Intake audit",
      serviceType: "Personal injury law firm intake and CRM systems",
      provider: {
        "@id": "https://intake.delipat.com/#organization",
      },
      areaServed: {
        "@type": "Country",
        name: "United States",
      },
      audience: {
        "@type": "Audience",
        audienceType: "Personal injury law firms",
      },
      description:
        "A 30-minute audit that identifies missed-call, follow-up, pipeline, and reporting leaks in personal injury firm intake systems.",
      offers: {
        "@type": "Offer",
        url: "https://calendly.com/rajesh-chatterjee/30min",
        availability: "https://schema.org/InStock",
        price: "0",
        priceCurrency: "USD",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://intake.delipat.com/#website",
      name: "Delipat",
      url: "https://intake.delipat.com",
      publisher: {
        "@id": "https://intake.delipat.com/#organization",
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <main id="top" className="overflow-x-hidden bg-[#FAFAFA] text-[#0A1628]">
        <Navbar />
        <Hero />
        <RealityCheck />
        <InvisibleLeak />
        <MathSection />
        <FounderNoteSection />
        <Reframe />
        <Solution />
        
        <Proof />
        <FAQSection />
        {/* <WhoThisIsFor /> */}
        <FinalCTA />
        <Footer />
      </main>
      <EmailCapturePopup />
    </>
  );
}
