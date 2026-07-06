'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const INK = '#4D489A'

const stroke = { stroke: INK, strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' }

type ResourceIcon = 'blog' | 'tools'

function Icon({ icon }: { icon: ResourceIcon }) {
  switch (icon) {
    case 'blog':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
          <rect x="3" y="2.5" width="12" height="13" rx="2" {...stroke} />
          <path d="M6 6.5h6M6 9.5h6M6 12h3.5" {...stroke} />
        </svg>
      )
    case 'tools':
      return (
        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
          <path d="M11 3l4 4-1.5 1.5L9 4M5 13l-2 2M11.5 6.5l-6 6a1.8 1.8 0 000 2.5v0a1.8 1.8 0 002.5 0l6-6" {...stroke} />
        </svg>
      )
  }
}

interface ResourceItem {
  label: string
  href: string
  icon: ResourceIcon
  description: string
}

const items: ResourceItem[] = [
  { label: 'Blog',  href: '/blog',  icon: 'blog',  description: 'Guides on influencer marketing and creator growth' },
  { label: 'Tools', href: '/tools', icon: 'tools', description: 'Free calculators and creator marketing tools' },
]

export default function ResourcesDropdown({ onNavigate, variant = 'desktop' }: { onNavigate?: () => void; variant?: 'desktop' | 'mobile' }) {
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const rootRef = useRef<HTMLDivElement>(null)

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setOpen(true)
  }
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 120)
  }

  // Click-outside and Escape close the menu — needed since it also opens via click (touch/keyboard).
  useEffect(() => {
    if (variant !== 'desktop' || !open) return
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open, variant])

  if (variant === 'mobile') {
    return (
      <div>
        <button
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          className="w-full flex items-center justify-between text-left text-[15px] font-medium bg-transparent border-none cursor-pointer px-5 py-4"
          style={{ color: 'var(--muted)' }}
        >
          Resources
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms cubic-bezier(0.23, 1, 0.32, 1)' }}>
            <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div
          className="grid"
          style={{
            gridTemplateRows: open ? '1fr' : '0fr',
            opacity: open ? 1 : 0,
            transition: 'grid-template-rows 200ms cubic-bezier(0.23, 1, 0.32, 1), opacity 160ms ease',
          }}
        >
          <div className="overflow-hidden flex flex-col pl-3">
            {items.map(item => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className="text-left text-[14px] font-medium no-underline px-5 py-3"
                style={{ color: 'var(--dim)' }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div ref={rootRef} className="relative" onMouseEnter={openNow} onMouseLeave={closeSoon}>
      <button
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
        className="flex items-center gap-[5px] text-[13px] font-medium bg-transparent border-none cursor-pointer transition-colors duration-200"
        style={{ color: open ? 'var(--fg)' : 'var(--muted)' }}
      >
        Resources
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 200ms cubic-bezier(0.23, 1, 0.32, 1)' }}>
          <path d="M2.5 4.5L6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <div
        className="absolute top-full right-0 pt-3"
        style={{
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0) scale(1)' : 'translateY(-4px) scale(0.98)',
          transformOrigin: 'top right',
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 160ms cubic-bezier(0.23, 1, 0.32, 1), transform 160ms cubic-bezier(0.23, 1, 0.32, 1)',
        }}
      >
        <div
          className="w-[300px] max-w-[80vw] rounded-2xl p-3 grid grid-cols-1 gap-1"
          style={{
            background: 'var(--bg2)',
            border: '1px solid var(--line)',
            boxShadow: '0 20px 40px rgba(17,15,46,0.12), 0 4px 12px rgba(17,15,46,0.06)',
          }}
        >
          {items.map(item => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className="flex items-start gap-3 rounded-xl p-3 no-underline transition-colors duration-150"
              style={{ color: 'var(--fg)' }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--faint)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <span
                className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--faint)', border: '1px solid var(--line)' }}
              >
                <Icon icon={item.icon} />
              </span>
              <span className="min-w-0">
                <span className="block text-[13.5px] font-semibold leading-tight mb-[3px]">{item.label}</span>
                <span className="block text-[12px] leading-[1.4]" style={{ color: 'var(--dim)' }}>{item.description}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
