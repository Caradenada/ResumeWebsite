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
        "background-primary": "#00668A",
        "background-secondary": "#004E71",
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
      sm: "640px",
      md: "768px",
      lg: "1024"
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}