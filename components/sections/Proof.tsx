import { Fragment } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import ProofCountNumber from "@/components/ProofCountNumber";
import RevealBlock from "@/components/RevealBlock";
import { Container, sectionPadding } from "./shared";

const stats = [
  {
    value: "42%",
    text: "Average inbound calls a PI firm misses in the first 90 days we work with them. Almost all of it after-hours and weekends.",
  },
  {
    value: "$31K",
    text: "verage monthly leak we find in firms running $20K+/month in paid acquisition. Lead spend wasted plus expected case fees lost.",
  },
  {
    value: "18 → 34%",
    text: "Average intake conversion rate we’ve seen move from baseline to post-implementation in the first six months.",
  },
] as const;

export default function Proof() {
  return (
    <AnimatedSection id="proof" className={`relative isolate overflow-hidden bg-[#ffffff] ${sectionPadding}`}>
      <Container>
        <RevealBlock className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#9A7B24]">WHAT WE’VE SEEN</p>
          <h2 className="mt-4 font-heading text-[30px] font-bold leading-[1.08] tracking-[-0.05em] text-[#0A1628] sm:text-[40px] md:text-[48px]">
            Patterns from the last twelve months.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] font-medium leading-[1.7] tracking-[-0.01em] text-[#4A5568] sm:text-[17px] md:text-[18px]">
           We don’t have a wall of logos yet. We do have data from every PI firm we’ve audited so far.
          </p>
        </RevealBlock>

        <div className="mx-auto mt-14 grid max-w-6xl md:mt-18 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
          {stats.map((stat, index) => (
            <Fragment key={stat.value}>
              <RevealBlock
                delay={0.14 + index * 0.1}
                className="mx-auto flex min-h-[236px] max-w-[320px] flex-col items-center justify-start px-4 py-9 text-center md:min-h-[280px] md:px-8 md:py-0"
              >
                <p className="font-heading text-[36px] font-bold leading-none tracking-[-0.04em] text-[#0A1628] sm:text-[42px]">
                  <span className="bg-[linear-gradient(180deg,#0A1628_22%,#B28A27_140%)] bg-clip-text text-transparent">
                    <ProofCountNumber value={stat.value} />
                  </span>
                </p>
                <div className="mt-4 h-px w-10 bg-[#C9A84C]" />
                <p className="mt-[44px] max-w-[280px] text-[15px] font-medium leading-[1.75] tracking-[-0.01em] text-[#0A1628]/68 sm:text-[16px]">
                  {stat.text}
                </p>
              </RevealBlock>
              {index < stats.length - 1 ? (
                <div className="mx-auto h-px w-24 bg-[rgba(10,22,40,0.1)] md:h-[140px] md:w-px" />
              ) : null}
            </Fragment>
          ))}
        </div>

        <RevealBlock delay={0.5} className="mx-auto mt-12 max-w-3xl text-center">
          <p className="text-[12px] font-medium leading-6 tracking-[0.02em] text-[#0A1628]/48">
            Aggregated across our PI audit and engagement work to date. Sample sizes vary by metric. We’ll show you the underlying breakdown on the call.
          </p>
        </RevealBlock>
      </Container>
    </AnimatedSection>
  );
}
