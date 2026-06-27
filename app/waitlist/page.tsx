import { cookies } from 'next/headers'
import { list } from '@vercel/blob'
import WaitlistLogin from '@/components/WaitlistLogin'
import WaitlistDashboard from '@/components/WaitlistDashboard'

export interface WaitlistEntry {
  id: string
  name: string
  email: string
  role: string
  submittedAt: string
}

async function isAuthed(): Promise<boolean> {
  const cookieStore = cookies()
  const token = cookieStore.get('wl_auth')?.value
  const password = process.env.WAITLIST_PASSWORD || ''
  if (!password || !token) return false

  const encoder = new TextEncoder()
  const hashBuffer = await crypto.subtle.digest('SHA-256', encoder.encode(password))
  const expected = Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')

  return token === expected
}

async function loadEntries(): Promise<WaitlistEntry[]> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return []
  try {
    const { blobs } = await list({ prefix: 'waitlist/' })
    const entries = await Promise.all(
      blobs.map(b => fetch(b.url, { cache: 'no-store' }).then(r => r.json()))
    )
    return entries.filter(Boolean)
  } catch {
    return []
  }
}

export default async function WaitlistPage() {
  const authed = await isAuthed()
  if (!authed) return <WaitlistLogin />
  const entries = await loadEntries()
  return <WaitlistDashboard entries={entries} />
}
