'use client'

import Image from 'next/image'
import Link from 'next/link'

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
  return (
    <footer style={{ borderTop: '1px solid var(--line)' }} className="pt-12 pb-9 px-[52px] max-[900px]:px-5">
      <div
        className="max-w-[1060px] mx-auto pb-11 grid gap-10 grid-cols-4 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1"
        style={{ borderBottom: '1px solid var(--line)' }}
      >
        {/* Brand */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-[9px] text-[17px] font-semibold tracking-[-0.02em] text-fg no-underline mb-[14px]"
          >
            <Image src="/logo-mark-t-tile.png" alt="Truleado" width={26} height={26} />
            Truleado
          </Link>
          <p className="text-[13px] font-normal leading-[1.65] max-w-[200px]" style={{ color: 'var(--muted)' }}>
            AI influencer marketing. True matches, faster. Built for micro and nano creators.
          </p>
          <div className="flex gap-[10px] mt-5">
            {[
              { href: 'https://www.instagram.com/truleado/',        icon: <InstagramIcon />, label: 'Instagram',   external: true },
              { href: 'https://x.com/truleado',                    icon: <XIcon />,         label: 'X (Twitter)', external: true },
              { href: 'https://www.linkedin.com/company/truleado', icon: <LinkedInIcon />,  label: 'LinkedIn',    external: true },
              { href: 'https://www.tiktok.com/@truleado',          icon: <TikTokIcon />,    label: 'TikTok',      external: true },
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
                  e.currentTarget.style.borderColor = 'var(--line2)'
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
          <h4 className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-4" style={{ color: 'var(--muted)' }}>
            Platform
          </h4>
          <ul className="flex flex-col gap-[10px] list-none">
            <li>
              <Link href="/" className="text-[14px] font-normal no-underline transition-colors duration-200" style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >For advertisers</Link>
            </li>
            <li>
              <Link href="/influencer" className="text-[14px] font-normal no-underline transition-colors duration-200" style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >For influencers</Link>
            </li>
            <li>
              <Link href="/compare" className="text-[14px] font-normal no-underline transition-colors duration-200" style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >Compare</Link>
            </li>
            <li>
              <Link href="/blog" className="text-[14px] font-normal no-underline transition-colors duration-200" style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >Blog</Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-4" style={{ color: 'var(--muted)' }}>
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
              <a href="mailto:support@truleado.com" className="text-[14px] font-normal no-underline transition-colors duration-200" style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >support@truleado.com</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-[12px] font-semibold tracking-[0.1em] uppercase mb-4" style={{ color: 'var(--muted)' }}>
            Legal
          </h4>
          <ul className="flex flex-col gap-[10px] list-none">
            <li>
              <Link href="/privacy" className="text-[14px] font-normal no-underline transition-colors duration-200" style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >Privacy policy</Link>
            </li>
            <li>
              <Link href="/terms" className="text-[14px] font-normal no-underline transition-colors duration-200" style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
              >Terms of service</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1060px] mx-auto flex items-center justify-between pt-7 flex-wrap gap-[10px]">
        <p className="text-[13px] font-normal" style={{ color: 'var(--dim)' }}>
          © 2026 Truleado. All rights reserved.
        </p>
        <div className="flex gap-5">
          {[{ label: 'Privacy', href: '/privacy' }, { label: 'Terms', href: '/terms' }].map(t => (
            <Link key={t.label} href={t.href} className="text-[13px] font-normal no-underline transition-colors duration-200"
              style={{ color: 'var(--dim)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--muted)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--dim)')}
            >{t.label}</Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
