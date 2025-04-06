import Link from 'next/link';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CssBaseline from '@mui/material/CssBaseline';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Header />

      {/* 🔵 Hero + Tiles Gradient Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2196f3, #66bb6a)',
          color: 'common.white',
          textAlign: 'center',
          pb: 8,
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            minHeight: 'calc(60vh - 80px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
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
                textShadow: '2px 2px 6px rgba(0,0,0,0.2)',
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

            <Link href="/connect-wallet" passHref>
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

        {/* Our Records Section */}
        <Container>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 4,
              color: '#fff',
            }}
          >
            Our Records
          </Typography>

          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={4}
                sx={{
                  borderRadius: 2,
                  backgroundColor: '#ffffff',
                  color: '#000',
                  p: 2,
                  textAlign: 'center',
                }}
              >
                <CardContent>
                  <Typography variant="h6">Total Investments</Typography>
                  <Typography variant="h4" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                    $1.2M
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={4}
                sx={{
                  borderRadius: 2,
                  backgroundColor: '#ffffff',
                  color: '#000',
                  p: 2,
                  textAlign: 'center',
                }}
              >
                <CardContent>
                  <Typography variant="h6">Active Startups</Typography>
                  <Typography variant="h4" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                    12
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={4}
                sx={{
                  borderRadius: 2,
                  backgroundColor: '#ffffff',
                  color: '#000',
                  p: 2,
                  textAlign: 'center',
                }}
              >
                <CardContent>
                  <Typography variant="h6">Proposals Pending</Typography>
                  <Typography variant="h4" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
                    5
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 🔻 Footer */}
      <Footer />
    </>
  );
}
