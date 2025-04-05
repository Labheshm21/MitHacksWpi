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
          background: 'linear-gradient(135deg, #1e88e5, #43a047)',
          color: 'common.white',
          textAlign: 'center',
          p: 4,
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Welcome to the Future of Startup Investing
          </Typography>
          <Typography variant="h6" component="p" paragraph sx={{ mb: 4 }}>
            A trustless, milestone-based funding system secured by blockchain.
            Join as an investor or list your startup to raise funds transparently.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            href="/campaign"
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: '20px',
              fontWeight: 'bold',
              textTransform: 'none',
              boxShadow: 3,
            }}
          >
            Get Started
          </Button>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
