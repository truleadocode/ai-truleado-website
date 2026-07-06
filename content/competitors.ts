export type PricingModel =
  | { type: 'flat'; monthly: number; note?: string }
  | { type: 'percentage'; base?: number; percentOfSpend: number; note?: string }
  | { type: 'freemium'; note: string }
  | { type: 'tiered'; note: string }
  | { type: 'undisclosed'; note?: string }

export interface FeatureRow {
  feature: string
  truleado: string
  competitor: string
}

export interface FaqEntry {
  q: string
  a: string
}

export interface Competitor {
  slug: string
  name: string
  logo: string
  oneLinerPositioning: string
  pricingModel: PricingModel
  keyDifferences: FeatureRow[]
  bestFor: string
  truleadoWins: string[]
  competitorWins: string[]
  faq: FaqEntry[]
  /** Whether we have real, public numbers to run the cost calculator against. */
  hasPublicPricing: boolean
}

const TRULEADO_MONTHLY = 99

export function truleadoCost(): number {
  return TRULEADO_MONTHLY
}

export const competitors: Competitor[] = [
  {
    slug: 'okara',
    name: 'Okara.ai',
    logo: '/logos/okara.svg',
    oneLinerPositioning: 'An AI agent that replaces the traditional influencer agency — priced against the 15–30% + retainer agencies charge.',
    pricingModel: { type: 'percentage', base: 99, percentOfSpend: 5, note: 'Based on Okara\'s published pricing: $99/month plus 5% of campaign spend.' },
    keyDifferences: [
      { feature: 'Pricing model', truleado: 'Flat $99/mo, unlimited briefs', competitor: '$99/mo + 5% of campaign spend' },
      { feature: 'First brief', truleado: 'Free', competitor: 'Paid from month one' },
      { feature: 'Outreach', truleado: 'Agent contacts & briefs every match', competitor: 'Agent handles outreach + rate negotiation' },
      { feature: 'Payouts', truleado: 'You pay creators directly', competitor: 'Agent handles creator payout' },
      { feature: 'Creator pool', truleado: 'Micro & nano (1K–100K)', competitor: 'Not specified publicly' },
    ],
    bestFor: 'Teams that want the agent to also negotiate rates and run payouts, and don\'t mind the cost scaling with campaign size.',
    truleadoWins: [
      'Cost is predictable — a $20K campaign doesn\'t cost more than a $2K one',
      'First brief is free, so you can test the match quality before paying anything',
    ],
    competitorWins: [
      'Handles rate negotiation and creator payout for you, which Truleado does not do',
      'The percentage model can work out cheaper than $99/mo for a single very small campaign',
    ],
    faq: [
      {
        q: 'Is Okara cheaper than Truleado for a $2,000 campaign?',
        a: 'Based on Okara\'s published pricing ($99/mo + 5% of spend), a $2,000 campaign would cost about $199 in the first month ($99 + $100). Truleado\'s first brief is free, and every brief after that is a flat $99/mo regardless of campaign size — so for a single $2,000 campaign, Truleado is cheaper in month one and comparable after.',
      },
      {
        q: 'Is Okara cheaper than Truleado for a $20,000 campaign?',
        a: 'At Okara\'s published 5% rate, a $20,000 campaign adds roughly $1,000 in fees on top of the $99/mo base — about $1,099 total. Truleado stays flat at $99/mo no matter the campaign size, so for larger campaigns the flat-fee model is significantly cheaper.',
      },
      {
        q: 'Does Okara negotiate rates with creators?',
        a: 'Yes — based on their published product description, Okara\'s agent handles rate negotiation and payout as part of the workflow. Truleado does not negotiate rates or process creator payments; you deal directly with the creators on your shortlist.',
      },
    ],
    hasPublicPricing: true,
  },
  {
    slug: 'hypefy',
    name: 'Hypefy.ai',
    logo: '/logos/hypefy.png',
    oneLinerPositioning: 'A full-lifecycle AI agent — discovery, outreach, contracts, content review, payments, and reporting — priced against campaign spend instead of a subscription.',
    pricingModel: { type: 'percentage', percentOfSpend: 0, note: 'Hypefy has no published flat percentage figure; based on their site, pricing is tied to campaign spend rather than a subscription. Contact Hypefy for their current rate.' },
    keyDifferences: [
      { feature: 'Pricing model', truleado: 'Flat $99/mo, unlimited briefs', competitor: 'Tied to campaign spend, no subscription' },
      { feature: 'Contracts', truleado: 'Not handled', competitor: 'Agent manages contracts' },
      { feature: 'Content review', truleado: 'Not handled', competitor: 'Agent reviews deliverables' },
      { feature: 'Payments', truleado: 'You pay creators directly', competitor: 'Agent handles payments' },
      { feature: 'Reporting', truleado: 'Shortlist only, no campaign reporting', competitor: 'Built-in campaign reporting' },
    ],
    bestFor: 'Teams that want one tool to run the entire campaign lifecycle end-to-end, including paperwork and reporting.',
    truleadoWins: [
      'Predictable flat cost with no dependency on campaign spend',
      'Faster to a shortlist — Truleado\'s job ends at matched, briefed, confirmed creators, with less workflow overhead',
    ],
    competitorWins: [
      'Handles contracts, content review, payments, and reporting — a genuinely broader product',
      'No monthly fee if you\'re not running campaigns that month',
    ],
    faq: [
      {
        q: 'Is Hypefy cheaper than Truleado?',
        a: 'Hypefy does not publish a flat percentage rate, so we can\'t run an exact cost comparison here — contact Hypefy directly for their current pricing. Truleado is a flat $99/mo with the first brief free, regardless of campaign size.',
      },
      {
        q: 'Does Hypefy replace Truleado\'s matching?',
        a: 'Both tools match creators to a brief and handle outreach. Hypefy goes further into contracts, content review, and payments — areas Truleado intentionally leaves to you.',
      },
    ],
    hasPublicPricing: false,
  },
  {
    slug: 'janney-ai',
    name: 'Janney AI',
    logo: '/logos/janney.png',
    oneLinerPositioning: 'A freemium discovery tool with a paid automation suite on top — outreach is sent from your own inbox, and Janney claims 43% average cost savings.',
    pricingModel: { type: 'freemium', note: 'Free discovery tier; premium automation suite pricing not fully published. Based on Janney\'s marketing pages.' },
    keyDifferences: [
      { feature: 'Pricing model', truleado: 'Flat $99/mo, unlimited briefs', competitor: 'Free discovery tier + paid premium suite' },
      { feature: 'Outreach method', truleado: 'Sent by Truleado\'s agent', competitor: 'Sent from your own inbox' },
      { feature: 'Cost savings claim', truleado: 'No specific claim published', competitor: 'Claims 43% average cost savings' },
      { feature: 'First brief', truleado: 'Free', competitor: 'Discovery tier is free; automation is paid' },
    ],
    bestFor: 'Teams that want to try creator discovery for free first, and are comfortable sending outreach from their own email address.',
    truleadoWins: [
      'Outreach, briefing, and confirmation are fully handled — nothing sent from your inbox to manage',
      'One flat price once you\'re past the free brief, instead of a free tier that gates the real automation behind a paywall',
    ],
    competitorWins: [
      'Free discovery tier has no time limit based on their marketing pages, useful for casual browsing before committing to any tool',
      'Sending from your own inbox can mean higher reply rates than a third-party sender address',
    ],
    faq: [
      {
        q: 'Is Janney AI\'s 43% cost savings claim independently verified?',
        a: 'That figure comes from Janney\'s own marketing pages — we have not independently verified it, and you should ask Janney for the methodology behind it before relying on it.',
      },
      {
        q: 'Does Truleado have a free tier like Janney?',
        a: 'Truleado gives you one full free brief — matching, briefing, and a confirmed shortlist, not just discovery. After that, it\'s a flat $99/mo. Janney\'s free tier is discovery-only based on their published pages; the outreach automation sits behind their premium suite.',
      },
    ],
    hasPublicPricing: false,
  },
  {
    slug: 'partnrup',
    name: 'partnrUP',
    logo: '/logos/partnrup.png',
    oneLinerPositioning: 'A tiered platform (solo / team / agency / enterprise) with an agency tier built for managing multiple brands or clients at once.',
    pricingModel: { type: 'tiered', note: 'Tiered plans (solo, team, agency, enterprise); exact pricing requires contacting partnrUP.' },
    keyDifferences: [
      { feature: 'Pricing model', truleado: 'Flat $99/mo, unlimited briefs', competitor: 'Tiered: solo / team / agency / enterprise' },
      { feature: 'Multi-client management', truleado: 'Not built for agency multi-brand use', competitor: 'Dedicated agency tier' },
      { feature: 'First brief', truleado: 'Free', competitor: 'Tier-dependent, contact for details' },
    ],
    bestFor: 'Agencies managing several client brands who need seat-based, multi-brand tooling rather than a single-brand flat fee.',
    truleadoWins: [
      'Simpler for a single brand or single-campaign use — one flat price, no tier decisions',
      'First brief free with no sales call required to get started',
    ],
    competitorWins: [
      'Purpose-built agency tier for managing multiple client brands from one account',
      'Tiered plans can scale pricing to team size in a way a single flat fee doesn\'t',
    ],
    faq: [
      {
        q: 'Is partnrUP better for agencies than Truleado?',
        a: 'If you\'re an agency running campaigns across many client brands, partnrUP\'s dedicated agency tier is built for that. Truleado is priced and built around one brand running its own campaigns.',
      },
      {
        q: 'What does partnrUP cost?',
        a: 'partnrUP publishes tiered plans (solo, team, agency, enterprise) but not exact public pricing for each — contact partnrUP directly for a quote.',
      },
    ],
    hasPublicPricing: false,
  },
  {
    slug: 'creator-co',
    name: 'Creator.co',
    logo: '/logos/creatorco.png',
    oneLinerPositioning: 'An AI agent (London) built into an established platform with a 400M+ creator database and 270K+ registered creators.',
    pricingModel: { type: 'undisclosed', note: 'Platform subscription; pricing not publicly listed.' },
    keyDifferences: [
      { feature: 'Pricing model', truleado: 'Flat $99/mo, unlimited briefs, publicly listed', competitor: 'Platform subscription, pricing not public' },
      { feature: 'Creator database size', truleado: 'Curated micro & nano roster', competitor: '400M+ creator database, 270K+ registered' },
      { feature: 'Product maturity', truleado: 'New, focused product', competitor: 'Established platform with an AI agent added on top' },
    ],
    bestFor: 'Teams that want access to a massive, established creator database and don\'t mind an undisclosed, likely higher price point.',
    truleadoWins: [
      'Transparent, public pricing you can see before talking to sales',
      'Curated micro/nano focus instead of a database you have to filter yourself',
    ],
    competitorWins: [
      'Far larger creator database and a more mature, established platform',
      'Likely offers more surrounding tooling given its platform history',
    ],
    faq: [
      {
        q: 'How much does Creator.co cost?',
        a: 'Creator.co does not publish its pricing — you\'d need to contact them for a quote. Truleado\'s pricing is public: first brief free, then a flat $99/mo.',
      },
    ],
    hasPublicPricing: false,
  },
  {
    slug: 'passionfroot',
    name: 'Passionfroot (Zest)',
    logo: '/logos/passionfroot.png',
    oneLinerPositioning: 'The Zest AI agent inside Passionfroot generates briefs and personalized proposals, and learns from past campaign performance — leaning more B2B/tech-brand.',
    pricingModel: { type: 'undisclosed', note: 'Pricing not publicly listed.' },
    keyDifferences: [
      { feature: 'Pricing model', truleado: 'Flat $99/mo, publicly listed', competitor: 'Not publicly listed' },
      { feature: 'Brief generation', truleado: 'You write the brief', competitor: 'Zest agent helps generate the brief itself' },
      { feature: 'Learning loop', truleado: 'Matching based on your brief', competitor: 'Learns from past campaign performance over time' },
      { feature: 'Audience focus', truleado: 'General micro/nano creators', competitor: 'Leans B2B / tech-brand creators' },
    ],
    bestFor: 'B2B or tech brands that want an agent to help write the brief itself and improve matching from past campaign data.',
    truleadoWins: [
      'Transparent, public flat pricing',
      'First brief free before you commit to anything',
    ],
    competitorWins: [
      'Zest can help generate the brief itself, useful if you\'re not sure what to ask for',
      'Learns from past campaign performance, which can improve matching over time',
    ],
    faq: [
      {
        q: 'How much does Passionfroot\'s Zest agent cost?',
        a: 'Passionfroot does not publish pricing for Zest — contact them directly for a quote. Truleado\'s pricing is public: first brief free, then a flat $99/mo.',
      },
    ],
    hasPublicPricing: false,
  },
]

export function getCompetitor(slug: string): Competitor | undefined {
  return competitors.find(c => c.slug === slug)
}
