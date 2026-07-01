'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function WaitlistLogin() {
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/waitlist/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (res.ok) {
        router.refresh()
      } else {
        setError('Incorrect password.')
      }
    } catch {
      setError('Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: 'var(--bg)' }}
    >
      <div style={{ width: '100%', maxWidth: '380px' }}>
        {/* Logo */}
        <div className="flex items-center gap-2 mb-10 justify-center">
          <span
            className="w-6 h-6 rounded-[6px] flex items-center justify-center"
            style={{ background: 'var(--brand)' }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 10L6 2L10 10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3.5 7h5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-[17px] font-semibold" style={{ color: 'var(--fg)' }}>Truleado</span>
        </div>

        <div
          className="rounded-2xl p-8"
          style={{ background: 'var(--bg2)', border: '1px solid var(--line)' }}
        >
          <h1 className="text-[20px] font-semibold tracking-[-0.02em] mb-1" style={{ color: 'var(--fg)' }}>
            Waitlist admin
          </h1>
          <p className="text-[13px] mb-8" style={{ color: 'var(--muted)' }}>
            Enter the password to continue.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoFocus
              className="w-full rounded-lg px-4 py-[13px] text-[14px] outline-none transition-colors duration-200"
              style={{
                background: 'var(--faint)',
                border: '1px solid var(--line)',
                color: 'var(--fg)',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--line2)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--line)')}
            />
            {error && (
              <p className="text-[13px]" style={{ color: 'var(--ember)' }}>{error}</p>
            )}
            <button
              type="submit"
              disabled={loading || !password}
              className="w-full rounded-lg py-[13px] text-[14px] font-medium text-white border-none cursor-pointer transition-opacity duration-200"
              style={{
                background: 'var(--brand)',
                opacity: loading || !password ? 0.5 : 1,
              }}
            >
              {loading ? 'Checking…' : 'Continue'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
