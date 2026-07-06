export type Block =
  | { type: 'intro'; text: string }
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'callout'; text: string }
  | { type: 'brand'; rank: number; name: string; niche: string; model: string; rate: string; applyTip: string; body: string }
  | { type: 'ratetable'; rows: { platform: string; range: string }[] }

export interface Post {
  slug: string
  title: string
  subtitle: string
  publishedAt: string
  readMinutes: number
  audience: 'advertisers' | 'creators' | 'industry'
  audienceLabel: string
  excerpt: string
  blocks: Block[]
}

export const posts: Post[] = [
  {
    slug: 'brands-that-pay-micro-influencers-best',
    title: '10 Brands That Pay Micro-Influencers the Best in 2026',
    subtitle: 'A practical breakdown for creators with 1K–100K followers: who pays, how much, and how to get on their radar.',
    publishedAt: '2026-07-08',
    readMinutes: 8,
    audience: 'creators',
    audienceLabel: 'For creators',
    excerpt: 'Most lists of brands that work with micro-influencers give you names and no numbers. This one goes further — into what each brand actually pays, the model they use, and what they look for before they reach out.',
    blocks: [
      {
        type: 'intro',
        text: 'Every list of "brands that work with micro-influencers" says the same things: big names, vague promises, no actual numbers. This one is different. We researched publicly available data on creator programs, affiliate structures, and pay rates across 10 brands with real track records working with creators in the 1,000–100,000 follower range. For each one: the payment model, a realistic earnings range, and what the brand actually looks for before they reach out — or respond.',
      },
      {
        type: 'callout',
        text: 'One thing to understand before the list: there is no single standard rate. What you earn depends on your follower count, your engagement rate, your niche, your content format, and how well your profile matches what a brand needs right now. These are benchmarks, not guarantees.',
      },
      {
        type: 'brand',
        rank: 1,
        name: 'OLIPOP',
        niche: 'Wellness / food & drink',
        model: 'Commission-based, scaling to cash deals',
        rate: '10–30% commission; $200–$800/month for engaged wellness creators in the 15K–40K range',
        applyTip: 'Apply through their creator program page or post organic content tagging @drinkOLIPOP.',
        body: 'OLIPOP runs one of the most creator-friendly micro-influencer programs in the market. Creators with at least 10,000 followers on one platform can apply, starting with a free product pack and a 10% commission on tracked sales. Perform consistently and that commission scales — their published tiers go up to 30%. Campaigns are tracked with custom discount codes and reporting is transparent. What OLIPOP looks for: food and wellness creators with authentic content about health, gut health, or better-for-you drink alternatives. Their micro-influencer campaigns have been cited with 6.2x ROAS figures, so they value creators whose audiences actually buy.',
      },
      {
        type: 'brand',
        rank: 2,
        name: 'Ritual',
        niche: 'Health / supplements',
        model: 'Affiliate, up to 70% commission',
        rate: 'Purely performance-based; a wellness creator driving 50 sales/month at $40 AOV earns ~$1,400/month at top tier',
        applyTip: "Apply through ShareASale or Commission Junction, or directly via Ritual's website.",
        body: "Ritual's affiliate program offers up to 70% commission — unusually high for a supplement brand (most offer 10–20%). It operates through ShareASale and CJ, so setup is straightforward and tracking is clear. What Ritual looks for: wellness, health, and fitness creators. Women's health and nutrition content performs especially well. Ritual's audience is researching before buying, so personal, considered content converts better than promotional posts.",
      },
      {
        type: 'brand',
        rank: 3,
        name: 'Gymshark',
        niche: 'Fitness / activewear',
        model: 'Gifted product → ambassador deals → paid content',
        rate: 'Entry: gifted gear (£50–£200 value). Established ambassadors in 10K–50K range: £200–£800 per dedicated post',
        applyTip: 'Email influencer@gymshark.com with analytics. Post organic training content with #gymshark — they scout actively.',
        body: "Gymshark's program has become more accessible for micro-creators. They send free workout gear with no paid commitment required at entry, and ambassadors who build a track record move into paid deals. Their annual #Gymshark66 challenge is a visible entry point — creators who participate authentically often get noticed. What Gymshark looks for: genuine training content over lifestyle posts. A creator with 8,000 followers and 9% engagement gets more attention than one with 50,000 and 1.5%.",
      },
      {
        type: 'brand',
        rank: 4,
        name: 'Sephora',
        niche: 'Beauty / skincare / makeup',
        model: 'Paid ambassador program — annual cohort, yearlong commitment',
        rate: 'Monthly retainer equivalent; creators in the 10K–50K tier report $500–$1,000+/month depending on deliverables',
        applyTip: "Watch Sephora's social channels for Squad application windows (annual). Post genuine beauty content with #SephoraSquad.",
        body: 'Sephora Squad is a genuinely paid, curated ambassador program running on an annual cycle. Selected creators receive compensation, early access to new launches, event invites, and content opportunities throughout the year. It is one of the more competitive programs in beauty — but it is compensated, not just gifted. What Sephora looks for: creators who represent diversity in skin type, tone, age, and gender presentation. Authentic reviews, including critical ones, are valued over purely positive content.',
      },
      {
        type: 'brand',
        rank: 5,
        name: 'ASOS',
        niche: 'Fashion / streetwear / beauty',
        model: 'Paid content + affiliate discount codes',
        rate: 'Paid Insiders deals for micro-creators: £200–£600 per deliverable, plus affiliate income from codes',
        applyTip: 'Post consistently with #ASSEENONME. Apply through the ASOS influencer portal on their website.',
        body: "The ASOS Insiders program selects a rotating group of micro-creators who style and feature products across their own channels. It is a structured paid program — creators are compensated for content, not just given a discount code. The hashtag #ASSEENONME is ASOS's open scouting tool: posting consistently with it gets you into their discovery pipeline. What ASOS looks for: styling-forward creators with a clear aesthetic. Body inclusivity matters — ASOS has made this a feature of Insiders selection. UK-based creators get slightly more attention given the brand's base, but the program operates globally.",
      },
      {
        type: 'brand',
        rank: 6,
        name: 'Daniel Wellington',
        niche: 'Lifestyle / watches / fashion',
        model: 'Gifted product + affiliate code; cash for established creators',
        rate: 'Entry: gifted watch (£150–£250 value). Cash deals for 10K–50K creators: £100–£400 per dedicated post',
        applyTip: 'Tag @danielwellington and use #danielwellington. Apply at danielwellington.com/influencer. They respond to email outreach.',
        body: 'Daniel Wellington pioneered the gifted-product + discount-code model before influencer marketing had a name. The barrier to entry is genuinely low — they work with creators as small as a few thousand followers in the right niche. More established creators receive flat-fee payments on top of product. What DW looks for: lifestyle creators with a clean, aspirational visual identity. Neutral palettes, quality photography, and genuine styling perform best. Travel, fashion, and general lifestyle content all work.',
      },
      {
        type: 'brand',
        rank: 7,
        name: 'HelloFresh',
        niche: 'Food / family / lifestyle',
        model: 'Affiliate ($52.50 per new subscriber) + flat-fee campaigns',
        rate: 'Affiliate: a food creator driving 10–20 new subscribers/month earns $525–$1,050. Flat-fee deals: $300–$600 per post for 10K–50K tier',
        applyTip: 'Join through CJ Affiliate. Tag #HelloFresh in food content. They also run campaigns through AspireIQ and Grin.',
        body: "HelloFresh has one of the most active micro-influencer programs in the food space. Their affiliate program pays $52.50 per new subscriber — high for a food brand. They also run flat-fee campaigns through influencer platforms for creators who prefer guaranteed payment over commission. What HelloFresh looks for: busy parent creators, food enthusiasts, meal prep content. Authentic \"here's what we actually made this week\" story-format content significantly outperforms promotional posts with their audience.",
      },
      {
        type: 'brand',
        rank: 8,
        name: 'Glossier',
        niche: 'Beauty / skincare / minimalist makeup',
        model: 'Commission-first (Rep program), building to paid brand partnerships',
        rate: 'Affiliate commission approximately 10–15%; paid content rates for established rep partners are not publicly benchmarked',
        applyTip: 'Apply to the Glossier Rep program via their website. Post genuine product reviews tagging @glossier.',
        body: 'Glossier built its brand through genuine user advocacy before paying anyone, and that ethos shapes how they evaluate creators. Their Rep program starts with commission and creates a track record that can lead to paid brand partnerships. What Glossier looks for: authentic skincare and minimal beauty creators. Content that feels like a genuine routine — not a polished ad — converts best. Creators who would actually use the products tend to outperform those who take deals for the income.',
      },
      {
        type: 'brand',
        rank: 9,
        name: 'Amazon Influencer Program',
        niche: 'Any (product-agnostic)',
        model: 'Affiliate commission (1–10% by category) + shoppable video earnings',
        rate: 'A lifestyle creator with 20K followers whose audience shops on Amazon can earn $200–$800/month from storefront referrals',
        applyTip: 'Apply at amazon.com/shop. No minimum follower count published, but under 1,000 typically rejected. YouTube, Instagram, TikTok, and Facebook all qualify.',
        body: 'The Amazon Influencer Program gives creators a curated storefront page with commissions on qualifying purchases. It is relevant for almost any niche where your audience buys things on Amazon. Commissions run 1–10% depending on category — beauty and fashion earn more than electronics. The shoppable video and livestream component has been growing creator income on the platform. What Amazon looks for: an engaged following on at least one qualifying platform. Content quality and engagement matter more than raw follower count.',
      },
      {
        type: 'brand',
        rank: 10,
        name: 'Audible',
        niche: 'Books / podcasts / education / personal development',
        model: 'Flat fee per trial sign-up ($15–$25 typically)',
        rate: 'A podcast creator with 8,000 listeners driving 50 trials per episode earns $750–$1,250 per sponsored episode',
        applyTip: 'Apply through Amazon Associates or podcast advertising networks (Midroll, Advertisecast). Audible scouts directly for niche creators.',
        body: 'Audible has run one of the longest-standing creator partnership programs in the podcast and YouTube space. Their deals are structured around trial conversions — you earn a flat fee per new sign-up your code generates. What sets Audible apart is creative freedom: they consistently allow creators to integrate the brand in their own voice rather than scripting the ad read. What Audible looks for: educational, literary, personal development, or entertainment-focused creators. Fitness, business, and productivity creators also run successful Audible campaigns. The match is broader than you might think.',
      },
      {
        type: 'h2',
        text: 'What micro-influencer deals actually look like in 2026',
      },
      {
        type: 'p',
        text: "The brands above use different models — affiliate commissions, gifted product, paid per deliverable, or performance-based scaling. No single model is universally better. What matters is fit: whether your niche, your audience, and the brand's product align closely enough that the content feels natural and the audience actually responds.",
      },
      {
        type: 'ratetable',
        rows: [
          { platform: 'Instagram static post (10K–100K followers)', range: '$150–$800' },
          { platform: 'Instagram Reel (10K–100K followers)', range: '$300–$1,500' },
          { platform: 'TikTok video (10K–100K followers)', range: '$200–$800' },
          { platform: 'YouTube integration (10K–100K subscribers)', range: '$500–$2,500' },
          { platform: 'Podcast ad read (5K–50K listeners)', range: '$15–$50 CPM' },
        ],
      },
      {
        type: 'p',
        text: 'Engagement rate affects pricing more than most creators realise. A creator with 15,000 followers and 8% engagement is commanding a premium in the market — because brands running performance-focused campaigns have learned to look beyond follower count. If your engagement is strong, price accordingly.',
      },
      {
        type: 'h2',
        text: 'The deals worth having are the ones that find you',
      },
      {
        type: 'p',
        text: 'The one thing all of these programs have in common is that the deals worth having come from genuine alignment between what you create and what the brand needs. Cold pitching rarely produces that alignment reliably — which is why the most consistent route to good brand deals is being discoverable to the right brands, rather than pitching the wrong ones.',
      },
      {
        type: 'p',
        text: 'If you are a micro or nano creator looking to get in front of brands whose briefs already match your niche, Truleado matches you with relevant campaigns and handles the outreach on both sides. You just say yes or no when there is a real deal on the table — no cold DMs, no chasing.',
      },
    ],
  },
]

export function getPost(slug: string): Post | undefined {
  return posts.find(p => p.slug === slug)
}
