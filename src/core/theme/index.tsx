import { createMuiTheme } from '@material-ui/core/styles';
import { createContext } from 'react';

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

const ThemeContext = createContext({
  prefersDarkMode: false,
  /* eslint-disable @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars */
  toggleDarkMode: (isDarkMode: boolean) => {},
});

const lightTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#A6B5FF',
      main: '#4862E6',
      dark: '#283680',
    },
    secondary: {
      light: '#FF8C66',
      main: '#E66F47',
      dark: '#FF8C66',
    },
    text: {
      primary: '#353B57',
      secondary: '#F0F2FF',
    },
    error: {
      main: '#F0614B',
    },
    warning: {
      main: '#E5D85C',
    },
    success: {
      main: '#47E672',
    },
    background: {
      default: '#EBEEFF',
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

const darkTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#4BD6F2',
      main: '#212d69',
      dark: '#4862E6',
    },
    secondary: {
      light: '#FF8C66',
      main: '#E66F47',
      dark: '#CC532B',
    },
    text: {
      primary: '#F0F2FF',
      secondary: '#F0F2FF',
      hint: '#F0F2FF',
    },
    error: {
      main: '#F0614B',
    },
    warning: {
      main: '#E5D85C',
    },
    success: {
      main: '#47E672',
    },
    background: {
      default: '#12183a',
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

export { lightTheme, darkTheme, ThemeContext };
