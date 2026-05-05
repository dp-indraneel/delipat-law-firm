/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import AIIntakePhone from "@/components/AIIntakePhone";
import Navbar from "@/components/Navbar";
import MathCalculator from "@/components/Interactive";
import { AnimatedSection } from "@/components/AnimatedSection";
import RevealBlock from "@/components/RevealBlock";
import HowItWorksTimeline from "@/components/HowItWorksTimeline";

const intakeRealityQuotes = [
  "“She called Friday at 9pm. Signed elsewhere by Monday.”",
  "“Half our paid leads never get a callback.”",
  "“We’re spending thousands on Google, but can’t trace signed cases.”",
  "“By the time we follow up, they’ve already hired someone else.”",
];

const solutionPoints = [
  ["response", "Instant response even after hours"],
  ["followup", "Consistent follow-up until the lead signs or is lost"],
  ["visibility", "Full visibility into every lead"],
];

const founderNoteParagraphs = [
  "I’m Rajesh Chatterjee. I founded DeliPat fifteen years ago.",
  "I’m not a lawyer. My team isn’t either. We’re Salesforce CRM specialists, and for most of the last decade we’ve been helping US businesses fix the gap between “lead arrives” and “deal closes.”",
  "I started looking at personal injury firms about two years ago. What I found surprised me. Every PI firm I sat down with was sharp on the legal work. Most were sharp on the marketing. But somewhere between the inquiry coming in and the retainer being signed, the system fell apart. Calls missed at 7pm. Follow-ups depending on whether someone remembered. Pipeline reports built from three different spreadsheets. Managing partners who couldn’t tell me how many leads converted last month, because nobody actually knew.",
  "Most owners I talked to felt it but couldn’t name it. They thought they had a marketing problem. They didn’t. They had an intake problem wearing a marketing costume.",
  "That’s what we fix. Not by selling you software you’ll never use. By auditing what’s actually broken, building the system to close it, and making sure your team uses what we ship.",
  "The audit is free. It’s a real diagnosis, not a pitch. You’ll get a written report in 48 hours showing exactly where leads are leaking and what it’s costing you. If we’re a fit, we’ll talk about working together. If we’re not, the report is yours to keep. No pitch. Just answers.",
];

const faqItems = [
  [
    "Are you lawyers?",
    "No. We’re Salesforce CRM specialists. We don’t advise on cases, settlements, or litigation strategy. Our work is the system between leads coming in and signed cases going out: intake response, follow-up cadence, pipeline tracking, reporting. Your legal practice stays your legal practice.",
  ],
  [
    "We already use Lawmatics / Lead Docket / Captorra / Clio Grow. Why do we need you?",
    "Most firms running these tools tell us the tool covers part of the job well, usually lead capture or basic intake. The gap is what happens after the form is filled out: structured follow-up across 5 to 12 touch points, after-hours response, pipeline visibility for partners, and reporting that ties spend to signed cases. We build the layer that connects what you already have. We don’t replace it.",
  ],
  [
    "We’re a small firm. We can’t afford enterprise software.",
    "You don’t need enterprise software. You need a system that fits your firm size. Our typical engagements are with 2 to 20-attorney firms, and pricing flexes against scope. The audit will tell you what’s worth fixing first and what can wait. If the math doesn’t work, we’ll tell you.",
  ],
  [
    "How is the free audit actually free? What’s the catch?",
    "There isn’t one. We do roughly 6 to 8 audits a month. Half lead to engagements. Half don’t, and we send the firm the written report anyway. The audit is how we figure out if we can help you. It’s also how you figure out if we’re worth working with. The report is yours to keep either way.",
  ],
  [
    "What happens during the audit?",
    "A 30-minute call to walk through your current intake setup: how leads come in, what happens after, who handles what, and where the visibility gaps sit. We’ll ask for view-only access to your existing CRM or a recent lead-tracking export if you have one. Within 48 hours, you get a written report with the leak points, the dollar impact, and what we’d fix first if we worked together.",
  ],
  [
    "We’re based in the US. Are you?",
    "We’re based in Durgapur, India, and we work US business hours. Our 50-person team handles implementations across 4 continents, and a meaningful share of our work is with US law firms. If after-hours support is part of what we build for you, we set that up to run in your time zone, not ours.",
  ],
  [
    "How long does implementation take?",
    "Depends on scope. Most PI firm engagements run 6 to 12 weeks from kickoff to a system your team is using daily. We don’t believe in “go live and good luck.” Adoption is part of the work. We stay involved until the system is actually being used, not just installed.",
  ],
  [
    "Will we have to switch CRMs?",
    "Probably not. We work inside whatever case management tool you already run, Filevine, Litify, CASEpeer, MyCase, Clio. Salesforce is our specialty for the intake and pipeline layer that connects to your existing case management. The audit will tell you whether anything in your current stack is actually worth replacing.",
  ],
  [
    "What if we’re not running paid ads yet?",
    "Then we’re probably not the right fit yet. Our work is most useful for firms with active lead-gen spend: Google Ads, LSAs, lead vendors, paid referrals. If you’re running on word-of-mouth and referrals only, you don’t have the leak we fix. Happy to stay in touch if that changes.",
  ],
  [
    "What if we book the audit and decide we don’t want to work with you?",
    "Then we don’t work together. You keep the report. We don’t run a “stay-on-the-list” sequence. If anything changes in 6 or 12 months and you want a follow-up, you reach out. That’s it.",
  ],
];

const sectionHeading = "mt-4 font-heading text-[24px] font-bold leading-[1.5] tracking-[-0.05em] text-[#0A1628] sm:text-[36px] md:text-[42px]";
const darkSectionHeading = "mt-4 font-heading text-[24px] font-bold leading-[1.06] tracking-[-0.05em] text-white sm:text-[36px] md:text-[42px]";
const bodyText = "text-[17px] leading-[1.8] tracking-[-0.01em] text-[#233247] md:text-[18px]";
const sectionPadding = "py-16 sm:py-20 md:py-24";
const sectionGap = "gap-6 sm:gap-8 md:gap-10";

export default function Home() {
  return (
    <main id="top" className="overflow-x-hidden bg-[#FAFAFA] text-[#0A1628]">
      <Navbar />
      <Hero />
      <RealityCheck />
      <InvisibleLeak />
      <MathSection />
      <FounderNoteSection />
      <Reframe />
      <Solution />
      <HowItWorks />
      {/* <Proof />
      <WhoItsFor />
      <FAQSection />
      <FinalCTA /> */}
      <Footer />
    </main>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <p className={`text-sm font-bold uppercase tracking-[0.22em] ${dark ? "text-[#F3DE91]" : "text-[#9A7B24]"}`}>{children}</p>;
}

function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(10,22,40,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(10,22,40,0.015)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="hero-gradient-glow absolute left-1/2 top-10 -z-10 h-[520px] w-[min(92vw,980px)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.26),rgba(243,222,145,0.11)_38%,transparent_70%)] blur-2xl" />
      <div className="mx-auto w-full px-5 pb-10 pt-12 md:pb-48">
        <div className="mx-auto max-w-[980px] text-center">
          <div className="hero-reveal hero-reveal-1">
            <Eyebrow>For PI Firms Running Paid Ads</Eyebrow>
          </div>
          <h1 className="hero-reveal hero-reveal-2 mx-auto mt-6 max-w-4xl font-heading text-[40px] font-bold leading-[1.08] tracking-[-0.03em] text-[#0A1628] sm:text-[42px] md:text-[58px] lg:text-[64px]">
            The Case You Didn't Call Back Was a $50,000 Fee.
          </h1>
          <p className={`hero-reveal hero-reveal-3 mx-auto mt-6 max-w-2xl text-lg md:text-xl ${bodyText}`}>
            Most PI firms lose high-value cases before intake even begins. We fix that.
          </p>
          <div className="hero-reveal hero-reveal-4 mx-auto mt-9 flex max-w-[460px] flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
            <a href="#calculator" className="inline-flex items-center justify-center rounded-full bg-[#0A1628] px-7 py-4 text-sm font-bold text-white shadow-[0_6px_18px_rgba(0,0,0,0.025)] transition hover:-translate-y-0.5 hover:bg-[#172941]">
              See What You're Losing
            </a>
            <a href="#process" className="inline-flex items-center justify-center rounded-full border border-black/[0.08] bg-white px-7 py-4 text-sm font-bold text-[#0A1628] shadow-[0_6px_18px_rgba(0,0,0,0.025)] transition hover:-translate-y-0.5 hover:border-[#C9A84C]/50">
              How It Works
            </a>
          </div>
          <p className="hero-reveal hero-reveal-4 mt-5 text-sm font-medium tracking-[-0.005em] text-[#4A5568]">Free audit · No pitch · Clear numbers in 48 hours</p>
        </div>
      </div>
    </section>
  );
}

function RealityCheck() {
  return (
    <AnimatedSection id="problem" className={`${sectionPadding} bg-[#FAF6EC]`}>
      <Container>
        <RevealBlock className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9A7B24]">Intake Reality Check</p>
          <h2 className={sectionHeading}>What We Hear Every Week</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 tracking-[-0.005em] text-[#4A5568] md:text-[16px]">
            Real patterns from PI firms losing cases before intake even starts.
          </p>
        </RevealBlock>

        <div className={`mx-auto mt-10 grid max-w-5xl gap-4 sm:gap-6 md:mt-12 md:grid-cols-2`}>
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

function InvisibleLeak() {
  return (
    <AnimatedSection className={sectionPadding}>
      <Container className={`grid items-center ${sectionGap} lg:grid-cols-[0.95fr_1.05fr]`}>
        <RevealBlock>
          <AIIntakePhone />
        </RevealBlock>
        <div>
          <RevealBlock>
          <Eyebrow>Where Your Revenue Actually Goes</Eyebrow>
          <h2 className={sectionHeading}>You're not losing cases at the top of the funnel.</h2>
          </RevealBlock>
          <div className={`mt-7 max-w-xl space-y-5 ${bodyText}`}>
            <RevealBlock delay={0.08}><p>Paid acquisition gets the lead to your door. Intake decides whether that lead becomes a signed case.</p></RevealBlock>
            <RevealBlock delay={0.16}><p>The problem is not always lead quality. It is delayed response, inconsistent follow-up, and no clear visibility into what happened after the inquiry arrived.</p></RevealBlock>
            <RevealBlock delay={0.24}><p>By the time your team checks the missed call, the prospect may already be speaking with another firm.</p></RevealBlock>
          </div>
        </div>
        
      </Container>
    </AnimatedSection>
  );
}

function MathSection() {
  return (
    <AnimatedSection
  id="calculator"
  className={`relative isolate overflow-hidden bg-[#0A1628] ${sectionPadding}`}
>
     <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
  <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#9a7b24]/20 rounded-full blur-[120px] animate-blob1" />
  <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#fcb61f]/20 rounded-full blur-[120px] animate-blob2" />

  {/* optional subtle grid */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
</div>
      <Container>
        <RevealBlock className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/80">Run Your Numbers</p>
          <h2 className={darkSectionHeading}>Most PI firms don’t lose cases. They leak them.</h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-[1.7] tracking-[-0.005em] text-white/70">Run your own numbers below. We’ve pre-filled realistic defaults based on PI intake patterns.</p>
        </RevealBlock>
        <RevealBlock delay={0.08}>
          <MathCalculator />
        </RevealBlock>
      </Container>
    </AnimatedSection>
  );
}

function FounderNoteSection() {
  return (
    <AnimatedSection id="founder" className={`relative isolate overflow-hidden bg-[#ffffff] ${sectionPadding}`}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(201,168,76,0.16),transparent_26%),radial-gradient(circle_at_86%_18%,rgba(10,22,40,0.05),transparent_22%)]" />
      <Container>
        <RevealBlock className="mx-auto max-w-3xl text-center">
          <Eyebrow>WHY I BUILT THIS</Eyebrow>
          <p className={sectionHeading}>
            The intake leak most firms mistake for bad marketing.
          </p>
        </RevealBlock>
      </Container>
      <Container className={`mt-12 grid items-start ${sectionGap} lg:grid-cols-[0.4fr_0.6fr]`}>
        <RevealBlock className="mx-auto w-full max-w-[400px] lg:sticky lg:top-28 lg:max-w-none">
          {/* TODO: real Rajesh photo required before launch. Do not use stock or AI image. */}
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
                  Salesforce Ridge Partner · 15 years in CRM · 150+ implementations
                </p>
              </div>
            </div>
          </div>
        </RevealBlock>
        <div className="">
          <div className="space-y-2">
            {founderNoteParagraphs.map((paragraph, index) => (
              <RevealBlock key={paragraph} delay={index * 0.06}>
                <p className="text-[17px] leading-[1.8] tracking-[-0.01em] text-[#233247] md:text-[18px]">
                  {paragraph}
                </p>
              </RevealBlock>
            ))}
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}

function Reframe() {
  return (
    <AnimatedSection className={`relative isolate overflow-hidden bg-[#FAF6EC] ${sectionPadding}`}>
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_22%,rgba(10,22,40,0.03),transparent_28%),radial-gradient(circle_at_78%_36%,rgba(201,168,76,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.45),rgba(250,250,250,0.96))]" />
      <Container>
        <div className="mx-auto max-w-6xl">
          <RevealBlock className="text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#9A7B24]">The Reframe</p>
          </RevealBlock>

          <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
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
                  <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(10,22,40,0.08)] bg-white/82 px-4 py-2 shadow-[0_8px_24px_rgba(10,22,40,0.04)] backdrop-blur-sm">
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
          </div>

          <div className="mx-auto mt-14 max-w-4xl text-center md:mt-18">
            <RevealBlock delay={0.32}>
              <h2 className="font-heading text-[24px] font-bold leading-[1.06] tracking-[-0.05em] text-[#0A1628] sm:text-[36px] md:text-[42px]">
                <span className="block">You don't have a marketing problem.</span>
                <span className="mt-3 block">
                  You have an{" "}
                  <span className="relative isolate inline-block">
                    <span className="absolute inset-x-[-0.14em] bottom-[0.1em] top-[0.5em] -z-10 rounded-[999px] bg-[linear-gradient(90deg,rgba(201,168,76,0.08),rgba(201,168,76,0.38),rgba(201,168,76,0.08))] blur-[10px]" />
                    <span className="absolute inset-x-[-0.08em] bottom-[0.14em] top-[0.56em] -z-10 rounded-[999px] bg-[linear-gradient(90deg,rgba(201,168,76,0.18),rgba(201,168,76,0.58),rgba(201,168,76,0.18))]" />
                    <span className="relative">intake problem.</span>
                  </span>
                </span>
              </h2>
            </RevealBlock>

            <RevealBlock delay={0.42} className="mx-auto mt-7 max-w-3xl">
              <p className="text-[17px] font-medium leading-[1.7] tracking-[-0.01em] text-[#4A5568] md:text-[19px]">
                You're already paying for the leads. The leak happens after they reach out.
              </p>
            </RevealBlock>

            <RevealBlock delay={0.5} className="mx-auto mt-5 max-w-3xl">
              <p className="text-[14px] font-medium leading-[1.7] tracking-[-0.005em] text-[#6B7280] md:text-[15px]">
                Most firms don't lose cases because the ads failed. They lose them between inquiry and follow-up.
              </p>
            </RevealBlock>
          </div>
        </div>
      </Container>
    </AnimatedSection>
  );
}

function Solution() {
  return (
    <AnimatedSection className={`relative isolate overflow-hidden bg-[#ffffff] ${sectionPadding}`}>
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(10,22,40,0.03),transparent_24%),radial-gradient(circle_at_80%_32%,rgba(201,168,76,0.1),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.5),rgba(250,250,250,0.96))]" />
      <div className="absolute left-[10%] top-24 -z-10 h-28 w-28 rounded-full bg-[rgba(10,22,40,0.035)] blur-3xl" />
      <div className="absolute right-[12%] top-28 -z-10 h-36 w-36 rounded-full bg-[rgba(201,168,76,0.1)] blur-3xl" />
      <Container>
        <div className="mx-auto max-w-5xl">
          <RevealBlock className="mx-auto max-w-3xl text-center">
            <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#9A7B24]">The Fix</p>
            <h2 className={sectionHeading}>
              Every lead gets handled.
              <br />
              Nothing slips through.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[17px] font-medium leading-[1.7] tracking-[-0.01em] text-[#4A5568] md:text-[19px]">
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

function HowItWorks() {
  return (
    <AnimatedSection id="process" className={`bg-[#FAFAFA] ${sectionPadding}`}>
      <Container>
        <RevealBlock className="mx-auto max-w-3xl text-center">
          <Eyebrow>How It Works</Eyebrow>
          <h2 className={sectionHeading}>From first inquiry to signed case — without the gaps.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] font-medium leading-[1.7] tracking-[-0.01em] text-[#4A5568] sm:text-[17px] md:text-[18px]">
            Four simple steps. Every lead gets handled, followed up, and tracked.
          </p>
        </RevealBlock>
        <div className="mt-12 sm:mt-14 md:mt-16">
          <HowItWorksTimeline />
        </div>
      </Container>
    </AnimatedSection>
  );
}

function Proof() {
  const stats = [["42%", "of PI inquiries come in after 5pm or on weekends, when most firms aren't answering"], ["3x", "higher conversion rate for firms that respond in under 5 minutes vs. those that wait an hour"], ["45%", "conversion rate at top PI firms - vs. 18-22% industry average"]];
  return (
    <AnimatedSection id="proof" className={sectionPadding}>
      <Container>
        <RevealBlock className="max-w-3xl">
          <Eyebrow>Industry Data</Eyebrow>
          <h2 className={sectionHeading}>The numbers that explain why your competitors are winning cases you should have signed.</h2>
        </RevealBlock>
        <div className={`mt-12 grid ${sectionGap} md:grid-cols-3`}>
          {stats.map(([value, text], index) => (
            <RevealBlock key={value} delay={index * 0.08} className="relative overflow-hidden rounded-[26px] border border-black/[0.08] bg-white p-7 shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
              <div className="absolute inset-x-6 bottom-6 flex h-24 items-end gap-2 opacity-15">
                {[34, 62, 48, 82, 54].map((h, bar) => <span key={bar} className="flex-1 rounded-t-lg bg-[#C9A84C]" style={{ height: `${Math.min(96, h + index * 8)}%` }} />)}
              </div>
              <p className="relative font-heading text-5xl font-bold tracking-[-0.035em] md:text-6xl">{value}</p>
              <p className={`relative mt-5 min-h-28 text-lg ${bodyText}`}>{text}</p>
              <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-[#9A7B24]">Source: Internal intake audit benchmarks</p>
            </RevealBlock>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}

function WhoItsFor() {
  const good = ["2-10 attorney PI firm", "Running Google Ads or LSAs", "20-100+ inbound leads per month", "Owner-operated or partner-led", "Tired of losing cases you already paid to acquire"];
  const bad = ["Large defense firms", "Firms not running paid acquisition", "Teams already converting above 40%", "Attorneys not ready to see the numbers"];
  return (
    <AnimatedSection className={`bg-[#0A1628] ${sectionPadding}`}>
      <Container>
        <RevealBlock className="max-w-3xl">
          <Eyebrow dark>Is This You?</Eyebrow>
          <h2 className={darkSectionHeading}>Delipat is built for one kind of firm.</h2>
        </RevealBlock>
        <div className={`mt-12 grid ${sectionGap} lg:grid-cols-2`}>
          <RevealBlock delay={0.08}><FitCard title="Good fit" items={good} positive /></RevealBlock>
          <RevealBlock delay={0.16}><FitCard title="Not a fit" items={bad} /></RevealBlock>
        </div>
        <RevealBlock delay={0.24} className="mt-8">
          <a href="#final-cta" className="inline-flex w-full items-center justify-center rounded-full bg-[#C9A84C] px-7 py-4 text-sm font-bold text-[#0A1628] transition hover:-translate-y-0.5 sm:w-auto">This sounds like us - let's talk</a>
        </RevealBlock>
      </Container>
    </AnimatedSection>
  );
}

function FAQSection() {
  return (
    <AnimatedSection id="faq" className={`bg-white ${sectionPadding}`}>
      <Container>
        <RevealBlock className="mx-auto max-w-[720px] text-center">
          <Eyebrow>BEFORE YOU BOOK THE AUDIT</Eyebrow>
          <h2 className={sectionHeading}>Questions PI Firm Owners Usually Ask</h2>
        </RevealBlock>
        <div className="mx-auto mt-12 max-w-[720px]">
          {faqItems.map(([question, answer], index) => (
            <RevealBlock key={question} delay={index * 0.04}>
              <details
                className="group border-b border-black/[0.08] py-1"
                open={index === 3}
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 text-left marker:hidden">
                  <span className="font-heading text-[21px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#0A1628] md:text-[24px]">
                    {question}
                  </span>
                  <span className="mt-1 grid size-7 shrink-0 place-items-center rounded-full text-[#C9A84C]">
                    <span className="text-2xl font-light leading-none group-open:hidden">+</span>
                    <span className="hidden text-[26px] font-light leading-none group-open:block">−</span>
                  </span>
                </summary>
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows,opacity] duration-300 ease-out group-open:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-12 text-[16px] leading-[1.8] tracking-[-0.005em] text-[#4A5568] md:text-[17px]">
                      {answer}
                    </p>
                  </div>
                </div>
              </details>
            </RevealBlock>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}

function FitCard({ title, items, positive = false }: { title: string; items: string[]; positive?: boolean }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.07] p-7 backdrop-blur">
      <h3 className="font-heading text-2xl font-semibold tracking-[-0.02em] text-white">{title}</h3>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item} className="flex items-start gap-3 rounded-2xl bg-white/[0.05] p-4 text-white/80">
            <span className={`grid size-6 shrink-0 place-items-center rounded-full text-xs font-bold ${positive ? "bg-emerald-400 text-[#0A1628]" : "bg-white/10 text-white/45"}`}>{positive ? "+" : "x"}</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function FinalCTA() {
  return (
    <AnimatedSection id="final-cta" className={`relative isolate ${sectionPadding}`}>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(201,168,76,0.24),transparent_38%)]" />
      <Container>
        <RevealBlock className="mx-auto max-w-4xl rounded-[32px] border border-black/[0.08] bg-white/80 p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.03)] backdrop-blur md:p-14">
          <h2 className="font-heading text-[24px] font-bold leading-[1.06] tracking-[-0.05em] text-[#0A1628] sm:text-[36px] md:text-[42px]">The Case You Didn't Call Back Was a $50,000 Fee.</h2>
          <p className={`mx-auto mt-6 max-w-2xl text-lg ${bodyText}`}>You've already paid for those leads. Let's make sure you're not giving them to your competitors.</p>
          <a href="mailto:hello@delipat.ai?subject=Free%20Intake%20Audit" className="mt-9 inline-flex w-full items-center justify-center rounded-full bg-[#0A1628] px-7 py-4 text-sm font-bold text-white shadow-[0_6px_18px_rgba(0,0,0,0.025)] transition hover:-translate-y-0.5 sm:w-auto">See How Many Cases You're Losing Every Month</a>
          <p className="mt-5 text-sm font-medium tracking-[-0.005em] text-[#4A5568]">Free audit · No pitch · Results in 48 hours</p>
        </RevealBlock>
      </Container>
    </AnimatedSection>
  );
}

function Footer() {
  return (
    <footer className="border-t border-black/[0.08] bg-white py-14">
      <Container>
        <div className={`grid ${sectionGap} md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]`}>
          <div>
            <Image src="/logo.png" alt="Delipat logo" width={190} height={43} className="h-auto w-[175px]" />
            <p className={`mt-5 max-w-sm ${bodyText}`}>Delipat helps PI firms capture and convert every lead they pay for.</p>
          </div>
          <FooterColumn title="Product" links={["Intake Audit", "Lead Response", "Follow-Up System", "Reporting"]} />
          <FooterColumn title="Company" links={["How It Works", "Pricing", "Contact", "Book Audit"]} />
          <div>
            <p className="font-heading text-lg font-semibold tracking-[-0.02em]">Contact</p>
            <div className="mt-4 space-y-3 text-[#4A5568]">
              <p>hello@delipat.ai</p>
              <p>(555) 018-2049</p>
              <p>LinkedIn</p>
              <p>X / Twitter</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-black/[0.08] pt-7 text-sm text-[#4A5568] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Delipat. All rights reserved.</p>
          <div className="flex gap-5"><a href="#top" className="hover:text-[#0A1628]">Privacy Policy</a><a href="#top" className="hover:text-[#0A1628]">Terms</a></div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="font-heading text-lg font-semibold tracking-[-0.02em]">{title}</p>
      <div className="mt-4 space-y-3 text-[#4A5568]">
        {links.map((link) => <a key={link} href="#top" className="block transition hover:text-[#0A1628]">{link}</a>)}
      </div>
    </div>
  );
}
