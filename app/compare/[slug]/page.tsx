import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { competitors, getCompetitor } from '@/content/competitors'
import { Divider, Eyebrow, Faq, FinalCta } from '@/components/Sections'
import ComparisonTable from '@/components/compare/ComparisonTable'
import PricingCalculator from '@/components/compare/PricingCalculator'
import ChooseColumns from '@/components/compare/ChooseColumns'

export const dynamicParams = false

const PREFIX = 'truleado-vs-'

function competitorFromParam(slugParam: string) {
  if (!slugParam.startsWith(PREFIX)) return undefined
  return getCompetitor(slugParam.slice(PREFIX.length))
}

export function generateStaticParams() {
  return competitors.map(c => ({ slug: `${PREFIX}${c.slug}` }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const competitor = competitorFromParam(params.slug)
  if (!competitor) return {}

  const title = `Truleado vs ${competitor.name}: Pricing & Features`
  const description = `How Truleado compares to ${competitor.name} on pricing, features, and who each is best for — with a live cost calculator.`

  return {
    title,
    description,
    alternates: { canonical: `https://www.truleado.com/compare/${PREFIX}${competitor.slug}` },
    openGraph: { title, description, type: 'website', url: `https://www.truleado.com/compare/${PREFIX}${competitor.slug}` },
  }
}

function pricingSummary(name: string, model: (typeof competitors)[number]['pricingModel']): string {
  switch (model.type) {
    case 'percentage':
      return `${name} charges${model.base ? ` $${model.base}/month plus` : ''} ${model.percentOfSpend}% of campaign spend.`
    case 'flat':
      return `${name} charges a flat $${model.monthly}/month.`
    case 'freemium':
      return `${name} offers a free tier with a paid tier on top.`
    case 'tiered':
      return `${name} uses tiered pricing plans.`
    case 'undisclosed':
      return `${name} does not publish its pricing.`
  }
}

export default function ComparePage({ params }: { params: { slug: string } }) {
  const competitor = competitorFromParam(params.slug)
  if (!competitor) notFound()

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: competitor.faq.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.truleado.com' },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: 'https://www.truleado.com/compare' },
      { '@type': 'ListItem', position: 3, name: `Truleado vs ${competitor.name}`, item: `https://www.truleado.com/compare/${PREFIX}${competitor.slug}` },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* ── HERO ── */}
      <section className="px-10 pt-[140px] pb-[64px] text-center max-[900px]:px-5">
        <div className="max-w-[760px] mx-auto">
          <Eyebrow label="Comparison" center />
          <h1
            className="font-display font-light leading-[1.08] tracking-[-0.025em] mb-5 mx-auto"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontVariationSettings: "'opsz' 60" }}
          >
            Truleado vs {competitor.name}
          </h1>
          <p className="text-[17px] font-normal leading-[1.75] max-w-[560px] mx-auto mb-8" style={{ color: 'var(--dim)' }}>
            {competitor.oneLinerPositioning}
          </p>
          <div className="flex items-center justify-center gap-4">
            <Image src={competitor.logo} alt={competitor.name} width={36} height={36} className="rounded-lg object-contain" />
          </div>
        </div>
      </section>

      {/* ── QUICK ANSWER ── */}
      <div className="max-w-[760px] mx-auto px-10 pb-[64px] max-[900px]:px-5">
        <div className="rounded-xl p-7" style={{ background: 'var(--bg2)', border: '1px solid var(--line)' }}>
          <p className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-3" style={{ color: 'var(--acc)' }}>
            Quick answer
          </p>
          <p className="text-[15px] font-normal leading-[1.75]" style={{ color: 'var(--fg)' }}>
            Truleado charges a flat $99/month for unlimited campaign briefs, with the first brief free.
            {' '}{pricingSummary(competitor.name, competitor.pricingModel)}
            {' '}{competitor.bestFor}
          </p>
        </div>
      </div>

      <Divider />

      {/* ── COMPARISON TABLE ── */}
      <div className="max-w-[1060px] mx-auto px-10 py-[64px] max-[900px]:px-5">
        <Eyebrow label="Side by side" />
        <h2
          className="font-display font-light tracking-[-0.025em] leading-[1.07] max-w-[520px] mb-[40px]"
          style={{ fontSize: 'clamp(24px, 3.2vw, 38px)', fontVariationSettings: "'opsz' 40" }}
        >
          Feature by feature.
        </h2>
        <ComparisonTable competitorName={competitor.name} rows={competitor.keyDifferences} />
      </div>

      <Divider />

      {/* ── PRICING CALCULATOR ── */}
      <div className="max-w-[760px] mx-auto px-10 py-[64px] max-[900px]:px-5">
        <Eyebrow label="Cost" />
        <h2
          className="font-display font-light tracking-[-0.025em] leading-[1.07] mb-3"
          style={{ fontSize: 'clamp(24px, 3.2vw, 38px)', fontVariationSettings: "'opsz' 40" }}
        >
          What would you actually pay?
        </h2>
        <p className="text-[15px] font-normal leading-[1.7] mb-8" style={{ color: 'var(--dim)' }}>
          Drag the slider to your typical monthly campaign spend and see how the two pricing models compare.
        </p>
        <PricingCalculator
          competitorName={competitor.name}
          pricingModel={competitor.pricingModel}
          hasPublicPricing={competitor.hasPublicPricing}
        />
      </div>

      <Divider />

      {/* ── CHOOSE COLUMNS ── */}
      <div className="max-w-[1060px] mx-auto px-10 py-[64px] max-[900px]:px-5">
        <Eyebrow label="Fit" />
        <h2
          className="font-display font-light tracking-[-0.025em] leading-[1.07] max-w-[520px] mb-[40px]"
          style={{ fontSize: 'clamp(24px, 3.2vw, 38px)', fontVariationSettings: "'opsz' 40" }}
        >
          Which one is right for you.
        </h2>
        <ChooseColumns
          competitorName={competitor.name}
          truleadoWins={competitor.truleadoWins}
          competitorWins={competitor.competitorWins}
        />
      </div>

      <Divider />

      <Faq items={competitor.faq.map(f => ({ q: f.q, a: f.a }))} />

      <Divider />

      <FinalCta
        heading={<>Try it on your<br />next brief.</>}
        sub="First brief free. See your shortlist before you decide on anything."
        buttonLabel="Post a Campaign"
        path="/advertiser"
      />

      <div className="text-center pb-16 -mt-6">
        <Link href="/compare" className="text-[13px] font-medium no-underline" style={{ color: 'var(--dim)' }}>
          ← See all comparisons
        </Link>
      </div>
    </>
  )
}
