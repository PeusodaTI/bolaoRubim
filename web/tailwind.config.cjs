/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx', 
    './index.html',
  ],
  container: {
    width: '100%',
  },
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    fontSize: {
      mm: '12px',
      sm: '13px',
      dm: '14px',
      lg: '16px',
    },
    extend: {
      backgroundImage: {
        'futebol': "url('/soccer.jpg')",
      },
    },
  },
  plugins: [],
}
