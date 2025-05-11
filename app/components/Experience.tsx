"use client"

import { motion, useInView } from "framer-motion"
import { Briefcase } from "lucide-react"
import { useRef } from "react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl font-bold mb-16 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Work Experience
        </motion.h2>

        <motion.div
          className="relative border-l-2 border-primary/30 pl-8 pb-8"
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute -left-3 top-0">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
              <Briefcase className="w-3 h-3 text-primary-foreground" />
            </div>
          </div>

          <div className="bg-background rounded-lg p-6 shadow-sm border border-border">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-foreground">Software Developer Intern</h3>
              <div className="flex items-center mt-2 sm:mt-0">
                <span className="text-muted-foreground text-sm">Apr 2024 – Aug 2024</span>
              </div>
            </div>

            <div className="mb-4">
              <h4 className="text-lg font-semibold text-foreground">ECLO Co., Ltd</h4>
              <p className="text-muted-foreground text-sm">Ho Chi Minh, Vietnam</p>
            </div>

            <p className="text-muted-foreground mb-4">
              Contributed to developing a software solution for businesses operating billiards and karaoke services,
              digitizing their operations.
            </p>

            <h5 className="font-semibold text-foreground mb-2">Responsibilities:</h5>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
              <li>Developed API endpoints using Laravel</li>
              <li>Contributed to the frontend development using Next.js and Redux</li>
              <li>Built a customer information management system</li>
              <li>Implemented a kitchen coordination system</li>
              <li>Developed an equipment damage reporting module</li>
            </ul>

            <h5 className="font-semibold text-foreground mb-2">Technologies Used:</h5>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">PHP Laravel</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Redux</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">MySQL Server</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
