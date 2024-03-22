import {Theme, createTheme, responsiveFontSizes} from '@mui/material/styles';

const darkPalette: Theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C31815',
    },
    text: {
      primary: '#2A2A2A',
    },
    background: {
      default: '#F1F2F3',
    },
  },
});

export default responsiveFontSizes(darkPalette);
