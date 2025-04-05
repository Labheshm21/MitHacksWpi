// pages/_app.js
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Define the custom MUI theme with Abadi font
const theme = createTheme({
  typography: {
    fontFamily: '"Abadi", Tahoma, Geneva, sans-serif',
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
