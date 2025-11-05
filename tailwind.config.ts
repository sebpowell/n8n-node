import type { Config } from "tailwindcss";
import { createThemes } from "tw-colors";
import { darkTheme } from "./src/packages/themes/dark.theme";
import { lightTheme } from "./src/packages/themes/light.theme";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      fontSize: {
        xxs: "11px",
      },
    },
  },
  plugins: [
    plugin(({ addVariant, addUtilities }) => {
      addVariant("hocus", ["&:hover", "&:focus"]);

      addUtilities({
        ".animate-border": {
          animation: "rotate-border-angle 6s linear infinite",
          "will-change": "transform, --border-angle",
        },
      });
    }),
    createThemes({ light: lightTheme, dark: darkTheme }),
  ],
};

export default config;
