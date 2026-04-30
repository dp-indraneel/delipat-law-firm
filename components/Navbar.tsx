"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Problem", href: "#problem" },
  { label: "Calculator", href: "#calculator" },
  { label: "Process", href: "#process" },
  { label: "Proof", href: "#proof" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-black/[0.08] bg-white/82 shadow-[0_12px_35px_rgba(0,0,0,0.035)] backdrop-blur-xl" : "bg-transparent"}`}>
      <nav className="mx-auto flex max-w-[1160px] items-center justify-between px-5 py-4 lg:px-0">
        <a href="#top" className="group flex items-center" aria-label="Delipat home">
          <Image src="/logo.png" alt="Delipat logo" width={170} height={38} priority className="h-auto w-[130px] transition duration-300 group-hover:opacity-85 md:w-[164px]" />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-[#4A5568] transition hover:text-[#0A1628]">
              {item.label}
            </a>
          ))}
        </div>

        <a href="#final-cta" className="rounded-full bg-[#0A1628] px-5 py-3 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(0,0,0,0.025)] transition hover:-translate-y-0.5 hover:bg-[#162842]">
          Get Free Audit
        </a>
      </nav>
    </header>
  );
}
