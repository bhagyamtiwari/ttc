/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F8F5F0',      // warm off-white, the default ground
        paperDeep: '#EEE8DD',  // a step darker, for alternating bands
        ink: '#17120F',        // warm near-black, the default text colour
        inkSoft: '#3E352F',    // secondary text: warm and dark, never grey
        rule: '#DCD3C4',       // hairlines
        // One red, used everywhere. `deep` exists only for hover and pressed
        // states; nothing else should introduce another red.
        red: {
          DEFAULT: '#A6201A',
          deep: '#851610',
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
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
