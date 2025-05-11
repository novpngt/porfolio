import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <Card>
          <CardHeader>
            <CardTitle>Academic Background</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="border-l-2 border-primary pl-6 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="font-bold text-lg">Bachelor of Software Engineering</h3>
                  <p className="text-muted-foreground">Saigon University, Ho Chi Minh, Vietnam</p>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>Oct 2020 – Feb 2025</span>
                </div>
              </div>
              <div className="mt-2">
                <p>GPA: 2.89</p>
                <p className="mt-2">
                  Studying software engineering with a focus on web development and database management. Coursework
                  includes programming fundamentals, data structures, algorithms, software design, and web application
                  development.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
