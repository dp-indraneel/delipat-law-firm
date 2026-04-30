import { ReactNode } from "react";

export function AnimatedSection({ children, className = "", id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}
