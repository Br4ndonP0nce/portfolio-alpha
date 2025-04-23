import Image from "next/image";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Tech } from "@/components/sections/Tech";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import JsonLd from "@/components/JsonLd";
export default function Home() {
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DecodeNext",
    url: "https://decodenext.dev",
    description:
      "Powering up your business to reach new heights Full-stack Engineer & Software Specialist building the next generation of web applications that transform businesses.",
  };
  return (
    <>
      <JsonLd data={organizationData} />
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Contact />
    </>
  );
}
