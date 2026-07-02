'use client'

import Toggle from '@/components/Toggle'

const EMBER = '#D93D2A'
const ACC   = '#9894CC'

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

interface StepData { n: string; title: string; body: string }
interface WhyData  { icon: string; title: string; body: string }

const infSteps: StepData[] = [
  { n: '01', title: 'Upload screenshots',     body: 'Share screenshots of your social accounts. No API access, no passwords, no fuss.' },
  { n: '02', title: 'AI builds your profile', body: 'We extract your niche, audience demographics, engagement, and content style automatically.' },
  { n: '03', title: 'We pitch you to brands', body: 'When a campaign fits, we reach out with a full brief. No guessing, no cold emails from strangers.' },
  { n: '04', title: 'You say yes or no',      body: 'Interested? We set you up with the brand. Not for you? No pressure, no hard feelings.' },
]

const infWhy: WhyData[] = [
  { icon: '✅', title: 'Only relevant brands',    body: 'We only ping you for campaigns that genuinely match your niche and audience. No spam, ever.' },
  { icon: '🤝', title: 'We handle the talking',  body: 'No awkward back-and-forths with brands. We manage conversations so you focus on creating.' },
  { icon: '🆓', title: 'Always free for creators', body: 'No commission cuts, no subscription. We make money from advertisers, not you.' },
]

function Steps({ items }: { items: StepData[] }) {
  return (
    <div
      className="grid gap-px rounded-xl overflow-hidden grid-cols-4 max-[900px]:grid-cols-2 max-[520px]:grid-cols-1"
      style={{
        background: 'var(--line)',
        border: '1px solid var(--line)',
      }}
    >
      {items.map(s => (
        <div key={s.n} className="px-7 pt-9 pb-10" style={{ background: 'var(--bg2)' }}>
          <p className="text-[11px] font-semibold tracking-[0.12em] mb-6" style={{ color: ACC }}>
            {s.n}
          </p>
          <h3 className="text-[16px] font-semibold tracking-[-0.2px] mb-[10px] leading-[1.3]">{s.title}</h3>
          <p className="text-[14px] font-normal leading-[1.7]" style={{ color: 'var(--dim)' }}>{s.body}</p>
        </div>
      ))}
    </div>
  )
}

function WhyCards({ items }: { items: WhyData[] }) {
  return (
    <div className="grid gap-[14px] grid-cols-3 max-[900px]:grid-cols-1">
      {items.map(w => (
        <div
          key={w.title}
          className="rounded-xl p-7 pb-9 transition-all duration-[250ms]"
          style={{ background: 'var(--bg2)', border: '1px solid var(--line)' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--line2)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--line)')}
        >
          <div
            className="w-9 h-9 rounded-[9px] flex items-center justify-center text-[16px] mb-5"
            style={{ background: 'var(--faint)', border: '1px solid var(--line)' }}
          >
            {w.icon}
          </div>
          <h3 className="text-[15px] font-semibold tracking-[-0.1px] mb-2">{w.title}</h3>
          <p className="text-[14px] font-normal leading-[1.7]" style={{ color: 'var(--dim)' }}>{w.body}</p>
        </div>
      ))}
    </div>
  )
}

function Eyebrow({ label }: { label: string }) {
  return (
    <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase mb-[14px]" style={{ color: ACC }}>
      <span className="w-[18px] h-0.5 rounded-sm inline-block" style={{ background: ACC }} />
      {label}
    </p>
  )
}

export default function InfluencerPage() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const goToApp = () => {
    const isDev = window.location.hostname === 'localhost'
    window.location.href = isDev ? 'http://localhost:3001/influencer' : 'https://app.truleado.com/influencer'
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-6 pt-[100px] pb-20">
        {/* grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)',
          }}
        />

        <Toggle active="influencer" />

        {/* hero copy */}
        <div className="relative z-[2] animate-fadeUp">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase mb-[22px]" style={{ color: ACC }}>
            <span className="w-5 h-0.5 rounded-sm inline-block" style={{ background: ACC }} />
            Built for creators
          </p>

          <h1
            className="font-display font-light leading-[1.06] tracking-[-0.025em] mb-6 mx-auto max-w-[820px]"
            style={{ fontSize: 'clamp(42px, 6vw, 76px)', fontVariationSettings: "'opsz' 72" }}
          >
            Brand deals that<br /><em style={{ color: EMBER }}>fit</em> who you are.
          </h1>

          <p
            className="text-[17px] font-normal max-w-[460px] mx-auto mb-11 leading-[1.75]"
            style={{ color: 'var(--dim)' }}
          >
            Upload your profile once. We match you, handle the talking, and ping you when a deal is ready.
          </p>

          <div className="flex items-center gap-4 justify-center flex-wrap">
            <button
              onClick={goToApp}
              className="inline-flex items-center gap-[9px] text-[14px] font-medium text-white px-[30px] py-[14px] rounded-lg border-none cursor-pointer active:scale-[0.97]"
              style={{ background: EMBER, transition: 'transform 160ms cubic-bezier(0.23, 1, 0.32, 1)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Find your next brand deal
              <ArrowRight />
            </button>
            <button
              onClick={() => scrollTo('how-it-works')}
              className="text-[13px] font-medium bg-transparent border-none cursor-pointer transition-colors duration-200"
              style={{ color: 'var(--dim)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--dim)')}
            >
              See how it works ↓
            </button>
          </div>
        </div>
      </section>

      <div className="h-px max-w-[1060px] mx-auto" style={{ background: 'var(--line)' }} />

      {/* ── HOW IT WORKS ── */}
      <div id="how-it-works">
        <div className="max-w-[1060px] mx-auto px-10 py-[88px] animate-fadeUp max-[900px]:px-5">
          <Eyebrow label="How it works" />
          <h2
            className="font-display font-light tracking-[-0.025em] leading-[1.07] max-w-[440px] mb-[52px]"
            style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', fontVariationSettings: "'opsz' 48" }}
          >
            Your profile<br />works for you.
          </h2>
          <Steps items={infSteps} />
        </div>
      </div>

      <div className="h-px max-w-[1060px] mx-auto" style={{ background: 'var(--line)' }} />

      {/* ── WHY TRULEADO ── */}
      <div className="max-w-[1060px] mx-auto px-10 py-[88px] animate-fadeUp max-[900px]:px-5">
        <Eyebrow label="Why Truleado" />
        <h2
          className="font-display font-light tracking-[-0.025em] leading-[1.07] max-w-[440px] mb-[52px]"
          style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', fontVariationSettings: "'opsz' 48" }}
        >
          Deals that<br />respect your work.
        </h2>
        <WhyCards items={infWhy} />
      </div>
    </>
  )
}
