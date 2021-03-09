import { createMuiTheme } from '@material-ui/core/styles';

const fonts = [
  {
    fontFamily: 'Poppins',
    fontDisplay: 'swap',
    fontWeight: 300,
    src: `local('Poppins-Light'), url('/fonts/Poppins-Light') format('truetype')`,
  },
  {
    fontFamily: 'Poppins',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `local('Poppins'), local('Poppins-Regular'), url('/fonts/Poppins-Regular') format('truetype')`,
  },
  {
    fontFamily: 'Poppins',
    fontDisplay: 'swap',
    fontWeight: 500,
    src: `local('Poppins-Medium'), url('/fonts/Poppins-Medium') format('truetype')`,
  },
  {
    fontFamily: 'Poppins',
    fontDisplay: 'swap',
    fontWeight: 700,
    src: `local('Poppins-Bold'), url('/fonts/Poppins-Bold') format('truetype')`,
  },
];

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#94C8E5', // will be calculated from palette.primary.main
      main: '#364265',
      dark: '#100e3a',
      contrastText: '#F2F2F2',
    },
    secondary: {
      main: '#ef4123',
      contrastText: '#fff',
    },
    text: {
      primary: '#424242',
      secondary: '#99A1B4',
    },
    error: {
      main: '#D83B3B',
    },
    warning: {
      main: '#E8B100',
    },
    success: {
      main: '#89B832',
    },
    background: {
      default: '#f2fbff',
    },
    action: {
      hover: '#F9F9FC',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial',
    h1: {
      fontWeight: 400,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': fonts as any,
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
        },
        '#root': {
          height: '100%',
        },
      },
    },
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      light: '#092740', // will be calculated from palette.primary.main
      main: '#364265',
      dark: '#0E2233',
      contrastText: '#F2F2F2',
    },
    secondary: {
      main: '#ef4123',
      contrastText: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#99A1B4',
    },
    error: {
      main: '#D83B3B',
    },
    warning: {
      main: '#E8B100',
    },
    success: {
      main: '#89B832',
    },
    background: {
      default: '#092740',
      paper: '#061A2B',
    },
    action: {
      hover: '#092740',
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial',
    h1: {
      fontWeight: 400,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': fonts as any,
        html: {
          height: '100%',
        },
        body: {
          height: '100%',
        },
        '#root': {
          height: '100%',
        },
      },
    },
  },
});

export default theme;
