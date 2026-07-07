const stroke = { stroke: 'var(--acc)', strokeWidth: 1.6, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' }
const fill = { fill: 'var(--acc)' }
const faint = { fill: 'var(--bg3)' }

type CoverArtProps = { className?: string }

function Frame({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 400 220" className={className} focusable="false">
      <rect x="0" y="0" width="400" height="220" rx="14" style={{ fill: 'var(--bg3)' }} />
      {children}
    </svg>
  )
}

function BrandsArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <circle cx="130" cy="110" r="46" {...stroke} />
      <path d="M118 96h24a10 10 0 010 20h-24" {...stroke} />
      <path d="M130 90v6M130 124v6" {...stroke} />
      <rect x="220" y="70" width="110" height="80" rx="10" {...stroke} />
      <path d="M244 70l20-24 20 24" {...stroke} />
      <circle cx="264" cy="112" r="3" style={fill} />
    </Frame>
  )
}

function AgenciesArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <rect x="150" y="60" width="100" height="100" rx="6" {...stroke} />
      <path d="M172 90h16M172 108h16M172 126h16M212 90h16M212 108h16M212 126h16" {...stroke} />
      <rect x="60" y="110" width="60" height="50" rx="6" {...stroke} />
      <rect x="280" y="90" width="60" height="70" rx="6" {...stroke} />
      <path d="M120 130h30M340 120h20" {...stroke} />
    </Frame>
  )
}

function UkArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <path d="M175 55l-8 20-18 6 10 18-6 20 20-4 16 14 6-20 22-2-10-18 14-16-22-4-8-18-16 8z" {...stroke} />
      <circle cx="175" cy="107" r="5" style={fill} />
      <rect x="245" y="80" width="60" height="90" rx="10" {...stroke} />
      <path d="M255 96h40M255 112h40M255 128h24" {...stroke} />
    </Frame>
  )
}

function NichesArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <path d="M70 160V70M70 160h260" {...stroke} />
      <path d="M100 150l40-30 40 20 50-46 60 30" {...stroke} />
      <circle cx="100" cy="150" r="4" style={fill} />
      <circle cx="140" cy="120" r="4" style={fill} />
      <circle cx="180" cy="140" r="4" style={fill} />
      <circle cx="230" cy="94" r="4" style={fill} />
      <circle cx="290" cy="124" r="4" style={fill} />
    </Frame>
  )
}

function FitnessArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <path d="M110 110h180" {...stroke} />
      <rect x="80" y="90" width="30" height="40" rx="6" {...stroke} />
      <rect x="290" y="90" width="30" height="40" rx="6" {...stroke} />
      <rect x="62" y="98" width="14" height="24" rx="4" {...stroke} />
      <rect x="324" y="98" width="14" height="24" rx="4" {...stroke} />
      <circle cx="200" cy="60" r="18" {...stroke} />
      <path d="M200 78v20M188 118l-14 34M212 118l14 34" {...stroke} />
    </Frame>
  )
}

function D2cArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <path d="M130 90h-20l-16 70h150l-16-70h-20" {...stroke} />
      <path d="M124 90a26 26 0 0152 0" {...stroke} />
      <path d="M230 150l30-46 26 20 40-58" {...stroke} />
      <path d="M296 66h30v30" {...stroke} />
    </Frame>
  )
}

function RoiArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <rect x="70" y="60" width="260" height="110" rx="10" {...stroke} />
      <path d="M96 150l40-34 34 18 60-56 50 30" {...stroke} />
      <circle cx="96" cy="150" r="4" style={fill} />
      <circle cx="136" cy="116" r="4" style={fill} />
      <circle cx="170" cy="134" r="4" style={fill} />
      <circle cx="230" cy="78" r="4" style={fill} />
      <circle cx="280" cy="108" r="4" style={fill} />
      <path d="M90 60v-14M330 170v14" style={{ stroke: 'var(--line2)', strokeWidth: 1.4 }} />
    </Frame>
  )
}

function BeautyArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <circle cx="180" cy="110" r="50" {...stroke} />
      <circle cx="180" cy="110" r="34" style={{ stroke: 'var(--line2)', strokeWidth: 1.2, fill: 'none' }} />
      <path d="M262 78l40-22 8 14-38 24z" {...stroke} />
      <path d="M258 92l-14 26" {...stroke} />
      <circle cx="244" cy="118" r="3" style={fill} />
    </Frame>
  )
}

function MistakesArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <path d="M180 62l70 118H110z" {...stroke} />
      <path d="M180 100v34" {...stroke} />
      <circle cx="180" cy="150" r="3" style={fill} />
      <rect x="270" y="80" width="60" height="60" rx="10" {...stroke} />
      <path d="M286 100h28M286 114h20" {...stroke} />
    </Frame>
  )
}

function RatesArt({ className }: CoverArtProps) {
  return (
    <Frame className={className}>
      <rect x="100" y="70" width="130" height="90" rx="10" {...stroke} />
      <path d="M124 96h50M124 114h80M124 132h60" {...stroke} />
      <path d="M280 70l30 20-30 20-30-20z" {...stroke} />
      <path d="M280 110v50" {...stroke} />
      <path d="M266 138h28" {...stroke} />
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
  const Art = ART[slug] ?? NichesArt
  return (
    <div role="img" aria-label={alt} className={className} style={style}>
      <Art className="w-full h-full block" />
    </div>
  )
}
