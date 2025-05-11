"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function AnimatedLogo() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const strokeColor = theme === "dark" ? "#ffffff" : "#000000"

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { type: "spring", duration: 1.5, bounce: 0 },
        opacity: { duration: 0.5 },
      },
    },
  }

  return (
    <motion.svg
      width="40"
      height="40"
      viewBox="0 0 100 100"
      initial="hidden"
      animate="visible"
      className="overflow-visible"
    >
      {/* N */}
      <motion.path
        d="M20 20 L20 80 L40 80 L40 40 L60 80 L80 80 L80 20 L60 20 L60 60 L40 20 Z"
        stroke={strokeColor}
        strokeWidth="4"
        fill="none"
        variants={pathVariants}
      />

      {/* Circle around the logo */}
      <motion.circle cx="50" cy="50" r="45" stroke={strokeColor} strokeWidth="2" fill="none" variants={pathVariants} />
    </motion.svg>
  )
}
