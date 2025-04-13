// src/components/sections/projects.tsx
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projectsData } from "@/data/project";

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 px-4 md:px-0 bg-black/30"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          Recent Projects
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projectsData.map((project, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card className="h-full overflow-hidden border-white/10 bg-black/20 backdrop-blur-sm hover:border-white/20 transition-all duration-300">
                <CardHeader className="p-4 flex justify-center items-center">
                  <div className="relative h-40 w-full flex items-center justify-center">
                    <Image
                      src={project.imgLink}
                      alt={project.projectName}
                      width={200}
                      height={160}
                      className="object-contain transition-transform duration-300 transform group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 text-xl text-white">
                    {project.projectName}
                  </CardTitle>
                  <CardDescription className="text-white/70 mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags?.map((tag, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-brand-blue/20 text-white"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-end">
                  <Button asChild variant="default" size="sm">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center"
                    >
                      View Project
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
