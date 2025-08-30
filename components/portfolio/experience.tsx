import { Section } from "./section"
import { Briefcase } from "lucide-react"

export function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="rounded-lg border p-5">
        <div className="flex items-start gap-3">
          <Briefcase className="mt-0.5 h-5 w-5 text-cyan-700" />
          <div>
            <p className="font-medium">Seeking Internships</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Open to roles in software development and AI/ML where I can learn, contribute, and collaborate with a
              supportive team.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
