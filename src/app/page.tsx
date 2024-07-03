import dynamic from "next/dynamic";
import Hero from "@/components/HeroSection/Hero";

const About = dynamic(() => import("@/components/AboutSection/About"))
const Projects = dynamic(() => import("@/components/ProjectSection/Projects"))
const Contact = dynamic(() => import("@/components/ContactSection.tsx/Contact"))

export default function Home() {
  return (

    <main className="flex h-fit w-screen flex-col  pt-16">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
