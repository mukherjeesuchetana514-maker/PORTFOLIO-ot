import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="mx-auto max-w-5xl px-4 pt-10 md:pt-16">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="order-2 space-y-4 md:order-1">
          <p className="text-sm font-medium text-cyan-700">Suchetana Mukherjee</p>
          <h1 className="text-pretty text-3xl font-semibold leading-tight md:text-4xl">
            2nd-year B.Tech in CSE at MCKV Institute of Engineering
          </h1>
          <p className="leading-relaxed text-muted-foreground">
            Passionate about software development, AI/ML, and open-source. I enjoy building helpful systems and learning
            by doing.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild className="bg-cyan-700 hover:bg-cyan-800">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline">
              <a
                href="https://github.com/mukherjeesuchetana514-maker"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                aria-label="Open GitHub"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </Button>
            <Button asChild variant="ghost">
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                aria-label="Open LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[3/4] w-56 overflow-hidden rounded-xl border bg-muted md:w-72">
            <Image
              src="/images/profile.png"
              alt="Portrait photo near an airplane window"
              fill
              sizes="(max-width: 768px) 14rem, 18rem"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
