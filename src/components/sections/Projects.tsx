// src/components/sections/Projects.tsx
"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ExternalLink,
  Github,
  TrendingUp,
  Users,
  DollarSign,
  Award,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";

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

// Enhanced project data with more compelling metrics
const projectsData = [
  {
    projectName: "The Gratitude Bear",
    category: "Web3 EdTech",
    description:
      "Revolutionary phygital education platform empowering young minds through gratitude practices. First-of-its-kind Web2/Web3 hybrid solution.",
    link: "https://www.instagram.com/thegratitudebearofficial/",
    imgLink: "https://i.imgur.com/FEXhRa1.png",
    tags: ["Web3", "Education", "NFT", "Mobile App"],
    metrics: {
      revenue: "$500k+ Funding Raised",
      growth: "Sold project in UAE",
    },
    status: "Live in Dubai",
    featured: true,
  },
  {
    projectName: "Edición Persuasiva",
    category: "Complete Business Automation Ecosystem",
    description:
      "Full-stack sales automation platform featuring a high-converting landing page funnel, comprehensive CRM for lead management and student onboarding, cloud automation workflows, and integrated payment processing. Built with Next.js, Firebase, and n8n automations, delivering $4k+ yearly infrastructure savings through optimized cloud architecture.",
    link: "https://edicionpersuasiva.com", // or whatever the main domain is
    imgLink:
      "https://firebasestorage.googleapis.com/v0/b/edicion-persuasiva.firebasestorage.app/o/public%2Fimages%2Fpersuasion1.jpg?alt=media&token=81cbeb6c-fee6-4776-82e7-0c038aa6042e",
    tags: ["Next.js", "Firebase", "CRM", "Automation", "SaaS", "Education"],
    metrics: {
      revenue: "$4k+ Infrastructure Savings",
      growth: "Complete Sales Automation",
    },
    status: "Top Video Editing Academy in Latin America",
    featured: true,
  },
  {
    projectName: "Natural Ancestors",
    category: "Cultural Heritage Web3",
    description:
      "Desert oasis resort connecting the Coachella Valley with authentic tribal experiences through blockchain technology.",
    link: "https://www.instagram.com/naturalancestors/",
    imgLink: "https://i.imgur.com/OdwqIKE.png",
    tags: ["Marketplace", "Cultural", "Blockchain", "E-commerce"],
    metrics: {
      impact: "Cahuila tribe partnership",
      revenue: "TBDs",
      growth: "Projected 150 yearly visitors to exclusive resort",
    },
    status: "Palm Springs, CA",
    featured: true,
  },
  {
    projectName: "Green Chain",
    category: "Sustainable Blockchain",
    description:
      "World's first zero-emission, carbon-neutral Layer 1 blockchain infrastructure designed for environmental sustainability.",
    link: "https://green-chain-mu.vercel.app/",
    imgLink: "https://i.imgur.com/9kAvsYe.png",
    tags: ["Blockchain", "Sustainability", "Layer 1", "DeFi"],
    metrics: {
      impact: "100% Carbon Neutral",
      revenue: "0.001s Transaction Speed",
      growth: "99.9% Uptime",
    },
    status: "Mainnet Ready",
    featured: true,
  },

  {
    projectName: "Kollabs",
    category: "Marketing & Growth",
    description:
      "Premium KOL marketing solutions connecting crypto projects with top-tier influencers to drive authentic growth and market impact through strategic partnerships.",
    link: "https://kollabs.tech/",
    imgLink: "/images/kollab.png",
    tags: ["KOL Marketing", "Crypto", "Influencer", "Web3", "Growth Strategy"],
    metrics: {
      revenue: "250+ KOLs Network",
      growth: "40M+ Monthly Views",
      success: "300%+ Avg Growth",
    },
    status: "Live & Scaling",
    featured: true,
  },
  {
    projectName: "AtlasDB",
    category: "AI Infrastructure",
    description:
      "First decentralized database for AI agents, enabling secure, rapid learning through collective intelligence and shared experiences.",
    link: "https://www.atlasdb.dev/",
    imgLink: "/images/atlas.png",
    tags: ["AI", "Database", "Decentralized", "Machine Learning"],
    metrics: {
      revenue: "Sub-10ms Response",
    },
    status: "Beta Launch",
    featured: false,
  },
  {
    projectName: "KlosIt.pro",
    category: "Sales Automation",
    description:
      "AI-powered lead qualification system that handles conversations and delivers hot prospects ready to close deals.",
    link: "https://www.klosit.pro/",
    imgLink: "/images/klosit.png",
    tags: ["AI", "Sales", "Automation", "CRM"],
    metrics: {
      impact: "85% Conversion Rate",
      revenue: "$10M+ Pipeline",
      growth: "40% Faster Closings",
    },
    status: "In Development",
    featured: false,
  },
  {
    projectName: "CryptoClicker",
    category: "GameFi",
    description:
      "Addictive clicker-based game powered by Solana blockchain, combining entertainment with DeFi rewards.",
    link: "https://www.cryptoclicker.lol/",
    imgLink: "/images/clicker.png",
    tags: ["GameFi", "Solana", "DeFi", "Gaming"],
    metrics: {
      growth: "Daily Rewards Pool",
    },
    status: "Live on Solana",
    featured: false,
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const [filter, setFilter] = useState("All");
  const [currentSlide, setCurrentSlide] = useState(0);

  const categories = ["All", "Web3", "AI", "GameFi", "Enterprise"];
  const featuredProjects = projectsData.filter((p) => p.featured);
  const allProjects = projectsData;

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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-32 px-4 md:px-0 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full blur-[120px]"
          animate={{
            background: [
              "radial-gradient(circle, rgba(255,107,0,0.15) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(85,66,255,0.15) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(255,213,0,0.15) 0%, transparent 70%)",
              "radial-gradient(circle, rgba(255,107,0,0.15) 0%, transparent 70%)",
            ],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
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
            <Award className="h-4 w-4 brand-orange" />
            <span className="text-sm font-medium text-white/80 font-inter">
              PORTFOLIO OF SUCCESS
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black font-urbanist mb-6">
            <span className="text-white">Our </span>
            <span className="brand-orange">Success</span>
            <br />
            <span className="text-white">Stories</span>
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto font-inter leading-relaxed">
            Real transformations. Real results.{" "}
            <span className="brand-yellow font-semibold">$7.5M+</span> in client
            value generated through cutting-edge technology solutions throughout
            the years.
          </p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <motion.div
          className="mb-20 md:px-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4 }}
        >
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm border border-white/10">
              <motion.div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredProjects.map((project, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[500px]">
                      {/* Project Image */}
                      <div className="relative h-[300px] lg:h-[500px] bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                        <Image
                          src={project.imgLink}
                          alt={project.projectName}
                          width={400}
                          height={300}
                          className="object-contain max-w-[80%] max-h-[80%]"
                        />

                        {/* Play Button Overlay */}
                        <motion.div
                          className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="p-4 bg-white/20 backdrop-blur-sm rounded-full">
                            <Play className="h-8 w-8 text-white" />
                          </div>
                        </motion.div>

                        {/* Status Badge */}
                        <div className="absolute top-4 left-4 px-3 py-1 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-full">
                          <span className="text-green-400 text-sm font-medium">
                            {project.status}
                          </span>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="p-8 lg:p-12">
                        <div className="space-y-6">
                          {/* Category */}
                          <div className="text-brand-orange font-medium text-sm uppercase tracking-wider font-inter">
                            {project.category}
                          </div>

                          {/* Title */}
                          <h3 className="text-3xl lg:text-4xl font-black font-urbanist text-white">
                            {project.projectName}
                          </h3>

                          {/* Description */}
                          <p className="text-lg text-white/70 font-inter leading-relaxed">
                            {project.description}
                          </p>

                          {/* Metrics */}
                          <div className="grid grid-cols-3 gap-4">
                            <div className="text-center p-3 bg-white/5 rounded-xl">
                              <div className="text-brand-orange font-bold text-sm font-inter">
                                {project.metrics.impact}
                              </div>
                              <div className="text-white/50 text-xs">
                                Impact
                              </div>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-xl">
                              <div className="text-brand-blue font-bold text-sm font-inter">
                                {project.metrics.revenue}
                              </div>
                              <div className="text-white/50 text-xs">
                                Revenue
                              </div>
                            </div>
                            <div className="text-center p-3 bg-white/5 rounded-xl">
                              <div className="text-brand-yellow font-bold text-sm font-inter">
                                {project.metrics.growth}
                              </div>
                              <div className="text-white/50 text-xs">
                                Growth
                              </div>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge
                                key={i}
                                variant="secondary"
                                className="bg-white/10 text-white/80 border-white/10 font-inter"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className="flex gap-4">
                            <Button
                              asChild
                              variant="default"
                              size="lg"
                              className="bg-brand-orange hover:bg-brand-orange/90 text-black font-bold font-urbanist"
                            >
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2"
                              >
                                View Live Project
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            </Button>
                            <Button
                              variant="outline"
                              size="lg"
                              className="border-white/30 text-white hover:bg-white/10 font-urbanist"
                            >
                              Case Study
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Carousel Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-10">
              <button
                onClick={prevSlide}
                className="p-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full hover:bg-black/60 transition-colors"
              >
                <ChevronLeft className="h-5 w-5 text-white" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-10">
              <button
                onClick={nextSlide}
                className="p-3 bg-black/40 backdrop-blur-sm border border-white/10 rounded-full hover:bg-black/60 transition-colors"
              >
                <ChevronRight className="h-5 w-5 text-white" />
              </button>
            </div>

            {/* Carousel Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-brand-orange" : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          className="space-y-8 md:px-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6 }}
        >
          {/* Filter Tabs */}
          <div className="flex justify-center">
            <div className="flex gap-2 p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors font-inter ${
                    filter === category
                      ? "bg-brand-orange text-black"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {allProjects.map((project, index) => (
              <motion.div key={index} variants={cardVariants}>
                <Card className="h-full overflow-hidden border-white/10 bg-black/20 backdrop-blur-sm hover:bg-black/40 hover:border-white/20 transition-all duration-300 group">
                  <CardHeader className="p-0 relative">
                    <div className="relative h-48 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center overflow-hidden">
                      <Image
                        src={project.imgLink}
                        alt={project.projectName}
                        width={300}
                        height={200}
                        className="object-contain max-w-[80%] max-h-[80%] group-hover:scale-110 transition-transform duration-300"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Status Badge */}
                      <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-sm rounded-full">
                        <span className="text-white/80 text-xs font-medium">
                          {project.status}
                        </span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div>
                        <div className="text-brand-orange text-xs uppercase tracking-wider font-medium mb-1 font-inter">
                          {project.category}
                        </div>
                        <CardTitle className="text-xl text-white font-urbanist mb-2">
                          {project.projectName}
                        </CardTitle>
                        <CardDescription className="text-white/70 font-inter line-clamp-3">
                          {project.description}
                        </CardDescription>
                      </div>

                      {/* Mini Metrics */}
                      <div className="flex justify-between text-xs">
                        <span className="text-brand-orange font-medium">
                          {project.metrics.impact}
                        </span>
                        <span className="text-brand-blue font-medium">
                          {project.metrics.growth}
                        </span>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {project.tags?.slice(0, 3).map((tag, i) => (
                          <Badge
                            key={i}
                            variant="secondary"
                            className="bg-white/10 text-white/70 border-white/10 text-xs font-inter"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {project.tags?.length > 3 && (
                          <Badge
                            variant="secondary"
                            className="bg-white/10 text-white/70 border-white/10 text-xs"
                          >
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>

                  <CardFooter className="p-6 pt-0">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-white/30 text-white hover:bg-white/10 font-urbanist"
                    >
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2"
                      >
                        View Project
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.0 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-gradient-to-r from-black/60 to-black/40 backdrop-blur-sm border border-white/10 rounded-2xl">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-white font-urbanist mb-2">
                Ready to be our next success story?
              </h3>
              <p className="text-white/70 font-inter">
                Join the ranks of businesses that have transformed their
                industry with our solutions.
              </p>
            </div>
            <motion.a
              className="px-8 py-4 bg-brand-orange hover:bg-brand-orange/90 text-black font-bold rounded-xl transition-colors font-urbanist whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
            >
              Start Your Project
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
