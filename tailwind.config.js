/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./source/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Feedbacks
        danger: '#EF4444',
        success: '#10B981',
        caution: '#F59E0B',
        // Product
        blue: {
          dark: '#1E6F9F',
          normal: '#4EA8DE',
        },
        purple: {
          dark: '#5E60CE',
          normal: '#8284FA',
        },
        // Base
        gray: {
          10: '#F2F2F2',
          20: '#D9D9D9',
          30: '#808080',
          40: '#333333',
          50: '#262626',
          60: '#1A1A1A',
          70: '#0D0D0D',
        },
      },
    },
  },
  plugins: [],
}

