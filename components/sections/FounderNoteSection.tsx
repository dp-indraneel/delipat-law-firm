import Image from "next/image";
import { AnimatedSection } from "@/components/AnimatedSection";
import RevealBlock from "@/components/RevealBlock";
import { Container, Eyebrow, sectionGap, sectionHeading, sectionPadding } from "./shared";

function numberToWords(num: number): string {
  const words = [
    "zero","one","two","three","four",
    "five","six","seven","eight","nine","ten"
  ];
  return words[num] || num.toString();
}

const founderNoteParagraphs = [
  `I’m Rajesh Chatterjee. I founded DeliPat ${numberToWords(new Date().getFullYear() - 2019)} years ago.`,
  "I’m not a lawyer. My team isn’t either. We’re CRM specialists, and for most of the last years we’ve been helping US businesses fix the gap between “lead arrives” and “deal closes.”",
  "I started looking at personal injury firms about two years ago. What I found surprised me.",
  "Every PI firm I sat down with was sharp on the legal work. Most were sharp on the marketing. But somewhere between the inquiry coming in and the retainer being signed, the system fell apart. Calls missed at 7pm. Follow-ups depending on whether someone remembered. Pipeline reports built from three different spreadsheets. Managing partners who couldn’t tell me how many leads converted last month, because nobody actually knew.",
  "Most owners I talked to felt it but couldn’t name it. They thought they had a marketing problem. They didn’t. They had an intake problem wearing a marketing costume.",
  "That’s what we fix. Not by selling you software you’ll never use. By auditing what’s actually broken, building the system to close it, and making sure your team uses what we ship.",
  "The first conversation is free. It’s a real diagnosis, not a pitch. Thirty minutes. We walk through your intake setup, name the leaks, and you decide what to do with that. If we’re a fit, we’ll talk about working together. If not, you’ll have a clearer picture of what to fix."
];

export default function FounderNoteSection() {
  return (
    <AnimatedSection id="founder" className={`relative isolate overflow-hidden bg-[#ffffff] ${sectionPadding}`}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(201,168,76,0.16),transparent_26%),radial-gradient(circle_at_86%_18%,rgba(10,22,40,0.05),transparent_22%)]" />
      <Container>
        <RevealBlock className="mx-auto max-w-[1024px] text-center">
          <Eyebrow>WHY I BUILT THIS</Eyebrow>
          <h2 className={sectionHeading}>Founder Note</h2>
          {/* <p className={sectionHeading}>The intake leak most firms mistake for bad marketing.</p> */}
        </RevealBlock>
      </Container>
      <Container className={`mt-12 grid items-start ${sectionGap} lg:grid-cols-[0.4fr_0.6fr]`}>
        <RevealBlock className="mx-auto w-full max-w-[400px] lg:sticky lg:top-28 lg:max-w-none">
          <div className="relative overflow-hidden rounded-[32px] border border-[#C9A84C]/25 bg-[#EEDDB7] shadow-[0_22px_50px_rgba(10,22,40,0.12)]">
            <div className="absolute inset-x-6 top-6 z-10 flex items-center justify-between rounded-full border border-white/35 bg-[#0A1628]/78 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 backdrop-blur-sm">
              <span>Founder</span>
              <span>DeliPat</span>
            </div>
            <div className="relative aspect-[3/5] w-full">
              <Image
                src="/founder.avif"
                alt="Rajesh Chatterjee, Founder and CEO of DeliPat"
                fill
                sizes="(max-width: 1024px) 280px, 40vw"
                className="object-cover object-center"
                priority
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0A1628] via-[#0A1628]/86 to-transparent px-6 pb-6 pt-20 text-white">
              <div className="rounded-[22px] border border-white/12 bg-white/8 p-4 backdrop-blur-sm">
                <p className="font-heading text-[24px] font-semibold tracking-[-0.03em]">Rajesh Chatterjee</p>
                <p className="mt-1 text-sm tracking-[-0.005em] text-white/74">Founder &amp; CEO, DeliPat</p>
                <p className="mt-3 border-t border-white/12 pt-3 text-[12px] font-medium leading-[1.6] tracking-[0.02em] text-white/78">                
                  Salesforce Ridge Partner · {new Date().getFullYear() - 2019} years in CRM · 150+ implementations
                </p>
              </div>
            </div>
          </div>
        </RevealBlock>
        <div className="space-y-1 flex flex-col justify-center h-full">
          {founderNoteParagraphs.map((paragraph, index) => (
            <RevealBlock key={paragraph} delay={index * 0.06}>
              <p className="text-[17px] leading-[1.8] tracking-[-0.01em] text-[#233247] md:text-[18px]">
                {paragraph}
              </p>
            </RevealBlock>
          ))}
          <p className="text-[17px] leading-[1.8] tracking-[-0.01em] text-[#233247] md:text-[18px] font-bold">
                No pitch. Just answers.
              </p>
        </div>
      </Container>
    </AnimatedSection>
  );
}
