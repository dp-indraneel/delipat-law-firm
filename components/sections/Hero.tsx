/* eslint-disable react/no-unescaped-entities */
import { bodyText, Eyebrow } from "./shared";

export default function Hero() {
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
