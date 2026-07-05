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

const advSteps: StepData[] = [
  { n: '01', art: 'brief', tag: 'Post', title: 'Post your campaign brief.', body: 'Tell us what you’re promoting, your budget, the deliverables you need, and your ideal creator profile — niche, audience, country, age. It takes under five minutes, and it’s the last piece of admin work you’ll do.' },
  { n: '02', art: 'search', tag: 'Under the hood', title: 'Our AI scores every creator against it.', body: 'The moment your brief lands, our matching engine scores every micro and nano creator on the roster against it — niche fit, audience overlap, engagement quality, past performance. Only the strongest fits move to the next step.' },
  { n: '03', art: 'chat', tag: 'Briefing', title: 'We brief the matches for you.', body: 'No cold outreach on your plate. We walk each matched creator through your campaign — scope, deliverables, payment — and only the ones who genuinely want in move forward. Ghosting and dead-end threads never reach you.' },
  { n: '04', art: 'deal', tag: 'Close', title: 'You get a campaign-ready shortlist.', body: 'What arrives isn’t a list of leads — it’s creators who already know your campaign and said yes. Review the shortlist, pick your favorites, and show up for the final call. That’s the whole job.' },
]

const advWhy: WhyData[] = [
  { art: 'target', title: 'We only use micro and nano creators.', body: 'No celebrities, no mega-influencers, no rented reach. Every creator on our roster has between 1,000 and 100,000 followers — small enough that their audience still trusts them, which is precisely why they sell.' },
  { art: 'ready',  title: 'Your shortlist has already said yes.', body: 'Before a single name reaches you, that creator has read your brief, agreed to the deliverables, and confirmed the price. You are not opening a negotiation. You are choosing a winner.' },
  { art: 'ai',     title: 'AI handles the matching, outreach, and briefing.', body: 'The search, the scoring, the first message, the follow-up — all automated. That is the entire reason we can do this for a flat fee per campaign instead of a monthly retainer.' },
]

const advFaq: FaqItem[] = [
  { q: 'How is this different from an influencer marketplace?', a: "Marketplaces hand you a search bar and wish you luck. Truleado hands you a shortlist of influencers who have already been matched to your brief, briefed on your campaign, and said yes. You skip discovery, outreach, and vetting entirely." },
  { q: 'What does it cost?', a: "You set the budget in your brief — that covers the influencer fees. Truleado charges advertisers a fee per campaign, and we'll show you the exact number before you commit to anything." },
  { q: 'What size of influencers do you work with?', a: 'Micro and nano creators — roughly 1,000 to 100,000 followers. For most campaigns they outperform bigger names on engagement and cost per result, because their audiences actually trust them.' },
  { q: 'How long until I get matches?', a: 'Most briefs receive their first campaign-ready shortlist within a few days. Complex niches can take a little longer — we prioritize match quality over speed.' },
  { q: 'What if a match does not work out?', a: "You only move forward with influencers you approve. If someone on the shortlist isn't right, tell us why and we replace them — refining the brief is part of the service." },
]

export default function LandingPage() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const goToApp = () => {
    const isDev = window.location.hostname === 'localhost'
    window.location.href = isDev ? 'http://localhost:3001/advertiser' : 'https://app.truleado.com/advertiser'
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

        <Toggle active="advertiser" />

        {/* hero copy */}
        <div className="relative z-[2] animate-fadeUp">
          <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase mb-[22px]" style={{ color: 'var(--acc)' }}>
            <span className="w-5 h-0.5 rounded-sm inline-block" style={{ background: 'var(--acc)' }} />
            For marketing teams tired of chasing creators
          </p>

          <h1
            className="font-display font-light leading-[1.1] tracking-[-0.02em] mb-6 mx-auto max-w-[860px]"
            style={{ fontSize: 'clamp(36px, 5.4vw, 66px)', fontVariationSettings: "'opsz' 66" }}
          >
            How to run an influencer campaign<br />without the <em style={{ color: EMBER }}>cold outreach</em>.
          </h1>

          <p
            className="text-[17px] font-normal max-w-[540px] mx-auto mb-11 leading-[1.8]"
            style={{ color: 'var(--dim)' }}
          >
            Write one brief. Truleado matches it against every micro and nano creator on our roster, briefs the strongest fits on your behalf, and hands you only the ones who already said yes. No cold outreach. No spreadsheet of maybes. No retainer.
          </p>

          <div className="flex items-center gap-4 justify-center flex-wrap">
            <button
              onClick={goToApp}
              className="inline-flex items-center gap-[9px] text-[14px] font-medium text-white px-[30px] py-[14px] rounded-lg border-none cursor-pointer active:scale-[0.97]"
              style={{ background: EMBER, transition: 'transform 160ms cubic-bezier(0.23, 1, 0.32, 1)' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
            >
              Post a Campaign
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

      <HowItWorks heading={<>Brief in.<br />Campaign-ready out.</>} items={advSteps} />

      <Divider />

      <WhyTruleado heading={<>Why this works<br />so much faster.</>} items={advWhy} />

      <Divider />

      <Faq items={advFaq} />

      <Divider />

      <FinalCta
        heading={<>Write the brief.<br />We&apos;ll find who says yes.</>}
        sub="Five minutes to post. A campaign-ready shortlist of influencers who already agreed to your terms on the other side."
        buttonLabel="Post a Campaign"
        path="/advertiser"
        ps="You only pay a fee per campaign — no retainer, no subscription, and we show you the number before you commit to anything."
      />
    </>
  )
}
