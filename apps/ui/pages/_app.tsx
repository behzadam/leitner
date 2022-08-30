import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import Notification from '@ui/features/notification/Notification';

import axios from "axios";
import React from 'react';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL

const theme = createTheme({
  typography: {
    fontSize: 13,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#2c2c2c',
    },
    secondary: {
      main: '#eab308',
    },
    divider: 'rgba(0,0,0,0.06)',
    success: {
      main: '#22c55e',
    },
    info: {
      main: '#3b82f6',
    },
    warning: {
      main: '#ca8a04',
    },
  }
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Leitner</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Provider store={store}>
          <main>
            <Component {...pageProps} />
          </main>
          <Notification />
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default CustomApp;
