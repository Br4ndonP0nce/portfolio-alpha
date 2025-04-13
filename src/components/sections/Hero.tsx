// src/components/sections/hero.tsx
"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
        stiffness: 100,
      },
    },
  };

  const backgroundTextVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 0.2,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-20 bg-grid">
      {/* Background large text */}
      <motion.h1
        className="absolute bottom-5 right-5 z-0 text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] font-bold tracking-tighter text-blue-600/20 select-none"
        variants={backgroundTextVariants}
        initial="hidden"
        animate="visible"
      >
        Web3/Web2
      </motion.h1>

      {/* Main content */}
      <motion.div
        className="container relative z-10 h-full flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading"
          variants={itemVariants}
        >
          <span className="text-brand-orange">DE</span>CODE NEXT
        </motion.h1>

        <motion.div className="space-y-2 mb-8 max-w-md" variants={itemVariants}>
          <p className="text-xl md:text-2xl text-white/80">
            Computer Engineer | Web3/Web2 Developer/Consultant | Product
            Developer
          </p>
        </motion.div>

        <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
          <Button asChild size="lg">
            <Link href="#contact">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
