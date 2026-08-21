/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F7F4EE',      // warm off-white, the default ground
        paperDeep: '#EFE9DF',  // a step darker, for alternating bands
        ink: '#141110',        // near-black text
        inkSoft: '#57504A',    // secondary text (still large, never tiny)
        rule: '#D8CFC1',       // hairlines
        red: {
          DEFAULT: '#A82A20',  // TTC red
          deep: '#7E1D15',
          ink: '#4A100B',
        },
      },
      fontFamily: {
        sans: ['"Instrument Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.045em',
        tighter: '-0.032em',
      },
      maxWidth: { shell: '1320px', prose: '46ch' },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
