// src/components/sections/contact.tsx
"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Twitter, Send, CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
// No need to install additional dependencies for this solution

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
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Replace 'YOUR_FORMSPREE_ENDPOINT' with your actual Formspree endpoint
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
      setFormState({ name: "", email: "", message: "" });

      // Reset the submitted state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left side - Chat bubbles */}
          <div className="space-y-8">
            <div className="bg-muted/60 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl p-6 w-4/5">
              <h3 className="text-2xl font-bold mb-2 font-urbanist">
                Let's work together!
              </h3>
              <p className="text-white/70 font-inter">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
            </div>

            <div className="bg-primary/10 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl p-6 w-4/5 ml-auto">
              <h3 className="text-2xl font-bold mb-2 font-urbanist">
                Sure, let's chat!
              </h3>
              <p className="text-white/70 mb-4 font-inter">
                Fill out the form or reach me directly through one of these
                platforms.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/poncearagonbrandon?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://x.com/brandon_ponce1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a
                  href="http://wa.me/525522838461"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors duration-300"
                >
                  <FaWhatsapp className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Contact form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-black/20 p-6 rounded-lg border border-white/10"
            >
              <h3 className="text-2xl font-semibold mb-4 font-urbanist">
                Get in Touch
              </h3>

              {error && (
                <div className="bg-destructive/20 text-destructive-foreground p-3 rounded-md text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-medium block mb-1 font-inter"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    disabled={isSubmitting || isSubmitted}
                    required
                    className="input bg-black/40 border-white/10 w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="text-sm font-medium block mb-1 font-inter"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    disabled={isSubmitting || isSubmitted}
                    required
                    className="input bg-black/40 border-white/10 w-full"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium block mb-1 font-inter"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message..."
                    value={formState.message}
                    onChange={handleChange}
                    disabled={isSubmitting || isSubmitted}
                    required
                    className="textarea min-h-[120px] bg-black/40 border-white/10 w-full"
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`btn btn-default w-full ${
                  isSubmitted ? "bg-green-600 hover:bg-green-700" : ""
                }`}
                disabled={isSubmitting || isSubmitted}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
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
                  <span className="flex items-center justify-center">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
