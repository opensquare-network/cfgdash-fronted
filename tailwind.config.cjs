import light from "./src/theme/light";
import font from "./src/theme/tailwind-plugins/fonts";
import scrollbar from "./src/theme/tailwind-plugins/scrollbar";

const twThemeVariables = Object.keys(light).reduce((value, key) => {
  value[key] = `var(--${key})`;
  return value;
}, {});

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "768px",
      md: "1024px",
      lg: "1280px",
      pad: "1080px",
    },
    extend: {
      colors: {
        ...twThemeVariables,
      },
      borderRadius: {
        "2xl": "14px",
        "3xl": "16px",
      },
      boxShadow: {
        shadowCard: "0px 3px 5px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [font, scrollbar],
};
