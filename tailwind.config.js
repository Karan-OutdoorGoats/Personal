/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "OG-Regular": ["OG-Regular", ...defaultTheme.fontFamily.sans],
        "OG-Medium": ["OG-Medium", ...defaultTheme.fontFamily.sans],
        "OG-Bold": ["OG-Bold", ...defaultTheme.fontFamily.sans],
        "OG-ExtraBold": ["OG-ExtraBold", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        rotateTo180Deg: {
          from: {
            transform: "rotate(90deg)",
          },
          to: {
            transform: "rotate(180deg)",
          },
        },
        rotateTo90Deg: {
          from: {
            transform: "rotate(180deg)",
          },
          to: {
            transform: "rotate(90deg)",
          },
        },

        fadeDown: {
          "0%": {
            transform: "TranslateY(-90px)",
            opacity: 0,
          },
          "70%": {
            opacity: 1,
          },
          to: {
            transform: "TranslateY(0%)",
          },
        },
      },
      animation: {
        marquee: 'marquee 5s linear infinite',
        rotateTo180Deg: "rotateTo180Deg 400ms ease-in-out ",
        rotateTo90Deg: "rotateTo90Deg 400ms ease-in-out ",
        fadeDown: "fadeDown 400ms ease",
      },
      colors: {
        primaryColor: "#36656d",
        lightPrimaryColor: "#eef3f5",
        lightTextColor: "#393939",
        grey: "rgb(125, 125, 125)",
        orange: "rgb(246, 132, 62)",
        aquaHaze: "#eef3f5",
        boulder: "#7d7d7d",
        aluminium: "#A8AEBA",
        dustyGray: "#999999",
        doveGray: "#646464",
        athleteColor: "#ef5714",
        f5: "#f5f5f5",
        ff0000: "#ff0000",
        stockGreen: "#2fb157",
      },
      fontSize: {
        22: "1.375rem",
        11: "0.688rem",
        s: "0.8125rem",
        13:"0.813rem",
        15: "0.938rem",
        l: "1.063rem",
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms"),
  require("tailwindcss-animate")],
};
