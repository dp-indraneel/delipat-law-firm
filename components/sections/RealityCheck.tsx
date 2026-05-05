import { AnimatedSection } from "@/components/AnimatedSection";
import RevealBlock from "@/components/RevealBlock";
import { Container, sectionHeading, sectionPadding } from "./shared";

const intakeRealityQuotes = [
  "“She called Friday at 9pm. Signed elsewhere by Monday.”",
  "“We're spending thousands on Google. Can't trace one signed case back to a campaign.”",
  "“My intake girl leaves at 5. After that, the phone rolls to voicemail and that's it”",
  "“Half our paid leads never get a callback. I find out at the quarterly review.”",
];

export default function RealityCheck() {
  return (
    <AnimatedSection id="problem" className={`relative isolate overflow-hidden bg-[#FAF6EC] ${sectionPadding}`}>
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_22%,rgba(10,22,40,0.03),transparent_28%),radial-gradient(circle_at_78%_36%,rgba(201,168,76,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.45),rgba(250,250,250,0.96))]" />
      <Container>
        <RevealBlock className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9A7B24]">INTAKE REALITY CHECK</p>
          <h2 className={sectionHeading}>What we hear every week.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 tracking-[-0.005em] text-[#4A5568] md:text-[16px]">
           Real patterns from PI firms losing cases before intake even starts.
          </p>
        </RevealBlock>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:gap-6 md:mt-12 md:grid-cols-2">
          {intakeRealityQuotes.map((quote, index) => (
            <RevealBlock key={quote} delay={index * 0.08}>
              <figure className="relative h-full rounded-[20px] border border-black/[0.06] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.025)] md:p-7">
                <span className="mb-7 block text-2xl font-semibold leading-none text-[#C9A84C]/45">/</span>
                <blockquote className="text-[18px] font-medium leading-[1.55] tracking-[-0.01em] text-[#0A1628] md:text-[21px]">
                  {quote}
                </blockquote>
              </figure>
            </RevealBlock>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}
