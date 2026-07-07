import type { Metadata } from 'next'
import AboutPage from '@/components/AboutPage'

export const metadata: Metadata = {
  title: "About Truleado — Built by Someone Who's Been on Both Sides",
  description: "Peter Hall built Truleado after watching brands and influencers waste time on broken matching. Learn the story behind AI influencer marketing's true-match approach.",
  alternates: { canonical: 'https://www.truleado.com/about' },
  openGraph: {
    title: 'About Truleado — Our Story',
    description: 'Peter Hall built Truleado after watching brands and influencers waste time on broken matching.',
    url: 'https://www.truleado.com/about',
  },
}

const aboutBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.truleado.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.truleado.com/about' },
  ],
}

export default function About() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutBreadcrumbJsonLd) }} />
      <AboutPage />
    </>
  )
}
