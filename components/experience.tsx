import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CalendarIcon } from "lucide-react"

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <Card>
          <CardHeader>
            <CardTitle>Professional Experience</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="border-l-2 border-primary pl-6 relative">
              <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <h3 className="font-bold text-lg">Software Developer Intern</h3>
                  <p className="text-muted-foreground">ECLO Co., Ltd, Ho Chi Minh, Vietnam</p>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  <span>Apr 2024 – Aug 2024</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="mb-2">
                  Contributed to developing a software solution for businesses operating billiards and karaoke services,
                  digitizing their operations.
                </p>
                <p className="font-medium mt-3">Responsibilities:</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Developed API endpoints using Laravel</li>
                  <li>Contributed to the frontend development using Next.js and Redux</li>
                  <li>Built a customer information management system</li>
                  <li>Implemented a kitchen coordination system</li>
                  <li>Created an equipment damage reporting module</li>
                </ul>
                <p className="font-medium mt-3">Technologies used:</p>
                <p>PHP Laravel, Next.js, Redux, MySQL Server</p>
                <p className="font-medium mt-3">Team Size:</p>
                <p>4 developers</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
