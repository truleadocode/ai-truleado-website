import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/waitlist/'],
    },
    sitemap: 'https://www.truleado.com/sitemap.xml',
  }
}
