// src/components/sections/contact.tsx
"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Twitter, Send, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // This would be where you'd handle the actual form submission
    // For demo purposes, we'll just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });

    // Reset the submitted state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
        stiffness: 50,
      },
    },
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <motion.div
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Left side - Chat bubbles */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div
              className="bg-muted/60 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl p-6 w-4/5"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-2">Let's work together!</h3>
              <p className="text-white/70">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </motion.div>

            <motion.div
              className="bg-primary/10 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl p-6 w-4/5 ml-auto"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-2">Sure, let's chat!</h3>
              <p className="text-white/70 mb-4">
                Fill out the form or reach me directly through one of these
                platforms.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Contact form */}
          <motion.div variants={itemVariants}>
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 bg-black/20 p-6 rounded-lg border border-white/10"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium block mb-1"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    disabled={isSubmitting || isSubmitted}
                    required
                    className="bg-black/40 border-white/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium block mb-1"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    disabled={isSubmitting || isSubmitted}
                    required
                    className="bg-black/40 border-white/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium block mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    value={formState.message}
                    onChange={handleChange}
                    disabled={isSubmitting || isSubmitted}
                    required
                    className="min-h-[120px] bg-black/40 border-white/10"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className={cn(
                  "w-full",
                  isSubmitted && "bg-green-600 hover:bg-green-700"
                )}
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4"
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
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </motion.form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
