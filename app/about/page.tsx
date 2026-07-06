import type { Metadata } from 'next'
import AboutPage from '@/components/AboutPage'

export const metadata: Metadata = {
  title: "About Truleado — Built by Someone Who's Been on Both Sides",
  description: "Peter Hall built Truleado after watching brands and influencers waste time on broken matching. Learn the story behind AI influencer marketing's true-match approach.",
  alternates: { canonical: 'https://truleado.com/about' },
  openGraph: {
    title: 'About Truleado — Our Story',
    description: 'Peter Hall built Truleado after watching brands and influencers waste time on broken matching.',
    url: 'https://truleado.com/about',
  },
}

export default function About() {
  return <AboutPage />
}
