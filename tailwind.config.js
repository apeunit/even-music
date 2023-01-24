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
      aspectRatio: {
        logo: "60/23"
      },
      colors: {
        primary: "#111827", // dark gray
        accent: "#9361ff" //purple
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
        87.5: "21.875rem", // 350px
        113.05: "28.2638rem", // 452.22px
        159.5: "39.875rem", // 638px
      },
      minWidth: {
        45.25: "11.3125rem", // 181px
        53.25: "13.3125rem", // 213px
      },
      spacing: {
        0.75: "0.1875rem", // 3px
        15.22: "3.8062rem", // 60.9px
        17.2: "4.3rem", // 68.8px
        17.9: "4.4938rem", // 71.9px
        18.4: "4.6rem", // 73.6px
        20.75: "5.1875rem", // 83px
        45.25: "11.3125rem", // 181px
        53.25: "13.3125rem", // 213px
      },
    },
  },
  plugins: [],
};
