'use client'

import Toggle from '@/components/Toggle'
import {
  Divider, Faq, FinalCta, HowItWorks, WhyTruleado,
  type FaqItem, type StepData, type WhyData,
} from '@/components/Sections'

const EMBER = '#D93D2A'

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const infSteps: StepData[] = [
  { n: '01', art: 'upload', tag: 'Upload', title: 'Share a few screenshots.', body: 'Drop in screenshots of your Instagram, TikTok, or YouTube analytics. No API connections, no passwords, no access to your accounts — the pictures are genuinely all we need to get started.' },
  { n: '02', art: 'profile', tag: 'Under the hood', title: 'AI turns them into your profile.', body: 'Our AI reads your niche, audience demographics, engagement quality, and content style straight from the screenshots — and builds the profile brands get matched against. You never fill out a form.' },
  { n: '03', art: 'pitch', tag: 'The ping', title: 'We text you when a deal fits.', body: 'When a campaign genuinely matches your profile, you get one message with the full picture — the brand, the deliverables, and the money. No newsletters, no maybes, no cold emails from strangers.' },
  { n: '04', art: 'choice', tag: 'Your call', title: 'Accept it, or pass. Simple.', body: 'Interested? We introduce you to the brand with the scope and payment already agreed, and you just create. Not feeling it? Pass with one tap — no pressure, no hard feelings, and it never counts against you.' },
]

const infWhy: WhyData[] = [
  { art: 'match', title: 'Only relevant brands',     body: 'We only ping you for campaigns that genuinely match your niche and audience. No spam, ever.' },
  { art: 'talk',  title: 'We handle the talking',    body: 'No awkward back-and-forths with brands. We manage conversations so you focus on creating.' },
  { art: 'free',  title: 'Always free for creators', body: 'No commission cuts, no subscription. We make money from advertisers, not you.' },
]

const infFaq: FaqItem[] = [
  { q: 'Does it really cost me nothing?', a: 'Really. No commission on your deals, no subscription, no hidden cut. Advertisers pay Truleado for the matching service — the deal money is yours.' },
  { q: 'Why screenshots instead of connecting my accounts?', a: "Because you shouldn't have to hand over passwords or API access to get brand deals. Screenshots give our AI everything it needs — your niche, engagement, and audience — with zero access to your accounts." },
  { q: 'How small can my following be?', a: 'Nano creators start around 1,000 followers. Brands come to us specifically for smaller creators with genuine engagement, so a tight, loyal audience matters more than a big number.' },
  { q: 'How often will I hear from you?', a: "Only when there's a real campaign that fits you. No newsletters, no weekly nudges, no spray-and-pray briefs. Quiet inbox until there's money on the table." },
  { q: 'What happens after I say yes to a deal?', a: 'We introduce you to the brand with everything already agreed — scope, deliverables, and payment. You create the content; the logistics are handled.' },
]

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
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase mb-[22px]" style={{ color: 'var(--acc)' }}>
            <span className="w-5 h-0.5 rounded-sm inline-block" style={{ background: 'var(--acc)' }} />
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

      <Divider />

      <HowItWorks heading={<>Your profile<br />works for you.</>} items={infSteps} />

      <Divider />

      <WhyTruleado heading={<>Deals that<br />respect your work.</>} items={infWhy} />

      <Divider />

      <Faq items={infFaq} />

      <Divider />

      <FinalCta
        heading={<>Your audience is<br />worth real deals.</>}
        sub="Upload your profile once and let the right brands come to you."
        buttonLabel="Find your next brand deal"
        path="/influencer"
      />
    </>
  )
}
