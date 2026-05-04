/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import AIIntakePhone from "@/components/AIIntakePhone";
import Navbar from "@/components/Navbar";
import MathCalculator from "@/components/Interactive";
import { AnimatedSection } from "@/components/AnimatedSection";
import RevealBlock from "@/components/RevealBlock";

const intakeRealityQuotes = [
  "“She called Friday at 9pm. Signed elsewhere by Monday.”",
  "“Half our paid leads never get a callback.”",
  "“We’re spending thousands on Google, but can’t trace signed cases.”",
  "“By the time we follow up, they’ve already hired someone else.”",
];

const features = [
  ["Every lead answered instantly", "Day or night, every call and form submission gets an immediate, professional response within 60 seconds."],
  ["Follow-up that doesn't quit", "We run 5 to 12 structured touches across phone, text, and email until we reach them or exhaust every option."],
  ["Visibility from first contact to signed", "You see every lead, every stage, every outcome - no more guessing what happened to the leads you paid for."],
];

const steps = [
  ["Lead Arrives", "Every call, form, and chat captured in real time."],
  ["Instant Response", "Professional outreach triggered in under 60 seconds."],
  ["Structured Follow-Up", "5-12 touches across every channel until contact is made."],
  ["Full Visibility", "Track every lead from inquiry to signed, or understand exactly why they didn't."],
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

const sectionHeading = "mt-4 font-heading text-[32px] font-bold leading-[1.18] tracking-[-0.025em] text-[#0A1628] md:text-[40px] lg:text-[46px]";
const darkSectionHeading = `${sectionHeading} text-white`;
const bodyText = "text-[17px] leading-[1.7] tracking-[-0.005em] text-[#4A5568]";

export default function Home() {
  return (
    <main id="top" className="overflow-x-hidden bg-[#FAFAFA] text-[#0A1628]">
      <Navbar />
      <Hero />
      <RealityCheck />
      <InvisibleLeak />
      <MathSection />
      <FounderNoteSection />
      {/* <Reframe />
      <Solution />
      <HowItWorks />
      <Proof />
      <WhoItsFor />
      <FAQSection />
      <FinalCTA /> */}
      <Footer />
    </main>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1160px] px-5 lg:px-0 ${className}`}>{children}</div>;
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
    <AnimatedSection id="problem" className="py-[60px] md:py-[100px] bg-[#FAF6EC]">
      <Container>
        <RevealBlock className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9A7B24]">Intake Reality Check</p>
          <h2 className={sectionHeading}>What We Hear Every Week</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-7 tracking-[-0.005em] text-[#4A5568] md:text-[16px]">
            Real patterns from PI firms losing cases before intake even starts.
          </p>
        </RevealBlock>

        <div className="mx-auto mt-10 grid max-w-[980px] gap-4 md:mt-12 md:grid-cols-2 md:gap-5">
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
    <AnimatedSection className="py-[60px] md:py-[100px]">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
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
  className="relative isolate overflow-hidden bg-[#0A1628] py-24 md:py-32"
>
     <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
  <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#9a7b24]/20 rounded-full blur-[120px] animate-blob1" />
  <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#fcb61f]/20 rounded-full blur-[120px] animate-blob2" />

  {/* optional subtle grid */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
</div>
      <div className="mx-auto w-full max-w-7xl px-6">
        <RevealBlock className="mb-12 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/80">Run Your Numbers</p>
          <h2 className="mt-4 font-heading text-[34px] font-bold leading-[1.12] tracking-[-0.025em] text-white md:text-[48px] lg:text-[58px]">Most PI firms don’t lose cases. They leak them.</h2>
          <p className="mt-5 max-w-2xl text-[17px] leading-[1.7] tracking-[-0.005em] text-white/70">Run your own numbers below. We’ve pre-filled realistic defaults based on PI intake patterns.</p>
        </RevealBlock>
        <RevealBlock delay={0.08}>
          <MathCalculator />
        </RevealBlock>
      </div>
    </AnimatedSection>
  );
}

function FounderNoteSection() {
  return (
    <AnimatedSection id="founder" className="relative isolate overflow-hidden bg-[#FAF6EC] py-[70px] md:py-[110px]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_16%_18%,rgba(201,168,76,0.16),transparent_26%),radial-gradient(circle_at_86%_18%,rgba(10,22,40,0.05),transparent_22%)]" />
      <Container>
        <RevealBlock className="mx-auto max-w-3xl text-center">
          <Eyebrow>WHY I BUILT THIS</Eyebrow>
          <p className="mx-auto mt-5 font-heading text-[34px] font-semibold leading-[1.06] tracking-[-0.04em] text-[#0A1628] md:text-[42px]">
            The intake leak most firms mistake for bad marketing.
          </p>
        </RevealBlock>
      </Container>
      <Container className="mt-12 grid items-start gap-12 lg:grid-cols-[0.4fr_0.6fr]">
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
    <AnimatedSection className="py-[70px] md:py-[120px]">
      <Container>
        <RevealBlock className="mx-auto max-w-4xl border-y border-[#C9A84C]/45 py-12 text-center md:py-16">
          <p className="font-heading text-[34px] font-bold leading-[1.16] tracking-[-0.025em] text-[#0A1628] md:text-[48px] lg:text-[56px]">You don't have a marketing problem.</p>
          <p className="mt-4 font-heading text-[34px] font-bold leading-[1.16] tracking-[-0.025em] text-[#9A7B24] md:text-[48px] lg:text-[56px]">You have an intake problem.</p>
        </RevealBlock>
      </Container>
    </AnimatedSection>
  );
}

function Solution() {
  return (
    <AnimatedSection className="py-[60px] md:py-[100px]">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.98fr_1.02fr]">
        <div>
          <RevealBlock>
            <Eyebrow>What Delipat Does</Eyebrow>
            <h2 className={sectionHeading}>We make sure every lead is responded to, followed up, and tracked - until they sign or you know why they didn't.</h2>
          </RevealBlock>
          <div className="mt-8 space-y-4">
            {features.map(([title, body], index) => (
              <RevealBlock key={title} delay={index * 0.08} className="rounded-2xl border border-black/[0.08] bg-white p-5 shadow-[0_6px_18px_rgba(0,0,0,0.025)] transition hover:-translate-y-1 hover:border-[#C9A84C]/40">
                <h3 className="font-heading text-xl font-semibold tracking-[-0.02em]">{title}</h3>
                <p className={`mt-2 ${bodyText}`}>{body}</p>
              </RevealBlock>
            ))}
          </div>
        </div>
        <RevealBlock delay={0.12}>
          <IntakeDashboard />
        </RevealBlock>
      </Container>
    </AnimatedSection>
  );
}

function IntakeDashboard() {
  const metrics = [["Response Rate", "97%"], ["Avg Response Time", "48s"], ["Leads Contacted", "100%"], ["Conversion Lift", "+34%"]];
  return (
    <div className="rounded-[28px] border border-black/[0.08] bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.035)] md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9A7B24]">Lead Recovery System</p>
          <h3 className="mt-2 font-heading text-2xl font-semibold tracking-[-0.02em]">Intake health</h3>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Healthy</span>
      </div>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {metrics.map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-black/[0.08] bg-[#FAFAFA] p-5">
            <p className="text-sm text-[#4A5568]">{label}</p>
            <p className="mt-2 font-heading text-3xl font-bold tracking-[-0.03em] md:text-4xl">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-7 rounded-2xl bg-[#0A1628] p-5 text-white">
        <p className="text-sm font-semibold text-white/70">Pipeline</p>
        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
          {["New Lead", "Contacted", "Qualified", "Signed"].map((stage, index) => (
            <div key={stage} className="rounded-xl border border-white/10 bg-white/8 p-4">
              <span className="grid size-8 place-items-center rounded-full bg-[#C9A84C] text-xs font-bold text-[#0A1628]">{index + 1}</span>
              <p className="mt-3 text-sm font-semibold">{stage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <AnimatedSection id="process" className="bg-[#FAF6EC] py-[60px] md:py-[100px]">
      <Container>
        <RevealBlock className="max-w-2xl">
          <Eyebrow>The Process</Eyebrow>
          <h2 className={sectionHeading}>Simple for you. Relentless for your leads.</h2>
        </RevealBlock>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, body], index) => (
            <RevealBlock key={title} delay={index * 0.08} className="group rounded-[24px] border border-black/[0.08] bg-white p-6 shadow-[0_6px_18px_rgba(0,0,0,0.025)] transition duration-300 hover:-translate-y-1 hover:border-[#C9A84C] hover:shadow-[0_10px_30px_rgba(0,0,0,0.03)]">
              <p className="font-heading text-4xl font-bold tracking-[-0.035em] text-[#C9A84C]/70">0{index + 1}</p>
              <div className="my-6 grid size-12 place-items-center rounded-2xl bg-[#0A1628] text-white transition group-hover:bg-[#C9A84C] group-hover:text-[#0A1628]">{index + 1}</div>
              <h3 className="font-heading text-xl font-semibold tracking-[-0.02em]">{title}</h3>
              <p className={`mt-3 ${bodyText}`}>{body}</p>
            </RevealBlock>
          ))}
        </div>
      </Container>
    </AnimatedSection>
  );
}

function Proof() {
  const stats = [["42%", "of PI inquiries come in after 5pm or on weekends, when most firms aren't answering"], ["3x", "higher conversion rate for firms that respond in under 5 minutes vs. those that wait an hour"], ["45%", "conversion rate at top PI firms - vs. 18-22% industry average"]];
  return (
    <AnimatedSection id="proof" className="py-[60px] md:py-[100px]">
      <Container>
        <RevealBlock className="max-w-3xl">
          <Eyebrow>Industry Data</Eyebrow>
          <h2 className={sectionHeading}>The numbers that explain why your competitors are winning cases you should have signed.</h2>
        </RevealBlock>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
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
    <AnimatedSection className="bg-[#0A1628] py-[60px] md:py-[100px]">
      <Container>
        <RevealBlock className="max-w-3xl">
          <Eyebrow dark>Is This You?</Eyebrow>
          <h2 className={darkSectionHeading}>Delipat is built for one kind of firm.</h2>
        </RevealBlock>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
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
    <AnimatedSection id="faq" className="bg-white py-[70px] md:py-[110px]">
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
    <AnimatedSection id="final-cta" className="relative isolate py-[70px] md:py-[120px]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_30%,rgba(201,168,76,0.24),transparent_38%)]" />
      <Container>
        <RevealBlock className="mx-auto max-w-4xl rounded-[32px] border border-black/[0.08] bg-white/80 p-8 text-center shadow-[0_10px_30px_rgba(0,0,0,0.03)] backdrop-blur md:p-14">
          <h2 className="font-heading text-[34px] font-bold leading-[1.16] tracking-[-0.025em] md:text-[48px] lg:text-[56px]">The Case You Didn't Call Back Was a $50,000 Fee.</h2>
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
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
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
