/** Reconstructed from the compiled tailwind.min.css */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
          "espresso": "#161311",
          "umber": "#231e1a",
          "soot": "#282421",
          "travertine": "#f3efe6",
          "sand": "#e7e0d3",
          "gold": "#c8a45d",
          "cream": "#faf7f2"
  },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        greatvibes: ['"Great Vibes"', 'cursive']
      },
      screens: {
        'portrait-hero': { raw: '(max-aspect-ratio: 9/10)' },
        'wide-hero':     { raw: 'not all and (max-aspect-ratio: 9/10)' },
        'short-land':    { raw: '(min-aspect-ratio: 9/10) and (max-height: 640px) and (max-width: 1023px)' }
      }
    }
  }
}
