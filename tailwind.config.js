module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        yellow: { 50: "#fdfff0" },
        black: { 900: "#0c0c0c", "900_01": "#000000" },
        white: { A700_01: "#ffffff" },
        gray: { "900_02": "#181818", "900_01": "#2a2a2a" },
        amber: { 300: "#ffdc58" },
        light_blue: { 100: "#b9e6fe" },
        deep_purple: { A100: "#c5a1ff" },
        blue_gray: { 700: "#535353" },
        red: { A200: "#ff6258" },
        blue: { 300: "#61bcff" },
      },

      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        "noto-sans": ["Noto Sans", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      textShadow: { ts: "0px 4px 1px #e7e7e751" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
