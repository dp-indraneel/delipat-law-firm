/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionTemplate, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import RevealBlock from "@/components/RevealBlock";

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

function useAnimatedNumber(target: number, duration = 900, startAtTarget = false) {
  const [value, setValue] = useState(startAtTarget ? target : 0);
  const valueRef = useRef(startAtTarget ? target : 0);

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

function roundTo(value: number, increment: number) {
  return Math.round(value / increment) * increment;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function trackCalcEvent(name: string, payload: Record<string, number | string>) {
  if (typeof window === "undefined") return;

  window.dispatchEvent(new CustomEvent(name, { detail: payload }));

  const maybeDataLayer = window as Window & {
    dataLayer?: Array<Record<string, number | string>>;
  };
  maybeDataLayer.dataLayer?.push({ event: name, ...payload });
}


export default function MathCalculator() {
  const calculatorRef = useRef<HTMLDivElement | null>(null);
  const changedFieldsRef = useRef<Set<string>>(new Set());
  const engagementTrackedRef = useRef(false);
  const [costPerLead, setCostPerLead] = useState(250);
  const [monthlyLeads, setMonthlyLeads] = useState(60);
  const [leakageRate, setLeakageRate] = useState(18);
  const [caseFeeInput, setCaseFeeInput] = useState("8000");

  const averageCaseFee = useMemo(() => {
    const parsed = Number(caseFeeInput);
    return Number.isFinite(parsed) && parsed > 0 ? clamp(parsed, 2000, 75000) : 8000;
  }, [caseFeeInput]);

  const totals = useMemo(() => {
    const leakedLeadsPerMonth = monthlyLeads * (leakageRate / 100);
    const monthlyLeakedSpend = leakedLeadsPerMonth * costPerLead;
    const monthlyLeakedRevenue = leakedLeadsPerMonth * 0.2 * averageCaseFee;
    const monthlyTotalLeak = monthlyLeakedSpend + monthlyLeakedRevenue;

    return {
      leakedLeadsPerMonth,
      monthlyLeakedSpend,
      monthlyLeakedRevenue,
      monthlyTotalLeak,
      headlineTotal: roundTo(monthlyTotalLeak, 1000),
      annualTotal: roundTo(monthlyTotalLeak * 12, 1000),
    };
  }, [averageCaseFee, costPerLead, leakageRate, monthlyLeads]);

  const animatedTotal = useAnimatedNumber(totals.headlineTotal, 260, true);

  useEffect(() => {
    const node = calculatorRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          trackCalcEvent("calc_viewed", { section: "math" });
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const snapshot = (next = {}) => {
    const values = {
      cpl: costPerLead,
      leads: monthlyLeads,
      leakage: leakageRate,
      fee: averageCaseFee,
      ...next,
    };
    const leaked = values.leads * (values.leakage / 100);
    const spend = leaked * values.cpl;
    const revenue = leaked * 0.2 * values.fee;

    return {
      ...values,
      total: spend + revenue,
    };
  };

  const trackInputChange = (field: string, value: number, next = {}) => {
    const current = snapshot(next);
    changedFieldsRef.current.add(field);

    trackCalcEvent("calc_input_changed", {
      field,
      value,
      current_total: Math.round(current.total),
    });

    if (!engagementTrackedRef.current && changedFieldsRef.current.size >= 2) {
      engagementTrackedRef.current = true;
      trackCalcEvent("calc_meaningful_engagement", {
        cpl: current.cpl,
        leads: current.leads,
        leakage: current.leakage,
        fee: current.fee,
        total: Math.round(current.total),
      });
    }
  };

  const updateHiddenFields = () => {
    const form = document.querySelector<HTMLFormElement>("#audit form, form#audit, form[name='audit']");
    if (!form) return;

    const values = snapshot();
    const fields = {
      calc_cpl: values.cpl,
      calc_leads: values.leads,
      calc_leakage: values.leakage,
      calc_fee: values.fee,
      calc_total: Math.round(values.total),
    };

    Object.entries(fields).forEach(([name, value]) => {
      let input = form.querySelector<HTMLInputElement>(`input[name="${name}"]`);
      if (!input) {
        input = document.createElement("input");
        input.type = "hidden";
        input.name = name;
        form.appendChild(input);
      }
      input.value = String(value);
    });
  };

  const handleCtaClick = () => {
    updateHiddenFields();
    trackCalcEvent("calc_cta_clicked", {
      cpl: costPerLead,
      leads: monthlyLeads,
      leakage: leakageRate,
      fee: averageCaseFee,
      total: Math.round(totals.monthlyTotalLeak),
    });
  };

  return (
    <div ref={calculatorRef} className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
      <div className="space-y-6">
        <RevealBlock delay={0.02}>
          <CalculatorSlider
            label="What you pay per lead"
            helper="Google Ads, LSAs, lead vendors"
            value={costPerLead}
            min={5}
            max={1000}
            step={1}
            display={`${formatMoney(costPerLead)} / lead`}
            onChange={(value) => {
              setCostPerLead(value);
              trackInputChange("cpl", value, { cpl: value });
            }}
          />
        </RevealBlock>

        <RevealBlock delay={0.08}>
          <CalculatorSlider
            label="Leads you receive each month"
            helper="Across all paid sources"
            value={monthlyLeads}
            min={1}
            max={300}
            step={1}
            display={`${monthlyLeads} leads`}
            onChange={(value) => {
              setMonthlyLeads(value);
              trackInputChange("leads", value, { leads: value });
            }}
          />
        </RevealBlock>

        <RevealBlock delay={0.14}>
          <CalculatorSlider
            label="Leads that go cold"
            helper="After-hours misses, slow callbacks, dropped follow-up"
            value={leakageRate}
            min={0}
            max={100}
            step={1}
            display={`${leakageRate}%`}
            onChange={(value) => {
              setLeakageRate(value);
              trackInputChange("leakage", value, { leakage: value });
            }}
          />
        </RevealBlock>

        <RevealBlock delay={0.2}>
          <div className="rounded-2xl border border-white/[0.12] bg-white/[0.08] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-md transition duration-300 hover:scale-[1.01] md:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <label htmlFor="average-case-fee" className="font-heading text-lg font-semibold text-white/90">Your average case fee</label>
                <p className="mt-1 text-sm leading-6 text-white/60">Typical attorney fee per signed PI case</p>
              </div>
              <div className="flex items-center rounded-full border border-white/[0.14] bg-white/[0.10] p-1">
                <button
                  type="button"
                  aria-label="Decrease average case fee"
                  className="grid size-9 place-items-center rounded-full text-lg font-semibold text-white transition hover:bg-white/10"
                  onClick={() => {
                    const next = clamp(averageCaseFee - 500, 2000, 75000);
                    setCaseFeeInput(String(next));
                    trackInputChange("fee", next, { fee: next });
                  }}
                >
                  -
                </button>
                <input
                  id="average-case-fee"
                  className="h-9 w-28 bg-transparent text-center text-sm font-bold text-white outline-none"
                  inputMode="numeric"
                  value={caseFeeInput === "" ? "" : formatMoney(averageCaseFee)}
                  onChange={(event) => {
                    const raw = event.target.value.replace(/[^\d]/g, "");
                    setCaseFeeInput(raw);
                    const next = raw === "" ? 8000 : clamp(Number(raw), 2000, 75000);
                    trackInputChange("fee", next, { fee: next });
                  }}
                  onBlur={() => {
                    const parsed = Number(caseFeeInput);
                    setCaseFeeInput(String(Number.isFinite(parsed) && parsed > 0 ? clamp(parsed, 2000, 75000) : 8000));
                  }}
                />
                <button
                  type="button"
                  aria-label="Increase average case fee"
                  className="grid size-9 place-items-center rounded-full text-lg font-semibold text-white transition hover:bg-white/10"
                  onClick={() => {
                    const next = clamp(averageCaseFee + 500, 2000, 75000);
                    setCaseFeeInput(String(next));
                    trackInputChange("fee", next, { fee: next });
                  }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </RevealBlock>
      </div>

      <RevealBlock delay={0.12} className="lg:sticky lg:top-28">
        <div className="rounded-[28px] border border-white/[0.15] bg-white/[0.12] p-6 shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-lg transition duration-300 hover:scale-[1.01] md:p-8">
          <p className="text-xs font-bold uppercase text-white/80">Intake Leak Estimate</p>
          <h3 className="mt-4 max-w-xl font-heading text-[24px] font-semibold leading-[1.2] text-white md:text-[30px]">
            You're losing approximately{" "}
            <span className="block pt-3 font-heading text-[38px] font-bold leading-none text-[#fcb61f] md:text-[56px] lg:text-[64px]">
              {formatMoney(animatedTotal)}
            </span>
            <span className="mt-3 block text-[24px] md:text-[30px]">every month.</span>
          </h3>

          <div className="mt-8 space-y-3 border-y border-white/[0.12] py-5">
            <BreakdownLine value={formatMoney(roundTo(totals.monthlyLeakedSpend, 100))} label="in paid lead spend you can't recover" />
            <BreakdownLine value={formatMoney(roundTo(totals.monthlyLeakedRevenue, 100))} label="in case fees walking to your competitor" />
            <BreakdownLine value={formatMoney(totals.annualTotal)} label="over 12 months" strong />
          </div>

          <a
            href="#audit"
            onClick={handleCtaClick}
            className="mt-7 inline-flex w-full items-center justify-center rounded-full bg-[#fcb61f] px-7 py-4 text-sm font-bold text-[#0A1628] shadow-[0_10px_30px_rgba(252,182,31,0.25)] transition hover:-translate-y-0.5 hover:bg-[#ffc542]"
          >
            See the full breakdown
          </a>

        </div>
      </RevealBlock>
    </div>
  );
}

function BreakdownLine({ value, label, strong = false }: { value: string; label: string; strong?: boolean }) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl bg-white/[0.07] px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-5">
      <p className={`font-heading text-xl font-bold text-white ${strong ? "md:text-2xl" : ""}`}>{value}</p>
      <p className="text-sm leading-6 text-white/80 sm:max-w-[260px] sm:text-right">{label}</p>
    </div>
  );
}

function CalculatorSlider({
  label,
  helper,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  helper: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (value: number) => void;
}) {
  const progress = ((value - min) / (max - min)) * 100;

  return (
    <label className="block rounded-2xl border border-white/[0.12] bg-white/[0.08] p-5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-md transition duration-300 hover:scale-[1.01] md:p-6">
      <span className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <span>
          <span className="block font-heading text-lg font-semibold text-white/90">{label}</span>
          <span className="mt-1 block text-sm leading-6 text-white/60">{helper}</span>
        </span>
        <span className="rounded-full border border-white/[0.14] bg-white/[0.10] px-4 py-2 text-sm font-bold text-white">{display}</span>
      </span>
      <input
        className="diagnostic-slider mt-6 w-full"
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        style={{ background: `linear-gradient(90deg, #fcb61f ${progress}%, rgba(255,255,255,0.2) ${progress}%)` }}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}
