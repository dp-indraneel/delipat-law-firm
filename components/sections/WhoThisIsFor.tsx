import { AnimatedSection } from "@/components/AnimatedSection";
import RevealBlock from "@/components/RevealBlock";
import { Container, sectionPadding } from "./shared";

const fitPoints = [
  "2 to 10 lawyer PI firm",
  "Running Google Ads, LSAs, or paid lead sources",
  "Handling 20 to 100+ leads per month",
  "Owner-operated or partner-led",
  "Already spending on marketing but unsure what’s converting",
];

export default function WhoThisIsFor() {
  return (
    <AnimatedSection className={`bg-[#FAFAFA] ${sectionPadding}`}>
      <Container>
        <RevealBlock className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-[0.12em] text-[#9A7B24]">Who this is for</p>
          <h2 className="mt-4 font-heading text-[30px] font-bold leading-[1.08] tracking-[-0.05em] text-[#0A1628] sm:text-[40px] md:text-[48px]">
            Built for PI firms that already have leads — and know they’re losing them.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] font-medium leading-[1.7] tracking-[-0.01em] text-[#4A5568] sm:text-[17px]">
            If this sounds like your setup, you’re in the right place.
          </p>
        </RevealBlock>

        <div className="mx-auto mt-12 max-w-[720px] space-y-1 border-y border-[rgba(10,22,40,0.08)] py-4">
          {fitPoints.map((point, index) => (
            <RevealBlock key={point} delay={0.12 + index * 0.055}>
              <div className="group flex items-center gap-4 px-2 py-4 transition duration-200 hover:translate-x-1 sm:px-3">
                <span className="grid size-6 shrink-0 place-items-center text-[18px] font-semibold leading-none text-[#C9A84C] transition duration-200 group-hover:text-[#B18A27]">
                  ✓
                </span>
                <p className="text-[17px] font-medium leading-[1.45] tracking-[-0.01em] text-[#0A1628] sm:text-[19px]">
                  {point}
                </p>
              </div>
            </RevealBlock>
          ))}
        </div>

        <RevealBlock delay={0.42} className="mx-auto mt-7 max-w-2xl text-center">
          <p className="text-[14px] font-medium leading-6 tracking-[-0.005em] text-[#0A1628]/48">
            If you’re running purely on referrals, this probably isn’t for you.
          </p>
        </RevealBlock>
      </Container>
    </AnimatedSection>
  );
}
