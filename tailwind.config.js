/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        menu: '861px',
      },
      colors: {
        bg: 'var(--bg)',
        surface: 'var(--surface)',
        'surface-2': 'var(--surface-2)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        line: 'var(--border)',
        blue: 'var(--blue)',
        'blue-ink': 'var(--blue-ink)',
        'blue-soft': 'var(--blue-soft)',
        orange: 'var(--orange)',
        'orange-soft': 'var(--orange-soft)',
        'orange-ink': 'var(--orange-ink)',
        'on-orange': 'var(--on-orange)',
        purple: 'var(--purple)',
        'purple-soft': 'var(--purple-soft)',
        'purple-ink': 'var(--purple-ink)',
        pink: 'var(--pink)',
        'pink-soft': 'var(--pink-soft)',
        'pink-ink': 'var(--pink-ink)',
        green: 'var(--green)',
        'green-soft': 'var(--green-soft)',
        'green-ink': 'var(--green-ink)',
        cyan: 'var(--cyan)',
        'cyan-soft': 'var(--cyan-soft)',
        'cyan-ink': 'var(--cyan-ink)',
      },
      boxShadow: {
        card: 'var(--shadow)',
        soft: 'var(--shadow-sm)',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        riseIn: {
          from: { opacity: '0', transform: 'translateY(22px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
      },
      animation: {
        riseIn: 'riseIn .7s var(--ease-out) both',
        fadeIn: 'fadeIn .5s var(--ease-out) both',
      },
    },
  },
  plugins: [
    function gateHoverToFinePointers({ addVariant }) {
      addVariant('hover', '@media (hover: hover) and (pointer: fine) { &:hover }');
    },
  ],
};
