// src/components/sections/hero.tsx
"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
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
  Code,
  Blocks,
  Globe,
  Zap,
} from "lucide-react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect for background elements
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Tech icons to showcase expertise
  const techIcons = [
    { icon: <Code className="h-6 w-6" />, label: "Web3" },
    { icon: <Blocks className="h-6 w-6" />, label: "Blockchain" },
    { icon: <Globe className="h-6 w-6" />, label: "Fullstack" },
    { icon: <Zap className="h-6 w-6" />, label: "AI" },
  ];

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden bg-grid">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/90 to-black/70"></div>
        <motion.div
          style={{ y, opacity }}
          className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-blue/30 blur-[120px]"
        ></motion.div>
        <motion.div
          style={{ y, opacity }}
          className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-brand-orange/20 blur-[120px]"
        ></motion.div>
      </div>

      {/* Large background text */}
      <motion.div
        className="absolute bottom-10 right-0 z-0 overflow-hidden"
        style={{ opacity: useTransform(scrollYProgress, [0, 0.5], [0.2, 0]) }}
      >
        <motion.h1
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.15 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[12rem] font-bold tracking-tighter text-white select-none"
        >
          WEB/APP
        </motion.h1>
      </motion.div>

      {/* Hero content */}
      <div className="container relative z-10 mx-auto flex min-h-screen items-center pt-20 px-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left content - Text */}
          <motion.div
            className="md:col-span-7 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Headline with animated text */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm backdrop-blur-sm border border-white/20">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-orange"></span>
              </span>
              <span>Transforming Ideas into Digital Reality</span>
            </div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-urbanist"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <span className="brand-orange">DE</span>CODE NEXT
              <span className="block mt-2 text-base md:text-xl font-normal font-inter text-white/80">
                Powering up your{" "}
                <span className="text-brand-orange">business</span> to reach new
                <span className="text-brand-blue"> heights</span>
              </span>
            </motion.h1>

            <motion.div
              className="space-y-4 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <p className="text-lg md:text-xl text-white/80 font-inter leading-relaxed">
                Full-stack Engineer & Software Specialist building the next
                generation of web applications that transform businesses.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {techIcons.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.8 + index * 0.1,
                      ease: "easeOut",
                    }}
                    className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1.5 text-sm backdrop-blur-sm border border-white/10"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              <Link href="#contact" className="btn btn-default btn-lg group">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#projects" className="btn btn-outline btn-lg">
                View Projects
              </Link>
            </motion.div>
          </motion.div>

          {/* Right content - Visual element */}
          <motion.div
            className="md:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="relative h-[400px] w-[400px]">
              {/* Modern abstract 3D-like shape */}
              <div className="absolute top-0 left-0 h-full w-full">
                <div className="absolute top-1/2 left-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/20 opacity-80"></div>
                <div className="absolute top-1/2 left-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/15 opacity-60"></div>
                <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 opacity-40"></div>

                {/* Animated dots/particles */}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-3 w-3 rounded-full bg-brand-orange"
                    style={{
                      top: `${20 + i * 15}%`,
                      left: `${20 + i * 15}%`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-3 w-3 rounded-full bg-brand-blue"
                    style={{
                      bottom: `${20 + i * 15}%`,
                      right: `${20 + i * 15}%`,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3 + 0.5,
                    }}
                  />
                ))}
              </div>

              {/* Center element */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  className="h-40 w-40 rounded-2xl bg-gradient-to-br from-brand-blue via-brand-blue/70 to-brand-orange/50 p-0.5"
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <div className="h-full w-full rounded-2xl bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
                    <svg viewBox="0 0 100 100" width="100%" height="100%">
                      <defs>
                        <linearGradient
                          id="grad"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#5542FF" />
                          <stop offset="100%" stopColor="#FF6B00" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="none"
                        stroke="url(#grad)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        d="M30,40 L70,40 M30,50 L70,50 M30,60 L70,60"
                      />
                      <motion.path
                        fill="none"
                        stroke="url(#grad)"
                        strokeWidth="4"
                        strokeLinecap="round"
                        d="M40,25 L60,25 M25,40 L25,60 M40,75 L60,75 M75,40 L75,60"
                        animate={{
                          pathLength: [0, 1, 0],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        animate={{
          y: [0, 10, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="h-8 w-8 text-white/70" />
      </motion.div>
    </div>
  );
}
