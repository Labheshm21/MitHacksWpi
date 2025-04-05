// pages/_app.js
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache'; // adjust path
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from '../components/sidebar';

const clientSideEmotionCache = createEmotionCache();

const theme = createTheme({
  typography: {
    fontFamily: '"Abadi", Tahoma, Geneva, sans-serif',
  },
});

export default function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Sidebar />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
