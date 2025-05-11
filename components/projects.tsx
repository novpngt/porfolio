import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "J2WatchSGU",
      description:
        "An online watch store management system with user shopping features and admin tools for product, order, and sales management.",
      tags: ["Java", "Spring Boot", "MySQL", "GCP"],
      demoUrl: "#",
      repoUrl: "https://github.com/novpngt/j2watchsgu",
    },
    {
      title: "ECLO Business Management",
      description:
        "A software solution for billiards and karaoke businesses, digitizing their operations with customer management and service coordination.",
      tags: ["Laravel", "Next.js", "Redux", "MySQL"],
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A clean, responsive portfolio website built with modern web technologies and featuring a minimalist black and white design with dark mode support.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
      demoUrl: "www.novpngt.site",
      repoUrl: "https://github.com/novpngt/porfolio",
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="h-[4.5rem] overflow-hidden">
                  <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between mt-auto">
                <Button asChild variant="outline" size="sm">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                </Button>
                <Button asChild size="sm">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
