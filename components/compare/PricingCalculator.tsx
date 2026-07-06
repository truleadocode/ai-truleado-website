'use client'

import { useMemo, useState } from 'react'
import type { PricingModel } from '@/content/competitors'

const TRULEADO_MONTHLY = 99

function formatUSD(n: number): string {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
}

function competitorCost(model: PricingModel, spend: number): number | null {
  switch (model.type) {
    case 'percentage': {
      const base = model.base ?? 0
      return base + spend * (model.percentOfSpend / 100)
    }
    case 'flat':
      return model.monthly
    default:
      return null
  }
}

export default function PricingCalculator({
  competitorName,
  pricingModel,
  hasPublicPricing,
}: {
  competitorName: string
  pricingModel: PricingModel
  hasPublicPricing: boolean
}) {
  const [spend, setSpend] = useState(2000)

  const competitor = useMemo(() => competitorCost(pricingModel, spend), [pricingModel, spend])
  const truleado = TRULEADO_MONTHLY

  if (!hasPublicPricing) {
    return (
      <div className="rounded-xl p-7" style={{ background: 'var(--bg2)', border: '1px solid var(--line)' }}>
        <p className="text-[14px] font-normal leading-[1.7]" style={{ color: 'var(--dim)' }}>
          {competitorName} does not publish exact pricing, so we can&apos;t run a live cost comparison here.
          Truleado&apos;s pricing is public: your first brief is free, then a flat <strong style={{ color: 'var(--fg)' }}>$99/month</strong> for unlimited briefs — regardless of campaign size.
        </p>
      </div>
    )
  }

  return (
    <div className="rounded-xl p-7" style={{ background: 'var(--bg2)', border: '1px solid var(--line)' }}>
      <label className="block text-[12px] font-semibold tracking-[0.08em] uppercase mb-3" style={{ color: 'var(--dim)' }}>
        Your monthly campaign spend
      </label>
      <div className="flex items-center gap-4 mb-8">
        <input
          type="range"
          min={500}
          max={50000}
          step={500}
          value={spend}
          onChange={e => setSpend(Number(e.target.value))}
          className="flex-1"
          style={{ accentColor: 'var(--brand)' }}
        />
        <span
          className="font-mono text-[18px] font-semibold w-[110px] text-right"
          style={{ color: 'var(--fg)' }}
        >
          {formatUSD(spend)}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 max-[520px]:grid-cols-1">
        <div className="rounded-lg p-5" style={{ background: 'var(--brand)' }}>
          <p className="text-[11px] font-semibold tracking-[0.08em] uppercase mb-2" style={{ color: 'rgba(248,247,255,0.7)' }}>
            Truleado
          </p>
          <p className="font-mono text-[28px] font-semibold" style={{ color: '#F8F7FF' }}>
            {formatUSD(truleado)}
          </p>
          <p className="text-[12px] mt-1" style={{ color: 'rgba(248,247,255,0.7)' }}>flat, unlimited briefs</p>
        </div>
        <div className="rounded-lg p-5" style={{ background: 'var(--bg3)', border: '1px solid var(--line)' }}>
          <p className="text-[11px] font-semibold tracking-[0.08em] uppercase mb-2" style={{ color: 'var(--dim)' }}>
            {competitorName}
          </p>
          <p className="font-mono text-[28px] font-semibold" style={{ color: 'var(--fg)' }}>
            {competitor !== null ? formatUSD(competitor) : '—'}
          </p>
          <p className="text-[12px] mt-1" style={{ color: 'var(--dim)' }}>
            {pricingModel.type === 'percentage' ? `based on published rate at this spend` : 'estimated'}
          </p>
        </div>
      </div>

      {pricingModel.note && (
        <p className="text-[12px] mt-5 leading-[1.6]" style={{ color: 'var(--dim)' }}>
          {pricingModel.note}
        </p>
      )}
    </div>
  )
}
