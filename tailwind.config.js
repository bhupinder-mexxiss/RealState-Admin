const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html",
    "./node_modules/flowbite/**/*.{js,jsx}",
    "./node_modules/flowbite-react/**/*.{js,jsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      '2xs': "100%",
      xs: "470px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      '2xl': "1280px",
      'fluid': "100vw"
    },
    extend: {
      colors: {
        'primary': '#00858E',
        'text1': '#303030',
        'text2': '#545454',
        'text3': '#505152',
        'border1': '#D3D3D3',
      },
      keyframes: {
        fadeInUp: {
          '0%': { transform: 'translate3d(0, 30px, 0)' },
          '100%': { transform: 'translate3d(0, 0, 0)', opacity: '1' },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.4s ease-in-out',
      },
      fontSize: {
        '22': ['22px', '26px'],
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    flowbite.plugin(),
  ],
};
