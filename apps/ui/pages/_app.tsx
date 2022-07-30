import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { wrapper } from '@/store/index';

import axios from "axios";
axios.defaults.baseURL = process.env.BASE_URL

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
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default wrapper.withRedux(CustomApp);
