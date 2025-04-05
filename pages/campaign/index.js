import { Card, CardContent, Typography, Button, Box, Container } from '@mui/material';
import Header from '../../components/layout/Header'; // adjust path if needed
import Footer from '../../components/layout/Footer'; // adjust path if needed

const mockCampaigns = [
  { id: 1, title: 'Web3 Wallet Startup', goal: '50 ETH', raised: '23 ETH' },
  { id: 2, title: 'AI for Healthcare', goal: '100 ETH', raised: '77 ETH' },
];

export default function CampaignList() {
  return (
    <>
      <Header />

      <Box sx={{ minHeight: '80vh', bgcolor: '#f0f6ff', py: 4 }}>
        <Container maxWidth="md">
          {mockCampaigns.map((c) => (
            <Card
              key={c.id}
              sx={{
                mb: 3,
                p: 2,
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold">
                  {c.title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ my: 1 }}>
                  Goal: {c.goal} | Raised: {c.raised}
                </Typography>
                <Button
                  href={`/campaign/${c.id}`}
                  variant="contained"
                  color="primary"
                  sx={{ mt: 1 }}
                >
                  View
                </Button>
              </CardContent>
            </Card>
          ))}
        </Container>
      </Box>

      <Footer />
    </>
  );
}
