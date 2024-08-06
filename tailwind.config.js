module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      dark: "#0d1b2a",
      light: "#778da9",
      white: "#ffffff",
      grey: "#e9ecef",
      white: "#ffffff",
      red: "#ffeef2",
      darkRed: "#bf0603",
      lightGrey: "#f4f4f9",
      blue: "#007ea7",
      gray: "#dee2ff",
      lightBlue: "#edf2fb",
      skin: "#fef5d9"


    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    variants: {
      extend: {},
    },
  },
  plugins: [],
}
