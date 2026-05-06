import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <main className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#FAFAFA] px-5 py-24 text-[#0A1628]">
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(rgba(10,22,40,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(10,22,40,0.018)_1px,transparent_1px)] bg-[size:42px_42px]" />
      <div className="absolute left-1/2 top-1/2 -z-10 h-[440px] w-[min(90vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(201,168,76,0.23),rgba(243,222,145,0.1)_42%,transparent_72%)] blur-3xl" />

      <section className="mx-auto w-full max-w-[760px] text-center">
        <Link href="/" aria-label="Delipat home" className="inline-flex items-center justify-center">
          <Image src="/logo.avif" alt="Delipat logo" width={190} height={43} priority className="h-auto w-[170px]" />
        </Link>

        <p className="mt-12 text-[12px] font-bold uppercase tracking-[0.22em] text-[#9A7B24]">404</p>
        <h1 className="mx-auto mt-5 max-w-3xl font-heading text-[38px] font-bold leading-[1.08] text-[#0A1628] sm:text-[52px] md:text-[64px]">
          Page Not Found!
        </h1>
        <p className="mx-auto mt-6 max-w-[620px] text-[17px] font-medium leading-[1.75] text-[#4A5568] md:text-[19px]">
          The link may be broken, moved, or mistyped. Head back to the diagnostic page and keep going.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#0A1628] px-7 py-3 text-[15px] font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[#13243A]"
          >
            Back to home
          </Link>
          <a
            href="https://calendly.com/rajesh-chatterjee/30min"
            target="_blank"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#0A1628]/12 bg-white px-7 py-3 text-[15px] font-bold text-[#0A1628] transition duration-200 hover:-translate-y-0.5 hover:border-[#C9A84C]/55"
          >
            Book Audit
          </a>
        </div>
      </section>
    </main>
  );
}
