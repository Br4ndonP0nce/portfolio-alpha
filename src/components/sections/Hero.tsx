// src/components/sections/Hero.tsx
"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import RotatingText from "../animated/rotatingText";
import Noise from "../animated/Noise";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <motion.div
      ref={ref}
      className="min-h-screen w-full bg-[#0f0f0f] relative text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Circuit Board - Simplified for mobile */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40 md:opacity-100"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(193, 18, 31, 0.08) 19px, rgba(193, 18, 31, 0.08) 20px),
            repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(253, 240, 213, 0.05) 19px, rgba(253, 240, 213, 0.05) 20px)
          `,
          backgroundSize: "40px 40px, 40px 40px",
        }}
      />

      {/* Noise Overlay - Disabled on mobile for performance */}
      <div className="absolute inset-0 z-[2] pointer-events-none hidden md:block">
        <Noise
          patternSize={250}
          patternScaleX={1}
          patternScaleY={1}
          patternRefreshInterval={4}
          patternAlpha={5}
        />
      </div>

      {/* Main Hero Content */}
      <div className="container relative z-10 mx-auto flex min-h-screen items-center pt-20 px-5">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Status Badge - Builds Credibility */}
            <motion.div
              className="inline-flex items-center gap-3 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 px-6 py-3 text-sm"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(0,0,0,0.6)" }}
            >
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500" />
              </span>
              <span className="text-white/80 font-medium tracking-wide font-inter">
                THE BUSINESS TRANSFORMATION LAB
              </span>
            </motion.div>

            {/* Main Headline - The Hook */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-armstrong-extrabold tracking-tighter leading-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="block text-white mb-2 brand-yellow">WE</span>

                {/* Rotating Text Component */}
                <RotatingText
                  texts={["CONVERT", "FUTURIZE", "GROW", "ACTIVATE"]}
                  mainClassName="px-2 sm:px-2 md:px-3 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-armstrong-extrabold tracking-tighter leading-none brand-orange overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />

                <span className="block text-white mt-2 brand-yellow">
                  BUSINESSES
                </span>
              </motion.h1>

              {/* Value Proposition - The Promise */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl text-white/70 max-w-4xl mx-auto font-armstrong-oblique leading-relaxed">
                  From{" "}
                  <span className="brand-orange font-semibold">
                    outdated systems
                  </span>{" "}
                  to{" "}
                  <span className="brand-yellow font-semibold">
                    digital empires
                  </span>
                  .
                </p>
                <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-armstrong-oblique">
                  We don't just build—we{" "}
                  <span className="brand-orange font-semibold">transform</span>{" "}
                  your entire business DNA.
                </p>
              </motion.div>
            </div>

            {/* Call-to-Action Section - The Close */}
            <motion.div
              className="pt-12 space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Primary CTA */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#contact"
                    className="group inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold text-sm md:text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-urbanist"
                  >
                    START YOUR TRANSFORMATION
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>

                {/* Secondary CTA */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="#projects"
                    className="inline-flex items-center gap-3 bg-transparent border-2 border-brand-yellow/50 hover:border-brand-yellow hover:bg-brand-yellow/10 text-brand-yellow font-semibold text-sm md:text-lg px-8 py-4 rounded-full transition-all duration-300 font-urbanist"
                  >
                    SEE THE RESULTS
                  </Link>
                </motion.div>
              </div>

              {/* Risk Reversal */}
              <motion.p
                className="text-white/50 text-sm font-inter"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                ⚡ Free strategy session • No commitment required • Results
                guaranteed
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}

      {/* Background Moving Text - Disabled on mobile for performance */}
      <div className="absolute bottom-0 right-0 z-0 overflow-hidden pointer-events-none select-none hidden lg:block opacity-5">
        <h2 className="text-[20rem] font-black text-white/5 leading-none font-urbanist">
          TRANSFORM
        </h2>
      </div>
    </motion.div>
  );
}
