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
        'mobile-header': "url('/src/assets/mobile/image-header.jpg')",
        'desktop-header': "url('/src/assets/desktop/image-header.jpg')",

        /* Graphic Design Images */
        'mobile-graphic-design': "url('/src/assets/mobile/image-graphic-design.jpg')",
        'desktop-graphic-design': "url('/src/assets/desktop/image-graphic-design.jpg')",

        /* Photography Images */
        'mobile-photography': "url('/src/assets/mobile/image-photography.jpg')",
        'desktop-photography': "url('/src/assets/desktop/image-photography.jpg')",

      }
    },
  },
  plugins: [],
}