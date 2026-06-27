import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  const expected = process.env.WAITLIST_PASSWORD || ''

  if (!expected) {
    return NextResponse.json({ error: 'WAITLIST_PASSWORD not set' }, { status: 500 })
  }

  if (password !== expected) {
    return NextResponse.json({ error: 'Wrong password' }, { status: 401 })
  }

  // Use a simple hash via Web Crypto (available in Edge/Node without importing 'crypto')
  const encoder = new TextEncoder()
  const data = encoder.encode(expected)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const token = Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')

  const res = NextResponse.json({ ok: true })
  res.cookies.set('wl_auth', token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
  return res
}
