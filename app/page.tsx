import type { Metadata } from 'next'
import LandingPage from '@/components/LandingPage'

export const metadata: Metadata = {
  title: 'AI Influencer Marketing — No Cold Outreach',
  description: 'Write one brief. Truleado matches it against every micro and nano creator on our roster, briefs the strongest fits, and hands you only the ones who already said yes. First campaign free.',
  alternates: { canonical: 'https://www.truleado.com/' },
  openGraph: {
    title: 'Truleado — No Cold Outreach Influencer Marketing',
    description: 'Write one brief. Get a campaign-ready shortlist of vetted micro & nano influencers who already said yes.',
    url: 'https://www.truleado.com/',
  },
}

export default function Home() {
  return <LandingPage />
}
