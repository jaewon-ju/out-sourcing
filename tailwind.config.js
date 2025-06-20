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
      RobotoLightItalic: ["RobotoLightItalic"],
      RobotoRegular: ["RobotoRegular"],
      Bodoni: ["Bodoni"],
      Serif: ["Serif"],
      SerifSemibold: ["SerifSemibold"],
      Snell: ["Snell"],
      Box109: ["Box109"],
    },
  },
  plugins: [
    require("tailwind-scrollbar")({
      nocompatible: true,
      preferredStrategy: "pseudoelements",
    }),
  ],
};
