"use client"

import type React from "react"

import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleSmooth = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (!hash.startsWith("#")) return
    e.preventDefault()
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const linkClasses = "text-sm md:text-base text-foreground/80 hover:text-foreground transition-colors"

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b",
        scrolled ? "bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60" : "bg-background/95",
      )}
      aria-label="Primary"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 md:py-4">
        <Link
          href="#home"
          onClick={(e) => handleSmooth(e, "#home")}
          className="font-semibold tracking-tight text-cyan-700"
        >
          SM
          <span className="sr-only">Suchetana Mukherjee</span>
        </Link>
        <ul className="flex items-center gap-4 md:gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link className={linkClasses} href={l.href} onClick={(e) => handleSmooth(e, l.href)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
