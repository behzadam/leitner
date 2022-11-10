import { createTheme, ThemeOptions } from '@mui/material';

export const defaultTheme: ThemeOptions = createTheme({
  typography: {
    fontSize: 13,
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#2c2c2c',
    },
    secondary: {
      main: '#e4e5e8',
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
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#e2e2e2',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        regular: {
          height: '48px',
          minHeight: '48px',
          '@media (min-width: 600px)': {
            minHeight: '48px',
          },
        },
      },
    },
  },
});
