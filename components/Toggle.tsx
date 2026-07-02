'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

const BRAND = '#2A2760'

export type Audience = 'advertiser' | 'influencer'

export default function Toggle({ active }: { active: Audience }) {
  const [pillStyle, setPillStyle] = useState({ width: 0, translateX: 0 })
  const tabARef = useRef<HTMLButtonElement>(null)
  const tabIRef = useRef<HTMLButtonElement>(null)
  const router  = useRouter()

  const updatePill = useCallback(() => {
    const a = tabARef.current
    const b = tabIRef.current
    if (!a || !b) return
    if (active === 'advertiser') {
      setPillStyle({ width: a.offsetWidth, translateX: 0 })
    } else {
      setPillStyle({ width: b.offsetWidth, translateX: a.offsetWidth })
    }
  }, [active])

  useEffect(() => {
    updatePill()
    window.addEventListener('resize', updatePill)
    return () => window.removeEventListener('resize', updatePill)
  }, [updatePill])

  return (
    <div className="relative z-[2] mb-[52px]">
      <div
        className="inline-flex rounded-full p-1 relative"
        style={{ border: '1px solid var(--line2)', background: 'var(--bg2)' }}
      >
        {/* sliding pill */}
        <div
          aria-hidden
          className="absolute top-1 left-1 rounded-full"
          style={{
            height: 'calc(100% - 8px)',
            width: pillStyle.width || undefined,
            background: BRAND,
            transform: `translateX(${pillStyle.translateX}px)`,
            zIndex: 0,
            transition: pillStyle.width
              ? 'transform 200ms cubic-bezier(0.23, 1, 0.32, 1), width 200ms cubic-bezier(0.23, 1, 0.32, 1)'
              : 'none',
          }}
        />
        <button
          ref={tabARef}
          onClick={() => { if (active !== 'advertiser') router.push('/') }}
          className="relative z-[1] px-6 py-2 border-none rounded-full bg-transparent text-[13px] font-medium whitespace-nowrap cursor-pointer transition-[color,transform] duration-150 active:scale-[0.97]"
          style={{ color: active === 'advertiser' ? '#F8F7FF' : 'var(--dim)' }}
        >
          For advertisers
        </button>
        <button
          ref={tabIRef}
          onClick={() => { if (active !== 'influencer') router.push('/influencer') }}
          className="relative z-[1] px-6 py-2 border-none rounded-full bg-transparent text-[13px] font-medium whitespace-nowrap cursor-pointer transition-[color,transform] duration-150 active:scale-[0.97]"
          style={{ color: active === 'influencer' ? '#F8F7FF' : 'var(--dim)' }}
        >
          For influencers
        </button>
      </div>
    </div>
  )
}
