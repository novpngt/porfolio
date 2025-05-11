"use client"

import { useEffect, useState } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Education from "./components/Education"
import Contact from "./components/Contact"
import FloatingActionButton from "./components/FloatingActionButton"
import MouseTracker from "./components/MouseTracker"
import LoadingScreen from "./components/LoadingScreen"
import AnimatedBackground from "./components/AnimatedBackground"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Add no-transitions class to prevent transitions on page load
    document.documentElement.classList.add("no-transitions")

    // Remove the class after a short delay
    const timeout = setTimeout(() => {
      document.documentElement.classList.remove("no-transitions")
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      <LoadingScreen />
      <AnimatedBackground />
      {isLoaded && (
        <>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
          <FloatingActionButton />
          <MouseTracker />
        </>
      )}
    </>
  )
}
