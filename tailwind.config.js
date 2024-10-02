/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d3466",
      },
      fontFamily: {
        ralethin: ["Raleway-Thin", "sans-serif"],
        raleextralight: ["Raleway-ExtraLight", "sans-serif"],
        ralelight: ["Raleway-Light", "sans-serif"],
        raleregular: ["Raleway-Regular", "sans-serif"],
        ralemedium: ["Raleway-Medium", "sans-serif"],
        ralesemibold: ["Raleway-SemiBold", "sans-serif"],
        ralebold: ["Raleway-Bold", "sans-serif"],
        raleextrabold: ["Raleway-ExtraBold", "sans-serif"],
        raleblack: ["Raleway-Black", "sans-serif"],
        "onest-thin": ["Onest-Thin", "sans-serif"],
        "onest-extralight": ["Onest-ExtraLight", "sans-serif"],
        "onest-light": ["Onest-Light", "sans-serif"],
        "onest-regular": ["Onest-Regular", "sans-serif"],
        "onest-medium": ["Onest-Medium", "sans-serif"],
        "onest-semibold": ["Onest-SemiBold", "sans-serif"],
        "onest-bold": ["Onest-Bold", "sans-serif"],
        "onest-extrabold": ["Onest-ExtraBold", "sans-serif"],
        "onest-black": ["Onest-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};

// primary: 1d3466
