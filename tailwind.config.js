/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-inter)'],
            },
            colors: {
                teal: {
                    500: '#0EA5A4',
                    600: '#0D9494',
                }
            }
        },
    },
    plugins: [],
};
