import { Section } from "./section"

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="Friendly yet professional — always curious and building.">
      <div className="max-w-3xl space-y-4">
        <p className="leading-relaxed">
          I’m a 2nd-year B.Tech student in Computer Science & Engineering at MCKV Institute of Engineering. I’m
          enthusiastic about software development and especially interested in AI/ML and contributing to open-source
          projects.
        </p>
        <ul className="list-inside list-disc text-muted-foreground">
          <li>Looking for internships and real-world learning opportunities</li>
          <li>Enjoy collaborating and presenting ideas clearly</li>
        </ul>
      </div>
    </Section>
  )
}
