// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    body: "#2f3239",
                    dark: "#383c45",
                },
                primary: "#1ab1dd", // Bleu clair
                secondary: "#f1cd52", // Jaune doré
                accent1: "#1fcfb7", // Turquoise
                accent2: "#11f09b", // Vert clair
                textlight: "#ffffff",
                textdark: "#000000",
            },
        },
    },      
    plugins: [],
}