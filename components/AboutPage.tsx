'use client'

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const values = [
  {
    n: '01',
    title: 'Match quality over match speed',
    body: "A fast bad match is worse than a slow great one. We'd rather take two more days and send you someone who's actually right.",
  },
  {
    n: '02',
    title: 'Creators are partners, not inventory',
    body: "We talk to every influencer before presenting them to a brand. They know what they're walking into. That's what campaign-ready actually means.",
  },
  {
    n: '03',
    title: 'Small audiences, real trust',
    body: "Micro and nano influencers aren't a budget compromise. For most campaigns, they outperform everyone else — because their audiences actually listen.",
  },
]

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: 'https://truleado.com/about',
  name: 'About Truleado',
  description: "Truleado was built to fix influencer marketing's matching problem using AI-powered campaign matching and automated outreach for micro and nano creators.",
  mainEntity: {
    '@type': 'Person',
    name: 'Peter Hall',
    jobTitle: 'Founder & CEO',
    worksFor: { '@id': 'https://truleado.com/#organization' },
    sameAs: 'https://www.linkedin.com/in/hall-peter/',
  },
}

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />

      {/* ── ABOUT HERO ── */}
      <div className="pt-[128px] px-10 pb-0 max-w-[1060px] mx-auto max-[900px]:px-5">
        <p
          className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase mb-5"
          style={{ color: 'var(--acc)' }}
        >
          <span className="w-[18px] h-0.5 rounded-sm inline-block" style={{ background: 'var(--acc)' }} />
          Our story
        </p>
        <h1
          className="font-display font-light leading-[1.04] max-w-[700px] mb-7"
          style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.025em', fontVariationSettings: "'opsz' 72" }}
        >
          Built by someone who&apos;s been on both sides.
        </h1>
        <p
          className="text-[18px] font-normal max-w-[560px] leading-[1.75] mb-[72px]"
          style={{ color: 'var(--dim)' }}
        >
          Truleado exists because influencer marketing has a matching problem — not a supply problem. The right connections were always possible. We just built the infrastructure to make them automatic.
        </p>
      </div>

      <div className="h-px max-w-[1060px] mx-auto" style={{ background: 'var(--line)' }} />

      {/* ── FOUNDER ── */}
      <div className="max-w-[1060px] mx-auto px-10 py-[72px] max-[900px]:px-5">
        <div className="grid gap-16 items-start grid-cols-[280px_1fr] max-[900px]:grid-cols-1">
          {/* Founder card */}
          <div>
            <div
              className="rounded-[14px] overflow-hidden max-[900px]:max-w-[260px]"
              style={{ background: 'var(--bg2)', border: '1px solid var(--line)' }}
            >
              <div
                className="w-full aspect-square flex items-center justify-center text-[56px] font-semibold tracking-[-0.02em]"
                style={{
                  background: 'var(--bg3)',
                  color: 'var(--acc)',
                  borderBottom: '1px solid var(--line)',
                }}
              >
                PH
              </div>
              <div className="px-[22px] pt-5 pb-6">
                <p className="text-[16px] font-semibold mb-[3px]">Peter Hall</p>
                <p className="text-[13px] font-normal mb-4" style={{ color: 'var(--dim)' }}>
                  Founder &amp; CEO, Truleado
                </p>
                <div className="flex gap-[10px]">
                  <a
                    href="https://www.linkedin.com/in/hall-peter/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-[6px] text-[12px] font-semibold no-underline rounded-[6px] px-3 py-[6px] transition-colors duration-200"
                    style={{
                      color: 'var(--acc)',
                      border: '1px solid var(--line2)',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--faint)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <LinkedInIcon />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Story */}
          <div>
            <h2
              className="font-display font-light leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(22px, 3vw, 34px)', letterSpacing: '-0.02em', fontVariationSettings: "'opsz' 36" }}
            >
              Influencer marketing works.<br />The process around it doesn&apos;t.
            </h2>
            <p className="text-[16px] font-normal leading-[1.8] mb-5" style={{ color: 'var(--dim)' }}>
              Peter spent years watching brands struggle to find the right influencers — not because great ones didn&apos;t exist, but because the system for connecting them was broken. Spreadsheets, cold DMs, ghosted emails, mismatched pitches. Both sides were losing time and money on a process that should have been simple.
            </p>
            <p className="text-[16px] font-normal leading-[1.8] mb-5" style={{ color: 'var(--dim)' }}>
              What made it worse was that{' '}
              <strong className="font-semibold" style={{ color: 'var(--fg)' }}>he&apos;d seen it work beautifully</strong>{' '}
              when the match was right. A nano influencer with 8,000 highly engaged followers in a specific niche, paired with a brand that understood that audience — that combination could outperform a celebrity campaign at a fraction of the cost. The problem was never the influencers. It was always the matching.
            </p>
            <p className="text-[16px] font-normal leading-[1.8] mb-5" style={{ color: 'var(--dim)' }}>
              So Peter set out to fix it. Not by building another marketplace where brands browse profiles and hope for the best — but by building something that actually{' '}
              <strong className="font-semibold" style={{ color: 'var(--fg)' }}>understood both sides</strong>. What brands need from a campaign. What influencers care about in a brand partnership. And using AI to do the heavy lifting that was previously killing everyone&apos;s time.
            </p>
            <p className="text-[16px] font-normal leading-[1.8]" style={{ color: 'var(--dim)' }}>
              Truleado is the result of that belief:{' '}
              <strong className="font-semibold" style={{ color: 'var(--fg)' }}>that the best influencer marketing starts with a true match</strong>{' '}
              — True Lead — and that getting there shouldn&apos;t require an army of account managers or a six-figure agency retainer. It should just work.
            </p>
          </div>
        </div>
      </div>

      <div className="h-px max-w-[1060px] mx-auto" style={{ background: 'var(--line)' }} />

      {/* ── VALUES ── */}
      <div className="max-w-[1060px] mx-auto px-10 pb-[88px] pt-0 max-[900px]:px-5">
        <p
          className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase mb-[14px] mt-[72px]"
          style={{ color: 'var(--acc)' }}
        >
          <span className="w-[18px] h-0.5 rounded-sm inline-block" style={{ background: 'var(--acc)' }} />
          What we believe
        </p>
        <h2
          className="font-display font-light leading-[1.07] max-w-[440px] mb-10"
          style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', letterSpacing: '-0.025em', fontVariationSettings: "'opsz' 48" }}
        >
          The principles<br />behind everything.
        </h2>
        <div className="grid gap-[14px] grid-cols-3 max-[900px]:grid-cols-1">
          {values.map(v => (
            <div
              key={v.n}
              className="rounded-xl px-[26px] pt-7 pb-8"
              style={{ background: 'var(--bg2)', border: '1px solid var(--line)' }}
            >
              <p
                className="text-[11px] font-semibold tracking-[0.12em] mb-[14px]"
                style={{ color: 'var(--acc)' }}
              >
                {v.n}
              </p>
              <h3 className="text-[15px] font-semibold mb-2">{v.title}</h3>
              <p className="text-[14px] font-normal leading-[1.7]" style={{ color: 'var(--dim)' }}>
                {v.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
