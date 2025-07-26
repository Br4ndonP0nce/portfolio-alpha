// src/components/sections/Tech.tsx
"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import DecryptedText from "../animated/decryptedText";
import { Globe, Shield, Brain, Rocket } from "lucide-react";

// Tech stacks organized by specialization
const techStacks = [
  {
    title: "Full Stack Development",
    subtitle: "End-to-end web applications",
    icon: Globe,
    color: "text-orange-400",
    borderColor: "border-orange-500/30",
    bgColor: "bg-orange-500/5",
    command: "npm run build",
    technologies: [
      "React • Next.js • TypeScript",
      "Node.js • Express • FastAPI",
      "PostgreSQL • MongoDB • Redis",
      "AWS • Docker • Kubernetes",
      "GraphQL • REST APIs",
    ],
  },
  {
    title: "Blockchain & Web3",
    subtitle: "Decentralized applications",
    icon: Shield,
    color: "text-blue-400",
    borderColor: "border-blue-500/30",
    bgColor: "bg-blue-500/5",
    command: "truffle deploy",
    technologies: [
      "Solidity • Rust • Web3.js",
      "Ethereum • Polygon • Solana",
      "DeFi protocols • Smart contracts",
      "MetaMask • WalletConnect",
      "IPFS • Chainlink oracles",
    ],
  },
  {
    title: "AI & Machine Learning",
    subtitle: "Intelligent automation",
    icon: Brain,
    color: "text-yellow-400",
    borderColor: "border-yellow-500/30",
    bgColor: "bg-yellow-500/5",
    command: "python train.py",
    technologies: [
      "TensorFlow • PyTorch • OpenAI",
      "Computer vision • NLP",
      "Custom AI agents • Workflows",
      "Data pipelines • MLOps",
      "Neural networks • Deep learning",
    ],
  },
  {
    title: "Cloud Architecture",
    subtitle: "Scalable infrastructure",
    icon: Rocket,
    color: "text-cyan-400",
    borderColor: "border-cyan-500/30",
    bgColor: "bg-cyan-500/5",
    command: "terraform apply",
    technologies: [
      "AWS • GCP • Azure • Multi-cloud",
      "Docker • Kubernetes • Serverless",
      "Infrastructure as Code • Terraform",
      "CI/CD pipelines • GitOps",
      "Monitoring • Observability • SRE",
    ],
  },
];

export function Tech() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1, margin: "200px" });

  return (
    <section
      id="tech"
      ref={sectionRef}
      className="py-32 px-4 md:px-0 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full blur-[150px]"
          animate={{
            background: [
              "radial-gradient(circle, rgba(85,66,255,0.1) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(255,213,0,0.1) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(255,107,0,0.1) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(85,66,255,0.1) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white/80 font-armstrong">
              TECHNOLOGY STACK
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-armstrong-extrabold mb-6">
            <span className="text-white">Our </span>
            <span className="brand-yellow">Tech</span>
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto font-armstrong-oblique leading-relaxed">
            Modern technologies powering scalable solutions
          </p>
        </motion.div>

        {/* 4 Console Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {techStacks.map((stack, index) => {
            const Icon = stack.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Console Window */}
                <div
                  className={`bg-black/90 border-2 ${stack.borderColor} rounded-lg shadow-2xl backdrop-blur-sm overflow-hidden`}
                >
                  {/* Console Header Bar */}
                  <div
                    className={`flex items-center justify-between p-3 border-b ${stack.borderColor} ${stack.bgColor}`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full"></div>
                        <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
                      </div>
                      <span
                        className={`${stack.color} font-ubuntu text-xs ml-2`}
                      >
                        {stack.command}
                      </span>
                    </div>
                    <Icon className={`h-4 w-4 ${stack.color}`} />
                  </div>

                  {/* Console Content */}
                  <div className="p-4">
                    {/* Title with DecryptedText */}
                    <div className="mb-4">
                      <DecryptedText
                        text={stack.title}
                        className={`text-lg font-bold font-armstrong-extrabold ${stack.color}`}
                        encryptedClassName="text-white/30 font-armstrong-extrabold"
                        animateOn="view"
                        speed={50}
                        sequential={true}
                        revealDirection="start"
                      />
                      <p className="text-white/60 font-armstrong text-sm mt-1">
                        {stack.subtitle}
                      </p>
                    </div>

                    {/* Technologies List */}
                    <div className="space-y-2">
                      {stack.technologies.map((tech, techIndex) => (
                        <div
                          key={techIndex}
                          className="flex items-start gap-2"
                        >
                          <span
                            className={`${stack.color} font-ubuntu text-xs mt-1`}
                          >
                            {">"}
                          </span>
                          <span className="text-white/80 font-ubuntu text-sm">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Status Line */}
                    <div className="mt-4 pt-3 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-2 h-2 bg-green-400 rounded-full animate-pulse`}
                        ></div>
                        <span className="text-green-400 font-ubuntu text-xs">
                          READY
                        </span>
                        <span className="text-white/40 font-ubuntu text-xs ml-auto">
                          v2.1.0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-6 p-8 bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white font-armstrong-extrabold mb-2">
                Ready to leverage this tech stack?
              </h3>
              <p className="text-white/70 font-armstrong-oblique">
                Get a free technical consultation and see how we can transform
                your business.
              </p>
            </div>
            <a
              href="#contact"
              className="px-8 py-4 bg-brand-orange hover:bg-brand-orange/90 text-black font-bold rounded-xl transition-all duration-300 font-armstrong whitespace-nowrap hover:scale-105 active:scale-95"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
