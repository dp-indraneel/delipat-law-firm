import { AnimatedSection } from "@/components/AnimatedSection";
import RevealBlock from "@/components/RevealBlock";

export default function FinalCTA() {
  return (
    <AnimatedSection id="final-cta" className="relative isolate overflow-hidden bg-[#ffffff] py-28 sm:py-32 md:py-36">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_54%,rgba(201,168,76,0.18),transparent_30%),linear-gradient(180deg,#ffffff,rgba(201,168,76,0.07),#ffffff)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[360px] w-[min(82vw,640px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.16),rgba(201,168,76,0.06)_42%,transparent_72%)] blur-3xl" />
 <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(10,22,40,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(10,22,40,0.015)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>
      <div className="mx-auto max-w-[1024px] px-5 text-center sm:px-6">
        <RevealBlock>
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#9A7B24]">ONE CONVERSATION</p>
        </RevealBlock>

        <RevealBlock delay={0.08}>
          <h2 className="mx-auto mt-5 max-w-[1024px] font-heading text-[34px] font-bold leading-[1.05] tracking-[-0.05em] text-[#0A1628] sm:text-[48px] md:text-[60px]">
            Find out where your intake is leaking. In{" "}
            <span className="relative isolate inline-block">
              <span className="relative">30 minutes.</span>
              <span className="absolute inset-x-0 bottom-[0.03em] -z-10 h-[0.24em] origin-left rounded-full bg-[#C9A84C]/28" />
            </span>
          </h2>
        </RevealBlock>

        <RevealBlock delay={0.16}>
          <p className="mx-auto mt-7 max-w-[1024px] text-[17px] font-medium leading-[1.75] tracking-[-0.01em] text-[#0A1628]/72 sm:text-[18px]">
            We’ll walk through your firm’s setup, name the gaps that are costing you the most, and tell you what we’d fix first if we worked together. That’s the whole call.
          </p>
        </RevealBlock>

        <RevealBlock delay={0.25}>
          <div className="relative mx-auto mt-10 inline-flex">
            <span className="pointer-events-none absolute inset-0 -z-10 rounded-[12px] bg-[#C9A84C]/28 blur-xl" />
            <a
              href="mailto:hello@delipat.ai?subject=Free%20Diagnostic"
              className="inline-flex items-center justify-center rounded-[12px] bg-[#0A1628] px-8 py-4 text-[15px] font-bold tracking-[-0.005em] text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#13243A]"
            >
              Book your free diagnostic
            </a>
          </div>
        </RevealBlock>

        <RevealBlock delay={0.32}>
          <p className="mt-5 text-[14px] font-medium tracking-[-0.005em] text-[#0A1628]/54">
            No pitch  ·  No deck  ·  Just a conversation about your intake
          </p>
        </RevealBlock>

        <RevealBlock delay={0.38}>
          <p className="mx-auto mt-7 max-w-[620px] text-[15px] font-medium leading-[1.7] tracking-[-0.005em] text-[#0A1628]/58">
            If we’re not the right fit, we’ll tell you on the call. You’ll still walk away with a sharper picture than you came in with.
          </p>
        </RevealBlock>

        <RevealBlock delay={0.44}>
          <a
            href="#calculator"
            className="mt-8 inline-flex text-[14px] font-bold tracking-[-0.005em] text-[#9A7B24] underline decoration-[#C9A84C]/35 underline-offset-4 transition hover:text-[#0A1628] hover:decoration-[#C9A84C]"
          >
            Run the 60-second leak audit
          </a>
        </RevealBlock>
      </div>
    </AnimatedSection>
  );
}
