"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Projects() {
  const projectRef = useRef(null);
  const placeholderRef = useRef(null);
  const projectIsInView = useInView(projectRef, { once: false, amount: 0.3 });
  const placeholderIsInView = useInView(placeholderRef, { once: false, amount: 0.3 });
  const isMobile = useIsMobile();

  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [autoSlide, setAutoSlide] = useState(true);
  const [api, setApi] = useState<any>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (!api || !autoSlide || isHovering) return;

    // Set up interval for auto-sliding
    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000); // Slides every 3 seconds

    // Clean up interval on component unmount or when autoSlide is disabled
    return () => clearInterval(interval);
  }, [api, autoSlide, isHovering]);

  const projects = [
    {
      id: 1,
      title: "J2WatchSGU - Online Watch Store",
      description:
        "A web-based system for managing an online watch store, including user shopping features and admin tools for product, order, and sales management.",
      role: "Fullstack Developer",
      responsibilities: [
        "Designed the database schema to align with business requirements",
        "Deployed the DBMS on Google Cloud Platform (GCP)",
        "Developed features for product management and sales statistics",
      ],
      technologies: ["Java Spring Boot", "MySQL", "Google Cloud Platform", "Hibernate"],
      image: "/placeholder.svg?height=600&width=800",
      github: "https://github.com/novpngt/j2watchsgu",
      demo: "#",
    },
    {
      id: 2,
      title: "ECLO Entertainment Business Management",
      description:
        "A convenient software solution for businesses operating billiards and karaoke services, digitizing their operations. This application is part of ECLO Co., Ltd's system.",
      role: "Fullstack Developer Intern",
      responsibilities: [
        "Developed RESTful API endpoints using Laravel",
        "Built frontend features using Next.js and Redux",
        "Implemented modules for managing customer info, kitchen coordination, and equipment damage reports",
      ],
      technologies: ["Laravel", "Next.js", "Redux", "MySQL"],
      image: "/placeholder.svg?height=600&width=800",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A simple portfolio website built with Next.js and Tailwind CSS.",
      role: "Frontend Developer",
      responsibilities: [],
      technologies: ["TypeScript", "Nextjs", "v0", "Vercel"],
      image: "/placeholder.svg?height=600&width=800",
      github: "https://github.com/novpngt/portfolio",
      demo: "#",
    },
  ];

  const handleProjectClick = (id: number) => {
    setSelectedProject(id);
    document.body.style.overflow = "hidden";
  };

  const closeProjectDetail = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  const selectedProjectData = selectedProject !== null ? projects.find((p) => p.id === selectedProject) : null;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          className="text-3xl font-bold mb-16 text-center text-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Projects
        </motion.h2>

        <motion.div
          ref={projectRef}
          initial={{ opacity: 0, y: 20 }}
          animate={projectIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <Carousel
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project) => (
                <CarouselItem key={project.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                  <motion.div
                    className="h-full bg-background rounded-lg overflow-hidden shadow-sm border border-border cursor-pointer transform-gpu"
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                      boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
                      transition: { duration: 0.3 },
                    }}
                    onClick={() => handleProjectClick(project.id)}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                  >
                    <div className="relative h-64">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-white">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <p className="text-sm mt-2">Click to view details</p>
                        </div>
                      </motion.div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                        <div className="flex space-x-2">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Github className="h-5 w-5" />
                          </a>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {project.technologies.map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}

              <CarouselItem className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/2">
                <motion.div
                  ref={placeholderRef}
                  initial={{ opacity: 0, y: 20 }}
                  animate={placeholderIsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="h-full bg-background rounded-lg overflow-hidden shadow-sm border border-border flex items-center justify-center p-8 transform-gpu"
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2)",
                    transition: { duration: 0.3 },
                  }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-foreground mb-4">More Projects Coming Soon</h3>
                    <p className="text-muted-foreground">
                      I'm constantly working on new projects. Check back soon or visit my GitHub for updates.
                    </p>
                    <div className="mt-6">
                      <a
                        href="https://github.com/novpngt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary hover:underline"
                      >
                        <Github className="mr-2 h-5 w-5" />
                        Visit My GitHub
                      </a>
                    </div>
                  </div>
                </motion.div>
              </CarouselItem>
            </CarouselContent>

            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative mr-4 static translate-y-0" />
              <CarouselNext className="relative ml-4 static translate-y-0" />
            </div>
          </Carousel>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedProject !== null && selectedProjectData && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProjectDetail}
          >
            <motion.div
              className="bg-background rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <div className="h-64 sm:h-80 relative">
                  <Image
                    src={selectedProjectData.image || "/placeholder.svg"}
                    alt={selectedProjectData.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <button
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                    onClick={closeProjectDetail}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">{selectedProjectData.title}</h3>
                    <div className="flex space-x-3">
                      <a
                        href={selectedProjectData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        <span>GitHub</span>
                      </a>
                      <a
                        href={selectedProjectData.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">{selectedProjectData.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-foreground mb-2">Role:</h4>
                    <p className="text-muted-foreground">{selectedProjectData.role}</p>
                  </div>

                  {selectedProjectData.responsibilities.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-foreground mb-2">Responsibilities:</h4>
                      <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        {selectedProjectData.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <h4 className="text-lg font-semibold text-foreground mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectData.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
