'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const LogoMark = () => (
  <span
    className="w-5 h-5 rounded-[5px] flex items-center justify-center flex-shrink-0"
    style={{ background: 'var(--acc)' }}
  >
    <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
      <path d="M2 10L6 2L10 10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3.5 7h5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  </span>
)

const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const XIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const TikTokIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
  </svg>
)

const socialLinkBase = 'w-[34px] h-[34px] rounded-lg flex items-center justify-center transition-all duration-200 no-underline'

export default function Footer() {
  const router = useRouter()

  const goToWaitlist = () => {
    router.push('/#waitlist')
    setTimeout(() => {
      document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <footer style={{ borderTop: '1px solid var(--line)' }} className="pt-12 pb-9 px-[52px] max-[900px]:px-5">
      <div
        className="max-w-[1060px] mx-auto pb-11 grid gap-10 max-[900px]:grid-cols-[1fr_1fr] max-[520px]:grid-cols-1"
        style={{
          gridTemplateColumns: '1fr 1fr 1fr 1fr',
          borderBottom: '1px solid var(--line)',
        }}
      >
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-[7px] text-[17px] font-extrabold text-fg no-underline mb-[14px]"
          >
            <LogoMark />
            Truleado
          </Link>
          <p className="text-[13px] font-normal leading-[1.65] max-w-[200px]" style={{ color: 'var(--muted)' }}>
            AI influencer marketing. True matches, faster. Built for micro and nano creators.
          </p>
          <div className="flex gap-[10px] mt-5">
            {[
              { href: '#',   icon: <InstagramIcon />, label: 'Instagram' },
              { href: '#',   icon: <XIcon />,         label: 'X (Twitter)' },
              { href: 'https://www.linkedin.com/in/hall-peter/', icon: <LinkedInIcon />, label: 'LinkedIn', external: true },
              { href: '#',   icon: <TikTokIcon />,    label: 'TikTok' },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.external ? '_blank' : undefined}
                rel={s.external ? 'noopener noreferrer' : undefined}
                aria-label={`Truleado on ${s.label}`}
                className={socialLinkBase}
                style={{ border: '1px solid var(--line)', color: 'var(--muted)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(232,227,218,0.2)'
                  e.currentTarget.style.background = 'var(--faint)'
                  e.currentTarget.style.color = 'var(--fg)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--line)'
                  e.currentTarget.style.background = 'transparent'
                  e.currentTarget.style.color = 'var(--muted)'
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Platform */}
        <div>
          <h4 className="text-[12px] font-bold tracking-[0.1em] uppercase mb-4" style={{ color: 'var(--muted)' }}>
            Platform
          </h4>
          <ul className="flex flex-col gap-[10px] list-none">
            <li>
              <Link href="/?tab=advertiser" className="text-[14px] font-normal no-underline transition-colors duration-200" style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >For Advertisers</Link>
            </li>
            <li>
              <Link href="/?tab=influencer" className="text-[14px] font-normal no-underline transition-colors duration-200" style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >For Influencers</Link>
            </li>
            <li>
              <button
                onClick={goToWaitlist}
                className="text-[14px] font-normal bg-transparent border-none cursor-pointer p-0 transition-colors duration-200"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >Join Waitlist</button>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[12px] font-bold tracking-[0.1em] uppercase mb-4" style={{ color: 'var(--muted)' }}>
            Company
          </h4>
          <ul className="flex flex-col gap-[10px] list-none">
            <li>
              <Link href="/about" className="text-[14px] font-normal no-underline transition-colors duration-200" style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >About</Link>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/hall-peter/" target="_blank" rel="noopener noreferrer"
                className="text-[14px] font-normal no-underline transition-colors duration-200" style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >Founder</a>
            </li>
            <li>
              <a href="#" className="text-[14px] font-normal no-underline transition-colors duration-200" style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >Contact</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-[12px] font-bold tracking-[0.1em] uppercase mb-4" style={{ color: 'var(--muted)' }}>
            Legal
          </h4>
          <ul className="flex flex-col gap-[10px] list-none">
            <li>
              <a href="#" className="text-[14px] font-normal no-underline transition-colors duration-200" style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="text-[14px] font-normal no-underline transition-colors duration-200" style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >Terms of Service</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1060px] mx-auto flex items-center justify-between pt-7 flex-wrap gap-[10px]">
        <p className="text-[13px] font-normal" style={{ color: 'rgba(232,227,218,0.25)' }}>
          © 2026 Truleado. All rights reserved.
        </p>
        <div className="flex gap-5">
          {['Privacy', 'Terms'].map(t => (
            <a key={t} href="#" className="text-[13px] font-normal no-underline transition-colors duration-200"
              style={{ color: 'rgba(232,227,218,0.3)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--muted)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,227,218,0.3)')}
            >{t}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
