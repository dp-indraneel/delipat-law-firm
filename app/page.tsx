/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import AIIntakePhone from "@/components/AIIntakePhone";
import Navbar from "@/components/Navbar";
import MathCalculator, { HeroRevenueCard } from "@/components/Interactive";
import { AnimatedSection } from "@/components/AnimatedSection";
import RevealBlock from "@/components/RevealBlock";

const customerNotes = [
  {
    quote: "We had someone call at 8pm on a Friday. By Monday morning, they'd already hired someone else.",
    role: "Managing Partner, PI Firm",
    tag: "After-hours lead",
  },
  {
    quote: "I'm running $35,000 a month in Google Ads and my intake coordinator goes home at 5.",
    role: "Owner, Growth-Focused PI Firm",
    tag: "Paid acquisition risk",
  },
  {
    quote: "We had 90 leads come in last month. I asked my team how many we actually spoke to. Nobody knew.",
    role: "Founding Attorney, PI Firm",
    tag: "Reporting gap",
  },
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

const sectionHeading = "mt-4 font-heading text-[32px] font-bold leading-[1.18] tracking-[-0.025em] text-[#0A1628] md:text-[40px] lg:text-[46px]";
const darkSectionHeading = `${sectionHeading} text-white`;
const bodyText = "text-[17px] leading-[1.7] tracking-[-0.005em] text-[#4A5568]";

export default function Home() {
  return (
    <main id="top" className="overflow-x-hidden bg-[#FAFAFA] text-[#0A1628]">
      <Navbar />
      <Hero />
      <RealityCheck />
      {/* <InvisibleLeak />
      <MathSection />
      <Reframe />
      <Solution />
      <HowItWorks />
      <Proof />
      <WhoItsFor />
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
    <section className="relative isolate min-h-screen overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(10,22,40,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(10,22,40,0.035)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="hero-gradient-glow absolute left-1/2 top-10 -z-10 h-[520px] w-[min(92vw,980px)] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.26),rgba(243,222,145,0.11)_38%,transparent_70%)] blur-2xl" />
      <div className="mx-auto w-full px-5 pb-20 pt-8 md:pb-32">
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
            <a href="#calculator" className="inline-flex items-center justify-center rounded-full bg-[#0A1628] px-7 py-4 text-sm font-bold text-white shadow-[0_18px_45px_rgba(10,22,40,0.18)] transition hover:-translate-y-0.5 hover:bg-[#172941]">
              See What You're Losing
            </a>
            <a href="#process" className="inline-flex items-center justify-center rounded-full border border-[#0A1628]/10 bg-white px-7 py-4 text-sm font-bold text-[#0A1628] shadow-sm transition hover:-translate-y-0.5 hover:border-[#C9A84C]/50">
              How It Works
            </a>
          </div>
          <p className="hero-reveal hero-reveal-4 mt-5 text-sm font-medium tracking-[-0.005em] text-[#4A5568]">Free audit · No pitch · Clear numbers in 48 hours</p>
        </div>
        <div className="hero-reveal hero-reveal-5 mt-12 md:mt-16">
          <HeroRevenueCard />
        </div>
      </div>
    </section>
  );
}

function RealityCheck() {
  return (
    <AnimatedSection id="problem" className="py-[60px] md:py-[100px]">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <RevealBlock>
          <Eyebrow>What We Hear Every Week</Eyebrow>
          <h2 className={sectionHeading}>These are not marketing problems. They are intake gaps.</h2>
          <p className={`mt-6 max-w-xl ${bodyText}`}>
            Every week, PI firm owners tell us the same story: the ads are working, the leads are coming in, but the follow-up is inconsistent and nobody has a clear answer on what happened next.
          </p>
          <RevealBlock delay={0.08} className="mt-9 grid grid-cols-3 gap-3 rounded-[24px] border border-[#0A1628]/10 bg-white/80 p-3 shadow-[0_16px_45px_rgba(0,0,0,0.045)] backdrop-blur">
            {[["90+", "Leads reviewed"], ["48h", "Audit turnaround"], ["5-12", "Follow-up touches"]].map(([value, label]) => (
              <div key={label} className="rounded-2xl bg-[#FAFAFA] p-4">
                <p className="font-heading text-2xl font-bold tracking-[-0.025em] text-[#0A1628] md:text-3xl">{value}</p>
                <p className="mt-1 text-xs font-semibold uppercase leading-5 tracking-[0.12em] text-[#4A5568]">{label}</p>
              </div>
            ))}
          </RevealBlock>
        </RevealBlock>

        <div className="relative mx-auto w-full max-w-[620px] rounded-[32px] border border-[#0A1628]/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.92),rgba(245,245,245,0.78))] p-4 shadow-[0_16px_45px_rgba(0,0,0,0.045)] md:p-6">
          <div className="absolute -right-8 -top-8 -z-10 size-40 rounded-full bg-[#C9A84C]/20 blur-3xl" />
          {customerNotes.map((note, index) => (
            <RevealBlock key={note.quote} delay={index * 0.08}>
              <article
                className={`relative rounded-[24px] border border-[#0A1628]/10 bg-white p-5 shadow-[0_14px_38px_rgba(0,0,0,0.04)] ${index === 1 ? "mt-[-10px] ml-0 md:ml-10" : ""} ${index === 2 ? "mt-[-10px] ml-0 md:ml-20" : ""}`}
              >
                <div className="absolute inset-y-5 left-0 w-1 rounded-r-full bg-[#C9A84C]" />
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="grid size-11 place-items-center rounded-full border border-[#C9A84C]/25 bg-[#C9A84C]/10 text-xs font-bold text-[#9A7B24]">CC</div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#9A7B24]">{note.tag}</p>
                      <p className="mt-1 text-sm font-semibold text-[#4A5568]">{note.role}</p>
                    </div>
                  </div>
                  <span className="hidden rounded-full bg-[#F5F5F5] px-3 py-1 text-xs font-semibold text-[#4A5568] sm:block">Internal note</span>
                </div>
                <p className="mt-5 text-[17px] leading-[1.65] tracking-[-0.005em] text-[#0A1628]">"{note.quote}"</p>
              </article>
            </RevealBlock>
          ))}
          <RevealBlock delay={0.24} className="mt-4 rounded-[22px] border border-[#C9A84C]/30 bg-[#C9A84C]/10 p-5 shadow-inner">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#9A7B24]">Pattern detected</p>
            <p className="mt-2 text-[16px] leading-[1.65] tracking-[-0.005em] text-[#0A1628]">Response delay, no follow-up owner, no closed-loop reporting.</p>
          </RevealBlock>
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
          <h2 className={sectionHeading}>You're not losing cases at the top of the funnel. You're losing them in the silence after.</h2>
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
    <AnimatedSection id="calculator" className="bg-[#0A1628] py-[60px] md:py-[100px]">
      <Container>
        <RevealBlock className="mb-12 max-w-3xl">
          <Eyebrow dark>Run Your Numbers</Eyebrow>
          <h2 className={darkSectionHeading}>See Exactly What Your Intake Gap Is Costing You.</h2>
        </RevealBlock>
        <RevealBlock delay={0.08}>
          <MathCalculator />
        </RevealBlock>
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
            <Eyebrow>What CaseClosed Does</Eyebrow>
            <h2 className={sectionHeading}>We make sure every lead is responded to, followed up, and tracked - until they sign or you know why they didn't.</h2>
          </RevealBlock>
          <div className="mt-8 space-y-4">
            {features.map(([title, body], index) => (
              <RevealBlock key={title} delay={index * 0.08} className="rounded-2xl border border-[#0A1628]/10 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#C9A84C]/40">
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
    <div className="rounded-[28px] border border-[#0A1628]/10 bg-white p-6 shadow-[0_28px_80px_rgba(10,22,40,0.1)] md:p-8">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#9A7B24]">Lead Recovery System</p>
          <h3 className="mt-2 font-heading text-2xl font-semibold tracking-[-0.02em]">Intake health</h3>
        </div>
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Healthy</span>
      </div>
      <div className="mt-7 grid gap-4 sm:grid-cols-2">
        {metrics.map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-[#0A1628]/10 bg-[#FAFAFA] p-5">
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
    <AnimatedSection id="process" className="bg-[#F5F5F5] py-[60px] md:py-[100px]">
      <Container>
        <RevealBlock className="max-w-2xl">
          <Eyebrow>The Process</Eyebrow>
          <h2 className={sectionHeading}>Simple for you. Relentless for your leads.</h2>
        </RevealBlock>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([title, body], index) => (
            <RevealBlock key={title} delay={index * 0.08} className="group rounded-[24px] border border-[#0A1628]/10 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#C9A84C] hover:shadow-[0_16px_45px_rgba(0,0,0,0.055)]">
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
            <RevealBlock key={value} delay={index * 0.08} className="relative overflow-hidden rounded-[26px] border border-[#0A1628]/10 bg-white p-7 shadow-[0_16px_45px_rgba(0,0,0,0.045)]">
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
          <h2 className={darkSectionHeading}>CaseClosed is built for one kind of firm.</h2>
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
        <RevealBlock className="mx-auto max-w-4xl rounded-[32px] border border-[#0A1628]/10 bg-white/80 p-8 text-center shadow-[0_16px_45px_rgba(0,0,0,0.045)] backdrop-blur md:p-14">
          <h2 className="font-heading text-[34px] font-bold leading-[1.16] tracking-[-0.025em] md:text-[48px] lg:text-[56px]">The Case You Didn't Call Back Was a $50,000 Fee.</h2>
          <p className={`mx-auto mt-6 max-w-2xl text-lg ${bodyText}`}>You've already paid for those leads. Let's make sure you're not giving them to your competitors.</p>
          <a href="mailto:hello@caseclosed.ai?subject=Free%20Intake%20Audit" className="mt-9 inline-flex w-full items-center justify-center rounded-full bg-[#0A1628] px-7 py-4 text-sm font-bold text-white shadow-[0_18px_45px_rgba(10,22,40,0.18)] transition hover:-translate-y-0.5 sm:w-auto">See How Many Cases You're Losing Every Month</a>
          <p className="mt-5 text-sm font-medium tracking-[-0.005em] text-[#4A5568]">Free audit · No pitch · Results in 48 hours</p>
        </RevealBlock>
      </Container>
    </AnimatedSection>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#0A1628]/10 bg-white py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          <div>
            <Image src="/logo.png" alt="CaseClosed logo" width={190} height={43} className="h-auto w-[175px]" />
            <p className={`mt-5 max-w-sm ${bodyText}`}>CaseClosed helps PI firms capture and convert every lead they pay for.</p>
          </div>
          <FooterColumn title="Product" links={["Intake Audit", "Lead Response", "Follow-Up System", "Reporting"]} />
          <FooterColumn title="Company" links={["How It Works", "Pricing", "Contact", "Book Audit"]} />
          <div>
            <p className="font-heading text-lg font-semibold tracking-[-0.02em]">Contact</p>
            <div className="mt-4 space-y-3 text-[#4A5568]">
              <p>hello@caseclosed.ai</p>
              <p>(555) 018-2049</p>
              <p>LinkedIn</p>
              <p>X / Twitter</p>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-[#0A1628]/10 pt-7 text-sm text-[#4A5568] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 CaseClosed. All rights reserved.</p>
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
