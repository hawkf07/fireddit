import { type Config } from "tailwindcss";
import colors from "tailwindcss/colors";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: colors.blue[400],
        danger: colors.red[500],
        warning: colors.yellow[500],
        success: colors.green[500],
      },
    },
  },
  plugins: [],
} satisfies Config;
