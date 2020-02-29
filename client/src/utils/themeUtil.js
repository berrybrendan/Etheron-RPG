import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#484848',
        light: '#606060',
        dark: '#000000',
        contrastText: '#d32f2f',
    },
    secondary: {
        main: '#43a047',
        contrastText: '#eeeeee',
    },
    background: {
        paper: '#e0e0e0',
        default: '#e0e0e0',
    }
    /*
    success: {
        main: '#ccff90',
        contrastText: '#eeeeee'
    }
    */
  },
});


export default theme;