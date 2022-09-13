import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
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
import LayoutFactory from '@ui/components/Layout/LayoutFactory';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <React.Fragment>
      <Head>
        <title>Leitner</title>
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline enableColorScheme />
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <LayoutFactory layout={Component.layout}>
              <Component {...pageProps} />
            </LayoutFactory>
          </LocalizationProvider>
          <Notification />
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
