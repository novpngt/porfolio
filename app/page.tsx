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
import ClickSpark from "@/components/ui/click-spark";

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-white dark:bg-[#3b3b3b]">
      <ClickSpark sparkColor="#fff" sparkSize={10} sparkRadius={15} sparkCount={8} duration={400}>
        {" "}
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
      </ClickSpark>
    </div>
  );
}
