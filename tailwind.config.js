/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',      // the default ground: white, not beige
        paperDeep: '#F4F5F6',  // a light neutral band, for alternating sections
        ink: '#16181C',        // near-black text
        inkSoft: '#4C525A',    // secondary text, used sparingly
        rule: '#E2E5E8',       // hairlines and card borders
        // One red, used everywhere. `deep` exists only for hover and pressed
        // states; nothing else should introduce another red.
        red: {
          DEFAULT: '#C41E25',
          deep: '#9E151B',
          tint: '#FBEEEE',     // the faintest red wash, for icon badges
        },
      },
      fontFamily: {
        sans: ['Archivo', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.032em',
      },
      maxWidth: { shell: '1320px', prose: '46ch' },
      borderRadius: { card: '6px' },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
