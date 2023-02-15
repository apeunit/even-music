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
        primary: "#111827", // dark grey
        secondary: "#9361FF", // even purple
        lightGrey: "#B8B8B8", // light grey
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...fontFamily.sans], // add Inter font-family from google fonts as default
      },
      fontSize: {
        2.5: "0.625rem", // 10px
        5.5: "22px", // 22px
        5.75: "1.4375rem", // 23px
        6.46: "1.6171875rem", // 25.875px
        7.18: "1.796875rem", // 28.75px
        8: "2rem", // 32px
        11: "2.75rem", // 44px
        sm: "0.875rem", // 14px
        base: "1rem", // 16px
      },
      letterSpacing: {
        0.1: "0.025rem", // 0.4px
        0.25: "0.0625rem", // 1px
        0.34: "0.0859375rem", // 1.375px
        0.38: "0.09668rem", // 1.54688px
        0.42: "0.107421875rem", // 1.71875px
        0.45: "0.1125rem", // 1.8px
        0.61: "0.15359375rem", // 2.4575px
      },
      lineHeight: {
        0.3: "1.21", // 1.21 ratio
        4.25: "1.05875rem", // 16.94px
        5.5: "1.36125rem", // 21.78px
        6.96: "1.74rem", // 27.84px
        7.83: "1.9575rem", // 31.32px
        8.7: "2.175rem", // 34.8px
        13.75: "3.4375rem", // 55px
      },
      maxWidth: {
        33: "8.25rem", // 132px
        38.75: "9.6875rem", // 155px
        43.59: "10.898375rem", // 174.375px
        48.25: "12.0625rem", // 193px
        48.43: "12.109375rem", // 193.75px
        48.5: "12.125rem", // 194px
        54.56: "13.640625rem", // 218.25px
        56: "14rem", // 224px
        60: "15rem", // 240px
        60.62: "15.15625rem", // 242.5px
        61.59: "15.3984375rem", // 246.375px
        62.5: "15.625rem", // 250px
        67.2: "16.8rem", // 268.8px
        72: "18rem", // 288px,
        87.5: "21.875rem", // 350px
        113.05: "28.2638rem", // 452.22px
        127.18: "31.79675rem", // 508.748px
        134.8: "33.7rem", // 539.2px
        141.31: "35.32975rem", // 565.276px
        150: "37.5rem", // 600px
        219.31: "54.828125rem", // 877.25px
      },
      minWidth: {
        53.25: "13.3125rem", // 213px
        59.9: "14.9765625rem", // 239.625px
        64: "16rem", // 256px
        80: "20rem", // 320px
      },
      screens: {
        xs: "360px", // 360px
        "1.5lg": "1150px", // 1150px
        "1.5xl": "1360px", // 1360px
      },
      spacing: {
        0.25: "0.0625rem", // 1px
        0.75: "0.1875rem", // 3px
        2.5: "0.625rem", // 10px
        4.25: "1.0625rem", // 17px
        4.5: "1.125rem", // 18px
        5.6: "1.4rem", // 22.4px
        9.75: "2.4375rem", // 39px
        10.75: "2.6875rem", // 43px
        13.25: "3.3125rem", // 53px
        15.22: "3.8062rem", // 60.9px
        17.9: "4.4938rem", // 71.9px
        20.75: "5.1875rem", // 83px
        20.8: "5.2rem", // 83.2px
        25: "6.25rem", // 100px
        36.5: "9.125rem", // 146px
        45.75: "11.4375rem", // 183px
        53.25: "13.3125rem", // 213px
      },
      textDecorationThickness: {
        0.475: "0.11875rem", // 1.9px
        0.8: "0.2rem", // 3.2px
      },
      textUnderlineOffset: {
        0.625: "2.5008px", // 2.5px
        1.25: "5px", // 5px
      },
    },
  },
  plugins: [],
};
