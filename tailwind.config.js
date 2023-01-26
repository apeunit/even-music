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
        logo: "60/23",
      },
      borderWidth: {
        0.5: "0.03125rem", // 0.5px
      },
      colors: {
        primary: "#111827", // dark gray
        secondary: "#9361FF", // even purple
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans], //add Inter font-family from google fonts as default
      },
      fontSize: {
        xxs: "0.625rem", //10px
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
        33: "8.25rem", // 132px
        38.75: "9.6875rem", // 155px
        39.5: "9.875rem", // 158px
        48.25: "12.0625rem", // 193px
        48.5: "12.125rem", //194px
        54.75: "13.6875rem", // 219px
        87.5: "21.875rem", // 350px
        104.75: "26.1875rem", // 419px
        113.05: "28.2638rem", // 452.22px
        159.5: "39.875rem", // 638px
        "6xl": "70rem", // 1120px
      },
      minWidth: {
        45.25: "11.3125rem", // 181px
        53.25: "13.3125rem", // 213px
      },
      spacing: {
        0.75: "0.1875rem", // 3px
        2.5: "0.625rem", // 10px
        4.25: "1.0625rem", // 17px
        4.5: "1.125rem", // 18px
        9.75: "2.4375rem", // 39px
        10.5: "2.625rem", // 42px
        10.75: "2.6875rem", // 43px
        13.25: "3.3125rem", // 53px
        15.22: "3.8062rem", // 60.9px
        17.9: "4.4938rem", // 71.9px
        18.4: "4.6rem", // 73.6px
        18.95: "4.7375rem", // 75.8px
        20.75: "5.1875rem", // 83px
        21.25: "5.3125rem", //85px
        25: "6.25rem", // 100px
        36.5: "9.125rem", // 146px
        45.75: "11.4375rem", // 183px
        53.25: "13.3125rem", // 213px
        64.5: "16.125rem", // 258px
      },
      textUnderlineOffset: {
        3: "0.1563rem", // 2.5px
      },
    },
  },
  plugins: [],
};
