import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

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

export default CustomApp;
