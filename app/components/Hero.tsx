"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypewriter } from "@/app/hooks/useTypewriter";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${380 - i * 5 * position} -${189 + i * 6} -${
      312 - i * 5 * position
    } ${216 - i * 6} ${152 - i * 5 * position} ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full text-blue-500 dark:text-blue-100" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.id * 0.01}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function Hero() {
  const { displayText: nameText, isDone: nameTyped } = useTypewriter("Nguyen Thanh Phong", 100, 500);

  const developerCode = `
function Developer() {
  const [skills, setSkills] = useState([
    'Java', 'PHP', 'JavaScript',
    'Spring Boot', 'Laravel', 'React'
  ]);
  
  return (
    <PassionateDeveloper 
      name="Nguyen Thanh Phong"
      skills={skills}
    />
  );
}
`;

  return (
    <div className="relative isolate overflow-hidden bg-background min-h-[80vh] flex items-center">
      <div className="absolute inset-0 -z-50">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
          <motion.div initial={{ opacity: 1 }}>
            <p className="text-base font-semibold text-primary">Hello, I'm</p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-foreground sm:text-6xl min-h-[4rem] sm:min-h-[5rem]">
              {nameText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8, repeatType: "reverse" }}
                className={`inline-block w-[2px] h-[1em] bg-primary ml-1 ${nameTyped ? "hidden" : ""}`}
              />
            </h1>
            <motion.p
              className="mt-3 text-xl text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: nameTyped ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              Software Developer
            </motion.p>
          </motion.div>

          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: nameTyped ? 1 : 0, y: nameTyped ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            A passionate software developer specializing in back-end development with experience in Java, PHP, and
            JavaScript frameworks. Based in Ho Chi Minh, Vietnam.
          </motion.p>

          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: nameTyped ? 1 : 0, y: nameTyped ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button asChild>
              <a href="#contact">Contact Me</a>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://drive.google.com/file/d/1788cnk425IYo2HMxkTsj8HIQHAolEJkl/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: nameTyped ? 1 : 0, y: nameTyped ? 0 : 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="https://github.com/novpngt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="mailto:ngt.phongg@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/novpng/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: nameTyped ? 1 : 0, x: nameTyped ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="relative h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8 flex items-center justify-center backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <code className="text-sm sm:text-base text-primary/70 font-mono">
                  <pre className="whitespace-pre-wrap">{developerCode}</pre>
                </code>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
