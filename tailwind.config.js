/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Apple: ["AppleNeoR"],
      AppleBold: ["AppleNeoB"],
      AppleExtraBold: ["AppleNeoEB"],
      Depixel: ["depixelbreit"],
      DepixelBold: ["depixelbreitfett"],
      RobotoItalic: ["RobotoItalic"],
      Serif: ["Serif"],
      Snell: ["Snell"],
    },
  },
  plugins: [
    require("tailwind-scrollbar")({
      nocompatible: true,
      preferredStrategy: "pseudoelements",
    }),
  ],
};
