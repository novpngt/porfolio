import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="mb-4">
              I'm a Software Engineering student at Saigon University with experience in full-stack web development. I'm
              passionate about creating efficient, user-friendly applications that solve real business problems.
            </p>
            <p className="mb-4">
              My recent internship at ECLO Co., Ltd allowed me to work on a comprehensive software solution for
              businesses in the service industry, where I contributed to both backend API development with Laravel and
              frontend implementation using Next.js and Redux.
            </p>
            <p>
              I'm proficient in various programming languages and frameworks including Java, PHP, JavaScript, Spring
              Boot, Laravel, and React. I'm constantly learning and expanding my skills to stay current with modern
              development practices.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
