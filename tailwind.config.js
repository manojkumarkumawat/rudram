/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1C2B25',      // deep pine-charcoal — primary text, header bg
        oyster: '#F4F1E8',   // warm limestone — page background
        card: '#FFFFFF',
        sage: '#7C8B6F',     // muted eco green — secondary accent
        brass: '#A9834F',    // warm brass — primary accent / CTAs
        clay: '#8B5E42',     // heritage brick — tertiary accent
        line: '#DAD4C2',     // hairline dividers on oyster bg
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1240px',
      },
      letterSpacing: {
        tightest2: '-0.03em',
      },
    },
  },
  plugins: [],
}
