// src/components/sections/footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { socialLinks } from "@/data/project";
export function Footer() {
  return (
    <motion.footer
      className="bg-brand-blue py-8 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row">
        <motion.p
          className="text-center text-sm font-light md:text-left"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Decode Next {new Date().getFullYear()}. All rights reserved
        </motion.p>

        <motion.div
          className="flex justify-center gap-4 md:justify-start"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors duration-300 ease-in-out hover:text-black"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="#privacy-policy"
            className="text-center text-sm font-light hover:underline md:text-right"
          >
            Privacy Policy
          </Link>
        </motion.div>
      </div>
    </motion.footer>
  );
}
