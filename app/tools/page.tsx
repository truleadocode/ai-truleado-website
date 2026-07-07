import type { Metadata } from 'next'
import ComingSoonPage from '@/components/ComingSoonPage'

export const metadata: Metadata = {
  title: 'Free Tools — Truleado',
  description: 'Free calculators and tools for influencer marketing campaigns.',
  alternates: { canonical: 'https://www.truleado.com/tools' },
  openGraph: {
    title: 'Free Tools — Truleado',
    description: 'Free calculators and tools for influencer marketing campaigns.',
    url: 'https://www.truleado.com/tools',
  },
  robots: { index: false, follow: true },
}

export default function ToolsPage() {
  return (
    <ComingSoonPage
      eyebrow="Tools"
      heading={<>Free tools,<br />on the way.</>}
      body="Calculators and quick tools for planning creator campaigns are in the works. Check back soon."
    />
  )
}
