"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { sectionHeading, sectionPadding } from "./shared";

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
    "You don’t need enterprise software. You need a system that fits your firm size. Our typical engagements are with 2 to 20-attorney firms, and pricing flexes against scope. The diagnostic will tell you what’s worth fixing first and what can wait. If the math doesn’t work, we’ll tell you.",
  ],
  [
    "How is the free diagnostic actually free? What’s the catch?",
    "There isn’t one. We do roughly 6 to 8 diagnostics a month. Half lead to engagements. Half don’t, and we send the firm the written report anyway. The diagnostic is how we figure out if we can help you. It’s also how you figure out if we’re worth working with. The report is yours to keep either way.",
  ],
  [
    "What happens during the diagnostic?",
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
    "Probably not. We work inside whatever case management tool you already run, Filevine, Litify, CASEpeer, MyCase, Clio. Salesforce is our specialty for the intake and pipeline layer that connects to your existing case management. The diagnostic will tell you whether anything in your current stack is actually worth replacing.",
  ],
  [
    "What if we’re not running paid ads yet?",
    "Then we’re probably not the right fit yet. Our work is most useful for firms with active lead-gen spend: Google Ads, LSAs, lead vendors, paid referrals. If you’re running on word-of-mouth and referrals only, you don’t have the leak we fix. Happy to stay in touch if that changes.",
  ],
  [
    "What if we book the diagnostic and decide we don’t want to work with you?",
    "Then we don’t work together. You keep the report. We don’t run a “stay-on-the-list” sequence. If anything changes in 6 or 12 months and you want a follow-up, you reach out. That’s it.",
  ],
] as const;

export default function FAQSection() {
  const [openItems, setOpenItems] = useState(() => new Set([3]));

  function toggleItem(index: number) {
    setOpenItems((current) => {
      const next = new Set(current);

      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }

      return next;
    });
  }

  return (
    <motion.section
      id="faq"
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
       className={`relative isolate overflow-hidden bg-[#FAF6EC] ${sectionPadding}`}>
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_22%,rgba(10,22,40,0.03),transparent_28%),radial-gradient(circle_at_78%_36%,rgba(201,168,76,0.12),transparent_24%),linear-gradient(180deg,rgba(255,255,255,0.45),rgba(250,250,250,0.96))]" />
      <div className="mx-auto w-full max-w-[1024px] px-5 sm:px-6">
        <div className="text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-[#C9A84C]">
            BEFORE YOU BOOK THE DIAGNOSTIC
          </p>
          <h2 className={sectionHeading}>
            Questions PI firm owners usually ask.
          </h2>
        </div>

        <div className="mt-12 border-t border-[rgba(10,22,40,0.08)]">
          {faqItems.map(([question, answer], index) => {
            const isOpen = openItems.has(index);

            return (
              <motion.div
                key={question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.48, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-[rgba(10,22,40,0.08)]"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className={`flex w-full items-start justify-between gap-6 px-2 py-5 text-left transition-colors duration-200 hover:bg-black/[0.02] sm:px-3 ${
                    isOpen ? "pb-4" : ""
                  }`}
                >
                  <span className="font-heading text-[19px] font-semibold leading-[1.35] tracking-[-0.02em] text-[#0A1628] sm:text-[21px]">
                    {question}
                  </span>
                  <span className="relative mt-0.5 grid size-7 shrink-0 place-items-center text-[#C9A84C]">
                    <span
                      className={`absolute text-[28px] font-light leading-none transition duration-200 ${
                        isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                      }`}
                    >
                      +
                    </span>
                    <span
                      className={`absolute text-[30px] font-light leading-none transition duration-200 ${
                        isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                      }`}
                    >
                      −
                    </span>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-2 pb-8 pr-11 text-[15px] font-normal leading-[1.8] tracking-[-0.005em] text-[#0A1628]/64 sm:px-3 sm:text-[16px]">
                        {answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}
