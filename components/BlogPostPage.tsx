import Link from 'next/link'
import type { Post, Block } from '@/content/posts'
import { FinalCta, Divider } from '@/components/Sections'

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case 'intro':
      return (
        <p className="text-[18px] font-normal leading-[1.85] mb-8" style={{ color: 'var(--dim)' }}>
          {block.text}
        </p>
      )

    case 'p':
      return (
        <p className="text-[16px] font-normal leading-[1.85] mb-6" style={{ color: 'var(--dim)' }}>
          {block.text}
        </p>
      )

    case 'h2':
      return (
        <h2
          className="font-semibold text-[22px] leading-[1.25] tracking-[-0.01em] mt-[48px] mb-4"
          style={{ color: 'var(--fg)' }}
        >
          {block.text}
        </h2>
      )

    case 'callout':
      return (
        <div className="my-8 px-7 py-6 rounded-xl" style={{ background: 'var(--bg3)', borderLeft: '3px solid var(--acc)' }}>
          <p className="text-[15px] font-normal leading-[1.8] italic" style={{ color: 'var(--dim)' }}>
            {block.text}
          </p>
        </div>
      )

    case 'brand':
      return (
        <div className="my-8 rounded-xl p-7" style={{ background: 'var(--bg2)', border: '1px solid var(--line)' }}>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-semibold flex-shrink-0"
              style={{ background: 'var(--brand)', color: '#F8F7FF' }}
            >
              {block.rank}
            </span>
            <h3 className="text-[18px] font-semibold tracking-[-0.01em]" style={{ color: 'var(--fg)' }}>
              {block.name}
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 mb-5">
            <span
              className="rounded-full px-3 py-[4px] text-[12px] font-medium"
              style={{ background: 'var(--bg3)', color: 'var(--acc)', border: '1px solid var(--line)' }}
            >
              {block.niche}
            </span>
            <span
              className="rounded-full px-3 py-[4px] text-[12px] font-medium"
              style={{ background: 'var(--bg3)', color: 'var(--acc)', border: '1px solid var(--line)' }}
            >
              {block.model}
            </span>
          </div>

          <p className="text-[15px] font-normal leading-[1.8] mb-5" style={{ color: 'var(--dim)' }}>
            {block.body}
          </p>

          <div className="flex flex-col gap-[10px] pt-5" style={{ borderTop: '1px solid var(--line)' }}>
            <div className="flex gap-2 items-start">
              <span className="text-[11px] font-semibold tracking-[0.1em] uppercase flex-shrink-0 mt-[2px]" style={{ color: 'var(--acc)' }}>
                Rate
              </span>
              <p className="text-[13px] font-normal leading-[1.6]" style={{ color: 'var(--fg)' }}>{block.rate}</p>
            </div>
            <div className="flex gap-2 items-start">
              <span className="text-[11px] font-semibold tracking-[0.1em] uppercase flex-shrink-0 mt-[2px]" style={{ color: 'var(--acc)' }}>
                How to apply
              </span>
              <p className="text-[13px] font-normal leading-[1.6]" style={{ color: 'var(--dim)' }}>{block.applyTip}</p>
            </div>
          </div>
        </div>
      )

    case 'ratetable':
      return (
        <div className="my-8 rounded-xl overflow-hidden" style={{ border: '1px solid var(--line)' }}>
          <div className="px-6 py-4" style={{ background: 'var(--bg3)', borderBottom: '1px solid var(--line)' }}>
            <p className="text-[11px] font-semibold tracking-[0.12em] uppercase" style={{ color: 'var(--acc)' }}>
              Rate benchmarks — 2026
            </p>
          </div>
          {block.rows.map((row, i) => (
            <div
              key={i}
              className="flex items-center justify-between px-6 py-4"
              style={{ borderBottom: i < block.rows.length - 1 ? '1px solid var(--line)' : 'none', background: 'var(--bg2)' }}
            >
              <p className="text-[14px] font-normal" style={{ color: 'var(--dim)' }}>{row.platform}</p>
              <p className="text-[14px] font-semibold" style={{ color: 'var(--fg)' }}>{row.range}</p>
            </div>
          ))}
        </div>
      )
  }
}

function ctaFor(post: Post) {
  if (post.audience === 'creators') {
    return {
      heading: <>Your audience is<br />worth real deals.</>,
      sub: 'Upload your profile once. Truleado matches you with brands that already fit your niche — no cold pitching required.',
      buttonLabel: 'Find your next brand deal',
      path: '/influencer' as const,
    }
  }
  if (post.audience === 'advertisers') {
    return {
      heading: <>Write the brief.<br />We&apos;ll find who says yes.</>,
      sub: 'First campaign brief free. A confirmed shortlist of micro-influencers who already agreed to your terms.',
      buttonLabel: 'Post a Campaign',
      path: '/advertiser' as const,
    }
  }
  return {
    heading: <>See the model<br />in action.</>,
    sub: 'First campaign brief free. No cold outreach, no spreadsheets, no ghosting.',
    buttonLabel: 'Post a Campaign',
    path: '/advertiser' as const,
  }
}

export default function BlogPostPage({ post }: { post: Post }) {
  const cta = ctaFor(post)

  return (
    <>
      <section className="pt-[128px] pb-[64px] px-10 max-[900px]:px-5 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)',
          }}
        />
        <div className="max-w-[760px] mx-auto text-center relative z-[1]">
          <span
            className="inline-flex items-center rounded-full px-3 py-[4px] text-[11px] font-semibold tracking-[0.08em] uppercase"
            style={{ background: 'var(--bg3)', color: 'var(--acc)', border: '1px solid var(--line)' }}
          >
            {post.audienceLabel}
          </span>

          <h1
            className="font-display font-light mt-4 mb-5"
            style={{ fontSize: 'clamp(32px, 4.5vw, 56px)', letterSpacing: '-0.025em' }}
          >
            {post.title}
          </h1>

          <p className="text-[18px] font-normal leading-[1.75] max-w-[580px] mx-auto mb-7" style={{ color: 'var(--dim)' }}>
            {post.subtitle}
          </p>

          <div className="flex items-center justify-center gap-[6px] text-[13px]" style={{ color: 'var(--dim)' }}>
            Truleado
            <span style={{ color: 'var(--line2)' }}>·</span>
            {formatDate(post.publishedAt)}
            <span style={{ color: 'var(--line2)' }}>·</span>
            {post.readMinutes} min read
          </div>
        </div>
      </section>

      <section className="max-w-[700px] mx-auto px-10 max-[900px]:px-5 pt-[64px] pb-[80px]">
        {post.blocks.map((block, i) => (
          <BlockRenderer key={i} block={block} />
        ))}
      </section>

      <Divider />

      <FinalCta heading={cta.heading} sub={cta.sub} buttonLabel={cta.buttonLabel} path={cta.path} />

      <div className="text-center pb-16 -mt-6">
        <Link href="/blog" className="text-[13px] font-medium no-underline" style={{ color: 'var(--dim)' }}>
          ← Back to blog
        </Link>
      </div>
    </>
  )
}
