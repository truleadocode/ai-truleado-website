import type { Metadata } from 'next'
import ReviewsPage from '@/components/ReviewsPage'

export const metadata: Metadata = {
  title: 'Truleado Reviews — What Advertisers & Creators Say',
  description: 'Reviews from advertisers and creators using Truleado for AI-powered influencer campaign matching.',
  alternates: { canonical: 'https://www.truleado.com/reviews' },
  openGraph: {
    title: 'Truleado Reviews — What Advertisers & Creators Say',
    description: 'Reviews from advertisers and creators using Truleado for AI-powered influencer campaign matching.',
    url: 'https://www.truleado.com/reviews',
  },
  robots: { index: false, follow: true },
}

export default function Reviews() {
  return <ReviewsPage />
}
