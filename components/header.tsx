"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollToSection } = useSmoothScroll()

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <button onClick={() => scrollToSection("top")} className="font-bold text-xl cursor-pointer">
          PORTFOLIO
        </button>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            <button
              onClick={() => handleNavClick("about")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </button>
            <button
              onClick={() => handleNavClick("education")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Education
            </button>
            <button
              onClick={() => handleNavClick("experience")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Experience
            </button>
            <button
              onClick={() => handleNavClick("projects")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavClick("skills")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Skills
            </button>
            <button
              onClick={() => handleNavClick("contact")}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </button>
          </nav>
          <ModeToggle />
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border z-50 md:hidden">
            <nav className="flex flex-col p-4 gap-4">
              <button
                onClick={() => handleNavClick("about")}
                className="text-sm font-medium transition-colors hover:text-primary text-left"
              >
                About
              </button>
              <button
                onClick={() => handleNavClick("education")}
                className="text-sm font-medium transition-colors hover:text-primary text-left"
              >
                Education
              </button>
              <button
                onClick={() => handleNavClick("experience")}
                className="text-sm font-medium transition-colors hover:text-primary text-left"
              >
                Experience
              </button>
              <button
                onClick={() => handleNavClick("projects")}
                className="text-sm font-medium transition-colors hover:text-primary text-left"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavClick("skills")}
                className="text-sm font-medium transition-colors hover:text-primary text-left"
              >
                Skills
              </button>
              <button
                onClick={() => handleNavClick("contact")}
                className="text-sm font-medium transition-colors hover:text-primary text-left"
              >
                Contact
              </button>
              <div className="flex justify-end">
                <ModeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
