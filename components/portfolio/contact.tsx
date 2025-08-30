"use client"

import { Section } from "./section"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { Mail } from "lucide-react"

export function Contact() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)

  async function onSubmit(form: FormData) {
    setLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
        }),
        headers: { "Content-Type": "application/json" },
      })
      if (!res.ok) throw new Error("Request failed")
      toast({ title: "Message sent!", description: "Thanks for reaching out." })
    } catch {
      toast({
        title: "Something went wrong",
        description: "You can also email me directly.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section id="contact" title="Contact" subtitle="Let’s build something together.">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-lg border p-5">
          <div className="flex items-start gap-3">
            <Mail className="mt-0.5 h-5 w-5 text-cyan-700" />
            <div>
              <p className="font-medium">Email</p>
              <a
                className="text-sm text-cyan-700 underline underline-offset-4"
                href="mailto:mukherjeesuchetana514@gmail.com"
              >
                mukherjeesuchetana514@gmail.com
              </a>
            </div>
          </div>
          <div className="mt-4 text-sm text-muted-foreground">
            GitHub:{" "}
            <a
              className="text-cyan-700 underline underline-offset-4"
              href="https://github.com/mukherjeesuchetana514-maker"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/mukherjeesuchetana514-maker
            </a>
          </div>
        </div>

        <form
          className="space-y-4 rounded-lg border p-5"
          onSubmit={async (e) => {
            e.preventDefault()
            await onSubmit(new FormData(e.currentTarget as HTMLFormElement))
            ;(e.currentTarget as HTMLFormElement).reset()
          }}
        >
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" name="name" required placeholder="Your name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required placeholder="you@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" required placeholder="How can we collaborate?" className="min-h-28" />
          </div>
          <Button type="submit" className="bg-cyan-700 hover:bg-cyan-800" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </Section>
  )
}
