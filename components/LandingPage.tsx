import Toggle from '@/components/Toggle'
import HeroActions from '@/components/HeroActions'
import {
  Divider, Faq, FinalCta, HowItWorks, Pricing, WhyTruleado,
  type FaqItem, type PricingPlan, type StepData, type WhyData,
} from '@/components/Sections'

const EMBER = '#D93D2A'

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

const advPlans: PricingPlan[] = [
  {
    label: 'First brief',
    price: 'Free',
    tagline: 'Post one campaign brief and get a full shortlist — on us. See who says yes before you pay anything.',
    features: [
      'One campaign brief, no cost',
      'Full AI matching & scoring',
      'Creators briefed and confirmed for you',
      'A campaign-ready shortlist to review',
    ],
  },
  {
    label: 'Unlimited',
    price: '$99',
    period: '/ month',
    tagline: 'Every brief after your first, for one flat monthly price. Run as many campaigns as you want.',
    features: [
      'Unlimited campaign briefs',
      'Unlimited creator matching',
      'Every match briefed and confirmed',
      'Cancel anytime, no contract',
    ],
    highlight: true,
  },
]

const advFaq: FaqItem[] = [
  { q: 'How is this different from an influencer marketplace?', a: "Marketplaces hand you a search bar and wish you luck. Truleado hands you a shortlist of influencers who have already been matched to your brief, briefed on your campaign, and said yes. You skip discovery, outreach, and vetting entirely." },
  { q: 'What does it cost?', a: "Your first campaign brief is free — full matching, briefing, and a shortlist, on us. After that, it's $99 a month for unlimited briefs. No per-campaign fees, no contracts." },
  { q: 'What size of influencers do you work with?', a: 'Micro and nano creators — roughly 1,000 to 100,000 followers. For most campaigns they outperform bigger names on engagement and cost per result, because their audiences actually trust them.' },
  { q: 'How long until I get matches?', a: 'Most briefs receive their first campaign-ready shortlist within a few days. Complex niches can take a little longer — we prioritize match quality over speed.' },
  { q: 'What if a match does not work out?', a: "You only move forward with influencers you approve. If someone on the shortlist isn't right, tell us why and we replace them — refining the brief is part of the service." },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: advFaq.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const softwareAppJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Truleado',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://www.truleado.com',
  description: 'AI influencer marketing platform that matches brands with pre-briefed micro and nano creators. Post a campaign brief, get a shortlist of creators who already said yes.',
  offers: [
    {
      '@type': 'Offer',
      name: 'First Campaign Brief',
      price: '0',
      priceCurrency: 'USD',
      description: 'First campaign brief is completely free. Full AI matching, briefing, and a campaign-ready shortlist.',
    },
    {
      '@type': 'Offer',
      name: 'Unlimited Plan',
      price: '99',
      priceCurrency: 'USD',
      priceSpecification: { '@type': 'UnitPriceSpecification', price: '99', priceCurrency: 'USD', unitText: 'MONTH' },
      description: 'Unlimited campaign briefs per month. Cancel anytime.',
    },
  ],
  provider: { '@id': 'https://www.truleado.com/#organization' },
}

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="flex flex-col items-center justify-center text-center relative overflow-hidden px-6 pt-[140px] pb-[72px]">
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
          <h1
            className="font-display font-light leading-[1.05] tracking-[-0.025em] mt-10 mb-6 mx-auto max-w-[780px]"
            style={{ fontSize: 'clamp(40px, 6.2vw, 78px)', fontVariationSettings: "'opsz' 78" }}
          >
            Meet creators<br />who <em style={{ color: EMBER }}>already said yes</em>.
          </h1>

          <p
            className="text-[17px] font-normal max-w-[460px] mx-auto mb-11 leading-[1.75]"
            style={{ color: 'var(--dim)' }}
          >
            Post one brief. We match it, message every fit, and only bring you creators who confirmed they&apos;re in. No searching. No cold DMs. No ghosting.
          </p>

          <HeroActions path="/advertiser" ctaLabel="Post a Campaign" secondaryLabel="See a real shortlist ↓" />
        </div>
      </section>

      <Divider />

      <HowItWorks heading={<>Brief in.<br />Campaign-ready out.</>} items={advSteps} />

      <Divider />

      <WhyTruleado heading={<>Why this works<br />so much faster.</>} items={advWhy} />

      <Divider />

      <Pricing
        heading={<>Your first brief<br />is on us.</>}
        sub="See a real, campaign-ready shortlist before you pay a cent. After that, one flat price for as many briefs as you need."
        plans={advPlans}
        buttonLabel="Post a Campaign"
        path="/advertiser"
      />

      <Divider />

      <Faq items={advFaq} />

      <Divider />

      <FinalCta
        heading={<>Write the brief.<br />We&apos;ll find who says yes.</>}
        sub="Five minutes to post. A campaign-ready shortlist of influencers who already agreed to your terms on the other side."
        buttonLabel="Post a Campaign"
        path="/advertiser"
        ps="Your first brief is free. After that, it's $99 a month for unlimited briefs — no contract, cancel anytime."
      />
    </>
  )
}
