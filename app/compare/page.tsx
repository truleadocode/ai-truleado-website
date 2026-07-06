import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { competitors } from '@/content/competitors'
import { Eyebrow } from '@/components/Sections'

export const metadata: Metadata = {
  title: 'Truleado Comparisons — See How We Stack Up',
  description: 'Compare Truleado to other AI influencer marketing agents on pricing, features, and fit.',
  alternates: { canonical: 'https://truleado.com/compare' },
}

export default function CompareIndexPage() {
  return (
    <section className="px-10 pt-[140px] pb-[100px] max-[900px]:px-5">
      <div className="max-w-[1060px] mx-auto text-center mb-[56px]">
        <Eyebrow label="Comparisons" center />
        <h1
          className="font-display font-light leading-[1.08] tracking-[-0.025em] mb-5 mx-auto max-w-[700px]"
          style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontVariationSettings: "'opsz' 60" }}
        >
          How Truleado compares.
        </h1>
        <p className="text-[17px] font-normal leading-[1.75] max-w-[560px] mx-auto" style={{ color: 'var(--dim)' }}>
          Honest, feature-by-feature comparisons against other AI agents in influencer marketing — pricing, workflow, and who each is actually built for.
        </p>
      </div>

      <div className="max-w-[1060px] mx-auto grid gap-[14px] grid-cols-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
        {competitors.map(c => (
          <Link
            key={c.slug}
            href={`/compare/truleado-vs-${c.slug}`}
            className="rounded-xl p-6 no-underline transition-[border-color,transform] duration-200 flex flex-col items-start"
            style={{ background: 'var(--bg2)', border: '1px solid var(--line)' }}
          >
            <Image src={c.logo} alt={c.name} width={32} height={32} className="rounded-md object-contain mb-4" />
            <h2 className="text-[15px] font-semibold mb-1" style={{ color: 'var(--fg)' }}>
              Truleado vs {c.name}
            </h2>
            <p className="text-[13px] font-normal leading-[1.6]" style={{ color: 'var(--dim)' }}>
              {c.oneLinerPositioning}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
