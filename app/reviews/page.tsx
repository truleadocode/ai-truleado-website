import type { Metadata } from 'next'
import ReviewsPage from '@/components/ReviewsPage'

export const metadata: Metadata = {
  title: 'Truleado Reviews — What Advertisers & Creators Say',
  description: 'Reviews from advertisers and creators using Truleado for AI-powered influencer campaign matching.',
  alternates: { canonical: 'https://truleado.com/reviews' },
}

export default function Reviews() {
  return <ReviewsPage />
}
