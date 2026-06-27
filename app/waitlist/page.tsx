import { cookies } from 'next/headers'
import { createHash } from 'crypto'
import { readFileSync, existsSync } from 'fs'
import { join } from 'path'
import WaitlistLogin from '@/components/WaitlistLogin'
import WaitlistDashboard from '@/components/WaitlistDashboard'

export interface WaitlistEntry {
  id: string
  name: string
  email: string
  role: string
  submittedAt: string
}

function isAuthed(): boolean {
  const cookieStore = cookies()
  const token = cookieStore.get('wl_auth')?.value
  const password = process.env.WAITLIST_PASSWORD || ''
  if (!password || !token) return false
  const expected = createHash('sha256').update(password).digest('hex')
  return token === expected
}

function loadEntries(): WaitlistEntry[] {
  const file = join(process.cwd(), 'data', 'waitlist.json')
  if (!existsSync(file)) return []
  try {
    return JSON.parse(readFileSync(file, 'utf8'))
  } catch {
    return []
  }
}

export default function WaitlistPage() {
  if (!isAuthed()) return <WaitlistLogin />

  const entries = loadEntries()
  return <WaitlistDashboard entries={entries} />
}
