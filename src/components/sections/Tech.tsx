// src/components/sections/Tech.tsx
"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  Shield,
  Rocket,
  Brain,
  Globe,
  Database,
  ChevronRight,
  Star,
} from "lucide-react";

// Enhanced tech categories with more persuasive messaging
const techCategories = [
  {
    title: "Fullstack ",
    subtitle: "End-to-end solutions that scale",
    highlightColor: "brand-orange",
    icon: Globe,
    items: [
      {
        name: "Lightning-fast backend architecture",
        impact: "99.9% uptime guaranteed",
      },
      {
        name: "Pixel-perfect frontend experiences",
        impact: "40% higher conversion rates",
      },
      {
        name: "Database optimization mastery",
        impact: "10x faster query performance",
      },
      {
        name: "Cloud infrastructure that never sleeps",
        impact: "Auto-scaling for any demand",
      },
      {
        name: "Enterprise-grade security protocols",
        impact: "Zero breach track record",
      },
    ],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "Web3 & Blockchain ",
    subtitle: "Future-proof digital assets",
    highlightColor: "brand-blue",
    icon: Shield,
    items: [
      {
        name: "Smart contract development & auditing",
        impact: "100% secure deployments",
      },
      {
        name: "DeFi protocol integration",
        impact: "Million-dollar TVL handling",
      },
      { name: "NFT marketplace creation", impact: "Celebrity client launches" },
      {
        name: "Token economics & launch strategy",
        impact: "Multi-million raises",
      },
      {
        name: "Cross-chain bridge development",
        impact: "Seamless asset transfers",
      },
    ],
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "AI & Automation ",
    subtitle: "Intelligent business transformation",
    highlightColor: "brand-yellow",
    icon: Brain,
    items: [
      { name: "Custom AI agent development", impact: "80% task automation" },
      {
        name: "Machine learning model training",
        impact: "Predictive accuracy >95%",
      },
      {
        name: "Natural language processing",
        impact: "Human-like interactions",
      },
      {
        name: "Computer vision solutions",
        impact: "Real-time object detection",
      },
      {
        name: "Workflow automation systems",
        impact: "500+ hours saved monthly",
      },
    ],
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Performance & Scale Engineering",
    subtitle: "Built for millions of users",
    highlightColor: "brand-blue",
    icon: Rocket,
    items: [
      {
        name: "Microservices architecture design",
        impact: "Infinite horizontal scaling",
      },
      {
        name: "CDN & caching optimization",
        impact: "Sub-second load times globally",
      },
      {
        name: "Database sharding & replication",
        impact: "Handles billion+ records",
      },
      {
        name: "Real-time data processing",
        impact: "Live analytics & insights",
      },
      {
        name: "Load balancing & failover",
        impact: "Zero downtime deployments",
      },
    ],
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
];

export function Tech() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
      },
    },
  };

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

        {/* Floating Tech Icons */}
      </div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }
            }
            transition={{ delay: 0.2 }}
          >
            <Zap className="h-4 w-4 brand-orange" />
            <span className="text-sm font-medium text-white/80 font-inter">
              CUTTING-EDGE TECHNOLOGY STACK
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-urbanist mb-6">
            <span className="text-white">Our </span>
            <span className="brand-yellow">Tech</span>
            <br />
            <span className="brand-orange">Arsenal</span>
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto font-inter leading-relaxed">
            We <span className="brand-blue font-semibold">simplify</span> So you
            do what you love. Keep building
          </p>
        </motion.div>

        {/* Tech Categories Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
                onMouseEnter={() => setActiveCategory(index)}
              >
                <div
                  className={`
                  relative p-8 rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm
                  hover:bg-black/40 hover:border-white/20 transition-all duration-500
                  ${
                    activeCategory === index
                      ? "ring-2 ring-white/20 bg-black/40"
                      : ""
                  }
                `}
                >
                  {/* Background Gradient */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm group-hover:bg-white/20 transition-colors">
                          <Icon
                            className={`h-6 w-6 ${category.highlightColor}`}
                          />
                        </div>
                        <div>
                          <h3
                            className={`text-2xl font-bold font-urbanist ${category.highlightColor} mb-1`}
                          >
                            {category.title.split(" ")[0]}{" "}
                            <span className="text-white">
                              {category.title.split(" ").slice(1).join(" ")}
                            </span>
                          </h3>
                          <p className="text-white/60 font-inter text-sm">
                            {category.subtitle}
                          </p>
                        </div>
                      </div>

                      <motion.div
                        className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors"
                        whileHover={{ rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronRight className="h-4 w-4 text-white/60" />
                      </motion.div>
                    </div>

                    {/* Items List */}
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <motion.div
                          key={itemIndex}
                          className="flex items-start gap-3 group/item hover:bg-white/5 p-3 rounded-lg transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          animate={
                            isInView
                              ? { opacity: 1, x: 0 }
                              : { opacity: 0, x: -20 }
                          }
                          transition={{ delay: 0.5 + itemIndex * 0.1 }}
                        >
                          <Star className="h-4 w-4 brand-orange mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="text-white font-medium font-inter mb-1">
                              {item.name}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <motion.div
                      className="mt-6 pt-6 border-t border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                      }
                      transition={{ delay: 0.9 + index * 0.1 }}
                    >
                      <button
                        className={`
                        group/cta inline-flex items-center gap-2 text-sm font-semibold 
                        ${category.highlightColor} hover:text-white transition-colors font-urbanist
                      `}
                      >
                        Explore this technology
                        <ChevronRight className="h-3 w-3 transition-transform group-hover/cta:translate-x-1" />
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2 }}
        >
          <div className="inline-flex items-center gap-6 p-8 bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white font-urbanist mb-2">
                Ready to leverage this tech stack?
              </h3>
              <p className="text-white/70 font-inter">
                Get a free technical consultation and see how we can transform
                your business.
              </p>
            </div>
            <motion.button
              className="px-8 py-4 bg-brand-orange hover:bg-brand-orange/90 text-black font-bold rounded-xl transition-colors font-urbanist whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
