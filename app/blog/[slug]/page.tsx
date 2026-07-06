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
    title: `${post.title} — Truleado`,
    description: post.subtitle,
    alternates: { canonical: `https://truleado.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.subtitle,
      url: `https://truleado.com/blog/${post.slug}`,
    },
  }
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
    author: { '@type': 'Organization', name: 'Truleado', url: 'https://truleado.com' },
    publisher: { '@type': 'Organization', name: 'Truleado', logo: 'https://truleado.com/logo-mark-t-tile.png' },
    url: `https://truleado.com/blog/${post.slug}`,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BlogPostPage post={post} />
    </>
  )
}
