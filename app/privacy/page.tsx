import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Truleado collects, uses, and protects your data.',
  alternates: { canonical: 'https://www.truleado.com/privacy' },
  openGraph: {
    title: 'Privacy Policy — Truleado',
    description: 'How Truleado collects, uses, and protects your data.',
    url: 'https://www.truleado.com/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <section className="px-10 pt-[140px] pb-[100px] max-[900px]:px-5">
      <div className="max-w-[680px] mx-auto">
        <h1
          className="font-display font-light leading-[1.1] tracking-[-0.02em] mb-6"
          style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', fontVariationSettings: "'opsz' 48" }}
        >
          Privacy Policy
        </h1>
        <p className="text-[16px] font-normal leading-[1.8] mb-4" style={{ color: 'var(--dim)' }}>
          We&apos;re still finalizing our full privacy policy. In the meantime, here&apos;s the short version: we
          only collect what we need to match brands and creators — campaign briefs, creator profile data you
          submit, and basic contact information — and we don&apos;t sell your data to third parties.
        </p>
        <p className="text-[16px] font-normal leading-[1.8]" style={{ color: 'var(--dim)' }}>
          Questions about your data or a request to delete it? Email us at{' '}
          <a href="mailto:support@truleado.com" className="font-medium underline" style={{ color: 'var(--fg)' }}>
            support@truleado.com
          </a>{' '}
          and we&apos;ll get back to you.
        </p>
      </div>
    </section>
  )
}
