import {Theme, createTheme, responsiveFontSizes} from '@mui/material/styles';

const darkPalette: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C31815',
    },
    secondary: {
      main: '#0E1E32',
    },
    text: {
      primary: '#2A2A2A',
    },
    background: {
      default: '#F1F2F3',
    },
    info: {main: '#FFF'},
  },
});

export default responsiveFontSizes(darkPalette);
