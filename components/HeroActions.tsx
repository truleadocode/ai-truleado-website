'use client'

const EMBER = '#D93D2A'

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M2 7h10M8 3l4 4-4 4" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function HeroActions({
  path,
  ctaLabel,
  secondaryLabel,
  scrollTargetId = 'how-it-works',
}: {
  path: '/advertiser' | '/influencer'
  ctaLabel: string
  secondaryLabel: string
  scrollTargetId?: string
}) {
  const goToApp = () => {
    const isDev = window.location.hostname === 'localhost'
    window.location.href = isDev ? `http://localhost:3001${path}` : `https://app.truleado.com${path}`
  }

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="flex items-center gap-4 justify-center flex-wrap">
      <button
        onClick={goToApp}
        className="inline-flex items-center gap-[9px] text-[14px] font-medium text-white px-[30px] py-[14px] rounded-lg border-none cursor-pointer active:scale-[0.97]"
        style={{ background: EMBER, transition: 'transform 160ms cubic-bezier(0.23, 1, 0.32, 1)' }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)' }}
      >
        {ctaLabel}
        <ArrowRight />
      </button>
      <button
        onClick={() => scrollTo(scrollTargetId)}
        className="text-[13px] font-medium bg-transparent border-none cursor-pointer transition-colors duration-200"
        style={{ color: 'var(--dim)' }}
        onMouseEnter={e => (e.currentTarget.style.color = 'var(--fg)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'var(--dim)')}
      >
        {secondaryLabel}
      </button>
    </div>
  )
}
