import {createTheme, responsiveFontSizes, Theme} from '@mui/material/styles';

const lightPalette: Theme = createTheme({
  palette: {
    mode: 'light',
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

export default responsiveFontSizes(lightPalette);
