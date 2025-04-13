import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Tech } from "@/components/sections/Tech";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Contact />
    </>
  );
}
