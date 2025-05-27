// src/components/sections/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Zap,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ArrowRight,
  Linkedin,
  Twitter,
  Github,
  ExternalLink,
  Star,
  Shield,
  Clock,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Services",
      links: [
        {
          name: "Web3 Development",
          href: "#tech",
          description: "Blockchain & DeFi solutions",
        },
        {
          name: "AI Integration",
          href: "#tech",
          description: "Smart automation systems",
        },
        {
          name: "Full-Stack Development",
          href: "#tech",
          description: "End-to-end web solutions",
        },
        {
          name: "Digital Transformation",
          href: "#about",
          description: "Complete business overhaul",
        },
      ],
    },
    {
      title: "Company",
      links: [
        {
          name: "About Us",
          href: "#about",
          description: "Our transformation story",
        },
        {
          name: "Success Stories",
          href: "#projects",
          description: "Client transformations",
        },
        {
          name: "Tech Stack",
          href: "#tech",
          description: "Our cutting-edge tools",
        },
        {
          name: "Contact",
          href: "#contact",
          description: "Start your project",
        },
      ],
    },
    /*{
      title: "Resources",
      links: [
        {
          name: "Case Studies",
          href: "#projects",
          description: "Deep-dive project analysis",
        },
        {
          name: "Tech Blog",
          href: "/blog",
          description: "Industry insights & trends",
        },
        {
          name: "Free Consultation",
          href: "#contact",
          description: "Strategy session",
        },
        {
          name: "Project Estimates",
          href: "#contact",
          description: "Get instant pricing",
        },
      ],
    },*/
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/poncearagonbrandon?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: Linkedin,
      color: "hover:text-blue-400",
      followers: "5K+",
    },
    {
      name: "Twitter",
      href: "https://x.com/brandon_ponce1",
      icon: Twitter,
      color: "hover:text-blue-300",
      followers: "Tech",
    },
    {
      name: "GitHub",
      href: "https://github.com",
      icon: Github,
      color: "hover:text-white",
      followers: "Code",
    },
    {
      name: "WhatsApp",
      href: "http://wa.me/525522838461",
      icon: FaWhatsapp,
      color: "hover:text-green-400",
      followers: "Chat",
    },
  ];

  const trustSignals = [
    { icon: Star, text: "5-Star Client Rating", color: "text-yellow-400" },
    { icon: Shield, text: "100% Secure Process", color: "text-green-400" },
    { icon: Clock, text: "48h Response Time", color: "text-blue-400" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@decodenext.dev",
      href: "mailto:hello@decodenext.dev",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+52 55 2283 8461",
      href: "tel:+525522838461",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Guadalajara, Mexico",
      href: "#contact",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black border-t border-white/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full blur-[120px]"
          animate={{
            background: [
              "radial-gradient(circle, rgba(255,107,0,0.05) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(85,66,255,0.05) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(255,213,0,0.05) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(255,107,0,0.05) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-4 space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="p-3 bg-gradient-to-br from-brand-orange/20 to-brand-blue/20 rounded-xl backdrop-blur-sm border border-white/10">
                  <Zap className="h-8 w-8 brand-orange" />
                </div>
                <div>
                  <h2 className="font-black text-2xl font-urbanist tracking-tight">
                    <span className="brand-orange">DECODE</span>
                    <span className="text-white">NEXT</span>
                  </h2>
                  <p className="text-white/60 text-sm font-inter">
                    Business Transformation Lab
                  </p>
                </div>
              </div>

              {/* Mission Statement */}
              <div className="space-y-4">
                <p className="text-white/80 font-inter leading-relaxed">
                  We transform businesses through cutting-edge technology,
                  helping visionary leaders build digital empires that dominate
                  their markets.
                </p>

                <p className="text-white/60 font-inter text-sm">
                  <span className="brand-yellow font-semibold">$50M+</span> in
                  client value generated •
                  <span className="brand-orange font-semibold"> 100+</span>{" "}
                  successful transformations
                </p>
              </div>

              {/* Trust Signals */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {trustSignals.map((signal, index) => {
                  const Icon = signal.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <Icon className={`h-4 w-4 ${signal.color}`} />
                      <span className="text-white/80 text-xs font-inter">
                        {signal.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA */}
              <motion.div
                className="pt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-3 px-6 py-3 bg-brand-orange hover:bg-brand-orange/90 text-black font-bold rounded-xl transition-all font-urbanist"
                >
                  <Calendar className="h-4 w-4" />
                  Book Free Strategy Call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Navigation Sections */}
            <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              {footerSections.map((section, sectionIndex) => (
                <motion.div
                  key={section.title}
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * sectionIndex }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-bold text-white font-urbanist">
                    {section.title}
                  </h3>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + linkIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Link
                          href={link.href}
                          className="group flex items-start gap-2 text-white/60 hover:text-white transition-colors"
                        >
                          <div className="flex-1">
                            <div className="font-medium font-inter group-hover:text-brand-orange transition-colors">
                              {link.name}
                            </div>
                            <div className="text-xs text-white/40 mt-1">
                              {link.description}
                            </div>
                          </div>
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-50 transition-all" />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Contact Section */}
          </div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="py-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-white/60 font-inter">
              <p className="text-sm">
                © {currentYear} DecodeNext. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-xs">
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
                <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
                <span className="w-1 h-1 bg-white/30 rounded-full"></span>
                <Link
                  href="/cookies"
                  className="hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="flex items-center gap-4">
              <span className="text-white/60 text-sm font-inter">
                Ready to transform?
              </span>
              <motion.a
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg transition-all font-inter text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#contact"
              >
                Get Started
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Floating "Back to Top" */}
        <motion.button
          className="fixed bottom-8 right-8 p-3 bg-brand-orange hover:bg-brand-orange/90 text-black rounded-full shadow-lg hover:shadow-xl transition-all z-50"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowRight className="h-5 w-5 -rotate-90" />
        </motion.button>
      </div>
    </footer>
  );
}
