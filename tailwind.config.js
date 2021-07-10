module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                devyani: {


                    50: '#f9e7ff',
                    100: '#e4bcf8',
                    200: '#cd91ef',
                    300: '#b465e7',
                    400: '#9939df',
                    500: '#7920c6',
                    600: '#5a189a',
                    700: '#46106f',
                    800: '#2f0844',
                    900: '#15011b',


                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}