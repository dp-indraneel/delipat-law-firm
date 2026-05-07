"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type ProofCountNumberProps = {
  value: string;
};

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3);
}

export default function ProofCountNumber({ value }: ProofCountNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const duration = 950;
    const start = performance.now();

    const tick = (time: number) => {
      const nextProgress = Math.min((time - start) / duration, 1);
      setProgress(easeOutCubic(nextProgress));

      if (nextProgress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [isInView]);

  if (value === "$31K") {
    return <span ref={ref}>${Math.round(31 * progress)}K</span>;
  }

  if (value.startsWith("18")) {
    return (
      <span ref={ref}>
        <span></span>{Math.round(18 * progress)}% <span className="mx-1 text-[#C9A84C]/55">{"🡢"}</span>{" "}
        {Math.round(34 * progress)}%
      </span>
    );
  }

  return <span ref={ref}>{Math.round(42 * progress)}%</span>;
}
