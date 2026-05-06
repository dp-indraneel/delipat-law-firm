"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "delipat:intake-popup:v1";
const POPUP_DELAY_MS = 30_000;

type PopupStorage = {
  submitted?: boolean;
  lastDismissedDate?: string;
  lead?: {
    email: string;
    submittedAt: string;
  };
};

type SubmitState = "idle" | "submitting" | "success" | "error";

function getTodayKey() {
  return new Date().toLocaleDateString("en-CA");
}

function readPopupStorage(): PopupStorage {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as PopupStorage) : {};
  } catch {
    return {};
  }
}

function writePopupStorage(value: PopupStorage) {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
}

export default function EmailCapturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const closeForToday = useCallback(() => {
    const stored = readPopupStorage();
    writePopupStorage({
      ...stored,
      lastDismissedDate: getTodayKey(),
    });
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const stored = readPopupStorage();

    if (stored.submitted || stored.lastDismissedDate === getTodayKey()) {
      return;
    }

    const timer = window.setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeForToday();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [closeForToday, isOpen]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "submitting") return;

    setStatus("submitting");
    setMessage("");

    const submittedAt = new Date().toISOString();

    try {
      const response = await fetch("/api/intake-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          pageUrl: window.location.href,
          submittedAt,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          localStorageKey: STORAGE_KEY,
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      writePopupStorage({
        submitted: true,
        lead: {
          email,
          submittedAt,
        },
      });

      setStatus("success");
      setMessage("Thanks. You are subscribed to Delipat updates.");
      window.setTimeout(() => setIsOpen(false), 1600);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Please try again.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-[#0A1628]/42 px-4 py-4 backdrop-blur-sm sm:items-center sm:py-8" role="dialog" aria-modal="true" aria-labelledby="intake-popup-title">
      <button type="button" aria-label="Close popup" className="absolute inset-0 cursor-default" onClick={closeForToday} />

      <div className="relative w-full max-w-[440px] overflow-hidden rounded-[22px] border border-white/70 bg-white shadow-[0_24px_80px_rgba(10,22,40,0.22)]">
        <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#0A1628,#C9A84C)]" />
        <div className="pointer-events-none absolute -right-20 -top-24 size-52 rounded-full bg-[#C9A84C]/20 blur-3xl" />
        <button
          type="button"
          aria-label="Close popup"
          onClick={closeForToday}
          className="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-full border border-black/[0.08] bg-white text-xl leading-none text-[#4A5568] transition hover:border-[#C9A84C]/60 hover:text-[#0A1628]"
        >
          <span aria-hidden="true">x</span>
        </button>

        <div className="relative px-6 pb-7 pt-10 text-center sm:px-8 sm:pb-8">
          <div className="mx-auto grid size-12 place-items-center rounded-2xl bg-[#0A1628] text-[13px] font-bold text-[#F3DE91]">
            D
          </div>
          <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.2em] text-[#9A7B24]">Delipat updates</p>
          <h2 id="intake-popup-title" className="mx-auto mt-3 max-w-[320px] font-heading text-[28px] font-bold leading-[1.08] text-[#0A1628] sm:text-[32px]">
            Stay in the loop.
          </h2>
          <p className="mx-auto mt-3 max-w-[330px] text-[15px] font-medium leading-[1.65] text-[#4A5568]">
            Subscribe for product updates and practical intake ideas.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-3 text-left">
            <label htmlFor="popup-email" className="sr-only">
              Work email
            </label>
            <input
              id="popup-email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Email address"
              className="h-13 w-full rounded-[14px] border border-black/[0.1] bg-[#FAFAFA] px-4 text-[15px] font-medium text-[#0A1628] outline-none transition placeholder:text-[#4A5568]/62 focus:border-[#C9A84C] focus:bg-white focus:ring-4 focus:ring-[#C9A84C]/15"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex h-13 w-full items-center justify-center rounded-full bg-[#0A1628] px-5 text-[15px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#13243A] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {status === "submitting" ? "Subscribing..." : "Subscribe"}
            </button>
          </form>

          {message && (
            <p className={`mt-3 text-center text-[13px] font-semibold ${status === "error" ? "text-red-600" : "text-emerald-700"}`} aria-live="polite">
              {message}
            </p>
          )}

        </div>
      </div>
    </div>
  );
}
