const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-bellefair)',
          'var(--font-barlow_condensed)',
          'var(--font-barlow)',
          ...fontFamily.sans,
        ],
      },
      backgroundImage: (theme) => ({
        'img-home-desktop': "url('/assets/home/background-home-desktop.jpg')",
        'img-home-mobile': "url('/assets/home/background-home-mobile.jpg')",
        'img-home-tablet': "url('/assets/home/background-home-tablet.jpg')",

        'img-dest-desktop':
          "url('/assets/destination/background-destination-desktop.jpg')",
        'img-dest-mobile':
          "url('/assets/destination/background-destination-mobile.jpg')",
        'img-dest-tablet':
          "url('/assets/destination/background-destination-tablet.jpg')",

        'img-crew-desktop': "url('/assets/crew/background-crew-desktop.jpg')",
        'img-crew-mobile': "url('/assets/crew/background-crew-mobile.jpg')",
        'img-crew-tablet': "url('/assets/crew/background-crew-tablet.jpg')",

        'img-tech-desktop':
          "url('/assets/technology/background-technology-desktop.jpg')",
        'img-tech-mobile':
          "url('/assets/technology/background-technology-mobile.jpg')",
        'img-tech-tablet':
          "url('/assets/technology/background-technology-tablet.jpg')",
      }),
    },
  },
  plugins: [],
};
