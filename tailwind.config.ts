import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        buda: ["var(--font-buda)", ...fontFamily.sans],
        phillips: ["var(--font-phillips)", ...fontFamily.sans],
        nunito: ["var(--font-nunito)", ...fontFamily.sans],
        "nunito-italic": ["var(--font-nunito-italic)", ...fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
