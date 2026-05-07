import { AnimatedSection } from "@/components/AnimatedSection";
import RevealBlock from "@/components/RevealBlock";
import { sectionHeading, sectionSubheading } from "./shared";

// const ctaPoints = [
//   {
//     lead: "Every lead responded to instantly.",
//     supporting: "No 7pm calls going to voicemail. No Friday inquiries lost by Monday.",
//   },
//   {
//     lead: "Every lead followed up consistently.",
//     supporting: "Five to twelve structured touches across call, text, and email until the lead is signed or marked lost.",
//   },
//   {
//     lead: "Every lead tracked from inquiry to signed case.",
//     supporting: "You see where the money goes. You see which campaigns actually pay.",
//   },
// ] as const;

export default function FinalCTA() {
  return (
    <AnimatedSection id="final-cta" className="relative isolate overflow-hidden bg-[#fcfaf6] py-24 sm:py-28 md:py-32">
  
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[min(88vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.14),rgba(201,168,76,0.04)_42%,transparent_72%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,22,40,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(10,22,40,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
        <div className="relative overflow-hidden rounded-[32px] px-5 py-12 sm:px-8 md:px-12 md:py-14">
          <div className="relative text-center">
            <RevealBlock>
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#9A7B24]">ONE CONVERSATION</p>
            </RevealBlock>

            <RevealBlock delay={0.08}>
              <h2 className={`mx-auto max-w-3xl ${sectionHeading}`}>
                Find out where your intake is leaking. In{" "}
                <span className="relative isolate inline-block">
                  <span className="relative">30 minutes.</span>
                  <span className="absolute inset-x-0 bottom-[0.05em] -z-10 h-[0.26em] rounded-full bg-[#C9A84C]/28" />
                </span>
              </h2>
            </RevealBlock>

            <RevealBlock delay={0.16}>
              <p className={sectionSubheading}>
                We’ll walk through your firm’s setup, name the gaps that are costing you the most, and tell you what
                we’d fix first if we worked together. That’s the whole call.
              </p>
            </RevealBlock>
          </div>

          {/* <div className="relative mx-auto mt-10 grid max-w-5xl gap-4 md:mt-12 md:grid-cols-3">
            {ctaPoints.map((point, index) => (
              <RevealBlock key={point.lead} delay={0.22 + index * 0.06} className="h-full">
                <div className="group h-full rounded-[24px] border border-[rgba(10,22,40,0.08)] bg-white/86 p-5 text-left shadow-[0_10px_30px_rgba(10,22,40,0.04)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#C9A84C]/32 hover:shadow-[0_18px_40px_rgba(10,22,40,0.08)] md:p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#C96F4A]/10 text-[#C96F4A]">
                      <span className="text-[16px] font-semibold leading-none">✓</span>
                    </span>
                    <div className="h-px flex-1 bg-[linear-gradient(90deg,rgba(201,168,76,0.38),rgba(201,168,76,0))]" />
                  </div>
                  <p className="text-[17px] font-bold leading-[1.42] tracking-[-0.015em] text-[#0A1628] sm:text-[18px]">
                    {point.lead}
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.75] tracking-[-0.005em] text-[#0A1628]/64 sm:text-[16px]">
                    {point.supporting}
                  </p>
                </div>
              </RevealBlock>
            ))}
          </div> */}

          <div className="relative mx-auto mt-10 flex max-w-3xl flex-col items-center md:mt-12">
            <RevealBlock delay={0.32}>
              <div className="relative inline-flex">
                <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-[#C9A84C]/28 blur-xl" />
                <a
                  href="https://calendly.com/rajesh-chatterjee/30min"
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full bg-[#0A1628] px-8 py-4 text-[15px] font-bold tracking-[-0.005em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#13243A]"
                >
                  Book your free audit
                </a>
              </div>
            </RevealBlock>

            <RevealBlock delay={0.38}>
              <p className="mt-5 rounded-full border border-[rgba(10,22,40,0.08)] bg-white/72 px-4 py-2 text-[13px] font-semibold tracking-[0.08em] text-[#0A1628]/58">
                NO PITCH · NO DECK · JUST A CONVERSATION ABOUT YOUR INTAKE
              </p>
            </RevealBlock>

            <RevealBlock delay={0.44}>
              <p className="mx-auto mt-6 max-w-[620px] text-[15px] font-medium leading-[1.7] tracking-[-0.005em] text-[#0A1628]/58 text-center">
                If we’re not the right fit, we’ll tell you on the call. You’ll still walk away with a sharper picture
                than you came in with.
              </p>
            </RevealBlock>

            <RevealBlock delay={0.5}>
              <a
                href="#calculator"
                className="mt-8 inline-flex text-[14px] font-bold tracking-[-0.005em] text-[#9A7B24] underline decoration-[#C9A84C]/35 underline-offset-4 transition hover:text-[#0A1628] hover:decoration-[#C9A84C]"
              >
                Run the 60-second leak audit
              </a>
            </RevealBlock>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
