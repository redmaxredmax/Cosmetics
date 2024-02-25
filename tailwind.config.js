/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        service_bg:"#FCF3F6"
      },
      fontFamily: {
        display: ["Roboto, sans-serif"]
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          lg: "1100px"
        }
      }
    },
  },
  plugins: [],
}