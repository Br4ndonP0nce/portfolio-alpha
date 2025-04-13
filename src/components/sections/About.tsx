// src/components/sections/about.tsx
"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2 } from "lucide-react";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={sectionRef} className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
            >
              <span className="text-brand-orange">Every</span>thing for your
              business needs
            </motion.h2>

            <motion.p
              className="text-lg text-white/80 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
            >
              Specialized in delivering comprehensive fullstack solutions that
              bridge the gap between traditional web technologies and blockchain
              innovation. From concept to deployment, I build scalable,
              user-focused digital experiences.
            </motion.p>

            <motion.p
              className="text-lg text-white/80 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
            >
              With expertise across the entire development lifecycle, I help
              businesses leverage cutting-edge technologies to solve real-world
              problems and create meaningful user experiences.
            </motion.p>
          </div>

          {/* Right Column - Code Block */}
          <motion.div
            className="bg-black/50 rounded-lg border border-white/10 p-6 font-mono text-sm md:text-base overflow-hidden"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4 text-brand-orange">
              <Code2 className="h-5 w-5" />
              <span>Terminal</span>
            </div>
            <div className="space-y-2">
              <motion.div
                className="flex gap-2"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ delay: 0.5 }}
              >
                <span className="text-gray-500">$</span>
                <span>npm i DecodeNext</span>
              </motion.div>
              <motion.div
                className="flex gap-2 text-yellow-500"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ delay: 0.6 }}
              >
                <span>installing...</span>
              </motion.div>
              <motion.div
                className="flex gap-2 text-green-500"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ delay: 0.7 }}
              >
                <span>Web3/web2 Fullstack</span>
              </motion.div>
              <motion.div
                className="flex gap-2 text-green-500"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ delay: 0.8 }}
              >
                <span>Project Lead</span>
              </motion.div>
              <motion.div
                className="flex gap-2 text-green-500"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ delay: 0.9 }}
              >
                <span>Business developer & Consultant</span>
              </motion.div>
              <motion.div
                className="flex gap-2 text-green-500"
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                }
                transition={{ delay: 1.0 }}
              >
                <span>AI & Blockchain Integration</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
