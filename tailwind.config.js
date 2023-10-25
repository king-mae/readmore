/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6470F5',
        'secondary': '#6FF5C4',
        'tertiary' : '#FA6711',
        'accent' : '#64F5F1',
      }
    },
  },
  plugins: [],
}

