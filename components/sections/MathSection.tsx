import { AnimatedSection } from "@/components/AnimatedSection";
import MathCalculator from "@/components/Interactive";
import RevealBlock from "@/components/RevealBlock";
import { Container, sectionHeading, sectionPadding, sectionSubheading } from "./shared";

export default function MathSection() {
  return (
    <AnimatedSection id="calculator" className={`relative isolate overflow-hidden bg-[#ffffff] ${sectionPadding}`}>
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#ffffff,rgba(255,255,255,0.92)_48%,#ffffff)]" />
        <div className="absolute left-[-10%] top-[-20%] h-[500px] w-[500px] animate-blob1 rounded-full bg-[#C9A84C]/16 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] animate-blob2 rounded-full bg-[#F3DE91]/24 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,22,40,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(10,22,40,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <Container>
        <RevealBlock className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9A7B24]">RUN YOUR NUMBERS</p>
          <h2 className={sectionHeading}>Most PI firms don’t lose cases. They leak them.</h2>
          <p className={sectionSubheading}>
            Run your own numbers below. We’ve pre-filled defaults from real PI intake patterns.
          </p>
        </RevealBlock>
        <RevealBlock delay={0.08}>
          <MathCalculator />
        </RevealBlock>
      </Container>
    </AnimatedSection>
  );
}
