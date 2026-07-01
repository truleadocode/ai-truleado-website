/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg:    '#0E0D20',
        bg2:   '#15132C',
        bg3:   '#1C1A38',
        fg:    '#F8F7FF',
        brand: '#2A2760',
        ember: '#D93D2A',
        acc:   '#9894CC',
        muted: '#9894CC',
        dim:   '#635E96',
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
