/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionTemplate, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

function useAnimatedNumber(target: number, duration = 900) {
  const [value, setValue] = useState(0);
  const valueRef = useRef(0);

  useEffect(() => {
    let frame = 0;
    const start = performance.now();
    const from = valueRef.current;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const nextValue = Math.round(from + (target - from) * eased);
      valueRef.current = nextValue;
      setValue(nextValue);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, target]);

  return value;
}

export function HeroRevenueCard() {
  const revenue = useAnimatedNumber(850000, 1200);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const springConfig = { stiffness: 55, damping: 26, mass: 0.9 };

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const rawScale = useTransform(scrollYProgress, [0, 0.85], reduceMotion ? [1, 1] : [0.96, 1]);
  const rawY = useTransform(scrollYProgress, [0, 0.85], reduceMotion ? [0, 0] : [24, 0]);
  const rawRadius = useTransform(scrollYProgress, [0, 0.85], [28, 20]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.85], [0.98, 1]);
  const rawLift = useTransform(scrollYProgress, [0, 0.85], reduceMotion ? [0, 0] : [0, 10]);
  const rawShadowY = useTransform(scrollYProgress, [0, 0.85], [16, 20]);
  const rawShadowBlur = useTransform(scrollYProgress, [0, 0.85], [45, 60]);
  const rawShadowAlpha = useTransform(scrollYProgress, [0, 0.85], [0.045, 0.06]);

  const scale = useSpring(rawScale, springConfig);
  const y = useSpring(rawY, springConfig);
  const borderRadius = useSpring(rawRadius, springConfig);
  const opacity = useSpring(rawOpacity, springConfig);
  const cardLift = useSpring(rawLift, springConfig);
  const shadowY = useSpring(rawShadowY, springConfig);
  const shadowBlur = useSpring(rawShadowBlur, springConfig);
  const shadowAlpha = useSpring(rawShadowAlpha, springConfig);
  const boxShadow = useMotionTemplate`0 ${shadowY}px ${shadowBlur}px rgba(0, 0, 0, ${shadowAlpha})`;
  const revenueX = useTransform(cardLift, (value) => -10 - value * 0.28);
  const revenueY = useTransform(cardLift, (value) => 10 - value);
  const responseX = useTransform(cardLift, (value) => 10 + value * 0.22);
  const responseY = useTransform(cardLift, (value) => 14 - value * 0.8);
  const missedX = useTransform(cardLift, (value) => -value * 0.18);
  const missedY = useTransform(cardLift, (value) => 16 - value * 0.64);
  const followUpX = useTransform(cardLift, (value) => value * 0.2);
  const followUpY = useTransform(cardLift, (value) => 18 - value * 0.72);

  return (
    <div ref={targetRef} className="relative mx-auto w-full overflow-visible py-2" style={{ perspective: "1400px" }}>
      <motion.div
        className="pointer-events-none absolute left-2 top-[18%] z-10 hidden rounded-2xl border border-black/[0.08] bg-white/92 px-4 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.06)] backdrop-blur md:block lg:left-5"
        style={{ x: revenueX, y: revenueY }}
      >
        <p className="text-xs font-semibold text-[#4A5568]">Revenue at Risk</p>
        <p className="mt-1 text-sm font-bold text-[#0A1628]">{formatMoney(revenue)}</p>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute right-1 top-[26%] z-10 hidden rounded-2xl border border-emerald-200/80 bg-white/92 px-4 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.06)] backdrop-blur md:block lg:right-3"
        style={{ x: responseX, y: responseY }}
      >
        <p className="text-xs font-semibold text-emerald-600">Avg Response Time</p>
        <p className="mt-1 text-sm font-bold text-[#0A1628]">48 seconds</p>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -bottom-2 left-[13%] z-10 hidden rounded-2xl border border-red-200/80 bg-white/92 px-4 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.06)] backdrop-blur md:block"
        style={{ x: missedX, y: missedY }}
      >
        <p className="text-xs font-semibold text-red-500">Missed Leads</p>
        <p className="mt-1 text-sm font-bold text-[#0A1628]">17 need action</p>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute -bottom-4 right-[11%] z-10 hidden rounded-2xl border border-[#C9A84C]/25 bg-white/92 px-4 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.06)] backdrop-blur md:block"
        style={{ x: followUpX, y: followUpY }}
      >
        <p className="text-xs font-semibold text-[#9A7B24]">Follow-up Active</p>
        <p className="mt-1 text-sm font-bold text-[#0A1628]">12-touch sequence</p>
      </motion.div>

      <motion.div
        className="hero-dashboard-preview mx-auto max-h-[780px] w-[94vw] max-w-7xl overflow-hidden border border-black/[0.08] bg-white"
        style={{
          scale,
          y,
          borderRadius,
          opacity,
          transformOrigin: "top center",
          boxShadow,
          willChange: "transform, opacity, border-radius, box-shadow",
        }}
      >
        <div className="flex flex-col gap-5 border-b border-[#0A1628]/10 px-5 py-5 sm:flex-row sm:items-center sm:justify-between md:px-8 md:py-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C9A84C]">Dashboard Preview</p>
            <h3 className="mt-1 font-heading text-2xl font-semibold tracking-[-0.02em] text-[#0A1628] md:text-3xl">Intake command center</h3>
          </div>
          <div className="flex items-center justify-between gap-4 sm:justify-end">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-700">Live recovery</span>
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-red-300" />
              <span className="size-2.5 rounded-full bg-[#C9A84C]/70" />
              <span className="size-2.5 rounded-full bg-emerald-300" />
            </div>
          </div>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-2 lg:grid-cols-4 md:p-8">
          {[
            ["Leads this month", "84"],
            ["Avg response time", "3h 42m"],
            ["Missed opportunities", "17"],
            ["Estimated revenue at risk", formatMoney(revenue)],
          ].map(([label, value], index) => (
            <div key={label} className={`rounded-2xl border p-5 ${index === 3 ? "border-[#C9A84C]/30 bg-[#C9A84C]/10 lg:col-span-1" : "border-[#0A1628]/10 bg-[#FAFAFA]"}`}>
              <p className="text-sm font-medium text-[#4A5568]">{label}</p>
              <p className="mt-2 font-heading text-3xl font-bold tracking-[-0.04em] text-[#0A1628] md:text-4xl">{value}</p>
            </div>
          ))}
        </div>

        <div className="grid gap-4 px-5 pb-5 lg:grid-cols-[1.25fr_0.75fr] md:px-8 md:pb-8">
          <div className="rounded-2xl border border-[#0A1628]/10 bg-[#0A1628] p-5 text-white md:p-6">
            <div className="flex h-[220px] items-end justify-between gap-3 sm:h-[260px]">
              {[48, 78, 64, 90, 38, 82, 56, 72, 88].map((height, index) => (
                <span key={index} className="w-full rounded-t-lg bg-gradient-to-t from-[#C9A84C] to-[#F3DE91]" style={{ height: `${height}%` }} />
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-white/65">
              <span>Captured</span>
              <span>Contacted</span>
              <span>Lost risk</span>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {[
              ["New lead received", "18 seconds ago"],
              ["Follow-up overdue", "3 leads waiting"],
              ["Signed elsewhere risk", "High-value inquiry"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-[#0A1628]/10 bg-[#FAFAFA] p-5">
                <p className="text-sm font-semibold text-[#4A5568]">{label}</p>
                <p className="mt-2 font-heading text-xl font-bold tracking-[-0.02em] text-[#0A1628]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function MathCalculator() {
  const [costPerLead, setCostPerLead] = useState(225);
  const [monthlyLeads, setMonthlyLeads] = useState(60);
  const [leakageRate, setLeakageRate] = useState(20);

  const leakedLeads = useMemo(() => monthlyLeads * (leakageRate / 100), [monthlyLeads, leakageRate]);
  const wastedAdSpend = useMemo(() => monthlyLeads * costPerLead * (leakageRate / 100), [monthlyLeads, costPerLead, leakageRate]);
  const potentialFeesLost = useMemo(() => leakedLeads * 50000, [leakedLeads]);
  const animatedRisk = useAnimatedNumber(potentialFeesLost, 650);
  const animatedAdSpend = useAnimatedNumber(wastedAdSpend, 650);
  const animatedFees = useAnimatedNumber(potentialFeesLost, 650);

  const bars = [
    { label: "Leads captured", value: monthlyLeads, height: 94, tone: "bg-white/70" },
    { label: "Leads contacted", value: Math.round(monthlyLeads - leakedLeads), height: Math.max(24, 94 - leakageRate * 1.8), tone: "bg-[#C9A84C]" },
    { label: "Leads lost", value: Math.round(leakedLeads), height: Math.max(20, leakageRate * 2.2), tone: "bg-red-400" },
    { label: "Revenue risk", value: formatMoney(potentialFeesLost), height: Math.min(96, 36 + leakedLeads * 3.2), tone: "bg-gradient-to-t from-red-400 to-[#F3DE91]" },
  ];

  return (
    <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="rounded-[28px] border border-white/12 bg-white/[0.08] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur md:p-8">
        <div className="rounded-2xl border border-[#C9A84C]/30 bg-[#C9A84C]/10 p-5">
          <p className="text-sm font-semibold text-[#F3DE91]">You're likely losing</p>
          <p className="mt-2 font-heading text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl">{formatMoney(animatedRisk)}</p>
          <p className="mt-3 text-sm leading-6 text-white/70">
            That's {formatMoney(animatedAdSpend)} in wasted ad spend, and potentially {formatMoney(animatedFees)} in case fees you'll never collect.
          </p>
        </div>

        <div className="mt-8 space-y-7">
          <Slider label="Cost per lead" min={150} max={300} value={costPerLead} prefix="$" onChange={setCostPerLead} />
          <Slider label="Monthly lead volume" min={20} max={100} value={monthlyLeads} onChange={setMonthlyLeads} />
          <Slider label="Estimated leakage rate" min={10} max={30} value={leakageRate} suffix="%" onChange={setLeakageRate} />
        </div>

        <a href="#final-cta" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#C9A84C] px-6 py-4 text-sm font-bold text-[#0A1628] shadow-[0_18px_50px_rgba(201,168,76,0.28)] transition hover:-translate-y-0.5 hover:bg-[#DDBD64] sm:w-auto">
          Stop Losing Cases - Get a Free Audit
        </a>
      </div>

      <div className="rounded-[28px] border border-white/12 bg-white/[0.06] p-6 backdrop-blur md:p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C9A84C]">Revenue Risk Snapshot</p>
            <h3 className="mt-2 font-heading text-2xl font-semibold text-white">Leakage model</h3>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/70">Live</span>
        </div>
        <div className="flex h-[330px] items-end gap-4 rounded-2xl border border-white/10 bg-[#07111f] p-5">
          {bars.map((bar) => (
            <div key={bar.label} className="flex h-full flex-1 flex-col justify-end gap-3">
              <div className="flex flex-1 items-end rounded-xl bg-white/[0.03] p-2">
                <div className={`w-full rounded-t-xl ${bar.tone} transition-all duration-500`} style={{ height: `${bar.height}%` }} />
              </div>
              <div>
                <p className="text-xs font-semibold text-white">{bar.value}</p>
                <p className="mt-1 text-[11px] leading-4 text-white/50">{bar.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Slider({ label, min, max, value, prefix = "", suffix = "", onChange }: { label: string; min: number; max: number; value: number; prefix?: string; suffix?: string; onChange: (value: number) => void }) {
  return (
    <label className="block">
      <span className="flex items-center justify-between gap-4 text-sm font-semibold text-white">
        <span>{label}</span>
        <span className="rounded-full bg-white/10 px-3 py-1 text-[#F3DE91]">{prefix}{value}{suffix}</span>
      </span>
      <input
        className="mt-4 w-full accent-[#C9A84C]"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}
