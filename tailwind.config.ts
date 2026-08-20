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
        cream: {
          DEFAULT: "#F5F1EA",
          soft: "#FAF8F4",
        },
        gold: {
          DEFAULT: "#B08D57",
          light: "#C6A15B",
          dark: "#8F7040",
        },
        charcoal: {
          DEFAULT: "#1F1D1B",
          soft: "#5C574F",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 30px rgba(31, 29, 27, 0.06)",
        lift: "0 12px 40px rgba(31, 29, 27, 0.1)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
