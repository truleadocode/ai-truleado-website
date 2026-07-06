import { ImageResponse } from 'next/og'

export const alt = 'Truleado Comparisons — See How We Stack Up'
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
          Comparisons
        </div>
        <div style={{ color: '#FFFFFF', fontSize: 64, fontWeight: 300, lineHeight: 1.1, marginBottom: 24, maxWidth: 900, display: 'flex' }}>
          How Truleado compares.
        </div>
        <div style={{ color: '#888', fontSize: 22, lineHeight: 1.6, maxWidth: 640, display: 'flex' }}>
          Honest, feature-by-feature comparisons — pricing, workflow, and who each is actually built for.
        </div>
        <div style={{ position: 'absolute', bottom: 40, right: 60, color: '#444', fontSize: 14, display: 'flex' }}>
          truleado.com/compare
        </div>
      </div>
    ),
    { ...size }
  )
}
