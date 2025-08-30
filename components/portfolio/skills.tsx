import { Section } from "./section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SKILLS = ["C", "Python", "HTML", "CSS"]

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Core technical strengths I’m actively using and growing.">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {SKILLS.map((skill) => (
          <Card key={skill} className="border transition-shadow hover:shadow-md">
            <CardHeader className="py-3">
              <CardTitle className="text-base">{skill}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p>Hands-on projects and coursework</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
