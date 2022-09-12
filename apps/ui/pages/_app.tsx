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
import { AppPropsWithLayout } from '@ui/types';
import { defaultTheme } from '../theme'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <React.Fragment>
      <Head>
        <title>Leitner</title>
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline enableColorScheme />
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <main>
              {
                getLayout(<Component {...pageProps} />)
              }
            </main>
          </LocalizationProvider>
          <Notification />
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
