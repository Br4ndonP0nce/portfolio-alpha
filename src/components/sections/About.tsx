// src/components/sections/About.tsx
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Zap,
  TrendingUp,
  Users,
  Rocket,
  CheckCircle,
  ArrowUpRight,
} from "lucide-react";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const stats = [
    { number: "5+", label: "Countries", icon: TrendingUp },
    { number: "10000+", label: "lines of code", icon: Zap },
    { number: "15+", label: "Businesses Transformed", icon: Users },
  ];

  const capabilities = [
    "Zero-downtime digital transformation",
    "AI-powered business automation",
    "Blockchain integration expertise",
    "Future-proof architecture design",
    "Performance optimization mastery",
    "Security-first development",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 px-4 md:px-0 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 -left-40 h-[400px] w-[400px] rounded-full blur-[120px]"
          animate={{
            background: [
              "radial-gradient(circle, rgba(255,107,0,0.1) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(85,66,255,0.1) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(255,107,0,0.1) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto relative z-10 md:px-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
        >
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Section Badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2 }}
            >
              <div className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span className="text-sm font-medium text-white/80 font-inter">
                THE TRANSFORMATION SPECIALISTS
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black font-urbanist leading-tight">
                <span className="brand-orange">Everything</span> your business
                needs <br />
                to <span className="brand-blue">grow and sell</span> more
              </h2>

              <p className="text-xl text-white/70 font-inter leading-relaxed max-w-2xl">
                While others talk about digital transformation, we deliver it.
                Our battle-tested approach has connected, enhanced and built
                with more than{" "}
                <span className="brand-yellow font-semibold">15+</span>{" "}
                companies around the globe
              </p>
            </motion.div>

            {/* Capabilities Grid */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ delay: 0.5 }}
            >
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 text-white/80 font-inter"
                  initial={{ opacity: 0, x: -20 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                  }
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 brand-orange flex-shrink-0" />
                  <span>{capability}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
            >
              <a
                className="group inline-flex items-center gap-2 text-brand-orange font-semibold hover:text-brand-orange/80 transition-colors font-urbanist"
                href="#contact"
              >
                See how we do it
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </motion.div>
          </div>

          {/* Right Column - Interactive Terminal */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Terminal Window */}
            <div className="bg-black/60 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <Code2 className="h-4 w-4 brand-orange ml-2" />
                  <span className="text-white/60 text-sm font-mono">
                    transformation.exe
                  </span>
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm space-y-3">
                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-white/40">$</span>
                  <span className="text-white">
                    npm install business-transformation
                  </span>
                </motion.div>

                <motion.div
                  className="text-yellow-400"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 0.8 }}
                >
                  <span>⚡ Installing enterprise-grade solutions...</span>
                </motion.div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 1.0 }}
                >
                  <div className="text-green-400">
                    ✓ Web3/Web2 Integration Complete
                  </div>
                  <div className="text-green-400">
                    ✓ AI Automation Systems Online
                  </div>
                  <div className="text-green-400">
                    ✓ Blockchain Infrastructure Ready
                  </div>
                  <div className="text-green-400">
                    ✓ Performance Optimized (10x faster)
                  </div>
                  <div className="text-green-400">
                    ✓ Security Protocols Activated
                  </div>
                </motion.div>

                <motion.div
                  className="flex items-center gap-2 pt-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                  }
                  transition={{ delay: 1.4 }}
                >
                  <span className="text-white/40">$</span>
                  <motion.span
                    className="text-white"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    _
                  </motion.span>
                </motion.div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -top-6 -right-6 grid grid-cols-2 gap-3">
              {stats.slice(0, 2).map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center min-w-[100px]"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1, y: 0 }
                        : { opacity: 0, scale: 0.8, y: 20 }
                    }
                    transition={{ delay: 1.6 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(0,0,0,0.6)",
                    }}
                  >
                    <Icon className="h-5 w-5 brand-orange mx-auto mb-1" />
                    <div className="text-lg font-bold text-white font-urbanist">
                      {stat.number}
                    </div>
                    <div className="text-xs text-white/60 font-inter">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="absolute -bottom-6 -left-6 grid grid-cols-2 gap-3">
              {stats.slice(2, 4).map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center min-w-[100px]"
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1, y: 0 }
                        : { opacity: 0, scale: 0.8, y: 20 }
                    }
                    transition={{ delay: 1.8 + index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(0,0,0,0.6)",
                    }}
                  >
                    <Icon className="h-5 w-5 brand-blue mx-auto mb-1" />
                    <div className="text-lg font-bold text-white font-urbanist">
                      {stat.number}
                    </div>
                    <div className="text-xs text-white/60 font-inter">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
