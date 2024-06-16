import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { blue } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface PaletteColor {
    bg?: string;
  }
  interface SimplePaletteColorOptions {
    bg?: string;
  }
};

const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      dark: blue[600],
      bg: blue[500]+'0A',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
