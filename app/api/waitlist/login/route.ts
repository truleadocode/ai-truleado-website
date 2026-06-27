import { NextRequest, NextResponse } from 'next/server'
import { createHash } from 'crypto'

export async function POST(req: NextRequest) {
  const { password } = await req.json()
  const expected = process.env.WAITLIST_PASSWORD || ''

  if (!expected) {
    return NextResponse.json({ error: 'WAITLIST_PASSWORD not set' }, { status: 500 })
  }

  if (password !== expected) {
    return NextResponse.json({ error: 'Wrong password' }, { status: 401 })
  }

  const token = createHash('sha256').update(expected).digest('hex')

  const res = NextResponse.json({ ok: true })
  res.cookies.set('wl_auth', token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 7, // 7 days
  })
  return res
}
