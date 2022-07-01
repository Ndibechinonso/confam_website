/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      "nav_bg": "#F2F7FF",
      "btn_bg": "#00003D",
      "white": "#FFFFFF",
      "black_1": "#0E0A1E",
      "black_2": "#11171D",
      "primary_1": "#17395C",
      "primary_2": "#00003D",
      "grey_3": "#828282",
      "grey_4": "#BDBDBD",
      "grey_6": "#F8F8F8",
      "footer_bg": "#0E0A1E",
      "footer_border_color": "#4F4F4F"
    },
    backgroundImage: {
      "hero_img": "url('/images/hero_bg.svg')",
    }
  },
  plugins: [],
}
