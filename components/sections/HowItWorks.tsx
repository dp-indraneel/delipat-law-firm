import { AnimatedSection } from "@/components/AnimatedSection";
import HowItWorksTimeline from "@/components/HowItWorksTimeline";
import RevealBlock from "@/components/RevealBlock";
import { Container, Eyebrow, sectionHeading, sectionPadding } from "./shared";

export default function HowItWorks() {
  return (
    <AnimatedSection id="process" className={`relative isolate overflow-hidden bg-[#FAF6EC] ${sectionPadding}`}>
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_22%,rgba(10,22,40,0.03),transparent_28%),radial-gradient(circle_at_78%_36%,rgba(201,168,76,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.45),rgba(250,250,250,0.96))]" />
      <Container>
        <RevealBlock className="mx-auto max-w-3xl text-center">
          <Eyebrow>How It Works</Eyebrow>
          <h2 className={sectionHeading}>From first inquiry to signed case — without the gaps.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] font-medium leading-[1.7] tracking-[-0.01em] text-[#4A5568] sm:text-[17px] md:text-[18px]">
            Four simple steps. Every lead gets handled, followed up, and tracked.
          </p>
        </RevealBlock>
        <div className="mt-12 sm:mt-14 md:mt-16">
          <HowItWorksTimeline />
        </div>
      </Container>
    </AnimatedSection>
  );
}
