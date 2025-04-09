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
                primary: "#1ab1dd",
                secondary: "#f1cd52",
                accent: {
                    1: "#1fcfb7",
                    2: "#11f09b",
                },
                text: {
                    light: "#ffffff",
                    dark: "#000000",
                }
            }
        },
    },
    plugins: [],
}