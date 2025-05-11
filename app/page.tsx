"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import AnimatedContent from "@/components/ui/animated-content";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white dark:bg-[#3b3b3b]">
      <Header />
      <main className="container mx-auto px-4 py-8 space-y-24">
        <Hero />
        <About />
        <Education />

        <Experience />
        <Projects />
        <AnimatedContent>
          <Skills />
        </AnimatedContent>
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
