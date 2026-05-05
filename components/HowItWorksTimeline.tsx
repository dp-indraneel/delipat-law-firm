"use client";

import { motion } from "framer-motion";

const timelineSteps = [
  {
    number: "01",
    title: "Lead comes in",
    body: "Call, form, or chat.",
  },
  {
    number: "02",
    title: "Immediate response",
    body: "The lead gets contacted right away.",
  },
  {
    number: "03",
    title: "Follow-up continues",
    body: "Structured follow-up across 5 to 12 touches.",
  },
  {
    number: "04",
    title: "Full visibility",
    body: "You see every lead from inquiry to signed or lost.",
  },
];

export default function HowItWorksTimeline() {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="pointer-events-none absolute bottom-6 left-7 top-3 w-px bg-[linear-gradient(180deg,rgba(201,168,76,0.06),rgba(201,168,76,0.55),rgba(201,168,76,0.06))] md:left-1/2 md:-translate-x-1/2" />

      <motion.div
        initial={{ scaleY: 0, opacity: 0.35 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-6 left-7 top-3 w-px origin-top bg-[linear-gradient(180deg,rgba(201,168,76,0.12),rgba(201,168,76,0.92),rgba(201,168,76,0.12))] md:left-1/2 md:-translate-x-1/2"
      />

      <div className="space-y-6 sm:space-y-8 md:space-y-10">
        {timelineSteps.map((step, index) => {
          const isLeft = index % 2 === 0;

          return (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: isLeft ? -28 : 28, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.32 }}
            transition={{
              duration: 0.75,
              delay: 0.16 + index * 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid grid-cols-[56px_minmax(0,1fr)] items-center gap-4 sm:grid-cols-[64px_minmax(0,1fr)] sm:gap-5 md:grid-cols-[1fr_72px_1fr] md:gap-8"
          >
            <div className={`hidden md:block ${isLeft ? "" : "order-3"}`}>
              {isLeft ? (
                <TimelineCard step={step} align="right" />
              ) : null}
            </div>

            <div className="relative order-1 flex min-h-[132px] items-center justify-center md:order-2 md:min-h-[154px]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 bg-[linear-gradient(90deg,rgba(201,168,76,0.55),rgba(201,168,76,0.08))] md:hidden" />
              <div
                className={`pointer-events-none absolute top-1/2 hidden h-px w-[calc(100%-0.75rem)] -translate-y-1/2 md:block ${
                  isLeft
                    ? "right-1/2 bg-[linear-gradient(90deg,rgba(201,168,76,0.08),rgba(201,168,76,0.52))]"
                    : "left-1/2 bg-[linear-gradient(90deg,rgba(201,168,76,0.52),rgba(201,168,76,0.08))]"
                }`}
              />
              <motion.span
                initial={{ scale: 0.84, boxShadow: "0 0 0 rgba(201,168,76,0)" }}
                whileInView={{
                  scale: [0.84, 1.12, 1],
                  boxShadow: [
                    "0 0 0 rgba(201,168,76,0)",
                    "0 0 0 10px rgba(201,168,76,0.14)",
                    "0 0 0 0 rgba(201,168,76,0)",
                  ],
                }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.55,
                  delay: 0.24 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 block h-4 w-4 rounded-full border border-[#C9A84C] bg-white shadow-[0_0_0_3px_rgba(255,255,255,0.95),0_0_18px_rgba(201,168,76,0.16)] sm:h-5 sm:w-5"
              >
                <span className="absolute inset-[3px] rounded-full bg-[#C9A84C]/24 sm:inset-[4px]" />
              </motion.span>
            </div>

            <div className="order-2 md:hidden">
              <TimelineCard step={step} align="left" />
            </div>

            <div className={`hidden md:block ${isLeft ? "order-3" : ""}`}>
              {!isLeft ? (
                <TimelineCard step={step} align="left" />
              ) : null}
            </div>
          </motion.div>
        );
        })}
      </div>
    </div>
  );
}

function TimelineCard({
  step,
  align,
}: {
  step: { number: string; title: string; body: string };
  align: "left" | "right";
}) {
  return (
    <div
      className={`group relative max-w-md rounded-[16px] border border-[rgba(10,22,40,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(252,249,241,0.9))] p-5 shadow-[0_8px_24px_rgba(10,22,40,0.035)] transition duration-300 hover:-translate-y-1 hover:border-[#C9A84C]/40 hover:shadow-[0_14px_28px_rgba(10,22,40,0.05)] sm:p-6 ${
        align === "right" ? "ml-auto text-right" : "mr-auto text-left"
      }`}
    >
      <div
        className={`absolute top-0 h-px w-14 bg-[linear-gradient(90deg,rgba(201,168,76,0.85),rgba(201,168,76,0.15))] ${
          align === "right" ? "right-6" : "left-6"
        }`}
      />
      <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#C9A84C]">
        {step.number}
      </p>
      <h3 className="mt-3 font-heading text-[20px] font-semibold leading-[1.12] tracking-[-0.03em] text-[#0A1628] sm:text-[22px]">
        {step.title}
      </h3>
      <p className="mt-2 text-[15px] font-medium leading-[1.65] tracking-[-0.01em] text-[#4A5568] sm:text-[16px]">
        {step.body}
      </p>
    </div>
  );
}
