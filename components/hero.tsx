"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function Hero() {
  const { scrollToSection } = useSmoothScroll()

  return (
    <section className="py-24 md:py-32 flex flex-col items-center text-center space-y-10">
      <div className="space-y-4 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
          Hi, I'm <span className="text-primary">Nguyen Thanh Phong</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Software Developer specializing in full-stack web development
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button onClick={() => scrollToSection("projects")} size="lg" className="gap-2">
          View My Work
          <ArrowRight className="h-4 w-4" />
        </Button>
        <Button onClick={() => scrollToSection("contact")} variant="outline" size="lg">
          Contact Me
        </Button>
      </div>
    </section>
  )
}
