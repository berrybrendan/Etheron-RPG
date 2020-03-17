import { createMuiTheme } from '@material-ui/core/styles';
import '../assets/fonts/fonts.css';

const theme = createMuiTheme({
  breakpoints: {
    keys: ["xs","sm","md","lg","xl"],
    values: {
      xs:0,
      sm:600,
      md:960,
      lg:1280,
      xl:1920
    },
  },
  direction:"ltr",
  palette: {
    primary: {
        main: '#484848',
        light: '#606060',
        dark: '#000000',
        contrastText: '#b35d5d',
    },
    secondary: {
        main: '#b34040',
        light: '#e84848',
        dark: '#8c0f0f',
        contrastText: '#eeeeee',
    },
    error: {
      main: '#f44336',
      light: '#e57373',
      dark: '#d32f2f',
      contrastText: '#000000'
    },
    background: {
        paper: '#e0e0e0',
        default: '#e0e0e0',
    },
    success: {
        main: '#ccff90',
        contrastText: '#eeeeee'
    }
  },
  typography: {
    htmlFontSize: 16,
    fontFamily:"'Press Start 2P', cursive",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: "'IM Fell Great Primer SC', serif",
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
    },
    h2: {
      fontFamily: "'IM Fell Great Primer SC', serif",
      fontWeight: 300,
      fontSize: "3.75rem",
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: "'IM Fell Great Primer SC', serif",
      fontWeight: 400,
      fontSize: "3rem",
      lineHeight: 1.167,
    },
    h4: {
      fontFamily: "'IM Fell Great Primer SC', serif",
      fontWeight: 400,
      fontSize: "2.125rem",
      lineHeight: 1.235,
    },
    h5: {
      fontFamily: "'IM Fell Great Primer SC', serif",
      fontWeight: 400,
      fontSize: "1.5rem",
      lineHeight: 1.334,
    },
    h6: {
      fontFamily: "'IM Fell Great Primer SC', serif",
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
    }

  }
});


export default theme;