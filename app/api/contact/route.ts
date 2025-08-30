import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    if (!data?.name || !data?.email || !data?.message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 })
    }
    console.log("[v0] Contact message:", data)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
