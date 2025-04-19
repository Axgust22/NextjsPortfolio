module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Include all files in the src directory
  ],
  theme: {
    extend: {}, // Extend the default theme if needed
  },
  plugins: [],
};

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
