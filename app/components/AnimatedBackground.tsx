"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <motion.div
        className={`absolute inset-0 opacity-20 ${theme === "dark" ? "opacity-30" : "opacity-10"}`}
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(62, 180, 230, 0.8) 0%, rgba(60, 60, 60, 0) 50%)",
            "radial-gradient(circle at 80% 30%, rgba(120, 80, 220, 0.8) 0%, rgba(60, 60, 60, 0) 50%)",
            "radial-gradient(circle at 40% 70%, rgba(80, 210, 200, 0.8) 0%, rgba(60, 60, 60, 0) 50%)",
            "radial-gradient(circle at 20% 20%, rgba(62, 180, 230, 0.8) 0%, rgba(60, 60, 60, 0) 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
    </div>
  )
}
