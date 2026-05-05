/* eslint-disable react/no-unescaped-entities */
import { AnimatedSection } from "@/components/AnimatedSection";
import RevealBlock from "@/components/RevealBlock";
import { Container, sectionPadding } from "./shared";

export default function Reframe() {
  return (
    <AnimatedSection className={`relative isolate overflow-hidden bg-[#FAF6EC] ${sectionPadding}`}>
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_22%,rgba(10,22,40,0.03),transparent_28%),radial-gradient(circle_at_78%_36%,rgba(201,168,76,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.45),rgba(250,250,250,0.96))]" />
      <Container>
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#9A7B24]">WHERE YOUR REVENUE ACTUALLY GOES</p>
          </RevealBlock>

          {/* <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
            <RevealBlock className="h-full">
              <div className="relative h-full overflow-hidden rounded-[14px] border border-[rgba(10,22,40,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(255,255,255,0.72))] p-7 shadow-[0_10px_30px_rgba(10,22,40,0.04)] backdrop-blur-sm md:p-8">
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(10,22,40,0.08),transparent)]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6B7280]">What firms think</p>
                <h3 className="mt-5 font-heading text-[20px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#0A1628] sm:text-[24px] md:text-[28px]">
                  We need
                  <br />
                  more leads
                </h3>
                <p className="mt-5 max-w-sm text-[16px] font-medium leading-[1.7] tracking-[-0.01em] text-[#4A5568]">
                  More ad spend. More agencies. More clicks.
                </p>
              </div>
            </RevealBlock>

            <RevealBlock delay={0.12} className="flex items-center justify-center">
              <div className="flex w-full items-center justify-center lg:h-full">
                <div className="flex flex-col items-center justify-center gap-3 lg:gap-4">
                  <div className="hidden h-10 w-px bg-[linear-gradient(180deg,rgba(10,22,40,0.08),rgba(201,168,76,0.28),rgba(10,22,40,0.08))] lg:block" />
                  <div className="inline-flex items-center gap-3">
                    <span className="h-px w-6 bg-[linear-gradient(90deg,rgba(10,22,40,0.18),rgba(201,168,76,0.8))] lg:w-7" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A7B24]">Reframe</span>
                    <span className="text-[#C9A84C] lg:translate-x-[1px]">→</span>
                  </div>
                  <div className="h-10 w-px bg-[linear-gradient(180deg,rgba(10,22,40,0.08),rgba(201,168,76,0.28),rgba(10,22,40,0.08))] lg:hidden" />
                  <div className="text-[#C9A84C] lg:hidden">↓</div>
                  <div className="hidden h-10 w-px bg-[linear-gradient(180deg,rgba(10,22,40,0.08),rgba(201,168,76,0.28),rgba(10,22,40,0.08))] lg:block" />
                </div>
              </div>
            </RevealBlock>

            <RevealBlock delay={0.22} className="h-full">
              <div className="relative h-full overflow-hidden rounded-[14px] border border-[rgba(10,22,40,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(255,255,255,0.82))] p-7 shadow-[0_12px_34px_rgba(10,22,40,0.045)] backdrop-blur-sm md:p-8">
                <div className="absolute -right-12 top-1/2 -z-10 h-40 w-40 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.22),rgba(201,168,76,0.08)_42%,transparent_74%)] blur-2xl" />
                <div className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(201,168,76,0.45),transparent)]" />
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#9A7B24]">What's actually happening</p>
                <h3 className="mt-5 font-heading text-[20px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#0A1628] sm:text-[24px] md:text-[28px]">
                  Your intake is
                  <br />
                  leaking revenue
                </h3>
                <p className="mt-5 max-w-sm text-[16px] font-medium leading-[1.7] tracking-[-0.01em] text-[#4A5568]">
                  Slow response. Weak follow-up. No visibility.
                </p>
              </div>
            </RevealBlock>
          </div> */}

          <div className="mx-auto mt-6 text-center ">
            <RevealBlock delay={0.32}>
              <h2 className="font-heading text-[24px] font-bold leading-[1.06] tracking-[-0.05em] text-[#0A1628] sm:text-[28px] md:text-[36px]">
                <span className="block">You’re not losing cases at the top of the funnel.</span>
                <span className="mt-3 block">
                  Your ads aren’t broken.{" "}
                  <span className="relative isolate inline-block">
                    <span className="absolute inset-x-[-0.14em] bottom-[0.1em] top-[0.5em] -z-10 rounded-[999px] bg-[linear-gradient(90deg,rgba(201,168,76,0.08),rgba(201,168,76,0.38),rgba(201,168,76,0.08))] blur-[10px]" />
                    <span className="absolute inset-x-[-0.08em] bottom-[0.14em] top-[0.56em] -z-10 rounded-[999px] bg-[linear-gradient(90deg,rgba(201,168,76,0.18),rgba(201,168,76,0.58),rgba(201,168,76,0.18))]" />
                    <span className="relative">Your intake is.</span>
                  </span>
                </span>
              </h2>
            </RevealBlock>
            <RevealBlock delay={0.42} className="mx-auto mt-7">
              <p className="text-[17px] font-medium leading-[1.7] tracking-[-0.01em] text-[#4A5568] md:text-[19px]">
                Calls go to voicemail after 5pm. Web forms wait 48 hours for a response. Follow-ups depend on whether your intake person remembered. Pipeline reports get built from three different spreadsheets every quarter.
By the time someone gets back to a prospect, the prospect has already signed somewhere else. You’ll never see the data on the cases you lost. You only see the ones that came in.

              </p>
            </RevealBlock>
            {/* <RevealBlock delay={0.5} className="mx-auto mt-5 max-w-3xl">
              <p className="text-[14px] font-medium leading-[1.7] tracking-[-0.005em] text-[#6B7280] md:text-[15px]">
                Most firms don't lose cases because the ads failed. They lose them between inquiry and follow-up.
              </p>
            </RevealBlock> */}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
