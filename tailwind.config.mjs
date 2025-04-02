/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Open Sans', 'sans-serif'],
          serif: ['Merriweather', 'serif'],
        },
        typography: {
          DEFAULT: {
            css: {
              'h1, h2, h3, h4': {
                fontFamily: 'Merriweather, serif',
              },
            },
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }