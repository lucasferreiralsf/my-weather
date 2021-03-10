import React, { useEffect, useMemo, useState } from 'react';

import { AppProps } from 'next/app';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import Head from 'next/head';

import { lightTheme, darkTheme, ThemeContext } from '@core/theme';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [theme, setTheme] = useState(createMuiTheme(lightTheme));

  const toggleDarkModeByUser = (isDarkMode: boolean) => {
    setIsDarkMode(isDarkMode);
    setTimeout(() => {
      setTheme(createMuiTheme(isDarkMode ? darkTheme : lightTheme));
    }, 300);
  };

  useMemo(() => {
    setTheme(createMuiTheme(isDarkMode ? darkTheme : lightTheme));
  }, [isDarkMode]);

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <title>My weather app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeContext.Provider
        value={{
          prefersDarkMode: Boolean(isDarkMode),
          toggleDarkMode: toggleDarkModeByUser,
        }}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default MyApp;
