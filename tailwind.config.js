/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        signature:["Poppins"]
      },
      screens: {
        mob: '320px',
      }
    },
   
  },
  plugins: [],
}


