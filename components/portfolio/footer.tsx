export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="mx-auto max-w-5xl px-4 text-center text-sm text-muted-foreground">
        <p className="text-pretty">
          © {new Date().getFullYear()} Suchetana Mukherjee • Built with care. Hobbies: sketching, painting, singing,
          dancing.
        </p>
      </div>
    </footer>
  )
}
