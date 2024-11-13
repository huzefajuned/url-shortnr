import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#bbd0ff",
        secondary: "#003049",
        borderColor: "#e0e1dd",
        cardBgColor: "#e0b1cb",
        btnBgColor: "#231942",
        btnBgHoverColor: "#1e6091",

      },
    },
  },
  plugins: [],
};
export default config;
