
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const tailwindScrollbar = require("tailwind-scrollbar");

export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [tailwindScrollbar],
};
