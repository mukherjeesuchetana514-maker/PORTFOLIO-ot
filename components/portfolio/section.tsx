import type React from "react"
export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <header className="mb-6 md:mb-8">
        <h2 className="text-pretty text-2xl font-semibold md:text-3xl">{title}</h2>
        {subtitle ? <p className="leading-relaxed text-muted-foreground">{subtitle}</p> : null}
      </header>
      {children}
    </section>
  )
}
