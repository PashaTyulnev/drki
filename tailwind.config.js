/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/components/**/*.{vue,js,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/app.vue',
  ],
  theme: {
    extend: {
      // Font stacks and color values both resolve to CSS variables defined in
      // app/assets/css/main.css — change the look of the whole site there.
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
        label: ['var(--font-label)'],
      },
      colors: {
        navy: {
          DEFAULT: 'rgb(var(--color-navy) / <alpha-value>)',
          dark: 'rgb(var(--color-navy-dark) / <alpha-value>)',
        },
        brick: {
          DEFAULT: 'rgb(var(--color-brick) / <alpha-value>)',
          dark: 'rgb(var(--color-brick-dark) / <alpha-value>)',
          light: 'rgb(var(--color-brick-light) / <alpha-value>)',
        },
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        muted: 'rgb(var(--color-muted) / <alpha-value>)',
        cream: 'rgb(var(--color-cream) / <alpha-value>)',
        offblack: 'rgb(var(--color-offblack) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
