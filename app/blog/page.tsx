import type { Metadata } from 'next'
import BlogIndexPage from '@/components/BlogIndexPage'

export const metadata: Metadata = {
  title: 'Blog — Influencer Marketing for Creators and Brands',
  description: 'Practical guides for micro-influencers landing brand deals, and for advertisers running campaigns that convert. No fluff — just what works.',
  alternates: { canonical: 'https://www.truleado.com/blog' },
  openGraph: {
    title: 'Truleado Blog — Influencer Marketing, Explained',
    description: 'Practical takes for advertisers, creators, and everyone working in the space.',
    url: 'https://www.truleado.com/blog',
  },
}

const blogBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.truleado.com' },
    { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.truleado.com/blog' },
  ],
}

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumbJsonLd) }} />
      <BlogIndexPage />
    </>
  )
}
