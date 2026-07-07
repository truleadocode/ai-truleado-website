import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { posts, getPost } from '@/content/posts'
import BlogPostPage from '@/components/BlogPostPage'

export function generateStaticParams() {
  return posts.map(p => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.subtitle,
    alternates: { canonical: `https://www.truleado.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.subtitle,
      url: `https://www.truleado.com/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}

const HOWTO_STEPS: Record<string, { name: string; text: string }[]> = {
  'how-to-measure-influencer-campaign-roi': [
    { name: 'Define your goal', text: 'Decide whether the campaign is primarily an awareness play or a conversion play before setting any KPIs.' },
    { name: 'Calculate basic ROI', text: 'ROI = [(Revenue − Total Campaign Cost) / Total Campaign Cost] × 100, counting creator fees, gifting, agency fees, and staff time.' },
    { name: 'Track awareness metrics', text: 'For awareness campaigns, track reach, impressions, and video completion rate.' },
    { name: 'Track conversion metrics', text: 'Use unique UTM parameters and unique promo codes per creator, plus a defined conversion funnel.' },
    { name: 'Calculate Earned Media Value', text: 'EMV = Total Engagements × Platform Multiplier × Average CPE, used as a proxy for awareness-stage campaigns.' },
    { name: 'Set benchmarks', text: 'Compare your results against category benchmarks like $5.78 average ROI per $1 spent to know if a campaign is trending toward average or top-quartile.' },
  ],
  'how-to-set-your-rates-micro-influencer-2026': [
    { name: 'Pick a base formula', text: 'Use engagement-based pricing (followers × engagement rate × per-engagement rate) or CPM-based pricing (followers ÷ 1,000 × CPM × engagement multiplier).' },
    { name: 'Add usage rights', text: 'Charge an additional $50–$150 if the brand wants to run your content as a paid ad or on their own channels.' },
    { name: 'Add exclusivity', text: 'Charge an additional $75–$200 for agreeing not to work with competing brands for a set window.' },
    { name: 'Add rush fees', text: 'Charge an additional $25–$75 for a rushed turnaround.' },
    { name: 'Adjust for niche', text: 'Beauty and fashion audiences convert at a premium — 10–15 cents per engagement versus 5–8 cents for general lifestyle content.' },
    { name: 'Decide flat fee vs. performance', text: 'A flat fee protects you when a campaign underperforms for reasons outside your control; a performance deal shifts that risk onto you.' },
  ],
}

export default function BlogPostRoute({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.subtitle,
    datePublished: post.publishedAt,
    author: { '@type': 'Organization', name: 'Truleado', url: 'https://www.truleado.com' },
    publisher: { '@type': 'Organization', name: 'Truleado', logo: 'https://www.truleado.com/logo-mark-t-tile.png' },
    url: `https://www.truleado.com/blog/${post.slug}`,
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.truleado.com' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://www.truleado.com/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://www.truleado.com/blog/${post.slug}` },
    ],
  }

  const howToSteps = HOWTO_STEPS[post.slug]
  const howToJsonLd = howToSteps
    ? {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: post.title,
        description: post.subtitle,
        step: howToSteps.map(s => ({ '@type': 'HowToStep', name: s.name, text: s.text })),
      }
    : null

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {howToJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }} />
      )}
      <BlogPostPage post={post} />
    </>
  )
}
