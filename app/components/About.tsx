"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-80 rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-4xl font-bold text-primary">NTP</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">Nguyen Thanh Phong</h3>
                <p className="text-muted-foreground mt-2">Software Developer</p>
                <p className="text-muted-foreground mt-1">Ho Chi Minh, Vietnam</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4 text-foreground">Who I Am</h3>
            <p className="text-muted-foreground mb-4">
              I'm a software developer with a passion for building efficient, scalable, and user-friendly applications.
              Currently pursuing my Bachelor's degree in Software Engineering at Saigon University, I combine academic
              knowledge with practical experience.
            </p>
            <p className="text-muted-foreground mb-4">
              My experience as a Software Developer Intern at ECLO Co., Ltd has equipped me with skills in both frontend
              and backend development, working with technologies like Laravel, Next.js, and Redux.
            </p>
            <p className="text-muted-foreground">
              I'm constantly learning and exploring new technologies to enhance my skills and stay updated with industry
              trends. I'm particularly interested in software development and creating solutions that solve real-world
              problems.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
