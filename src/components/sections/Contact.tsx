// src/components/sections/Contact.tsx
"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Send,
  CheckCircle,
  Linkedin,
  Twitter,
  MessageCircle,
  Calendar,
  Zap,
  Clock,
  Shield,
  Star,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
    projectType: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("https://formspree.io/f/xzzeojyd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        company: "",
        budget: "",
        message: "",
        projectType: "",
      });

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  const projectTypes = [
    "Web Development",
    "Mobile App",
    "Web3/Blockchain",
    "AI Integration",
    "E-commerce",
    "Custom Software",
  ];

  const budgetRanges = [
    "$5K - $15K",
    "$15K - $50K",
    "$50K - $100K",
    "$100K - $250K",
    "$250K+",
  ];

  const guarantees = [
    { icon: Clock, text: "48-hour response guarantee", color: "brand-orange" },
    { icon: Shield, text: "100% confidentiality assured", color: "brand-blue" },
    {
      icon: Star,
      text: "Free strategy session included",
      color: "brand-yellow",
    },
    { icon: Zap, text: "Rapid project kickoff", color: "brand-orange" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/poncearagonbrandon?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      icon: Linkedin,
      color: "hover:text-blue-400",
      followers: "Reach out to me",
    },
    {
      name: "Twitter",
      href: "https://x.com/brandon_ponce1",
      icon: Twitter,
      color: "hover:text-blue-300",
      followers: "Reach out to me",
    },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 px-4 md:px-0 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute top-1/4 right-0 h-[600px] w-[600px] rounded-full blur-[150px]"
          animate={{
            background: [
              "radial-gradient(circle, rgba(255,107,0,0.1) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(85,66,255,0.1) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(255,213,0,0.1) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(255,107,0,0.1) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-brand-orange to-brand-blue rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            <MessageCircle className="h-4 w-4 brand-orange" />
            <span className="text-sm font-medium text-white/80 font-inter">
              LET'S BUILD SOMETHING EXTRAORDINARY
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-urbanist mb-6">
            <span className="text-white">Ready to </span>
            <span className="brand-orange">Transform</span>
            <br />
            <span className="text-white">Your Business?</span>
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto font-inter leading-relaxed">
            Join the ranks of visionary leaders who chose to{" "}
            <span className="brand-yellow font-semibold">future-proof</span>{" "}
            their business. Your transformation starts with a single
            conversation.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 md:px-20">
          {/* Left Column - Conversational Messages */}
          <motion.div
            className="lg:col-span-1 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ delay: 0.3 }}
          >
            {/* Chat Bubbles */}
            <div className="space-y-6">
              <motion.div
                className="bg-gradient-to-br from-brand-orange/20 to-brand-orange/5 backdrop-blur-sm border border-brand-orange/20 rounded-3xl rounded-tl-lg p-6 max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.5 }}
              >
                <h3 className="text-xl font-bold mb-3 font-urbanist text-white">
                  🚀 Ready to take the next step?
                </h3>
                <p className="text-white/80 font-inter leading-relaxed">
                  Want to know how we can help you generate{" "}
                  <span className="brand-orange font-semibold">more </span>
                  revenue? Lets talk about your project.
                </p>
              </motion.div>
            </div>

            {/* Guarantees */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.9 }}
            >
              <h4 className="text-lg font-semibold text-white font-urbanist mb-4">
                Our Commitment to You:
              </h4>
              {guarantees.map((guarantee, index) => {
                const Icon = guarantee.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: 1.0 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Icon className={`h-5 w-5 ${guarantee.color}`} />
                    <span className="text-white/80 font-inter">
                      {guarantee.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2 }}
            >
              <h4 className="text-lg font-semibold text-white font-urbanist">
                Connect Directly:
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 ${social.color} transition-all`}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon className="h-6 w-6 mb-2" />
                      <span className="text-xs text-white/60 font-inter text-center">
                        {social.followers}
                      </span>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Enhanced Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white font-urbanist mb-2">
                    Get Your Free Strategy Session
                  </h3>
                  <p className="text-white/60 font-inter">
                    Tell us about your vision, and we'll show you how to make it
                    reality.
                  </p>
                </div>

                {error && (
                  <div className="bg-red-500/20 border border-red-500/30 text-red-300 p-4 rounded-xl text-sm">
                    {error}
                  </div>
                )}

                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-white/80 font-inter"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formState.name}
                      onChange={handleChange}
                      disabled={isSubmitting || isSubmitted}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all font-inter"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-white/80 font-inter"
                    >
                      Business Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formState.email}
                      onChange={handleChange}
                      disabled={isSubmitting || isSubmitted}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all font-inter"
                    />
                  </div>

                  {/* Company */}
                  <div className="space-y-2">
                    <label
                      htmlFor="company"
                      className="text-sm font-medium text-white/80 font-inter"
                    >
                      Company Name
                    </label>
                    <input
                      id="company"
                      name="company"
                      placeholder="Your Company Inc."
                      value={formState.company}
                      onChange={handleChange}
                      disabled={isSubmitting || isSubmitted}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all font-inter"
                    />
                  </div>

                  {/* Project Type */}
                  <div className="space-y-2">
                    <label
                      htmlFor="projectType"
                      className="text-sm font-medium text-white/80 font-inter"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formState.projectType}
                      onChange={handleChange}
                      disabled={isSubmitting || isSubmitted}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all font-inter"
                    >
                      <option value="" className="bg-black">
                        Select project type
                      </option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type} className="bg-black">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="space-y-2 md:col-span-2">
                    <label
                      htmlFor="budget"
                      className="text-sm font-medium text-white/80 font-inter"
                    >
                      Investment Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formState.budget}
                      onChange={handleChange}
                      disabled={isSubmitting || isSubmitted}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all font-inter"
                    >
                      <option value="" className="bg-black">
                        Select your investment range
                      </option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range} className="bg-black">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-white/80 font-inter"
                  >
                    Tell us about your vision *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Describe your project, goals, and how you want to transform your business..."
                    value={formState.message}
                    onChange={handleChange}
                    disabled={isSubmitting || isSubmitted}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition-all resize-none font-inter"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className={`w-full py-4 px-8 font-bold text-lg rounded-xl transition-all font-urbanist ${
                    isSubmitted
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-brand-orange hover:bg-brand-orange/90 text-black"
                  }`}
                  disabled={isSubmitting || isSubmitted}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-3">
                      <svg
                        className="animate-spin h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending Your Message...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center justify-center gap-3">
                      <CheckCircle className="h-5 w-5" />
                      Strategy Session Booked! Check Your Email
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-3">
                      <Calendar className="h-5 w-5" />
                      Book My Free Strategy Session
                    </span>
                  )}
                </motion.button>

                {/* Footer Text */}
                <div className="text-center text-white/50 text-sm font-inter">
                  <p>
                    ⚡ Free consultation • No obligation • 48-hour response
                    guarantee
                  </p>
                  <p className="mt-2">
                    By submitting this form, you agree to receive communication
                    from DecodeNext about your project.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
