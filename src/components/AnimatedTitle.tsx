// src/components/ui/animated-title.tsx
("use client");

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTitleProps {
  title: string;
  containerClass?: string;
  textSize?: string;
  textColor?: string;
  once?: boolean;
}

export function AnimatedTitle({
  title,
  containerClass,
  textSize = "text-4xl md:text-5xl lg:text-6xl",
  textColor = "text-white",
  once = true,
}: AnimatedTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });

  // Split the title by line break
  const lines = title.split("<br />");

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const wordAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateY: 30,
      rotateX: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div
      ref={ref}
      className={cn("overflow-hidden", containerClass, textSize, textColor)}
    >
      {lines.map((line, lineIndex) => (
        <div
          key={lineIndex}
          className="flex flex-wrap items-center justify-center md:justify-start gap-2 md:gap-3 mb-2"
        >
          <motion.div
            className="flex flex-wrap gap-2"
            variants={container}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {line.split(" ").map((word, wordIndex) => {
              // Check if the word contains HTML (like <span>)
              const hasHtml = word.includes("<");

              return (
                <motion.span
                  key={`${lineIndex}-${wordIndex}`}
                  className="inline-block origin-bottom"
                  variants={wordAnimation}
                  dangerouslySetInnerHTML={
                    hasHtml ? { __html: word } : undefined
                  }
                >
                  {!hasHtml ? word : undefined}
                </motion.span>
              );
            })}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
