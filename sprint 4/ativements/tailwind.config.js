/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}", "./index.html"],
  theme: {
    fontFamily: {
      sans: ["Lato", "sans-serif"]
    },
    extend: { // Cores do projeto
      colors: {
        // Separação de tipos de cores
        primary: {
          blue: "#005ca7",
          purple: "#4c30c4",
          red: "#bf0000"
        },
        complementary: {
          white: "#f3f5f9",
          black: "#272727",
          gray: "#33303e"
        }
      },
    },

    // Formatação de imagem
    backgroundImage: {
      atvGradient: "linear-gradient(149deg, #2272b5 -10.8%, #005195 37.9%, #004582 100%)"
    }
  },
  plugins: [],
}

