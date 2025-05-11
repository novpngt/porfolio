"use client"

import { useCallback } from "react"

export function useSmoothScroll() {
  const scrollToSection = useCallback((elementId: string) => {
    // Get the element to scroll to
    const element = document.getElementById(elementId)

    if (!element) return

    // Get the header height to offset the scroll position
    const headerHeight = document.querySelector("header")?.offsetHeight || 0

    // Calculate the element's position relative to the viewport
    const elementPosition = element.getBoundingClientRect().top

    // Calculate the absolute position by adding the current scroll position
    const offsetPosition = elementPosition + window.scrollY - headerHeight - 20 // Extra 20px padding

    // Scroll smoothly to the element
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }, [])

  return { scrollToSection }
}
