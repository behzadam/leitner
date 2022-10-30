import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import ConfirmProvider from '@ui/components/confirm/confirm-provider';
import DialogProvider from '@ui/components/dialog/dialog.provider';
import { AppPropsWithLayout } from '@ui/types';
import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';

import { store } from '../store';
import { defaultTheme } from '../theme';

axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;

function App({ Component, pageProps }: AppPropsWithLayout) {
  const layout = Component.layout ?? ((page) => page)
  return (
    <React.Fragment>
      <Head>
        <title>Leitner</title>
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline enableColorScheme />
        <DialogProvider>
          <ConfirmProvider>
            <Provider store={store}>
              <LocalizationProvider dateAdapter={AdapterMoment}>
                {layout(<Component {...pageProps} />)}
              </LocalizationProvider>
            </Provider>
          </ConfirmProvider>
        </DialogProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
