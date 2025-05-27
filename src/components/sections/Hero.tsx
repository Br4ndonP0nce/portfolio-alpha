// src/components/sections/Hero.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Zap,
  TrendingUp,
  Rocket,
  Target,
} from "lucide-react";

// Types
interface PowerWord {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Power words that rotate - focused on transformation outcomes
  const powerWords: PowerWord[] = [
    { text: "CONVERT", icon: Target, color: "brand-orange" },
    { text: "FUTURIZE", icon: Rocket, color: "brand-blue" },
    { text: "GROW", icon: TrendingUp, color: "brand-yellow" },
    { text: "ACTIVATE", icon: Zap, color: "brand-orange" },
  ];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % powerWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [powerWords.length]);

  const currentWord = powerWords[currentWordIndex];
  const CurrentIcon = currentWord?.icon || Target;

  return (
    <motion.div
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-grid"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-black/90" />

        {/* Animated Orbs */}
        <motion.div
          style={{ y, opacity }}
          className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full blur-[150px]"
          animate={{
            background: [
              "radial-gradient(circle, rgba(85,66,255,0.2) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(255,107,0,0.2) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(255,213,0,0.2) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(85,66,255,0.2) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          style={{ y, opacity }}
          className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-[150px]"
          animate={{
            background: [
              "radial-gradient(circle, rgba(255,107,0,0.15) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(255,213,0,0.15) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(85,66,255,0.15) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(255,107,0,0.15) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black font-urbanist tracking-tighter leading-none"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="block text-white mb-2">WE</span>

                {/* Rotating Power Words */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentWordIndex}
                    className={`block ${currentWord.color} flex items-center justify-center gap-6`}
                    initial={{ opacity: 0, y: 100, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    exit={{ opacity: 0, y: -100, rotateX: 90 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <CurrentIcon className="h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24" />
                    <span className="font-urbanist">{currentWord.text}</span>
                  </motion.div>
                </AnimatePresence>

                <span className="block text-white mt-2">BUSINESSES</span>
              </motion.h1>

              {/* Value Proposition - The Promise */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <p className="text-xl md:text-2xl lg:text-3xl text-white/70 max-w-4xl mx-auto font-inter leading-relaxed">
                  From{" "}
                  <span className="brand-orange font-semibold">
                    outdated systems
                  </span>{" "}
                  to{" "}
                  <span className="brand-blue font-semibold">
                    digital empires
                  </span>
                  .
                </p>
                <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto font-inter">
                  We don't just build—we{" "}
                  <span className="brand-yellow font-semibold">transform</span>{" "}
                  your entire business DNA.
                </p>
              </motion.div>
            </div>

            {/* Social Proof / Benefits */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              {[
                { text: "10X Revenue Growth", icon: "📈" },
                { text: "Future-Proof Tech", icon: "🚀" },

                { text: "Competitive Edge", icon: "⚡" },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 hover:bg-white/10 transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                    borderColor: "rgba(255,255,255,0.2)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.5 + index * 0.1 }}
                >
                  <span className="text-lg">{benefit.icon}</span>
                  <span className="text-white/80 text-sm font-medium font-inter">
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

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
                    className="group inline-flex items-center gap-3 bg-brand-orange hover:bg-brand-orange/90 text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl font-urbanist"
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
                    className="inline-flex items-center gap-3 bg-transparent border-2 border-white/30 hover:border-white/50 hover:bg-white/5 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 font-urbanist"
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
      <motion.div
        className=" py-10 z-10 !text-2xl"
        animate={{
          y: [0, 10, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 font-medium tracking-wider font-inter">
            SCROLL TO DISCOVER
          </span>
          <ChevronDown className="h-6 w-6 text-white/60" />
        </div>
      </motion.div>

      {/* Background Moving Text */}
      <motion.div
        className="absolute bottom-0 right-0 z-0 overflow-hidden pointer-events-none select-none"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.3], [0.05, 0]),
        }}
      >
        <motion.h2
          className="text-[12rem] md:text-[16rem] lg:text-[20rem] font-black text-white/5 leading-none font-urbanist"
          animate={{ x: [0, -100, 0] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          TRANSFORM
        </motion.h2>
      </motion.div>
    </motion.div>
  );
}
