'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

type Tab = 'advertiser' | 'influencer'

const ADV = '#E05A3A'
const INF = '#C49A3C'

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

interface StepData { n: string; title: string; body: string }
interface WhyData  { icon: string; title: string; body: string }

const advSteps: StepData[] = [
  { n: '01', title: 'Post your brief',       body: 'Tell us your niche, budget, goals, and timeline. Takes under 5 minutes.' },
  { n: '02', title: 'We do the work',        body: 'Our AI searches the database, scores matches, and reaches out to the right influencers on your behalf.' },
  { n: '03', title: 'Influencers are briefed', body: 'We walk each matched influencer through your campaign. Only interested ones move forward.' },
  { n: '04', title: 'You close the deal',    body: 'Receive a shortlist of warm, briefed, campaign-ready influencers. Just show up for the final call.' },
]

const infSteps: StepData[] = [
  { n: '01', title: 'Upload screenshots',  body: 'Share screenshots of your social accounts. No API access, no passwords, no fuss.' },
  { n: '02', title: 'AI builds your profile', body: 'We extract your niche, audience demographics, engagement, and content style automatically.' },
  { n: '03', title: 'We pitch you to brands', body: 'When a campaign fits, we reach out with a full brief. No guessing, no cold emails from strangers.' },
  { n: '04', title: 'You say yes or no',   body: 'Interested? We set you up with the brand. Not for you? No pressure, no hard feelings.' },
]

const advWhy: WhyData[] = [
  { icon: '🎯', title: 'Micro & nano only',          body: 'We work exclusively with micro and nano influencers — the ones with real trust, real audiences, and real engagement.' },
  { icon: '⚡', title: 'Campaign-ready, not leads',  body: 'Every influencer you receive has already been briefed and said yes. No chasing, no ghosting.' },
  { icon: '🤖', title: 'AI does the heavy lifting',  body: 'Matching, outreach, briefing — all AI. Faster than any agency, cheaper than hiring in-house.' },
]

const infWhy: WhyData[] = [
  { icon: '✅', title: 'Only relevant brands',   body: 'We only ping you for campaigns that genuinely match your niche and audience. No spam, ever.' },
  { icon: '🤝', title: 'We handle the talking', body: 'No awkward back-and-forths with brands. We manage conversations so you focus on creating.' },
  { icon: '🆓', title: 'Always free for creators', body: 'No commission cuts, no subscription. We make money from advertisers, not you.' },
]

function Steps({ items, accent }: { items: StepData[]; accent: string }) {
  return (
    <div
      className="grid gap-px rounded-xl overflow-hidden max-[900px]:grid-cols-2 max-[520px]:grid-cols-1"
      style={{
        gridTemplateColumns: 'repeat(4, 1fr)',
        background: 'var(--line)',
        border: '1px solid var(--line)',
      }}
    >
      {items.map(s => (
        <div key={s.n} className="px-7 pt-9 pb-10" style={{ background: 'var(--bg2)' }}>
          <p className="text-[11px] font-bold tracking-[0.12em] mb-6 transition-colors duration-[400ms]" style={{ color: accent }}>
            {s.n}
          </p>
          <h3 className="text-[16px] font-bold tracking-[-0.2px] mb-[10px] leading-[1.3]">{s.title}</h3>
          <p className="text-[14px] font-normal leading-[1.7]" style={{ color: 'var(--muted)' }}>{s.body}</p>
        </div>
      ))}
    </div>
  )
}

function WhyCards({ items }: { items: WhyData[] }) {
  return (
    <div className="grid gap-[14px] max-[900px]:grid-cols-1" style={{ gridTemplateColumns: 'repeat(3,1fr)' }}>
      {items.map(w => (
        <div
          key={w.title}
          className="rounded-xl p-7 pb-9 transition-all duration-[250ms] group"
          style={{
            background: 'var(--bg2)',
            border: '1px solid var(--line)',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(232,227,218,0.18)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--line)')}
        >
          <div
            className="w-9 h-9 rounded-[9px] flex items-center justify-center text-[16px] mb-5"
            style={{ background: 'var(--faint)', border: '1px solid var(--line)' }}
          >
            {w.icon}
          </div>
          <h3 className="text-[15px] font-bold tracking-[-0.1px] mb-2">{w.title}</h3>
          <p className="text-[14px] font-normal leading-[1.7]" style={{ color: 'var(--muted)' }}>{w.body}</p>
        </div>
      ))}
    </div>
  )
}

export default function LandingPage({ initialTab }: { initialTab: Tab }) {
  const [tab, setTab]               = useState<Tab>(initialTab)
  const [pillStyle, setPillStyle]   = useState({ width: 0, translateX: 0 })
  const [animKey, setAnimKey]       = useState(0)
  const tabARef = useRef<HTMLButtonElement>(null)
  const tabIRef = useRef<HTMLButtonElement>(null)
  const router  = useRouter()

  const accent = tab === 'advertiser' ? ADV : INF

  const updatePill = useCallback((t: Tab) => {
    const a = tabARef.current
    const b = tabIRef.current
    if (!a || !b) return
    if (t === 'advertiser') {
      setPillStyle({ width: a.offsetWidth, translateX: 0 })
    } else {
      setPillStyle({ width: b.offsetWidth, translateX: a.offsetWidth })
    }
  }, [])

  useEffect(() => {
    updatePill(tab)
    const onResize = () => updatePill(tab)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [tab, updatePill])

  const switchTab = (t: Tab) => {
    if (t === tab) return
    setTab(t)
    setAnimKey(k => k + 1)
    router.replace(`/?tab=${t}`, { scroll: false })
  }

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      {/* ── HERO ── */}
      <section
        className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-6 pt-[100px] pb-20"
      >
        {/* grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)',
          }}
        />

        {/* toggle */}
        <div className="relative z-[2] mb-[52px]">
          <div
            className="inline-flex rounded-full p-1 relative"
            style={{ border: '1px solid var(--line)', background: 'var(--faint)' }}
          >
            {/* sliding pill */}
            <div
              aria-hidden
              className="absolute top-1 left-1 rounded-full transition-all duration-[300ms] ease-[cubic-bezier(.4,0,.2,1)]"
              style={{
                height: 'calc(100% - 8px)',
                width: pillStyle.width || undefined,
                background: accent,
                transform: `translateX(${pillStyle.translateX}px)`,
                zIndex: 0,
                transition: 'transform .3s cubic-bezier(.4,0,.2,1), width .3s cubic-bezier(.4,0,.2,1), background .35s',
              }}
            />
            <button
              ref={tabARef}
              onClick={() => switchTab('advertiser')}
              className="relative z-[1] px-6 py-2 border-none rounded-full bg-transparent text-[13px] font-semibold whitespace-nowrap cursor-pointer transition-colors duration-[250ms]"
              style={{ color: tab === 'advertiser' ? '#090E1A' : 'var(--muted)' }}
            >
              For Advertisers
            </button>
            <button
              ref={tabIRef}
              onClick={() => switchTab('influencer')}
              className="relative z-[1] px-6 py-2 border-none rounded-full bg-transparent text-[13px] font-semibold whitespace-nowrap cursor-pointer transition-colors duration-[250ms]"
              style={{ color: tab === 'influencer' ? '#090E1A' : 'var(--muted)' }}
            >
              For Influencers
            </button>
          </div>
        </div>

        {/* hero copy */}
        <div key={animKey} className="relative z-[2] animate-fadeUp">
          <p
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase mb-[22px] transition-colors duration-[400ms]"
            style={{ color: accent }}
          >
            <span className="w-5 h-0.5 rounded-sm inline-block transition-colors duration-[400ms]" style={{ background: accent }} />
            {tab === 'advertiser' ? 'AI Influencer Marketing' : 'Built for Creators'}
          </p>

          <h1
            className="font-extrabold leading-[1.03] tracking-[-2.5px] mb-6 mx-auto max-w-[820px]"
            style={{ fontSize: 'clamp(42px, 6vw, 80px)' }}
          >
            {tab === 'advertiser' ? (
              <>Find influencers<br />who <em className="not-italic transition-colors duration-[400ms]" style={{ color: accent }}>actually</em> convert.</>
            ) : (
              <>Brand deals that<br /><em className="not-italic transition-colors duration-[400ms]" style={{ color: accent }}>fit</em> who you are.</>
            )}
          </h1>

          <p
            className="text-[17px] font-normal max-w-[460px] mx-auto mb-11 leading-[1.75]"
            style={{ color: 'var(--muted)' }}
          >
            {tab === 'advertiser'
              ? 'Post your brief. We handle research, outreach, and vetting. You show up for the final call.'
              : 'Upload your profile once. We match you, handle the talking, and ping you when a deal is ready.'}
          </p>

          <div className="flex items-center gap-4 justify-center flex-wrap">
            {tab === 'influencer' && (
              <button
                onClick={() => {
                  const isDev = window.location.hostname === 'localhost'
                  window.location.href = isDev ? 'http://localhost:3001/influencer' : 'https://app.truleado.com/influencer'
                }}
                className="inline-flex items-center gap-[9px] text-[14px] font-bold text-white px-[30px] py-[14px] rounded-[8px] border-none cursor-pointer transition-all duration-[350ms]"
                style={{ background: accent }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
              >
                Find your next brand deal
                <ArrowRight />
              </button>
            )}
            <button
              onClick={() => scrollTo('how-it-works')}
              className="text-[13px] font-medium bg-transparent border-none cursor-pointer transition-colors duration-200"
              style={{ color: 'var(--muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              See how it works ↓
            </button>
          </div>
        </div>
      </section>

      <div className="h-px max-w-[1060px] mx-auto" style={{ background: 'var(--line)' }} />

      {/* ── HOW IT WORKS ── */}
      <div id="how-it-works">
        <div key={`how-${animKey}`} className="max-w-[1060px] mx-auto px-10 py-[88px] animate-fadeUp max-[900px]:px-5">
          <p
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase mb-[14px] transition-colors duration-[400ms]"
            style={{ color: accent }}
          >
            <span className="w-[18px] h-0.5 rounded-sm inline-block" style={{ background: accent }} />
            How it works
          </p>
          <h2
            className="font-extrabold tracking-[-1.5px] leading-[1.07] max-w-[440px] mb-[52px]"
            style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}
          >
            {tab === 'advertiser' ? <>Brief in.<br />Campaign-ready out.</> : <>Your profile<br />works for you.</>}
          </h2>
          <Steps items={tab === 'advertiser' ? advSteps : infSteps} accent={accent} />
        </div>
      </div>

      <div className="h-px max-w-[1060px] mx-auto" style={{ background: 'var(--line)' }} />

      {/* ── WHY TRULEADO ── */}
      <div key={`why-${animKey}`} className="max-w-[1060px] mx-auto px-10 py-[88px] animate-fadeUp max-[900px]:px-5">
        <p
          className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] uppercase mb-[14px] transition-colors duration-[400ms]"
          style={{ color: accent }}
        >
          <span className="w-[18px] h-0.5 rounded-sm inline-block" style={{ background: accent }} />
          Why Truleado
        </p>
        <h2
          className="font-extrabold tracking-[-1.5px] leading-[1.07] max-w-[440px] mb-[52px]"
          style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}
        >
          {tab === 'advertiser' ? <>Less noise.<br />More results.</> : <>Deals that<br />respect your work.</>}
        </h2>
        <WhyCards items={tab === 'advertiser' ? advWhy : infWhy} />
      </div>

    </>
  )
}
