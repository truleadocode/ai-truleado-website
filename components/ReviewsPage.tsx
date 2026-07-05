'use client'

const ACC = '#9894CC'

export default function ReviewsPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden px-6 pt-[100px] pb-20">
      {/* grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 100%)',
        }}
      />

      <div className="relative z-[2] animate-fadeUp">
        <p className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.12em] uppercase mb-[22px]" style={{ color: 'var(--acc)' }}>
          <span className="w-5 h-0.5 rounded-sm inline-block" style={{ background: ACC }} />
          Reviews
        </p>

        <h1
          className="font-display font-light leading-[1.06] tracking-[-0.025em] mb-6 mx-auto max-w-[700px]"
          style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', fontVariationSettings: "'opsz' 60" }}
        >
          Real results,<br />coming soon.
        </h1>

        <p
          className="text-[17px] font-normal max-w-[460px] mx-auto leading-[1.75]"
          style={{ color: 'var(--dim)' }}
        >
          We&apos;re collecting reviews from the advertisers and creators using Truleado. Check back soon to see what they have to say.
        </p>
      </div>
    </section>
  )
}
