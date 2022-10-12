import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import Notification from '@ui/features/notification/Notification';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { store } from '../store/index';

import { Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import DialogConfirm from '@ui/components/dialog/DialogConfirm';
import { AppPropsWithLayout } from '@ui/types';
import axios from "axios";
import React from 'react';
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
        <Provider store={store}>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            {layout(<Component {...pageProps} />)}
          </LocalizationProvider>
          <Notification />
          <DialogConfirm title={'title'}>
            <Typography>Are you sure you want to delete?</Typography>
          </DialogConfirm>
        </Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
