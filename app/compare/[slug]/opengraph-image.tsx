import { ImageResponse } from 'next/og'
import { competitors, getCompetitor } from '@/content/competitors'

export const alt = 'Truleado Comparison'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const PREFIX = 'truleado-vs-'

export function generateStaticParams() {
  return competitors.map(c => ({ slug: `${PREFIX}${c.slug}` }))
}

export default async function Image({ params }: { params: { slug: string } }) {
  const competitor = params.slug.startsWith(PREFIX)
    ? getCompetitor(params.slug.slice(PREFIX.length))
    : undefined
  const name = competitor?.name ?? 'Competitor'

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0E0E11',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'serif',
          position: 'relative',
        }}
      >
        <div style={{ color: '#9894CC', fontSize: 14, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 24, display: 'flex' }}>
          Comparison
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 60, fontWeight: 300, lineHeight: 1.1, marginBottom: 24, maxWidth: 900, display: 'flex' }}>
          Truleado vs {name}
        </div>
        <div style={{ color: '#888', fontSize: 22, lineHeight: 1.6, maxWidth: 640, display: 'flex' }}>
          Pricing, features, and who each is actually built for.
        </div>
        <div
          style={{
            marginTop: 48,
            background: '#D93D2A',
            color: '#fff',
            fontSize: 16,
            fontWeight: 600,
            padding: '12px 24px',
            borderRadius: 8,
            display: 'flex',
            alignSelf: 'flex-start',
          }}
        >
          First brief free →
        </div>
        <div style={{ position: 'absolute', bottom: 40, right: 60, color: '#444', fontSize: 14, display: 'flex' }}>
          truleado.com
        </div>
      </div>
    ),
    { ...size }
  )
}
