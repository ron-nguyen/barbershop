import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A24B",
          light: "#E0C079",
          dark: "#9B7A2C",
        },
        ink: {
          DEFAULT: "#0A0A0A",
          800: "#141414",
          700: "#1C1C1C",
          600: "#262626",
          500: "#3A3A3A",
          400: "#5A5A5A",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "3rem",
        },
        screens: {
          "2xl": "1280px",
        },
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.85) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
