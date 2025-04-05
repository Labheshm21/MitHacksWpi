// pages/index.js
import Link from 'next/link';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Header />

      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #2196f3, #66bb6a)',
          color: 'common.white',
          textAlign: 'center',
          px: 2,
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textShadow: '2px 2px 6px rgba(0,0,0,0.3)',
            }}
          >
            Welcome to the Future of Startup Investing
          </Typography>

          <Typography
            variant="h6"
            component="p"
            paragraph
            sx={{
              mb: 4,
              opacity: 0.95,
              fontWeight: 300,
              lineHeight: 1.6,
            }}
          >
            A trustless, milestone-based funding system secured by blockchain.
            Join as an investor or list your startup to raise funds transparently.
          </Typography>

          <Link href="/register" passHref>
            <Button
              variant="contained"
              size="large"
              sx={{
                px: 4,
                py: 1.5,
                borderRadius: '30px',
                fontWeight: 'bold',
                textTransform: 'none',
                boxShadow: 4,
                backgroundColor: '#fdd835',
                color: '#1e88e5',
                '&:hover': {
                  backgroundColor: '#ffeb3b',
                  boxShadow: 6,
                },
              }}
            >
              Get Started
            </Button>
          </Link>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
