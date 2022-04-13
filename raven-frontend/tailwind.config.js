const colors = require('tailwindcss/colors')
module.exports = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#41b883',
                'primary-hover': '#205c41',
            },
            keyframes: {
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                rotate360: {
                    '100%': { transform: 'rotate(360deg)' },
                },
                movecircle: {
                    '40%': { transform: 'translateY(20px) translateX(-30px)' }
                }
            },
            animation: {
                wiggle: 'wiggle 1s ease-in-out infinite',
                rotate360: 'rotate360 40s infinite linear',
                movecircle: 'movecircle 10s cubic-bezier(0.4, 0, 0.2, 1) infinite;'
            }
        },
    },
    plugins: [],
}