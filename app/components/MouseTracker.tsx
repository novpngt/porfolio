"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleClick = () => {
      setClicked(true)
      setTimeout(() => setClicked(false), 500)
    }

    window.addEventListener("mousemove", updateMousePosition)
    window.addEventListener("click", handleClick)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
      window.removeEventListener("click", handleClick)
    }
  }, [])

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50"
        animate={{ x: mousePosition.x - 5, y: mousePosition.y - 5 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      >
        <div className="w-3 h-3 bg-primary rounded-full opacity-70" />
      </motion.div>
      <AnimatePresence>
        {clicked && (
          <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50"
            initial={{ x: mousePosition.x - 25, y: mousePosition.y - 25, scale: 0, opacity: 1 }}
            animate={{ scale: 1.5, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-12 h-12 border-2 border-primary rounded-full" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
