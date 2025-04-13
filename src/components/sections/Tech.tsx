// src/components/sections/tech.tsx
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { techCategories } from "@/data/project";

export function Tech() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
      },
    },
  };

  return (
    <section id="tech" ref={sectionRef} className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Our Tech
        </motion.h2>

        <div className="flex items-center justify-center text-center">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {techCategories.map((category, index) => (
              <motion.div
                key={index}
                className="space-y-4"
                variants={itemVariants}
              >
                <h3 className="text-2xl font-semibold">
                  <span className={category.highlightColor}>
                    {category.title.split(" ")[0]}
                  </span>{" "}
                  {category.title.split(" ").slice(1).join(" ")}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-center text-center justify-center"
                    >
                      <span className="text-brand-orange mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
