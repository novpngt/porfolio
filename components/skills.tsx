import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
  const skillCategories = [
    {
      category: "Programming",
      skills: ["Java", "PHP", "JavaScript", "HTML", "CSS", "SQL"],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Spring Boot", "Laravel", "ReactJS", "Redux", "Hibernate"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Git", "Docker", "MySQL", "Linux", "Maven", "Google Cloud Platform"],
    },
    {
      category: "Others",
      skills: ["RESTful APIs", "OOP", "Database Design"],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="bg-muted px-3 py-1 rounded-md text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Languages & Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-2">Languages</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="font-medium mr-2">English:</span> B2 - Aptis, TOEIC
                    </li>
                    <li className="flex items-center">
                      <span className="font-medium mr-2">Vietnamese:</span> Native
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Certifications</h3>
                  <ul className="space-y-2">
                    <li>
                      <div className="font-medium">Aptis ESOL General – British Council</div>
                      <div className="text-sm text-muted-foreground">Dec 2024 - Score: 162 (B2)</div>
                    </li>
                    <li>
                      <div className="font-medium">TOEIC L&R – ETS</div>
                      <div className="text-sm text-muted-foreground">Apr 2024 - Score: 780</div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
