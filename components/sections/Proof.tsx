import { Fragment } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";
import ProofCountNumber from "@/components/ProofCountNumber";
import RevealBlock from "@/components/RevealBlock";
import { Container, sectionHeading, sectionPadding, sectionSubheading } from "./shared";

const stats = [
  {
    value: "42%",
    text: "Average inbound calls a PI firm misses in the first 90 days we work with them. Almost all of it after-hours and weekends.",
  },
  {
    value: "$31K",
    text: "Average monthly leak we find in firms running $20K+/month in paid acquisition. Lead spend wasted plus expected case fees lost.",
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
        <RevealBlock className="mx-auto max-w-[1024px] text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#9A7B24]">WHAT WE’VE SEEN</p>
          <h2 className={sectionHeading}>Patterns from the last twelve months.</h2>
          <p className={sectionSubheading}>
            We don’t have a wall of logos yet. We do have data from every PI firm we’ve audited so far.
          </p>
        </RevealBlock>

        <div className="mx-auto mt-14 grid max-w-6xl md:mt-18 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
          {stats.map((stat, index) => {
            const isFeatured = index === 2;

            return (
              <Fragment key={stat.value}>
                <RevealBlock
                  delay={0.14 + index * 0.1}
                  className={`relative mx-auto flex min-h-[236px] w-full max-w-[320px] flex-col items-center justify-start overflow-hidden rounded-[30px] px-4 py-9 text-center transition-transform duration-300 md:min-h-[280px] md:px-8 md:py-10 ${
                    isFeatured
                      ? "border border-[#C9A84C]/30 bg-[linear-gradient(180deg,rgba(10,22,40,0.98),rgba(16,33,57,0.94))] shadow-[0_30px_80px_rgba(10,22,40,0.18)] md:-translate-y-3"
                      : "border border-transparent bg-transparent"
                  }`}
                >
                  {isFeatured ? (
                    <>
                      <div className="pointer-events-none absolute inset-x-10 top-0 h-24 rounded-full bg-[#D4AF4A]/20 blur-3xl" />
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_50%)]" />
                    </>
                  ) : null}
                  <p
                    className={`relative font-heading text-[36px] font-bold leading-none tracking-[-0.04em] sm:text-[42px] ${
                      isFeatured ? "text-white" : "text-[#0A1628]"
                    }`}
                  >
                    <span
                      className={`bg-clip-text text-transparent ${
                        isFeatured
                          ? "bg-[linear-gradient(180deg,#FFF8D8_8%,#D8A93B_140%)]"
                          : "bg-[linear-gradient(180deg,#0A1628_22%,#B28A27_140%)]"
                      }`}
                    >
                      <ProofCountNumber value={stat.value} />
                    </span>
                  </p>
                  <div className={`mt-4 h-px w-10 ${isFeatured ? "bg-[#E2C56A]" : "bg-[#C9A84C]"}`} />
                  <p
                    className={`relative mt-[44px] max-w-[280px] text-[15px] font-medium leading-[1.75] tracking-[-0.01em] sm:text-[16px] ${
                      isFeatured ? "text-white/78" : "text-[#0A1628]/68"
                    }`}
                  >
                    {stat.text}
                  </p>
                </RevealBlock>
                {index < stats.length - 1 ? (
                  <div
                    className={`mx-auto h-px w-24 md:h-[140px] md:w-px ${
                      index === 1 ? "bg-[rgba(201,168,76,0.26)]" : "bg-[rgba(10,22,40,0.1)]"
                    }`}
                  />
                ) : null}
              </Fragment>
            );
          })}
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
