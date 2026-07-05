'use client'

import { useState } from 'react'

const EMBER = '#D93D2A'
const ACC   = '#9894CC'
const INK   = '#4D489A'

/* ── Shared bits ─────────────────────────────────────────── */

export function Eyebrow({ label, center }: { label: string; center?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase mb-[14px] ${center ? 'justify-center' : ''}`}
      style={{ color: 'var(--acc)' }}
    >
      <span className="w-[18px] h-0.5 rounded-sm inline-block" style={{ background: 'var(--acc)' }} />
      {label}
    </p>
  )
}

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ── Step visuals — large product mockups built from tokens ── */

const stroke = { stroke: INK, strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' }
const strokeSoft = { ...stroke, stroke: ACC }

export type StepArt = 'brief' | 'search' | 'chat' | 'deal' | 'upload' | 'profile' | 'pitch' | 'choice'

/* mock-UI primitives */
const mockLabel = 'text-[10px] font-semibold tracking-[0.1em] uppercase'
const mockCard: React.CSSProperties = {
  background: 'var(--bg2)',
  border: '1px solid var(--line)',
  borderRadius: '14px',
  boxShadow: '0 10px 30px rgba(17,15,46,0.07), 0 2px 8px rgba(17,15,46,0.04)',
}

function WindowDots() {
  return (
    <div className="flex gap-[5px] mb-5">
      {['#F48A7C', '#F0C070', '#86CFA0'].map(c => (
        <span key={c} className="w-[8px] h-[8px] rounded-full inline-block" style={{ background: c }} />
      ))}
    </div>
  )
}

function MockSelect({ value }: { value: string }) {
  return (
    <div
      className="flex items-center justify-between rounded-lg px-4 py-[11px] text-[13px] font-medium"
      style={{ border: '1px solid var(--line)', color: 'var(--fg)' }}
    >
      {value}
      <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke={ACC} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
    </div>
  )
}

function Avatar({ initials, tone }: { initials: string; tone?: 'ink' | 'soft' }) {
  return (
    <span
      className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-semibold flex-shrink-0"
      style={tone === 'ink'
        ? { background: 'var(--brand)', color: '#F8F7FF' }
        : { background: 'var(--bg3)', color: INK }}
    >
      {initials}
    </span>
  )
}

function StepVisual({ art }: { art: StepArt }) {
  switch (art) {
    /* ── advertiser ── */
    case 'brief': // new campaign form
      return (
        <div className="p-7 text-left" style={mockCard}>
          <WindowDots />
          <p className={mockLabel} style={{ color: 'var(--dim)' }}>New campaign</p>
          <p className={`${mockLabel} mt-5 mb-2`} style={{ color: 'var(--muted)' }}>Campaign type</p>
          <div className="flex gap-2 mb-5">
            <span className="rounded-lg px-4 py-[9px] text-[13px] font-medium" style={{ border: '1.5px solid var(--brand)', color: 'var(--brand)' }}>UGC program</span>
            <span className="rounded-lg px-4 py-[9px] text-[13px] font-normal" style={{ border: '1px solid var(--line)', color: 'var(--dim)' }}>Paid ads</span>
          </div>
          <p className={`${mockLabel} mb-2`} style={{ color: 'var(--muted)' }}>Creator niche</p>
          <div className="flex items-center gap-2 rounded-lg px-3 py-[9px] mb-5 flex-wrap" style={{ border: '1px solid var(--line)' }}>
            {['Tech ×', 'Productivity ×'].map(t => (
              <span key={t} className="rounded-full px-3 py-[3px] text-[12px] font-medium" style={{ background: 'var(--bg3)', color: INK }}>{t}</span>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p className={`${mockLabel} mb-2`} style={{ color: 'var(--muted)' }}>Budget</p>
              <MockSelect value="$5,000 / month" />
            </div>
            <div>
              <p className={`${mockLabel} mb-2`} style={{ color: 'var(--muted)' }}>Creator age</p>
              <MockSelect value="22–35" />
            </div>
          </div>
        </div>
      )
    case 'search': // AI scoring the roster
      return (
        <div className="p-7 text-left" style={mockCard}>
          <WindowDots />
          <p className={mockLabel} style={{ color: 'var(--dim)' }}>Scoring your roster</p>
          <div className="mt-5 flex flex-col gap-3">
            {[
              { i: 'SC', name: 'Sarah Chen',   handle: '@sarahcreates', score: '98%', hot: true },
              { i: 'MR', name: 'Marc Reijnen', handle: '@marcmakes',    score: '94%', hot: false },
              { i: 'AL', name: 'Ana López',    handle: '@ana.codes',    score: '91%', hot: false },
            ].map(r => (
              <div key={r.i} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ border: '1px solid var(--line)', background: r.hot ? 'var(--faint)' : 'transparent' }}>
                <Avatar initials={r.i} tone={r.hot ? 'ink' : 'soft'} />
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-medium leading-tight">{r.name}</p>
                  <p className="text-[12px] leading-tight" style={{ color: 'var(--dim)' }}>{r.handle}</p>
                </div>
                <span
                  className={`text-[12px] font-semibold rounded-full px-3 py-[3px] ${r.hot ? 'anim-pulse' : ''}`}
                  style={{ background: 'var(--bg3)', color: INK }}
                >
                  {r.score} match
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[12px]" style={{ color: 'var(--dim)' }}>412 creators scored · top 3 shown</p>
        </div>
      )
    case 'chat': // briefing conversation
      return (
        <div className="p-7 text-left" style={mockCard}>
          <div className="flex items-center gap-3 pb-4 mb-5" style={{ borderBottom: '1px solid var(--line)' }}>
            <Avatar initials="T" tone="ink" />
            <div>
              <p className="text-[13px] font-semibold leading-tight">Truleado</p>
              <p className="text-[12px] leading-tight" style={{ color: 'var(--dim)' }}>briefing Sarah Chen</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-xl rounded-tl-[4px] px-4 py-3 max-w-[85%] text-[13px] leading-[1.6]" style={{ background: 'var(--bg3)', color: 'var(--fg)' }}>
              Hi Sarah — a tech brand wants 4 short videos a month on productivity workflows. $1,200/month, 3-month run.
            </div>
            <div className="rounded-xl rounded-tl-[4px] px-4 py-3 max-w-[85%] text-[13px] leading-[1.6]" style={{ background: 'var(--bg3)', color: 'var(--fg)' }}>
              Full brief attached. Interested?
            </div>
            <div className="anim-float self-end rounded-xl rounded-tr-[4px] px-4 py-3 text-[13px] font-medium" style={{ background: 'var(--brand)', color: '#F8F7FF' }}>
              I&apos;m in. Where do I sign?
            </div>
          </div>
        </div>
      )
    case 'deal': // campaign-ready shortlist
      return (
        <div className="p-7 text-left" style={mockCard}>
          <WindowDots />
          <p className={mockLabel} style={{ color: 'var(--dim)' }}>Your shortlist · Summer launch</p>
          <div className="mt-5 flex flex-col gap-3">
            {[
              { i: 'SC', name: 'Sarah Chen',   meta: '28K followers · 5.2% eng' },
              { i: 'MR', name: 'Marc Reijnen', meta: '11K followers · 7.8% eng' },
              { i: 'AL', name: 'Ana López',    meta: '43K followers · 4.6% eng' },
            ].map((r, idx) => (
              <div key={r.i} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ border: '1px solid var(--line)' }}>
                <Avatar initials={r.i} />
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-medium leading-tight">{r.name}</p>
                  <p className="text-[12px] leading-tight" style={{ color: 'var(--dim)' }}>{r.meta}</p>
                </div>
                <span className={`inline-flex items-center gap-[5px] text-[12px] font-medium rounded-full px-3 py-[3px] ${idx === 0 ? 'anim-pulse' : ''}`} style={{ background: '#EAF5EE', color: '#1A6B3A', border: '1px solid #86CFA0' }}>
                  <svg width="9" height="9" viewBox="0 0 10 10" fill="none"><path d="M1.5 5.5l2.5 2.5 4.5-6" stroke="#1F8048" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Briefed · said yes
                </span>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-lg py-3 text-center text-[13px] font-medium" style={{ background: 'var(--brand)', color: '#F8F7FF' }}>
            Book the final call
          </div>
        </div>
      )

    /* ── influencer ── */
    case 'upload': // screenshot dropzone
      return (
        <div className="p-7 text-left" style={mockCard}>
          <WindowDots />
          <p className={mockLabel} style={{ color: 'var(--dim)' }}>Build your profile</p>
          <div className="mt-5 rounded-xl px-6 py-9 text-center" style={{ border: '1.5px dashed var(--line2)', background: 'var(--faint)' }}>
            <div className="anim-float inline-block mb-3">
              <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden>
                <path d="M17 24V10M11 15.5L17 9.5l6 6" {...stroke} />
                <path d="M7 24v3a3 3 0 003 3h14a3 3 0 003-3v-3" {...strokeSoft} />
              </svg>
            </div>
            <p className="text-[13px] font-medium">Drop your screenshots here</p>
            <p className="text-[12px] mt-1" style={{ color: 'var(--dim)' }}>Instagram, TikTok, or YouTube analytics</p>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {['IG insights', 'TikTok stats', 'YT audience'].map(t => (
              <div key={t} className="rounded-lg px-3 py-3 text-center" style={{ border: '1px solid var(--line)', background: 'var(--bg3)' }}>
                <svg width="18" height="18" viewBox="0 0 20 20" aria-hidden className="inline-block mb-1">
                  <rect x="2" y="2" width="16" height="16" rx="3" {...strokeSoft} />
                  <circle cx="7.5" cy="7.5" r="1.8" {...strokeSoft} />
                  <path d="M2 14l5-4 4 3 4-4 3 3" {...strokeSoft} />
                </svg>
                <p className="text-[11px] font-medium" style={{ color: 'var(--dim)' }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      )
    case 'profile': // AI-built profile card
      return (
        <div className="p-7 text-left" style={mockCard}>
          <WindowDots />
          <div className="flex items-center gap-4 mb-6">
            <span className="w-14 h-14 rounded-full flex items-center justify-center text-[17px] font-semibold" style={{ background: 'var(--bg3)', color: INK }}>MK</span>
            <div>
              <p className="text-[15px] font-semibold leading-tight">Maya Kim</p>
              <p className="text-[13px]" style={{ color: 'var(--dim)' }}>@maya.creates</p>
            </div>
            <span className="anim-pulse ml-auto text-[11px] font-semibold rounded-full px-3 py-[4px]" style={{ background: 'var(--bg3)', color: INK }}>
              Profile ready
            </span>
          </div>
          <div className="flex gap-2 flex-wrap mb-6">
            {['Fitness', 'Wellness', 'Reels-first', '18–30 audience'].map(t => (
              <span key={t} className="rounded-full px-3 py-[4px] text-[12px] font-medium" style={{ background: 'var(--faint)', color: INK, border: '1px solid var(--line)' }}>{t}</span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { v: '24K',  l: 'Followers' },
              { v: '6.1%', l: 'Engagement' },
              { v: '92%',  l: 'Real audience' },
            ].map(s => (
              <div key={s.l} className="rounded-lg px-3 py-3" style={{ border: '1px solid var(--line)' }}>
                <p className="text-[17px] font-semibold" style={{ color: 'var(--fg)' }}>{s.v}</p>
                <p className="text-[11px]" style={{ color: 'var(--dim)' }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      )
    case 'pitch': // the ping — SMS notification
      return (
        <div className="p-7 text-left" style={mockCard}>
          <div className="flex flex-col items-center pb-5 mb-5" style={{ borderBottom: '1px solid var(--line)' }}>
            <span className="w-11 h-11 rounded-full flex items-center justify-center text-[14px] font-semibold mb-2" style={{ background: 'var(--brand)', color: '#F8F7FF' }}>T</span>
            <p className="text-[13px] font-semibold">Truleado</p>
            <p className="text-[11px]" style={{ color: 'var(--dim)' }}>Text message · now</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="rounded-xl rounded-tl-[4px] px-4 py-3 text-[13px] leading-[1.6]" style={{ background: 'var(--bg3)', color: 'var(--fg)' }}>
              Hi Maya — a new campaign just matched your profile.
            </div>
            <div className="anim-float rounded-xl rounded-tl-[4px] px-4 py-3 text-[13px] leading-[1.6]" style={{ background: 'var(--bg3)', color: 'var(--fg)' }}>
              <span className="font-semibold">Glow Skincare</span>: $900 for 3 reels this month. Full brief inside — log in to accept.
            </div>
          </div>
          <p className="mt-5 text-[12px] text-center" style={{ color: 'var(--dim)' }}>Only when a campaign genuinely fits. No spam.</p>
        </div>
      )
    case 'choice': // accept or pass
      return (
        <div className="p-7 text-left" style={mockCard}>
          <WindowDots />
          <p className={mockLabel} style={{ color: 'var(--dim)' }}>Campaign offer</p>
          <div className="mt-5 rounded-xl p-5" style={{ border: '1px solid var(--line)' }}>
            <div className="flex items-center gap-3 mb-4">
              <Avatar initials="GS" tone="ink" />
              <div>
                <p className="text-[14px] font-semibold leading-tight">Glow Skincare</p>
                <p className="text-[12px]" style={{ color: 'var(--dim)' }}>UGC program · 3 months</p>
              </div>
            </div>
            {[
              ['Deliverables', '3 reels / month'],
              ['Payment',      '$900 / month'],
              ['Usage rights', 'Organic only'],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between py-[7px] text-[13px]" style={{ borderTop: '1px solid var(--line)' }}>
                <span style={{ color: 'var(--dim)' }}>{k}</span>
                <span className="font-medium">{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-lg py-3 text-center text-[13px] font-medium" style={{ border: '1px solid var(--line)', color: 'var(--dim)' }}>
              Pass
            </div>
            <div className="anim-pulse rounded-lg py-3 text-center text-[13px] font-medium" style={{ background: 'var(--brand)', color: '#F8F7FF' }}>
              Accept the deal
            </div>
          </div>
        </div>
      )
  }
}

/* ── How it works ─────────────────────────────────────────── */

export interface StepData { n: string; tag: string; title: string; body: string; art: StepArt }

export function HowItWorks({ heading, items }: { heading: React.ReactNode; items: StepData[] }) {
  return (
    <div id="how-it-works">
      <div className="max-w-[1060px] mx-auto px-10 py-[88px] max-[900px]:px-5">
        <Eyebrow label="How it works" />
        <h2
          className="font-display font-light tracking-[-0.025em] leading-[1.07] max-w-[440px]"
          style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', fontVariationSettings: "'opsz' 48" }}
        >
          {heading}
        </h2>

        {items.map((s, idx) => (
          <div key={s.n}>
            <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,460px)] gap-16 items-center py-[72px] max-[900px]:grid-cols-1 max-[900px]:gap-10 max-[900px]:py-12">
              {/* copy */}
              <div className="flex gap-8 items-start max-[520px]:flex-col max-[520px]:gap-3">
                <span
                  className="font-display font-light leading-none select-none flex-shrink-0"
                  style={{ fontSize: 'clamp(64px, 8vw, 104px)', color: 'var(--line2)', fontVariationSettings: "'opsz' 96" }}
                  aria-hidden
                >
                  {s.n}
                </span>
                <div className="pt-3 max-[520px]:pt-0">
                  <Eyebrow label={s.tag} />
                  <h3
                    className="font-semibold tracking-[-0.02em] leading-[1.15] mb-4"
                    style={{ fontSize: 'clamp(22px, 2.6vw, 30px)' }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-[16px] font-normal leading-[1.75] max-w-[460px]" style={{ color: 'var(--dim)' }}>
                    {s.body}
                  </p>
                </div>
              </div>
              {/* visual */}
              <StepVisual art={s.art} />
            </div>
            {idx < items.length - 1 && <div className="h-px" style={{ background: 'var(--line)' }} />}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Why Truleado ─────────────────────────────────────────── */

export type WhyArt = 'target' | 'ready' | 'ai' | 'match' | 'talk' | 'free'

function WhyIcon({ art }: { art: WhyArt }) {
  switch (art) {
    case 'target':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
          <circle cx="20" cy="20" r="13" {...stroke} />
          <circle cx="20" cy="20" r="7" {...strokeSoft} />
          <g className="anim-pulse"><circle cx="20" cy="20" r="2.5" fill={INK} /></g>
        </svg>
      )
    case 'ready':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
          <path d="M21 5L9 22h8l-2 13 12-17h-8l2-13z" {...stroke} />
          <g className="anim-pulse"><path d="M28 8l4-2M30 14l4 1" {...strokeSoft} /></g>
        </svg>
      )
    case 'ai':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
          <rect x="9" y="9" width="22" height="22" rx="5" {...stroke} />
          <path d="M9 16H4M9 24H4M36 16h-5M36 24h-5M16 9V4M24 9V4M16 36v-5M24 36v-5" {...strokeSoft} />
          <g className="anim-pulse"><circle cx="20" cy="20" r="4" {...stroke} /></g>
        </svg>
      )
    case 'match':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
          <circle cx="14" cy="20" r="9" {...stroke} />
          <circle cx="26" cy="20" r="9" {...strokeSoft} />
          <g className="anim-pulse"><path d="M17.5 20l2 2 3.5-4" {...stroke} /></g>
        </svg>
      )
    case 'talk':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
          <path d="M7 9h18a3 3 0 013 3v7a3 3 0 01-3 3H14l-7 6v-6a3 3 0 01-3-3h3z" transform="translate(2 0)" {...stroke} />
          <g className="anim-float"><path d="M24 28h8a3 3 0 003-3v-3" {...strokeSoft} /></g>
        </svg>
      )
    case 'free':
      return (
        <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden>
          <path d="M20 6l4 4h6v6l4 4-4 4v6h-6l-4 4-4-4h-6v-6l-4-4 4-4v-6h6l4-4z" {...stroke} />
          <g className="anim-pulse"><path d="M16 20l3 3 5-6" {...strokeSoft} /></g>
        </svg>
      )
  }
}

export interface WhyData { art: WhyArt; title: string; body: string }

export function WhyTruleado({ heading, items }: { heading: React.ReactNode; items: WhyData[] }) {
  return (
    <div className="max-w-[1060px] mx-auto px-10 py-[88px] max-[900px]:px-5">
      <Eyebrow label="Why Truleado" />
      <h2
        className="font-display font-light tracking-[-0.025em] leading-[1.07] max-w-[440px] mb-[52px]"
        style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', fontVariationSettings: "'opsz' 48" }}
      >
        {heading}
      </h2>
      <div className="grid gap-[14px] grid-cols-3 max-[900px]:grid-cols-1">
        {items.map(w => (
          <div
            key={w.title}
            className="rounded-xl p-7 pb-9 transition-[border-color,transform] duration-200"
            style={{ background: 'var(--bg2)', border: '1px solid var(--line)' }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--line2)'
              e.currentTarget.style.transform = 'translateY(-3px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--line)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            <div
              className="w-16 h-16 rounded-xl flex items-center justify-center mb-5"
              style={{ background: 'var(--faint)', border: '1px solid var(--line)' }}
            >
              <WhyIcon art={w.art} />
            </div>
            <h3 className="text-[15px] font-semibold tracking-[-0.1px] mb-2">{w.title}</h3>
            <p className="text-[14px] font-normal leading-[1.7]" style={{ color: 'var(--dim)' }}>{w.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── FAQ ──────────────────────────────────────────────────── */

export interface FaqItem { q: string; a: string }

function FaqRow({ item, open, onToggle }: { item: FaqItem; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: '1px solid var(--line)' }}>
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 text-left bg-transparent border-none cursor-pointer py-6 px-1"
      >
        <span className="text-[16px] font-medium leading-[1.4]" style={{ color: 'var(--fg)' }}>{item.q}</span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            border: '1px solid var(--line2)',
            color: 'var(--acc)',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 200ms cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className="grid"
        style={{
          gridTemplateRows: open ? '1fr' : '0fr',
          opacity: open ? 1 : 0,
          transition: 'grid-template-rows 220ms cubic-bezier(0.23, 1, 0.32, 1), opacity 160ms ease',
        }}
      >
        <div className="overflow-hidden">
          <p className="text-[15px] font-normal leading-[1.75] pb-6 px-1 max-w-[640px]" style={{ color: 'var(--dim)' }}>
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Faq({ items }: { items: FaqItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)
  return (
    <div className="max-w-[1060px] mx-auto px-10 py-[88px] max-[900px]:px-5">
      <div className="grid gap-16 grid-cols-[minmax(0,340px)_1fr] max-[900px]:grid-cols-1 max-[900px]:gap-8 items-start">
        <div>
          <Eyebrow label="FAQ" />
          <h2
            className="font-display font-light tracking-[-0.025em] leading-[1.07]"
            style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', fontVariationSettings: "'opsz' 48" }}
          >
            Questions,<br />answered.
          </h2>
        </div>
        <div style={{ borderTop: '1px solid var(--line)' }}>
          {items.map((item, i) => (
            <FaqRow key={item.q} item={item} open={openIdx === i} onToggle={() => setOpenIdx(openIdx === i ? null : i)} />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Final CTA ────────────────────────────────────────────── */

export function FinalCta({
  heading,
  sub,
  buttonLabel,
  path,
  ps,
}: {
  heading: React.ReactNode
  sub: string
  buttonLabel: string
  path: '/advertiser' | '/influencer'
  ps?: string
}) {
  const go = () => {
    const isDev = window.location.hostname === 'localhost'
    window.location.href = isDev ? `http://localhost:3001${path}` : `https://app.truleado.com${path}`
  }
  return (
    <section className="px-10 py-[110px] text-center relative overflow-hidden max-[900px]:px-5">
      {/* grid overlay echoing the hero */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 60% 70% at 50% 50%, black 20%, transparent 100%)',
        }}
      />
      <div className="relative z-[1] max-w-[620px] mx-auto">
        <h2
          className="font-display font-light tracking-[-0.025em] leading-[1.08] mb-5"
          style={{ fontSize: 'clamp(30px, 4.5vw, 54px)', fontVariationSettings: "'opsz' 60" }}
        >
          {heading}
        </h2>
        <p className="text-[16px] font-normal leading-[1.75] mb-10 max-w-[440px] mx-auto" style={{ color: 'var(--dim)' }}>
          {sub}
        </p>
        <button
          onClick={go}
          className="inline-flex items-center gap-[9px] text-[15px] font-medium text-white px-9 py-4 rounded-lg border-none cursor-pointer active:scale-[0.97]"
          style={{ background: EMBER, transition: 'transform 160ms cubic-bezier(0.23, 1, 0.32, 1)' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
          onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
        >
          {buttonLabel}
          <ArrowRight />
        </button>
        {ps && (
          <p className="text-[13px] font-normal leading-[1.6] mt-6 max-w-[440px] mx-auto" style={{ color: 'var(--dim)' }}>
            <span className="font-semibold" style={{ color: 'var(--fg)' }}>P.S.</span> {ps}
          </p>
        )}
      </div>
    </section>
  )
}

export function Divider() {
  return <div className="h-px max-w-[1060px] mx-auto" style={{ background: 'var(--line)' }} />
}
