import { AnimatedSection } from "@/components/AnimatedSection";
import MathCalculator from "@/components/Interactive";
import RevealBlock from "@/components/RevealBlock";
import { Container, darkSectionHeading, sectionPadding } from "./shared";

export default function MathSection() {
  return (
    <AnimatedSection id="calculator" className={`relative isolate overflow-hidden bg-[#0A1628] ${sectionPadding}`}>
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-[-20%] h-[500px] w-[500px] animate-blob1 rounded-full bg-[#9a7b24]/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] animate-blob2 rounded-full bg-[#fcb61f]/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <Container>
        <RevealBlock className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/80">Run Your Numbers</p>
          <h2 className={darkSectionHeading}>Most PI firms don’t lose cases. They leak them.</h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-[1.7] tracking-[-0.005em] text-white/70">Run your own numbers below. We’ve pre-filled realistic defaults based on PI intake patterns.</p>
        </RevealBlock>
        <RevealBlock delay={0.08}>
          <MathCalculator />
        </RevealBlock>
      </Container>
    </AnimatedSection>
  );
}
