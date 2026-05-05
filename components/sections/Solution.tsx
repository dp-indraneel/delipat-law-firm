import { AnimatedSection } from "@/components/AnimatedSection";
import RevealBlock from "@/components/RevealBlock";
import { Container, sectionHeading, sectionPadding } from "./shared";

const solutionPoints = [
  ["response", "Instant response even after hours"],
  ["followup", "Consistent follow-up until the lead signs or is lost"],
  ["visibility", "Full visibility into every lead"],
];

export default function Solution() {
  return (
    <AnimatedSection className={`relative isolate overflow-hidden bg-[#ffffff] ${sectionPadding}`}>
      <Container>
        <div className="mx-auto max-w-[1024px]">
          <RevealBlock className="mx-auto max-w-[1024px] text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#9A7B24]">The Fix</p>
            <h2 className={sectionHeading}>
              Every lead gets handled.
              Nothing slips through.
            </h2>
            <p className="mx-auto mt-2 max-w-[1024px] text-[17px] font-medium leading-[1.7] tracking-[-0.01em] text-[#4A5568] md:text-[19px]">
              No missed calls. No slow follow-ups. No guessing what happened.
            </p>
          </RevealBlock>

          <div className="mt-8 grid gap-6 sm:gap-8 md:mt-12 md:grid-cols-3 md:gap-8">
            {solutionPoints.map(([icon, text], index) => (
              <RevealBlock key={text} delay={0.18 + index * 0.08} className="h-full" scale={0.98}>
                <div className="group h-full rounded-[12px] border border-[rgba(10,22,40,0.08)] bg-white/72 p-6 text-center shadow-[0_6px_20px_rgba(10,22,40,0.03)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(10,22,40,0.05)] md:p-7">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(10,22,40,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,255,255,0.75))] text-[#C9A84C]">
                    {icon === "response" ? (
                      <span className="relative block h-4 w-4">
                        <span className="absolute inset-0 rounded-full border border-current" />
                        <span className="absolute left-1/2 top-[3px] h-[5px] w-px -translate-x-1/2 bg-current" />
                        <span className="absolute left-1/2 top-1/2 h-px w-[5px] bg-current" />
                      </span>
                    ) : null}
                    {icon === "followup" ? (
                      <span className="relative block h-4 w-4">
                        <span className="absolute inset-0 rounded-full border border-current border-r-transparent" />
                        <span className="absolute right-0 top-[1px] h-1.5 w-1.5 rotate-45 border-r border-t border-current" />
                      </span>
                    ) : null}
                    {icon === "visibility" ? (
                      <span className="relative block h-4 w-5">
                        <span className="absolute inset-x-0 top-1/2 h-[7px] -translate-y-1/2 rounded-[999px] border border-current" />
                        <span className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-current" />
                      </span>
                    ) : null}
                  </div>
                  <p className="mx-auto mt-5 max-w-[16rem] text-[16px] font-medium leading-[1.65] tracking-[-0.01em] text-[#233247]">
                    {text}
                  </p>
                </div>
              </RevealBlock>
            ))}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}
