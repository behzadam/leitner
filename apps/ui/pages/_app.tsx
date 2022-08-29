import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from '../store/index';
import Notification from '@ui/features/notification/Notification';

import axios from "axios";
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL

const theme = createTheme({
  typography: {
    fontSize: 13,
  },
  palette: {
    mode: 'dark',
  },
});

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Leitner</title>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <Component {...pageProps} />
          <Notification />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
