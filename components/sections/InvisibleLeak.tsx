/* eslint-disable react/no-unescaped-entities */
import AIIntakePhone from "@/components/AIIntakePhone";
import { AnimatedSection } from "@/components/AnimatedSection";
import RevealBlock from "@/components/RevealBlock";
import { bodyText, Container, Eyebrow, sectionGap, sectionHeading, sectionPadding } from "./shared";

export default function InvisibleLeak() {
  return (
    <AnimatedSection className={`bg-[#ffffff] ${sectionPadding}`}>
      <Container className={`grid items-center ${sectionGap} lg:grid-cols-[0.95fr_1.05fr]`}>
        <RevealBlock>
          <AIIntakePhone />
        </RevealBlock>
        <div>
          <RevealBlock>
            <Eyebrow>WHERE THE LEAK ACTUALLY HAPPENS</Eyebrow>
            <h2 className={sectionHeading}>You're not losing cases at the top of the funnel.</h2>
          </RevealBlock>
          <div className={`mt-7 max-w-xl space-y-5 ${bodyText}`}>
            <RevealBlock delay={0.08}><p>Paid acquisition gets the lead to your door. Intake decides whether that lead becomes a signed case.</p></RevealBlock>
            <RevealBlock delay={0.16}><p>The problem is not always lead quality. It is delayed response, inconsistent follow-up, and no clear visibility into what happened after the inquiry arrived.</p></RevealBlock>
            <RevealBlock delay={0.24}><p>By the time your team checks the missed call, the prospect may already be speaking with another firm.</p></RevealBlock>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
