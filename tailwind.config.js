/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:    'var(--bg)',
        bg2:   'var(--bg2)',
        bg3:   'var(--bg3)',
        fg:    'var(--fg)',
        brand: 'var(--brand)',
        ember: 'var(--ember)',
        acc:   'var(--acc)',
        muted: 'var(--muted)',
        dim:   'var(--dim)',
      },
      fontFamily: {
        sans:      ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display:   ['var(--font-fraunces)', 'Georgia', 'serif'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.35s ease both',
      },
    },
  },
  plugins: [],
}
