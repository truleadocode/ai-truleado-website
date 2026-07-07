const accentFill = { fill: 'var(--ember)' }

type CoverArtProps = { className?: string }

function Frame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 400 220" className={className} focusable="false">
      <rect x="0" y="0" width="400" height="220" rx="14" style={{ fill: 'var(--bg3)' }} />
      <g style={{ stroke: 'var(--acc)', fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' }}>{children}</g>
    </svg>
  )
}

function BrandsArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <path d="M-20 150 Q90 100 200 140 T440 110" strokeWidth="1.2" opacity="0.85" />
      <path d="M-20 170 Q90 125 200 160 T440 135" strokeWidth="1.2" opacity="0.6" />
      <path d="M-20 190 Q90 150 200 180 T440 160" strokeWidth="1.2" opacity="0.4" />
      <path d="M-20 210 Q90 175 200 200 T440 185" strokeWidth="1.2" opacity="0.25" />
      <circle cx="200" cy="140" r="4.5" style={accentFill} />
    </Frame>
  )
}

function AgenciesArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <path d="M-20 50 Q40 90 100 55 T220 60 T340 50 T460 58" strokeWidth="1.1" opacity="0.85" />
      <path d="M-20 85 Q40 125 100 90 T220 95 T340 85 T460 93" strokeWidth="1.1" opacity="0.6" />
      <path d="M-20 120 Q40 160 100 125 T220 130 T340 120 T460 128" strokeWidth="1.1" opacity="0.42" />
      <path d="M-20 155 Q40 195 100 160 T220 165 T340 155 T460 163" strokeWidth="1.1" opacity="0.26" />
      <circle cx="340" cy="120" r="4.5" style={accentFill} />
    </Frame>
  )
}

function UkArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <g transform="rotate(-6 200 110)">
        <path d="M-20 40 Q80 70 160 45 T320 55 T480 45" strokeWidth="1.1" opacity="0.9" />
        <path d="M-20 75 Q90 100 170 78 T330 85 T490 78" strokeWidth="1.1" opacity="0.7" />
        <path d="M-20 110 Q100 135 180 112 T340 118 T500 112" strokeWidth="1.1" opacity="0.5" />
        <path d="M-20 145 Q95 168 175 148 T335 152 T495 148" strokeWidth="1.1" opacity="0.34" />
        <path d="M-20 180 Q85 200 165 182 T325 186 T485 182" strokeWidth="1.1" opacity="0.2" />
      </g>
      <circle cx="160" cy="107" r="4.5" style={accentFill} />
    </Frame>
  )
}

function NichesArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <g transform="rotate(-14 200 110)">
        <path d="M-20 190 Q100 150 220 165 T460 60" strokeWidth="1.2" opacity="0.85" />
        <path d="M-20 205 Q100 168 220 182 T460 82" strokeWidth="1.2" opacity="0.55" />
        <path d="M-20 220 Q100 186 220 199 T460 104" strokeWidth="1.2" opacity="0.3" />
      </g>
      <circle cx="380" cy="72" r="4.5" style={accentFill} />
    </Frame>
  )
}

function FitnessArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <path d="M-20 130 Q60 40 140 130 T300 130 T460 130" strokeWidth="1.5" opacity="0.9" />
      <path d="M-20 155 Q60 75 140 155 T300 155 T460 155" strokeWidth="1.5" opacity="0.6" />
      <path d="M-20 180 Q60 110 140 180 T300 180 T460 180" strokeWidth="1.5" opacity="0.36" />
      <circle cx="60" cy="40" r="4.5" style={accentFill} />
    </Frame>
  )
}

function D2cArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <g transform="rotate(10 200 110)">
        <path d="M-20 60 Q100 20 220 75 T460 55" strokeWidth="1.2" opacity="0.88" />
        <path d="M-20 95 Q100 55 220 110 T460 90" strokeWidth="1.2" opacity="0.62" />
        <path d="M-20 130 Q100 90 220 145 T460 125" strokeWidth="1.2" opacity="0.4" />
        <path d="M-20 165 Q100 125 220 180 T460 160" strokeWidth="1.2" opacity="0.24" />
      </g>
      <circle cx="220" cy="108" r="4.5" style={accentFill} />
    </Frame>
  )
}

function RoiArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <path d="M-20 70 Q50 55 90 75 T170 65 T250 80 T330 60 T460 75" strokeWidth="1" opacity="0.9" />
      <path d="M-20 105 Q50 90 90 110 T170 100 T250 115 T330 95 T460 110" strokeWidth="1" opacity="0.65" />
      <path d="M-20 140 Q50 125 90 145 T170 135 T250 150 T330 130 T460 145" strokeWidth="1" opacity="0.42" />
      <path d="M-20 175 Q50 160 90 180 T170 170 T250 185 T330 165 T460 180" strokeWidth="1" opacity="0.24" />
      <circle cx="330" cy="93" r="4.5" style={accentFill} />
    </Frame>
  )
}

function BeautyArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <path d="M-20 90 Q100 70 220 95 T460 80" strokeWidth="0.9" opacity="0.75" />
      <path d="M-20 115 Q100 95 220 120 T460 105" strokeWidth="0.9" opacity="0.55" />
      <path d="M-20 140 Q100 120 220 145 T460 130" strokeWidth="0.9" opacity="0.38" />
      <path d="M-20 165 Q100 145 220 170 T460 155" strokeWidth="0.9" opacity="0.22" />
      <circle cx="220" cy="92" r="4" style={accentFill} />
    </Frame>
  )
}

function MistakesArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <path d="M-20 100 Q90 75 190 100" strokeWidth="1.2" opacity="0.85" />
      <path d="M210 100 Q260 130 200 150 Q160 165 200 150" strokeWidth="1.2" opacity="0.85" />
      <path d="M220 100 Q310 120 460 90" strokeWidth="1.2" opacity="0.85" />
      <path d="M-20 135 Q90 110 220 135 T460 125" strokeWidth="1.2" opacity="0.45" />
      <path d="M-20 170 Q90 145 220 170 T460 160" strokeWidth="1.2" opacity="0.26" />
      <circle cx="200" cy="150" r="4.5" style={accentFill} />
    </Frame>
  )
}

function RatesArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <path d="M-20 185 L60 185 L60 145 L160 145 L160 105 L260 105 L260 65 L460 65" strokeWidth="1.2" opacity="0.85" />
      <path d="M-20 200 Q100 180 220 190 T460 170" strokeWidth="1" opacity="0.4" />
      <path d="M-20 213 Q100 196 220 204 T460 188" strokeWidth="1" opacity="0.24" />
      <circle cx="260" cy="65" r="4.5" style={accentFill} />
    </Frame>
  )
}

const ART: Record<string, React.ComponentType<CoverArtProps>> = {
  'brands-that-pay-micro-influencers-best': BrandsArt,
  'top-influencer-marketing-agencies-2026': AgenciesArt,
  'top-uk-micro-influencers-2026': UkArt,
  'top-niches-highest-roi-micro-influencer-campaigns': NichesArt,
  'top-fitness-micro-influencers-instagram-2026': FitnessArt,
  'd2c-brands-winning-micro-influencer-marketing': D2cArt,
  'how-to-measure-influencer-campaign-roi': RoiArt,
  'top-beauty-micro-influencers-tiktok-2026': BeautyArt,
  'top-influencer-marketing-mistakes-to-avoid': MistakesArt,
  'how-to-set-your-rates-micro-influencer-2026': RatesArt,
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
  const Art = ART[slug] ?? BrandsArt
  return (
    <div role="img" aria-label={alt} className={className} style={style}>
      <Art className="w-full h-full block" />
    </div>
  )
}
