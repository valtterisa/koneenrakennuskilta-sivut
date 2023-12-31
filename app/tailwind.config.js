/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
   content: [
      './src/components/**/*.{js,vue,ts}',
      './src/layouts/**/*.vue',
      './src/pages/**/*.vue',
      './src/plugins/**/*.{js,ts}',
      './src/nuxt.config.{js,ts}',
      './src/app.vue',
   ],
   theme: {
      extend: {
         colors: {
            'custom-primary': '#ff8800',
            'custom-secondary': '#e67300',
            'custom-secondary-dark': '#00c8e7',
         },
         backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
         },
      },
   },
   plugins: [],
   variants: {
      extend: {
         backgroundColor: ['even', 'odd'],
      },
   },
};
