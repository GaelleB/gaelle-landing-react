// tailwind.config.js
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                backgroundBody: '#2f3239',
                backgroundDark: '#383c45',
                primary: '#1ab1dd',
                secondary: '#f1cd52',
                accent1: '#1fcfb7',
                accent2: '#11f09b',
                textLight: '#ffffff',
                textDark: '#000000',
            },
        },
    },      
    plugins: [],
}