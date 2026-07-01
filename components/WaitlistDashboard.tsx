'use client'

import { useState } from 'react'
import type { WaitlistEntry } from '@/app/waitlist/page'

const ROLE_LABEL: Record<string, string> = {
  advertiser: 'Advertiser',
  influencer: 'Influencer',
}

const ROLE_COLOR: Record<string, string> = {
  advertiser: '#4D489A', // Violet Ink 500
  influencer: '#9894CC', // Violet Ink 300
}

export default function WaitlistDashboard({ entries }: { entries: WaitlistEntry[] }) {
  const [filter, setFilter] = useState<'all' | 'advertiser' | 'influencer'>('all')
  const [search, setSearch] = useState('')

  const advertisers = entries.filter(e => e.role === 'advertiser').length
  const influencers  = entries.filter(e => e.role === 'influencer').length

  const visible = entries
    .filter(e => filter === 'all' || e.role === filter)
    .filter(e => {
      const q = search.toLowerCase()
      return !q || e.name.toLowerCase().includes(q) || e.email.toLowerCase().includes(q)
    })
    .sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime())

  const copyEmails = () => {
    navigator.clipboard.writeText(visible.map(e => e.email).join(', '))
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-10 max-[900px]:px-5" style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: '1060px', margin: '0 auto' }}>

        {/* Header */}
        <div className="flex items-start justify-between flex-wrap gap-4 mb-10">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-2" style={{ color: 'var(--acc)' }}>
              Admin
            </p>
            <h1 className="text-[32px] font-semibold tracking-[-0.02em]" style={{ color: 'var(--fg)' }}>
              Waitlist
            </h1>
          </div>
          <button
            onClick={copyEmails}
            className="text-[13px] font-medium px-4 py-2 rounded-[7px] cursor-pointer transition-all duration-200"
            style={{
              color: 'var(--fg)',
              background: 'transparent',
              border: '1px solid var(--line)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--line2)'
              e.currentTarget.style.background = 'var(--faint)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--line)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            Copy {visible.length} emails
          </button>
        </div>

        {/* Stats */}
        <div className="grid gap-3 mb-8 grid-cols-3 max-[640px]:grid-cols-1">
          {[
            { label: 'Total signups', value: entries.length, color: 'var(--fg)' },
            { label: 'Advertisers',   value: advertisers,    color: ROLE_COLOR.advertiser },
            { label: 'Influencers',   value: influencers,    color: ROLE_COLOR.influencer },
          ].map(s => (
            <div
              key={s.label}
              className="rounded-xl px-6 py-5"
              style={{ background: 'var(--bg2)', border: '1px solid var(--line)' }}
            >
              <p className="text-[12px] font-medium mb-1" style={{ color: 'var(--muted)' }}>{s.label}</p>
              <p className="text-[32px] font-semibold tracking-[-0.02em]" style={{ color: s.color }}>
                {s.value}
              </p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3 mb-5 flex-wrap">
          <input
            type="text"
            placeholder="Search name or email…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="rounded-lg px-4 py-[10px] text-[13px] outline-none transition-colors duration-200"
            style={{
              background: 'var(--faint)',
              border: '1px solid var(--line)',
              color: 'var(--fg)',
              width: '240px',
            }}
            onFocus={e => (e.currentTarget.style.borderColor = 'var(--line2)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'var(--line)')}
          />
          <div className="flex gap-2">
            {(['all', 'advertiser', 'influencer'] as const).map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="text-[12px] font-medium px-3 py-[7px] rounded-[6px] cursor-pointer border transition-all duration-150 capitalize"
                style={{
                  background: filter === f ? (f === 'all' ? 'var(--faint)' : ROLE_COLOR[f] + '22') : 'transparent',
                  borderColor: filter === f ? (f === 'all' ? 'var(--line2)' : ROLE_COLOR[f] + '66') : 'var(--line)',
                  color: filter === f ? (f === 'all' ? 'var(--fg)' : ROLE_COLOR[f]) : 'var(--muted)',
                }}
              >
                {f === 'all' ? 'All' : ROLE_LABEL[f]}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        {entries.length === 0 ? (
          <div
            className="rounded-xl px-8 py-16 text-center"
            style={{ background: 'var(--bg2)', border: '1px solid var(--line)' }}
          >
            <p className="text-[14px]" style={{ color: 'var(--muted)' }}>
              No signups yet. Share the waitlist link to get started.
            </p>
          </div>
        ) : (
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid var(--line)' }}
          >
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ background: 'var(--bg2)', borderBottom: '1px solid var(--line)' }}>
                  {['Name', 'Email', 'Role', 'Signed up'].map(h => (
                    <th
                      key={h}
                      className="text-left px-5 py-3 text-[11px] font-semibold tracking-[0.1em] uppercase"
                      style={{ color: 'var(--muted)' }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {visible.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-5 py-10 text-center text-[14px]" style={{ color: 'var(--muted)', background: 'var(--bg3)' }}>
                      No results for &ldquo;{search}&rdquo;
                    </td>
                  </tr>
                ) : (
                  visible.map((entry, i) => (
                    <tr
                      key={entry.id}
                      style={{
                        background: i % 2 === 0 ? 'var(--bg3)' : 'var(--bg2)',
                        borderBottom: '1px solid var(--line)',
                      }}
                    >
                      <td className="px-5 py-3 text-[14px] font-medium" style={{ color: 'var(--fg)' }}>
                        {entry.name}
                      </td>
                      <td className="px-5 py-3 text-[13px]" style={{ color: 'var(--muted)' }}>
                        <a
                          href={`mailto:${entry.email}`}
                          className="no-underline transition-colors duration-150"
                          style={{ color: 'var(--muted)' }}
                          onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                          onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
                        >
                          {entry.email}
                        </a>
                      </td>
                      <td className="px-5 py-3">
                        <span
                          className="inline-block text-[11px] font-semibold tracking-[0.08em] uppercase px-2 py-1 rounded-[5px]"
                          style={{
                            background: (ROLE_COLOR[entry.role] || 'var(--acc)') + '18',
                            color: ROLE_COLOR[entry.role] || 'var(--acc)',
                          }}
                        >
                          {ROLE_LABEL[entry.role] || entry.role}
                        </span>
                      </td>
                      <td className="px-5 py-3 text-[13px]" style={{ color: 'var(--muted)' }}>
                        {new Date(entry.submittedAt).toLocaleDateString('en-US', {
                          month: 'short', day: 'numeric', year: 'numeric',
                        })}{' '}
                        <span style={{ color: 'var(--dim)' }}>
                          {new Date(entry.submittedAt).toLocaleTimeString('en-US', {
                            hour: '2-digit', minute: '2-digit',
                          })}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        )}

        <p className="mt-4 text-[12px] text-right" style={{ color: 'var(--dim)' }}>
          Showing {visible.length} of {entries.length} entries
        </p>
      </div>
    </div>
  )
}
