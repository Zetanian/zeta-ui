import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      colors: {},
      keyframes: {
        zigzac: {
          '0%': { transform: 'scaleX(0)' },
          '50%': { transform: 'scaleX(100%)' },
          '75%': { transform: 'scaleX(50%)' },
          '100%': { transform: 'scaleX(0)' },
        },
      },
      animation: {
        'zigzac': 'zigzac 2s linear infinite',
      },
    }
  },
  plugins: [
  ],
}