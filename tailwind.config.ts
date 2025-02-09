import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black-gray": "#40454a",
        "black-gray-1": "#242528",
        "black-gray-2": "#393c40",
        "black-gray-3": "#1c1e21",
        "black-white": "#D9D9D9",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: "320px",
        smx: "500px",
        ipad: "700px",
        mdx: "800px",
        mdx2: "1100px",
        mdx3: "1280px",
        xxl: "1300px",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
