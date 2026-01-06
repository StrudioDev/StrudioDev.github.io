/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    primary: 'var(--bg-primary)',
                    secondary: 'var(--bg-secondary)',
                    tertiary: 'var(--bg-tertiary)',
                },
                text: {
                    primary: 'var(--text-primary)',
                    secondary: 'var(--text-secondary)',
                },
                accent: {
                    DEFAULT: 'var(--accent-orange)',
                    dim: 'var(--accent-orange-dim)',
                }
            },
            fontFamily: {
                sans: ['var(--font-main)', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
