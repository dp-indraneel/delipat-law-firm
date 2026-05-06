import { AnimatedSection } from "@/components/AnimatedSection";
import RevealBlock from "@/components/RevealBlock";
import { Container, sectionHeading, sectionPadding } from "./shared";

const fitPoints = [
  "You run a personal injury firm with 2 to 10 attorneys.",
  "You spend on Google Ads, LSAs, or paid lead vendors.",
  "You handle 20 to 100+ inquiries per month.",
  "You’re the owner or partner who feels the leak but can’t name where it is.",
];

export default function WhoThisIsFor() {
  return (
    <AnimatedSection className={`bg-[#F6F1E8] ${sectionPadding}`}>
      <Container>
        <RevealBlock className="mx-auto max-w-[720px] text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#9A7B24]">BUILT FOR</p>
          <h2 className={sectionHeading}>You&apos;re the right fit if:</h2>
        </RevealBlock>

        <div className="mx-auto mt-8 max-w-[720px] space-y-1.5 md:mt-10">
          {fitPoints.map((point, index) => (
            <RevealBlock key={point} delay={0.12 + index * 0.055}>
              <div className="group flex items-start gap-3 rounded-[16px] px-2 py-2.5 transition duration-200 hover:translate-x-1 sm:px-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[#C96F4A]/10 text-[15px] font-semibold leading-none text-[#C96F4A] transition duration-200 group-hover:bg-[#C96F4A]/14 group-hover:text-[#B85F3A]">
                  ✓
                </span>
                <p className="text-left text-[16px] font-medium leading-[1.55] tracking-[-0.01em] text-[#0A1628] sm:text-[18px]">
                  {point}
                </p>
              </div>
            </RevealBlock>
          ))}
        </div>

        <RevealBlock delay={0.42} className="mx-auto mt-7 max-w-[720px] text-center">
          <p className="text-[14px] italic leading-6 tracking-[-0.005em] text-[#0A1628]/48 sm:text-[15px]">
            If you&apos;re running on referrals only or you&apos;re a 50+ attorney firm, we&apos;re probably not your fit yet.
            Reach out anyway if you want to talk.
          </p>
        </RevealBlock>
      </Container>
    </AnimatedSection>
  );
}
