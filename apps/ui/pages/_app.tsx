import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import Notification from '@ui/features/notification/Notification';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

import axios from "axios";
import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const theme = createTheme({
  typography: {
    fontSize: 13,
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#2c2c2c',
    },
    secondary: {
      main: '#eab308',
    },
    divider: 'rgba(0,0,0,0.07)',
    success: {
      main: '#22c55e',
    },
    info: {
      main: '#3b82f6',
    },
    warning: {
      main: '#ca8a04',
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 48,
          minHeight: 48
        }
      }
    }
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
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <main>
              <Component {...pageProps} />
            </main>
          </LocalizationProvider>
          <Notification />
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default CustomApp;
