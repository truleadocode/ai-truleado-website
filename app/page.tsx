import type { Metadata } from 'next'
import LandingPage from '@/components/LandingPage'

export const metadata: Metadata = {
  title: 'Truleado — How to Run an Influencer Campaign Without the Cold Outreach',
  description:
    'Write one brief. Truleado matches it against every micro and nano creator on our roster, briefs the strongest fits, and hands you only the ones who already said yes. No cold outreach, no spreadsheets, no guesswork.',
  keywords: [
    'influencer marketing',
    'micro influencer marketing',
    'nano influencer platform',
    'UGC creator marketplace',
    'AI influencer matching',
    'influencer campaign management',
    'influencer outreach automation',
  ],
  openGraph: {
    title: 'Truleado — How to Run an Influencer Campaign Without the Cold Outreach',
    description:
      'Write one brief. Get a campaign-ready shortlist of vetted micro & nano influencers who already said yes.',
    type: 'website',
  },
}

export default function Home() {
  return <LandingPage />
}
