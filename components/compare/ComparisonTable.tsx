import type { FeatureRow } from '@/content/competitors'

export default function ComparisonTable({
  competitorName,
  rows,
}: {
  competitorName: string
  rows: FeatureRow[]
}) {
  return (
    <div className="overflow-x-auto rounded-xl" style={{ border: '1px solid var(--line)' }}>
      <table className="w-full border-collapse text-left min-w-[560px]">
        <thead>
          <tr style={{ background: 'var(--bg2)' }} className="sticky top-0 z-[1]">
            <th className="px-5 py-4 text-[12px] font-semibold tracking-[0.08em] uppercase" style={{ color: 'var(--dim)', borderBottom: '1px solid var(--line)' }}>
              Feature
            </th>
            <th className="px-5 py-4 text-[13px] font-semibold" style={{ color: 'var(--brand)', borderBottom: '1px solid var(--line)' }}>
              Truleado
            </th>
            <th className="px-5 py-4 text-[13px] font-semibold" style={{ color: 'var(--fg)', borderBottom: '1px solid var(--line)' }}>
              {competitorName}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={row.feature} style={{ background: i % 2 === 0 ? 'var(--bg)' : 'var(--bg2)' }}>
              <td className="px-5 py-4 text-[14px] font-medium" style={{ color: 'var(--fg)', borderBottom: '1px solid var(--line)' }}>
                {row.feature}
              </td>
              <td className="px-5 py-4 text-[14px]" style={{ color: 'var(--dim)', borderBottom: '1px solid var(--line)' }}>
                {row.truleado}
              </td>
              <td className="px-5 py-4 text-[14px]" style={{ color: 'var(--dim)', borderBottom: '1px solid var(--line)' }}>
                {row.competitor}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
