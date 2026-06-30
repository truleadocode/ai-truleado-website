'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const LogoMark = ({ accent }: { accent?: string }) => (
  <span
    className="w-[22px] h-[22px] rounded-[6px] flex items-center justify-center flex-shrink-0 transition-colors duration-[400ms]"
    style={{ background: accent || 'var(--acc)' }}
  >
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M2 10L6 2L10 10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 7h5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  </span>
)

export default function Nav() {
  const pathname = usePathname()
  const router = useRouter()

  const goToTab = (tab: 'advertiser' | 'influencer') => {
    router.push(`/?tab=${tab}`)
  }

  const scrollToWaitlist = () => {
    if (pathname !== '/') {
      router.push('/#waitlist')
    } else {
      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between h-16 px-[52px] max-[900px]:px-5"
      style={{
        background: 'rgba(9,14,26,0.92)',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <Link
        href="/"
        className="flex items-center gap-[7px] text-[18px] font-extrabold tracking-[-0.4px] text-fg no-underline"
      >
        <LogoMark />
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

    </nav>
  )
}
