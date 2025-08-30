import { Section } from "./section"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const PROJECTS = [
  {
    name: "PoleStar",
    tagline: "A Smart Lighting System for independent living",
    details:
      "Designed a system that adapts lighting based on context and needs, aiming to improve accessibility and comfort.",
  },
  {
    name: "i-Cropwat",
    tagline: "An innovative Plant Watering System",
    details:
      "Built an automated watering solution to optimize irrigation and plant health with simple, reliable controls.",
  },
]

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Card-style layout highlighting outcomes and purpose.">
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <Card key={p.name} className="h-full transition-shadow hover:shadow-md">
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
              <CardDescription className="text-cyan-700">{p.tagline}</CardDescription>
            </CardHeader>
            <CardContent className="text-sm leading-relaxed text-muted-foreground">
              <p>{p.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
