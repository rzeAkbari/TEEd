/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            primary: '#023E8A',
            primaryVariant: '#14213D',
            secondary: '#3A5A40',
            secondaryVariant: '#C6F68D',
            onPrimary: '#F0EBD8',
            onSecondary: '#ffffff',
            error: '#B00020',
            grayText: '#595959',
            grayDark: '#CDCDCD',
            grayLight: '#EFEFEF',
            background: '#ffffff',
        },
        fontFamily: {
            sans: ['Oxygen', 'sans-serif'],
        },
    },
    plugins: [],
}
