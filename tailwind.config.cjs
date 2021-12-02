// tailwind.config.cjs
module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  darkMode: 'class',
  theme: {
    extend: {
      outline: {
        white: ['1px solid #ffffff', '1px'],
      }
    }
  },
  variants: {
    outline: ["focus"],
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}