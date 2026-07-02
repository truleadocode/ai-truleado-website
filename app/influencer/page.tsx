import type { Metadata } from 'next'
import InfluencerPage from '@/components/InfluencerPage'

export const metadata: Metadata = {
  title: 'Truleado — Brand Deals for Creators',
  description: 'Upload your profile once. We match you with brands, handle the talking, and ping you when a deal is ready.',
}

export default function Influencer() {
  return <InfluencerPage />
}
