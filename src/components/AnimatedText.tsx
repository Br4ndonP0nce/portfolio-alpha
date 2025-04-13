// src/components/ui/animated-text.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  highlightWords?: string[];
  highlightClassName?: string;
}

export function AnimatedText({
  text,
  className,
  once = true,
  highlightWords = [],
  highlightClassName = "text-brand-orange",
}: AnimatedTextProps) {
  // Split the text into words
  const words = text.split(" ");

  // Container animation
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  // Child (word) animation
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={cn("overflow-hidden", className)}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-1 last:mr-0"
          variants={child}
        >
          <span
            className={highlightWords.includes(word) ? highlightClassName : ""}
          >
            {word}
          </span>
        </motion.span>
      ))}
    </motion.div>
  );
}
