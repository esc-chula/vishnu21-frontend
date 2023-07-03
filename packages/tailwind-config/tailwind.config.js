/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        // app content
        `src/**/*.{js,ts,jsx,tsx}`,
        // include packages if not transpiling
        // '../../packages/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                ibm: ['IBM Plex Sans Thai Looped', 'sans-serif'],
                baijam: ['Bai Jamjuree', 'sans-serif'],
            },
            colors: {
                primary: {
                    50: '#F2ECFE',
                    100: '#DDCFFC',
                    200: '#C9B2FB',
                    300: '#B496F9',
                    400: '#A079F8',
                    500: '#8B5CF6',
                    600: '#6938CD',
                    700: '#4713A3',
                    800: '#3B0D8D',
                    900: '#2E0677',
                },
                secondary: {
                    50: '#FBECFE',
                    100: '#DFC8E4',
                    200: '#C3A3CA',
                    300: '#A77FB1',
                    400: '#8B5B97',
                    500: '#6F367D',
                    600: '#531263',
                    700: '#43175F',
                    800: '#370E50',
                    900: '#2A0541',
                },
                neutral: {
                    50: '#F8FAFC',
                    100: '#F1F5F9',
                    200: '#E2E8F0',
                    300: '#CBD5E1',
                    400: '#94A3B8',
                    500: '#64748B',
                    600: '#475569',
                    700: '#334155',
                    800: '#1E293B',
                    900: '#0F172A',
                },
                success: {
                    50: '#F3FDF0',
                    100: '#DAFCD6',
                    200: '#AFF9AE',
                    300: '#82ED8B',
                    400: '#60DC77',
                    500: '#31C65B',
                    600: '#23AA56',
                    700: '#188E50',
                    800: '#0F7248',
                    900: '#095F42',
                },
                error: {
                    50: '#FEF4F2',
                    100: '#FFE3D7',
                    200: '#FFC0B0',
                    300: '#FF9688',
                    400: '#FF6E6B',
                    500: '#FF3A47',
                    600: '#DB2A45',
                    700: '#B71D43',
                    800: '#93123D',
                    900: '#7A0B3A',
                },
            },
            boxShadow: {
                button: '0px 2px 9px 2px rgba(0, 0, 0, 0.35), 0px -4px 8px 0px rgba(122, 54, 227, 0.35) inset',
            },
        },
    },
    plugins: [],
};
