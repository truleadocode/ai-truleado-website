'use client'

import { useState } from 'react'
import Link from 'next/link'
import { posts } from '@/content/posts'

const filters = [
  { key: 'all', label: 'All' },
  { key: 'creators', label: 'For creators' },
  { key: 'advertisers', label: 'For advertisers' },
] as const

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function BlogIndexPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]['key']>('all')
  const visiblePosts = filter === 'all' ? posts : posts.filter(p => p.audience === filter)

  return (
    <>
      <section className="pt-[128px] px-10 max-[900px]:px-5 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)',
          }}
        />
        <div className="max-w-[1060px] mx-auto relative z-[1]">
          <p
            className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase mb-[14px]"
            style={{ color: 'var(--acc)' }}
          >
            <span className="w-[18px] h-0.5 rounded-sm inline-block" style={{ background: 'var(--acc)' }} />
            From the blog
          </p>

          <h1
            className="font-display font-light leading-[1.04] mb-7"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.025em', fontVariationSettings: "'opsz' 72" }}
          >
            Influencer marketing,<br />explained.
          </h1>

          <p className="text-[18px] font-normal leading-[1.75] max-w-[480px]" style={{ color: 'var(--dim)' }}>
            Practical takes for advertisers, creators, and everyone working in the space.
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {filters.map(f => {
              const active = filter === f.key
              return (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className="rounded-full px-4 py-2 text-[13px] font-medium border cursor-pointer transition-colors duration-200"
                  style={{
                    background: active ? 'var(--brand)' : 'transparent',
                    color: active ? '#F8F7FF' : 'var(--dim)',
                    borderColor: active ? 'var(--brand)' : 'var(--line2)',
                  }}
                >
                  {f.label}
                </button>
              )
            })}
          </div>

          <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 gap-[18px] mt-[56px]">
            {visiblePosts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block no-underline p-7 rounded-xl transition-transform duration-200"
                style={{ background: 'var(--bg2)', border: '1px solid var(--line)' }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--line2)'
                  e.currentTarget.style.transform = 'translateY(-3px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--line)'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                <span
                  className="inline-flex items-center rounded-full px-3 py-[4px] text-[11px] font-semibold tracking-[0.08em] uppercase"
                  style={{ background: 'var(--bg3)', color: 'var(--acc)', border: '1px solid var(--line)' }}
                >
                  {post.audienceLabel}
                </span>

                <h3 className="font-semibold text-[17px] leading-[1.35] mt-3 mb-3" style={{ color: 'var(--fg)' }}>
                  {post.title}
                </h3>

                <p className="text-[14px] leading-[1.7] line-clamp-3" style={{ color: 'var(--dim)' }}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-5">
                  <p className="text-[12px]" style={{ color: 'var(--dim)' }}>{post.readMinutes} min read</p>
                  <p className="text-[12px]" style={{ color: 'var(--dim)' }}>{formatDate(post.publishedAt)}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="h-px max-w-[1060px] mx-auto mt-[56px]" style={{ background: 'var(--line)' }} />

          <p className="text-center py-[48px] text-[14px]" style={{ color: 'var(--dim)' }}>
            More coming soon.
          </p>
        </div>
      </section>
    </>
  )
}
