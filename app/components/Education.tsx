"use client"

import { motion, useInView } from "framer-motion"
import { GraduationCap, Award } from "lucide-react"
import { useRef } from "react"

export default function Education() {
  const educationRef = useRef(null)
  const certificationRef = useRef(null)
  const educationIsInView = useInView(educationRef, { once: false, amount: 0.3 })
  const certificationIsInView = useInView(certificationRef, { once: false, amount: 0.3 })

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl font-bold mb-16 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Education & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            ref={educationRef}
            className="bg-background rounded-lg p-6 shadow-sm border border-border"
            initial={{ opacity: 0, x: -50 }}
            animate={educationIsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <GraduationCap className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-bold text-foreground">Education</h3>
            </div>

            <div className="border-l-2 border-primary/30 pl-4 ml-3">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground">Bachelor of Software Engineering</h4>
                <p className="text-muted-foreground">Saigon University</p>
                <p className="text-muted-foreground text-sm">Oct 2020 – Feb 2025</p>
              </div>

              <div>
                <h5 className="font-semibold text-foreground mb-2">Relevant Coursework:</h5>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                  <li>Data Structures and Algorithms</li>
                  <li>Object-Oriented Programming</li>
                  <li>Database Management Systems</li>
                  <li>Web Development</li>
                  <li>Software Engineering</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={certificationRef}
            className="bg-background rounded-lg p-6 shadow-sm border border-border"
            initial={{ opacity: 0, x: 50 }}
            animate={certificationIsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-4">
              <Award className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-xl font-bold text-foreground">Certifications</h3>
            </div>

            <div className="border-l-2 border-primary/30 pl-4 ml-3">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-foreground">Aptis ESOL General</h4>
                <p className="text-muted-foreground">British Council</p>
                <p className="text-muted-foreground text-sm">Dec 2024</p>
                <p className="text-muted-foreground mt-2">Score: 162 (B2)</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground">TOEIC Listening & Reading</h4>
                <p className="text-muted-foreground">ETS</p>
                <p className="text-muted-foreground text-sm">Apr 2024</p>
                <p className="text-muted-foreground mt-2">Score: 780</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
