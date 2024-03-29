import plugin from "tailwindcss/plugin";

export default plugin(({ addComponents }) => {
  addComponents({
    ".text40Semibold": {
      "font-size": "40px",
      "font-weight": "600",
      "line-height": "40px",
    },
    ".text24Semibold": {
      "font-size": "24px",
      "font-weight": "600",
      "line-height": "36px",
    },
    ".text18Semibold": {
      "font-size": "18px",
      "font-weight": "600",
      "line-height": "26px",
    },
    ".text16Regular": {
      "font-size": "16px",
      "font-weight": "400",
      "line-height": "20px",
    },
    ".text14Semibold": {
      "font-size": "14px",
      "font-weight": "600",
      "line-height": "18px",
    },
    ".text14Regular": {
      "font-size": "14px",
      "font-weight": "400",
      "line-height": "18px",
    },
    ".text12Semibold": {
      "font-size": "12px",
      "font-weight": "600",
      "line-height": "16px",
    },
    ".text10Regular": {
      "font-size": "10px",
      "font-weight": "400",
      "line-height": "12px",
    },
    ".text12Regular": {
      "font-size": "12px",
      "font-weight": "400",
      "line-height": "16px",
    },
  });
});
