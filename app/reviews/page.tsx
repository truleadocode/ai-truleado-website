import type { Metadata } from 'next'
import ReviewsPage from '@/components/ReviewsPage'

export const metadata: Metadata = {
  title: 'Truleado — Reviews',
  description: 'What advertisers and creators are saying about Truleado.',
}

export default function Reviews() {
  return <ReviewsPage />
}
