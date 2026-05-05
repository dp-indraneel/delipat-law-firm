"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function RevealBlock({
  children,
  delay = 0,
  className = "",
  scale = 1,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  scale?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.22 }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
