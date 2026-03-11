import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          50: "#E8EBF0",
          100: "#C5CBD6",
          200: "#8A95AC",
          300: "#4F6082",
          400: "#1E3055",
          500: "#0A1628",
          600: "#081220",
          700: "#060D18",
          800: "#040910",
          900: "#020408",
        },
        orange: {
          DEFAULT: "#FF6B35",
          50: "#FFF0EA",
          100: "#FFD9C7",
          200: "#FFB38F",
          300: "#FF8D57",
          400: "#FF6B35",
          500: "#E85A28",
          600: "#CC4E22",
          700: "#A63D1A",
          800: "#802D13",
          900: "#5A1F0D",
        },
        dbricks: {
          DEFAULT: "#FF3621",
          50: "#FFECE9",
          100: "#FFD0C9",
          200: "#FFA193",
          300: "#FF725D",
          400: "#FF3621",
          500: "#E52E1B",
          600: "#CC2818",
          700: "#A62013",
          800: "#80190F",
          900: "#5A110A",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      animation: {
        "counter": "counter 2s ease-out forwards",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
      },
      keyframes: {
        counter: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
