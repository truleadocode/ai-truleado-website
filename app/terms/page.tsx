import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: "Truleado's terms of service for advertisers and creators.",
  alternates: { canonical: 'https://truleado.com/terms' },
}

export default function TermsPage() {
  return (
    <section className="px-10 pt-[140px] pb-[100px] max-[900px]:px-5">
      <div className="max-w-[680px] mx-auto">
        <h1
          className="font-display font-light leading-[1.1] tracking-[-0.02em] mb-6"
          style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', fontVariationSettings: "'opsz' 48" }}
        >
          Terms of Service
        </h1>
        <p className="text-[16px] font-normal leading-[1.8] mb-4" style={{ color: 'var(--dim)' }}>
          Our full terms of service are still being finalized. Truleado matches advertisers with micro and nano
          creators for paid campaigns; the specifics of any deal — deliverables, payment, usage rights — are
          agreed directly between the advertiser and the creator.
        </p>
        <p className="text-[16px] font-normal leading-[1.8]" style={{ color: 'var(--dim)' }}>
          Questions about our terms? Email us at{' '}
          <a href="mailto:support@truleado.com" className="font-medium underline" style={{ color: 'var(--fg)' }}>
            support@truleado.com
          </a>{' '}
          and we&apos;ll get back to you.
        </p>
      </div>
    </section>
  )
}
