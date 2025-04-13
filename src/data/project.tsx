// src/data/projects.ts
export type Project = {
  projectName: string;
  description: string;
  link: string;
  socials: string[];
  imgLink: string;
  tags: string[];
};

export const projectsData: Project[] = [
  {
    projectName: "The Gratitude Bear",
    description:
      "Empowering young minds withe the power of gratitude, first of its kind web2/web3 phygital, education product [Former CTO, Currently in development and collaboration with BOCG (dubai)]",
    link: "https://www.instagram.com/thegratitudebearofficial/",
    socials: ["https://www.instagram.com/thegratitudebearofficial/"],
    imgLink: "https://i.imgur.com/FEXhRa1.png",
    tags: ["Web Development", "Web3", "Project Lead"],
  },
  {
    projectName: "Natural Ancestors",
    description:
      "𝗔 𝗗𝗲𝘀𝗲𝗿𝘁 𝗢𝗮𝘀𝗶𝘀 𝗶𝗻 𝘁𝗵𝗲 𝗖𝗼𝗮𝗰𝗵𝗲𝗹𝗹𝗮 𝗩𝗮𝗹𝗹𝗲𝘆 🌵 collaborative project with cuahuilla tribe based in palm springs california [Former CTO] ",
    link: "https://www.instagram.com/naturalancestors/",
    socials: ["https://www.instagram.com/naturalancestors/"],
    imgLink: "https://i.imgur.com/OdwqIKE.png",
    tags: ["Web Development", "Web3", "Engineering"],
  },
  {
    projectName: "F30-Performance",
    description: "High Spec automobile tuning",
    link: "https://example.com/project1",
    socials: ["https://twitter.com/project1"],
    imgLink: "https://i.imgur.com/KkjrgU2.png",
    tags: ["Engineering", "Business Planning"],
  },
  {
    projectName: "Green Chain",
    description: "WORLDS FIRST ZERO EMISSION CARBON NEUTRAL LAYER 1 BLOCKCHAIN",
    link: "https://green-chain-mu.vercel.app/",
    socials: ["https://twitter.com/project2"],
    imgLink: "https://i.imgur.com/9kAvsYe.png",
    tags: ["Web3 business plan", "Project planning", "Software Dev"],
  },
  {
    projectName: "GreenHeart DAO",
    description:
      "Fair Hemp distibution among europe, concept and business plan",
    link: "https://www.greenheartdao.com/",
    socials: ["https://twitter.com/project2"],
    imgLink: "/images/GreenHeartLogoWhite.webp",
    tags: ["Web3", "Token Development", "Business Planning"],
  },
  {
    projectName: "AtlasDB",
    description:
      "ATLAS is the first decentralized database for AI agents, enabling secure, rapid learning through collective intelligence and shared experiences",
    link: "https://www.atlasdb.dev/",
    socials: ["https://twitter.com/project2"],
    imgLink: "/images/atlas.png",
    tags: ["Web3", "Token Development", "Business Planning"],
  },
  {
    projectName: "CryptoClicker",
    description:
      "> Click. Hold. Win. clicker based game powered by solana blockchain",
    link: "https://www.cryptoclicker.lol/",
    socials: ["https://twitter.com/project2"],
    imgLink: "/images/clicker.png",
    tags: ["Web3", "Token Development", "Business Planning"],
  },
  {
    projectName: "KlosIt.pro",
    description:
      "KlosIt qualifies leads, handles conversations, and brings you only the hottest prospects ready to close. Focus on creating, not chasing leads. [currently in development]",
    link: "https://www.klosit.pro/",
    socials: ["https://twitter.com/project2"],
    imgLink: "/images/klosit.png",
    tags: ["Web3", "Token Development", "Business Planning"],
  },
];

// src/data/tech-categories.ts
export type TechCategory = {
  title: string;
  highlightColor: string;
  items: string[];
};

export const techCategories: TechCategory[] = [
  {
    title: "Fullstack services",
    highlightColor: "text-brand-yellow",
    items: [
      "Backend Development (Server-side logic)",
      "Frontend Development (User interfaces)",
      "Database Design & Management",
      "Cloud Hosting & Scaling Solutions",
      "Data compliance",
    ],
  },
  {
    title: "Web3 & Blockchain",
    highlightColor: "text-brand-yellow",
    items: [
      "Decentralized App (DApp) Development",
      "Smart Contract Creation & Auditing",
      "Token Development & Launches",
      "Blockchain Consulting & Implementation",
    ],
  },
  {
    title: "Digital Transformation",
    highlightColor: "text-brand-orange",
    items: [
      "Business Process Automation",
      "Digital Strategy Consulting",
      "E-commerce & Digital Platform Integration",
    ],
  },
  {
    title: "Software Solutions",
    highlightColor: "text-brand-yellow",
    items: [
      "Custom Software Development",
      "Software Testing & QA",
      "System Integrations & Migration",
      "Continuous Integration & Deployment",
    ],
  },
  {
    title: "Digital Products Development",
    highlightColor: "text-blue-400",
    items: [
      "Website Design & Creation",
      "Mobile App Development",
      "User Experience (UX) & User Interface (UI) Design",
      "Cloud Hosting & Scaling Solutions",
      "Interactive Prototyping",
    ],
  },
  {
    title: "Artificial Intelligence",
    highlightColor: "text-brand-orange",
    items: [
      "LLMs integrations and independent agents based on language and context",
      "Custom AI solutions for business automation",
      "Data analysis and predictive modeling",
    ],
  },
];

// src/data/social-links.ts
import {
  FaDiscord,
  FaTwitter,
  FaYoutube,
  FaMedium,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { ReactNode } from "react";

export type SocialLink = {
  name: string;
  href: string;
  icon: ReactNode;
};

export const socialLinks: SocialLink[] = [
  {
    name: "Discord",
    href: "https://discord.com",
    icon: <FaDiscord size={20} />,
  },
  {
    name: "Twitter",
    href: "https://twitter.com",
    icon: <FaTwitter size={20} />,
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: <FaYoutube size={20} />,
  },
  { name: "Medium", href: "https://medium.com", icon: <FaMedium size={20} /> },
  { name: "GitHub", href: "https://github.com", icon: <FaGithub size={20} /> },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: <FaLinkedin size={20} />,
  },
];
