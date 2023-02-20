/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        neutral: {
          'almost_white': "hsl(0, 0%, 98%)",
          'medium_gray': "hsl(0, 0%, 41%)",
          'almost_black': "hsl(0, 0%, 8%)",
        },
      },
      fontFamily: {
        'main': ["Epilogue", "sans-serif"],
      },
    },
  },
  plugins: [],
}
