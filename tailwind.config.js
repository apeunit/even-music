const { fontFamily } = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827", // dark gray
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans],
      },
      fontSize: {
        "1xl": "1.4375rem", // 23px
        "3.5xl": "2rem", // 32px
      },
      letterSpacing: {
        tight: "0.025rem", // 0.4px
        thinnest: "0.0625rem", // 1px
        thinner: "0.0859375rem", // 1.375px
        thin: "0.1125rem", // 1.8px
      },
      lineHeight: {
        3.75: "0.9375rem", // 15px
        4.25: "1.0625rem", // 17px
        4.75: "1.1875rem", // 19px
        5.5: "1.375rem", // 22px
      },
      maxWidth: {
        "6xl": "70rem",
      },
    },
  },
  plugins: [],
};
