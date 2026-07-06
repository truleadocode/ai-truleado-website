import { ImageResponse } from 'next/og'

export const alt = 'Truleado — AI Influencer Marketing'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
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
          AI Influencer Marketing
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 72, fontWeight: 300, lineHeight: 1.05, marginBottom: 24, maxWidth: 800, display: 'flex', flexDirection: 'column' }}>
          <span>True matches,</span>
          <span>faster.</span>
        </div>
        <div style={{ color: '#888', fontSize: 22, lineHeight: 1.6, maxWidth: 600, display: 'flex' }}>
          Post one brief. Get a shortlist of micro &amp; nano creators who already said yes.
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
