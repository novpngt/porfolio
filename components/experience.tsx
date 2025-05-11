import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";
import BlurText from "@/components/ui/blur-text";

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
                <BlurText text="Contributed to developing a software solution for businesses operating billiards and karaoke services, digitizing their operations." delay={5} animateBy="words" direction="top" className="mb-2" />
                <BlurText text="Responsibilities:" delay={5} animateBy="words" direction="top" className="font-medium mt-3" />
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>
                    <BlurText text="Developed API endpoints using Laravel" delay={5} animateBy="words" direction="top" />
                  </li>
                  <li>
                    <BlurText text="Contributed to the frontend development using Next.js and Redux" delay={5} animateBy="words" direction="top" />
                  </li>
                  <li>
                    <BlurText text="Built a customer information management system" delay={5} animateBy="words" direction="top" />
                  </li>
                  <li>
                    <BlurText text="Implemented a kitchen coordination system" delay={5} animateBy="words" direction="top" />
                  </li>
                  <li>
                    <BlurText text="Created an equipment damage reporting module" delay={5} animateBy="words" direction="top" />
                  </li>
                </ul>
                <BlurText text="Technologies used:" delay={5} animateBy="words" direction="top" className="font-medium mt-3" />
                <BlurText text="PHP Laravel, Next.js, Redux, MySQL Server" delay={5} animateBy="words" direction="top" />
                <BlurText text="Team Size:" delay={5} animateBy="words" direction="top" className="font-medium mt-3" />
                <BlurText text="4 developers" delay={5} animateBy="words" direction="top" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
