import type { Metadata } from 'next'
import InfluencerPage from '@/components/InfluencerPage'

export const metadata: Metadata = {
  title: 'Brand Deals for Micro & Nano Creators — No Commission, No Subscription',
  description: 'Upload your profile once. Truleado matches you with brands that fit your niche, handles all the talking, and pings you only when a deal is ready. Always free for creators.',
  alternates: { canonical: 'https://truleado.com/influencer' },
  openGraph: {
    title: 'Truleado for Creators — Brand Deals That Fit Who You Are',
    description: 'Upload your profile once. We handle the matching, outreach, and negotiation. You create.',
    url: 'https://truleado.com/influencer',
  },
}

export default function Influencer() {
  return <InfluencerPage />
}
