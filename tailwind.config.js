module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "Mikhak",
    },
    extend: {
      colors: {
        "black": "#16181E",
        "dark": "#21242D",
        "primary": "#00B9AE",
        "white": "#F9F9F9",
      },
      screens: {
        sm: "576px",

        md: "639px",

        lg: "767px",

        xl: "1023px",

        "2xl": "1279px",
      },
    },
  },
  plugins: [],
};