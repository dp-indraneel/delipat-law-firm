"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function FooterSubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === "submitting") return;

    setStatus("submitting");
    setMessage("");

    try {
      const response = await fetch("/api/intake-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          pageUrl: window.location.href,
          submittedAt: new Date().toISOString(),
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          localStorageKey: "delipat:footer-subscribe:v1",
        }),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }

      setEmail("");
      setStatus("success");
      setMessage("Subscribed. Thank you.");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Please try again.");
    }
  };

  return (
    <div className="lg:col-span-2 max-w-[420px] w-full md:m-auto">
      <p className="font-heading text-lg font-semibold tracking-[-0.02em]">Subscribe</p>
      <form onSubmit={handleSubmit} className="mt-4  space-y-3">
        <label htmlFor="footer-email" className="sr-only">
          Email address
        </label>
        <input
          id="footer-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email address"
          className="h-12 w-full rounded-[12px] border border-black/[0.1] bg-[#FAFAFA] px-4 text-[14px] font-medium text-[#0A1628] outline-none transition placeholder:text-[#4A5568]/62 focus:border-[#C9A84C] focus:bg-white focus:ring-4 focus:ring-[#C9A84C]/15"
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex h-12 w-full items-center justify-center rounded-full bg-[#0A1628] px-5 text-[14px] font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#13243A] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
        >
          {status === "submitting" ? "Subscribing..." : "Subscribe"}
        </button>
      </form>
      {message && (
        <p className={`mt-3 text-sm font-semibold ${status === "error" ? "text-red-600" : "text-emerald-700"}`} aria-live="polite">
          {message}
        </p>
      )}
    </div>
  );
}
