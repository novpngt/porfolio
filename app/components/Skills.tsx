"use client"

import { motion, useInView } from "framer-motion"
import { Code, Database, Server, Globe, Terminal, Cpu } from "lucide-react"
import { useRef } from "react"

const skillCategories = [
  {
    icon: <Code className="w-8 h-8 mb-4 text-primary" />,
    title: "Programming Languages",
    skills: ["Java", "PHP", "JavaScript", "HTML", "CSS", "SQL"],
  },
  {
    icon: <Globe className="w-8 h-8 mb-4 text-primary" />,
    title: "Frameworks & Libraries",
    skills: ["Spring Boot", "Laravel", "ReactJS", "Redux", "Hibernate"],
  },
  {
    icon: <Database className="w-8 h-8 mb-4 text-primary" />,
    title: "Databases",
    skills: ["MySQL", "SQL Server"],
  },
  {
    icon: <Server className="w-8 h-8 mb-4 text-primary" />,
    title: "Tools & Platforms",
    skills: ["Git", "Docker", "Linux", "Maven", "Google Cloud Platform"],
  },
  {
    icon: <Terminal className="w-8 h-8 mb-4 text-primary" />,
    title: "Development",
    skills: ["RESTful APIs", "OOP", "MVC", "Agile/Scrum"],
  },
  {
    icon: <Cpu className="w-8 h-8 mb-4 text-primary" />,
    title: "Languages",
    skills: ["English (B2 - Aptis, TOEIC)", "Vietnamese (Native)"],
  },
]

export default function Skills() {
  const refs = skillCategories.map(() => useRef(null))

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl font-bold mb-16 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const isInView = useInView(refs[index], { once: false, amount: 0.3 })

            return (
              <motion.div
                key={category.title}
                ref={refs[index]}
                className="bg-background p-6 rounded-lg shadow-sm border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center text-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold mb-4 text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
