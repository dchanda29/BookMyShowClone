module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                dc: {


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


                },
                bmsgrey: {


                    50: '#ebf3fd',
                    100: '#cfd7e3',
                    200: '#b3bdcc',
                    300: '#95a2b6',
                    400: '#7888a0',
                    500: '#5f6e87',
                    600: '#49566a',
                    700: '#333d4c',
                    800: '#2b3147',
                    900: '#050c16',

                }
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}