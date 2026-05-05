import { ReactNode } from "react";

export const sectionHeading = "mt-4 font-heading text-[24px] font-bold leading-[1.5] tracking-[-0.05em] text-[#0A1628] sm:text-[36px] md:text-[42px]";
export const darkSectionHeading = "mt-4 font-heading text-[24px] font-bold leading-[1.06] tracking-[-0.05em] text-white sm:text-[36px] md:text-[42px]";
export const bodyText = "text-[17px] leading-[1.8] tracking-[-0.01em] text-[#233247] md:text-[18px]";
export const sectionPadding = "py-16 sm:py-20 md:py-24";
export const sectionGap = "gap-6 sm:gap-8 md:gap-10";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return <p className={`text-sm font-bold uppercase tracking-[0.22em] ${dark ? "text-[#F3DE91]" : "text-[#9A7B24]"}`}>{children}</p>;
}
