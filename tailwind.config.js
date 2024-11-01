/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundColor: theme => ({ ...theme.colors }),
    extend: {
      screens: { xs: '375px' },
      fontFamily: {
        fraunces: ['Fraunces', 'serif'],
        barlow: ['Barlow', 'sans-serif'],
      },
      colors: {},
      backgroundImage: {
        /* Hero Images */
        'mobile-header': "url('/assets/mobile/image-header.jpg')",
        'desktop-header': "url('/assets/desktop/image-header.jpg')",

        /* Graphic Design Images */
        'mobile-graphic-design': "url('/assets/mobile/image-graphic-design.jpg')",
        'desktop-graphic-design': "url('/assets/desktop/image-graphic-design.jpg')",

        /* Photography Images */
        'mobile-photography': "url('/assets/mobile/image-photography.jpg')",
        'desktop-photography': "url('/assets/desktop/image-photography.jpg')",

      }
    },
  },
  plugins: [],
}