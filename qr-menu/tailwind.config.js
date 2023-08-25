/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',

        'header-image':"url('../img/hbg.jpg')"
      },
      colors: {
        'header-color': '#c2b9a5',
        'nav-color':'#C6581D',
        'navigate-color':'#fbeee0',
        'btn-color':'#fbeee0',
      },
      boxShadow: {
        'btn': '4px 4px 0 0 #422800',
        'btn-hover':' #422800 8px 8px 0 0',
        'btn-active':'#422800 2px 2px 0 0',
      },
    },
  },
  plugins: [],
}
