// tailwind.config.cjs
module.exports = {
  purge: ['./src/**/*.svelte', './src/**/*.css'],
  darkMode: false,
  theme: {},
  variants: {
    outline: ["focus"],
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}