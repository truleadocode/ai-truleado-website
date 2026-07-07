const line = { stroke: 'var(--acc)', strokeWidth: 2.2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' }
const thin = { stroke: 'var(--acc)', strokeWidth: 1.4, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' }
const accentFill = { fill: 'var(--ember)' }
const decor = { stroke: 'var(--line2)', strokeWidth: 1, fill: 'none' }

type CoverArtProps = { className?: string }
type Decor = { cx: number; cy: number; r: number }

function Frame({ children, decorCircle, className }: { children: React.ReactNode; decorCircle: Decor; className?: string }) {
  return (
    <svg viewBox="0 0 400 220" className={className} focusable="false">
      <rect x="0" y="0" width="400" height="220" rx="14" style={{ fill: 'var(--bg3)' }} />
      <circle cx={decorCircle.cx} cy={decorCircle.cy} r={decorCircle.r} {...decor} />
      <g transform="translate(200,112)">{children}</g>
    </svg>
  )
}

function CoinsArt({ className }: CoverArtProps) {
  return (
    <Frame className={className} decorCircle={{ cx: 122, cy: 68, r: 68 }}>
      <path d="M-34-24h68M-34 0h68" {...thin} />
      <ellipse cx="0" cy="-12" rx="34" ry="10" {...line} />
      <ellipse cx="0" cy="2" rx="34" ry="10" {...line} />
      <ellipse cx="0" cy="16" rx="34" ry="10" {...line} />
      <path d="M-34-12v14M34-12v14M-34 2v14M34 2v14" {...thin} />
      <circle cx="34" cy="-30" r="4" style={accentFill} />
    </Frame>
  )
}

function TowerArt({ className }: CoverArtProps) {
  return (
    <Frame className={className} decorCircle={{ cx: 292, cy: 150, r: 58 }}>
      <rect x="-30" y="-46" width="60" height="94" rx="4" {...line} />
      <path d="M0-46v-16" {...thin} />
      <path d="M-12-24h10M2-24h10M-12-4h10M2-4h10M-12 16h10M2 16h10" {...thin} />
      <circle cx="0" cy="-66" r="5" style={accentFill} />
    </Frame>
  )
}

function PinArt({ className }: CoverArtProps) {
  return (
    <Frame className={className} decorCircle={{ cx: 108, cy: 150, r: 54 }}>
      <path d="M0-52c22 0 40 17 40 39 0 28-40 67-40 67s-40-39-40-67c0-22 18-39 40-39z" {...line} />
      <circle cx="0" cy="-14" r="15" {...thin} />
      <circle cx="0" cy="-14" r="5" style={accentFill} />
    </Frame>
  )
}

function ArrowArt({ className }: CoverArtProps) {
  return (
    <Frame className={className} decorCircle={{ cx: 298, cy: 58, r: 62 }}>
      <circle cx="-4" cy="6" r="42" {...thin} />
      <path d="M-38 38L46-38" {...line} />
      <path d="M46-38l-18 2M46-38l-4 18" {...line} />
      <circle cx="-38" cy="38" r="4" style={accentFill} />
    </Frame>
  )
}

function KettlebellArt({ className }: CoverArtProps) {
  return (
    <Frame className={className} decorCircle={{ cx: 96, cy: 58, r: 58 }}>
      <path d="M-22-32a22 22 0 0144 0" {...line} />
      <path d="M-22-32v16M22-32v16" {...line} />
      <circle cx="0" cy="20" r="38" {...line} />
      <circle cx="0" cy="-46" r="4" style={accentFill} />
    </Frame>
  )
}

function BagArt({ className }: CoverArtProps) {
  return (
    <Frame className={className} decorCircle={{ cx: 300, cy: 152, r: 64 }}>
      <path d="M-32-16l-8 72h80l-8-72z" {...line} />
      <path d="M-18-16a18 26 0 0136 0" {...line} />
      <circle cx="0" cy="20" r="4" style={accentFill} />
    </Frame>
  )
}

function GaugeArt({ className }: CoverArtProps) {
  return (
    <Frame className={className} decorCircle={{ cx: 118, cy: 162, r: 58 }}>
      <path d="M-46 28a46 46 0 0192 0" {...thin} />
      <path d="M-46 28h-8M46 28h8M0-18v-8M-33-5l-6-6M33-5l6-6" {...thin} />
      <path d="M0 28L28-14" {...line} />
      <circle cx="0" cy="28" r="5" style={accentFill} />
    </Frame>
  )
}

function LipstickArt({ className }: CoverArtProps) {
  return (
    <Frame className={className} decorCircle={{ cx: 296, cy: 70, r: 56 }}>
      <rect x="-12" y="6" width="24" height="46" rx="5" {...line} />
      <path d="M-12 6l4-22h16l4 22z" {...line} />
      <path d="M-8-16h16" {...thin} />
      <path d="M32-38l4 10 10 4-10 4-4 10-4-10-10-4 10-4z" style={accentFill} />
    </Frame>
  )
}

function AlertArt({ className }: CoverArtProps) {
  return (
    <Frame className={className} decorCircle={{ cx: 106, cy: 66, r: 56 }}>
      <circle cx="0" cy="0" r="44" {...line} />
      <path d="M0-20v26" {...line} />
      <circle cx="0" cy="20" r="4" style={accentFill} />
    </Frame>
  )
}

function TagArt({ className }: CoverArtProps) {
  return (
    <Frame className={className} decorCircle={{ cx: 292, cy: 158, r: 62 }}>
      <path d="M-38-28h48l28 28-28 28h-48z" {...line} />
      <circle cx="-18" cy="-14" r="6" {...thin} />
      <path d="M-18 10h34M-18 24h20" {...thin} />
      <circle cx="24" cy="0" r="4" style={accentFill} />
    </Frame>
  )
}

const ART: Record<string, React.ComponentType<CoverArtProps>> = {
  'brands-that-pay-micro-influencers-best': CoinsArt,
  'top-influencer-marketing-agencies-2026': TowerArt,
  'top-uk-micro-influencers-2026': PinArt,
  'top-niches-highest-roi-micro-influencer-campaigns': ArrowArt,
  'top-fitness-micro-influencers-instagram-2026': KettlebellArt,
  'd2c-brands-winning-micro-influencer-marketing': BagArt,
  'how-to-measure-influencer-campaign-roi': GaugeArt,
  'top-beauty-micro-influencers-tiktok-2026': LipstickArt,
  'top-influencer-marketing-mistakes-to-avoid': AlertArt,
  'how-to-set-your-rates-micro-influencer-2026': TagArt,
}

export default function BlogCoverArt({
  slug,
  alt,
  className,
  style,
}: {
  slug: string
  alt: string
  className?: string
  style?: React.CSSProperties
}) {
  const Art = ART[slug] ?? ArrowArt
  return (
    <div role="img" aria-label={alt} className={className} style={style}>
      <Art className="w-full h-full block" />
    </div>
  )
}
