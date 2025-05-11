"use client"

import { useState, useEffect } from "react"

export function useTypewriter(text: string, speed = 100, delay = 0) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (delay > 0 && !isTyping) {
      timeout = setTimeout(() => {
        setIsTyping(true)
      }, delay)
      return () => clearTimeout(timeout)
    }

    if (!isTyping) return

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, speed)
    } else {
      setIsDone(true)
    }

    return () => clearTimeout(timeout)
  }, [currentIndex, delay, isTyping, speed, text])

  return { displayText, isTyping, isDone }
}
