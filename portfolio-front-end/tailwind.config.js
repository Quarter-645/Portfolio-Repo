/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: ['.src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                white: '#FFFFFF',
                blue: '#0077CC',
                black: '#000000',
                dark: '#1E1E1E',
                lightGrey: '#D9D9D9',
                grey: '#2E2F2F'
            },
        },
    },
    plugins: [],
}

