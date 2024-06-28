import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                nunito: ['Nunito', 'sans-serif'],
            },
            animation: {
                orbit: 'orbit calc(var(--duration)*1s) linear infinite',
                bounce: 'bounce 1s infinite',
                'border-beam':
                    'border-beam calc(var(--duration)*1s) infinite linear',
            },
            keyframes: {
                bounce: {
                    '0%, 100%': {
                        transform: 'translateY(-25%)',
                        animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
                    },
                    '50%': {
                        transform: 'translateY(0)',
                        animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
                    },
                },
                'border-beam': {
                    '100%': {
                        'offset-distance': '100%',
                    },
                },
                orbit: {
                    '0%': {
                        transform:
                            'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)',
                    },
                    '100%': {
                        transform:
                            'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)',
                    },
                },
            },
        },
    },
    darkMode: 'class',
    plugins: [
        nextui(),
        function ({ addUtilities }) {
            addUtilities({
                '.animation-delay-200': {
                    'animation-delay': '200ms',
                },
                '.animation-delay-400': {
                    'animation-delay': '400ms',
                },
                '.animation-delay-600': {
                    'animation-delay': '600ms',
                },
            });
        },
    ],
};
