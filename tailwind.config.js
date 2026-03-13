/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#1A5FFF',
                    alt: '#2567FF',
                    dark: '#0E1C48',
                },
                secondary: {
                    light: '#bddbd1',
                    muted: '#97A6C4',
                    soft: '#E4ECFF',
                },
                grayscale: {
                    black: '#0A0C0F',
                    dark: '#4E4E4E',
                    medium: '#767676',
                    light: '#BEBEBE',
                    extraLight: '#E1E1E1',
                    white: '#FFFFFF',
                },
            },
            fontFamily: {
                sans: ['Genova', 'Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
