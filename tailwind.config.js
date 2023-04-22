// tailwind.config.js
module.exports = {
  darkMode: "class",
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        "curriculum-primary": "#00ab44",
        "background-primary": "#02030d",
        "background-secondary": "#004E71",
        "curriculum-bg1": "#404258",
        "curriculum-bg2": "#474E68",
      },
    },
    fontFamily: {
      Roboto: ["Roboto, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      xs: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1600px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}