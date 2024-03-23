import {createTheme} from '@mui/material';
import type {Theme} from '@mui/material/styles';
import lightPalette from '@/common/themes/lightPalette';
import darkPalette from '@/common/themes/darkPalette';

const createCommonTheme = (theme: Theme): Theme =>
  createTheme({
    ...theme,
    spacing: 5,
    typography: {
      h1: {
        fontFamily: 'IBM Plex Serif',
        fontSize: 32,
        fontWeight: 600,
        marginBottom: 20,
      },
      h2: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 500,
      },
      h3: {
        fontFamily: 'IBM Plex Serif',
        fontSize: 18,
        fontWeight: 600,
        lineHeight: '27px',
        marginBottom: 17,
        display: '-webkit-box',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '-webkit-line-clamp': '2',
        '-webkit-box-orient': 'vertical',
      },
      subtitle1: {
        fontSize: 15,
        fontWeight: 400,
        lineHeight: '165%',
        marginBottom: 30,
      },
    },
    mixins: {
      flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      positionCenter: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
      textEllipsis: {
        display: '-webkit-box',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        '-webkit-line-clamp': '4',
        '-webkit-box-orient': 'vertical',
      },
    },
    components: {
      MuiListItem: {
        styleOverrides: {
          root: {
            padding: 0,
            height: '100%',
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            margin: '0 !important',
          },
        },
      },
    },
  });

export const lightTheme = createTheme(createCommonTheme(lightPalette));
export const darkTheme = createTheme(createCommonTheme(darkPalette));
