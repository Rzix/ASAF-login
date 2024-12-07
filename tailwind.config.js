/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      fontFamily:{
        kalameh:['Kalameh Regular','sans-serif']
      },
      colors: {
        customBlueLight: '#3ccbe9',
        customBlueDark: '#091948',
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #3ccbe9, #091948)',
      },
      transitionDuration: {
        '500': '500ms', // اضافه کردن 0.5 ثانیه
      }
    },
  },
  plugins: [],
}

