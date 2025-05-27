// src/components/ui/Preloader.tsx
"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete?: () => void;
  duration?: number; // in milliseconds
}

export function Preloader({ onComplete, duration = 3000 }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const incrementTime = duration / 100; // Calculate increment timing

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          setTimeout(() => {
            onComplete?.();
          }, 800); // Allow exit animation to complete
          return 100;
        }
        return prev + 1;
      });
    }, incrementTime);

    return () => clearInterval(timer);
  }, [duration, onComplete]);

  const loadingTexts = [
    "Initializing transformation...",
    "Loading digital solutions...",
    "Preparing your experience...",
    "Futurizing your business...",
    "Almost ready to decode...",
  ];

  const currentTextIndex = Math.floor(
    (progress / 100) * (loadingTexts.length - 1)
  );

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* Background Elements */}
          <div className="absolute inset-0">
            {/* Animated Background Orbs */}
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl"
              animate={{
                background: [
                  "radial-gradient(circle, rgba(255,107,0,0.3) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(85,66,255,0.3) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(255,213,0,0.3) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(255,107,0,0.3) 0%, transparent 70%)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl"
              animate={{
                background: [
                  "radial-gradient(circle, rgba(85,66,255,0.2) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(255,213,0,0.2) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(255,107,0,0.2) 0%, transparent 70%)",
                  "radial-gradient(circle, rgba(85,66,255,0.2) 0%, transparent 70%)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Floating Particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/40 rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [-10, 10, -10],
                  opacity: [0.2, 1, 0.2],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          {/* Main Content */}
          <div className="text-center space-y-12 z-10">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-black font-urbanist tracking-tight"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,107,0,0.5)",
                    "0 0 30px rgba(85,66,255,0.5)",
                    "0 0 20px rgba(255,213,0,0.5)",
                    "0 0 20px rgba(255,107,0,0.5)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="brand-orange">DECODE</span>{" "}
                <span className="text-white">NEXT</span>
              </motion.h1>

              {/* Animated Underline */}
              <motion.div
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 h-1 bg-gradient-to-r from-brand-orange via-brand-blue to-brand-yellow rounded-full"
                style={{ width: `${Math.max(progress * 0.8, 20)}%` }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentTextIndex}
                  className="text-white/80 text-lg md:text-xl font-inter"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {loadingTexts[currentTextIndex]}
                </motion.p>
              </AnimatePresence>

              {/* Progress Display */}
              <motion.div
                className="brand-orange text-3xl font-mono font-bold"
                animate={{
                  scale: [1, 1.1, 1],
                  textShadow: [
                    "0 0 10px rgba(255,107,0,0.8)",
                    "0 0 20px rgba(255,107,0,1)",
                    "0 0 10px rgba(255,107,0,0.8)",
                  ],
                }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                {progress}%
              </motion.div>
            </motion.div>

            {/* Progress Bar */}
            <motion.div
              className="w-80 md:w-96 mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-brand-orange via-brand-blue to-brand-yellow rounded-full"
                  style={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />

                {/* Glowing Effect */}
                <motion.div
                  className="absolute top-0 left-0 h-full w-20 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
                  animate={{
                    x: [`-80px`, `${progress * 3.2}px`],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              {/* Progress Labels */}
              <div className="flex justify-between mt-2 text-xs text-white/50 font-inter">
                <span>Starting</span>
                <span>Ready</span>
              </div>
            </motion.div>

            {/* Loading Dots */}
            <motion.div
              className="flex justify-center space-x-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  className="w-2 h-2 bg-brand-orange rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: dot * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
