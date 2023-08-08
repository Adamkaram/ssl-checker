/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center : "true"
    },
    extend: {
      colors: {
        'pricing': '#ff8a05',
      },
      spacing: {
        'pricing': '1rem',
      },
      typography: {
        'pricing': { fontSize: '1.5rem' },
      },
      backgroundImage: {
        'bgs': "url('../public/banner-bg.png')",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionDuration: {
        '3000': '3000ms',
      },
      animation: {
        tilt: "tilt 10s infinite linear ",
      },
      keyframes: {
        tilt: {
          "0% , 50% , 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(5deg)",
          },
          "75%": {
            transform: "rotate(-5deg)",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};