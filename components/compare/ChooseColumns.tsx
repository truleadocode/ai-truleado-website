const CheckIcon = ({ color }: { color: string }) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-[2px]">
    <circle cx="8" cy="8" r="8" fill={color} />
    <path d="M4.5 8.2l2.2 2.2 4.8-5" stroke="#F8F7FF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function ChooseColumns({
  competitorName,
  truleadoWins,
  competitorWins,
}: {
  competitorName: string
  truleadoWins: string[]
  competitorWins: string[]
}) {
  return (
    <div className="grid grid-cols-2 gap-[18px] max-[720px]:grid-cols-1">
      <div className="rounded-xl p-7" style={{ background: 'var(--bg2)', border: '1px solid var(--brand)' }}>
        <p className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-4" style={{ color: 'var(--brand)' }}>
          Choose Truleado if
        </p>
        <ul className="flex flex-col gap-3">
          {truleadoWins.map(w => (
            <li key={w} className="flex items-start gap-[10px] text-[14px] leading-[1.6]" style={{ color: 'var(--fg)' }}>
              <CheckIcon color="var(--brand)" />
              {w}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl p-7" style={{ background: 'var(--bg2)', border: '1px solid var(--line)' }}>
        <p className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-4" style={{ color: 'var(--dim)' }}>
          Choose {competitorName} if
        </p>
        <ul className="flex flex-col gap-3">
          {competitorWins.map(w => (
            <li key={w} className="flex items-start gap-[10px] text-[14px] leading-[1.6]" style={{ color: 'var(--fg)' }}>
              <CheckIcon color="var(--dim)" />
              {w}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
