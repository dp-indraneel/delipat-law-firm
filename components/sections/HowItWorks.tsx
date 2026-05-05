import { AnimatedSection } from "@/components/AnimatedSection";
import HowItWorksTimeline from "@/components/HowItWorksTimeline";
import RevealBlock from "@/components/RevealBlock";
import { Container, Eyebrow, sectionHeading, sectionPadding, sectionSubheading } from "./shared";

export default function HowItWorks() {
  return (
    <AnimatedSection id="process" className={`relative isolate overflow-hidden bg-[#FAF6EC] ${sectionPadding}`}>
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_22%,rgba(10,22,40,0.03),transparent_28%),radial-gradient(circle_at_78%_36%,rgba(201,168,76,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.45),rgba(250,250,250,0.96))]" />
      <Container>
        <RevealBlock className="mx-auto max-w-[768px] text-center">
          <Eyebrow>WHAT THE FIX LOOKS LIKE</Eyebrow>
          <h2 className={sectionHeading}>Four moving parts. Built into one system your team actually uses.</h2>
          <p className={sectionSubheading}>
            We work inside the case management tools you already pay for. Filevine, Litify, CASEpeer, MyCase, Clio. Salesforce sits on top, handling the intake and pipeline layer.
          </p>
        </RevealBlock>
        <div className="mt-12 sm:mt-14 md:mt-16">
          <HowItWorksTimeline />
        </div>
      </Container>
    </AnimatedSection>
  );
}
