import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FF005C',
        },
        secondary: {
            main: '#fff',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        fontFamily: [
            'Montserrat',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        fontSize: 14,
        subtitle1: {
            fontSize: 12,
        },
        body1: {
            fontWeight: 500,
            fontSize: 40,
        },
        h1: {
            fontSize: 34
        },
        h2: {
            fontSize: 30
        },
        h3: {
            fontSize: 26
        },
        h4: {
            fontSize: 22
        },
        h5: {
            fontSize: 18
        },
    },
}); 