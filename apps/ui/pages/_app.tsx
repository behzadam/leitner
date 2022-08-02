import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Provider } from 'react-redux';
import { store } from '../store/index';

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
        <main>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </main>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
