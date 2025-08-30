import { Section } from "./section"
import { Award } from "lucide-react"

export function Achievements() {
  return (
    <Section id="achievements" title="Achievements">
      <ul className="grid gap-4 md:grid-cols-2">
        <li className="flex items-start gap-3 rounded-lg border p-4">
          <Award className="mt-0.5 h-5 w-5 text-amber-600" />
          <div>
            <p className="font-medium">Certified Course in Python — IIT Madras</p>
            <p className="text-sm text-muted-foreground">Strengthened core programming and problem-solving skills.</p>
          </div>
        </li>
        <li className="flex items-start gap-3 rounded-lg border p-4">
          <Award className="mt-0.5 h-5 w-5 text-amber-600" />
          <div>
            <p className="font-medium">Idea Fusion 2k25 Winner — Model Presentation (MCKVIE)</p>
            <p className="text-sm text-muted-foreground">Recognized for clarity, impact, and practical value.</p>
          </div>
        </li>
      </ul>
    </Section>
  )
}
