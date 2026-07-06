import { MetadataRoute } from 'next'
import { competitors } from '@/content/competitors'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://truleado.com'
  const now = new Date()

  const staticPages = [
    { url: base, lastModified: now, changeFrequency: 'weekly' as const, priority: 1 },
    { url: `${base}/influencer`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${base}/compare`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${base}/reviews`, lastModified: now, changeFrequency: 'weekly' as const, priority: 0.6 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  const comparePages = competitors.map(c => ({
    url: `${base}/compare/truleado-vs-${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...comparePages]
}
