'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const MenuIcon = ({ open }: { open: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d={open ? 'M5 5l10 10M15 5L5 15' : 'M3 6h14M3 10h14M3 14h14'}
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      style={{ transition: 'd 150ms ease' }}
    />
  </svg>
)

export default function Nav() {
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)

  const goToTab = (tab: 'advertiser' | 'influencer') => {
    setMenuOpen(false)
    router.push(tab === 'advertiser' ? '/' : '/influencer')
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[200]"
      style={{ background: 'var(--bg)', borderBottom: '1px solid var(--line)' }}
    >
      <div className="flex items-center justify-between h-16 px-[52px] max-[900px]:px-5">
        <Link href="/" onClick={closeMenu} className="flex items-center gap-[7px] text-[18px] font-semibold tracking-[-0.02em] text-fg no-underline">
          Truleado
        </Link>

        <div className="flex items-center gap-8 max-[900px]:hidden">
          <button
            onClick={() => goToTab('advertiser')}
            className="text-[13px] font-medium cursor-pointer bg-transparent border-none transition-colors duration-200"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            Advertisers
          </button>
          <button
            onClick={() => goToTab('influencer')}
            className="text-[13px] font-medium cursor-pointer bg-transparent border-none transition-colors duration-200"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            Influencers
          </button>
          <Link
            href="/about"
            className="text-[13px] font-medium no-underline transition-colors duration-200"
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            About
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          className="hidden max-[900px]:flex items-center justify-center w-9 h-9 rounded-lg border-none cursor-pointer active:scale-[0.97]"
          style={{ background: 'var(--faint)', color: 'var(--fg)', transition: 'transform 120ms ease-out' }}
        >
          <MenuIcon open={menuOpen} />
        </button>
      </div>

      {/* Mobile menu panel — grid-template-rows collapse avoids animating height directly */}
      <div
        className="hidden max-[900px]:grid"
        style={{
          gridTemplateRows: menuOpen ? '1fr' : '0fr',
          opacity: menuOpen ? 1 : 0,
          borderTop: menuOpen ? '1px solid var(--line)' : '1px solid transparent',
          transition: 'grid-template-rows 200ms cubic-bezier(0.23, 1, 0.32, 1), opacity 150ms ease, border-color 200ms ease',
        }}
      >
        <div className="overflow-hidden flex flex-col">
          <button
            onClick={() => goToTab('advertiser')}
            className="text-left text-[15px] font-medium cursor-pointer bg-transparent border-none px-5 py-4"
            style={{ color: 'var(--muted)' }}
          >
            For advertisers
          </button>
          <button
            onClick={() => goToTab('influencer')}
            className="text-left text-[15px] font-medium cursor-pointer bg-transparent border-none px-5 py-4"
            style={{ color: 'var(--muted)' }}
          >
            For influencers
          </button>
          <Link
            href="/about"
            onClick={closeMenu}
            className="text-[15px] font-medium no-underline px-5 py-4"
            style={{ color: 'var(--muted)' }}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
