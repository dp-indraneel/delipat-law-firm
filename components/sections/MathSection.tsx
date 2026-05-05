import { AnimatedSection } from "@/components/AnimatedSection";
import MathCalculator from "@/components/Interactive";
import RevealBlock from "@/components/RevealBlock";
import { Container, sectionPadding } from "./shared";

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
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#9A7B24]">Run Your Numbers</p>
          <h2 className="mt-4 font-heading text-[24px] font-bold leading-[1.06] tracking-[-0.05em] text-[#0A1628] sm:text-[36px] md:text-[42px]">
            Most PI firms don’t lose cases. They leak them.
          </h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-[1.7] tracking-[-0.005em] text-[#4A5568]">
            Run your own numbers below. We’ve pre-filled realistic defaults based on PI intake patterns.
          </p>
        </RevealBlock>
        <RevealBlock delay={0.08}>
          <MathCalculator />
        </RevealBlock>
      </Container>
    </AnimatedSection>
  );
}
