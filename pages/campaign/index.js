import { Card, CardContent, Typography, Button, Grid } from '@mui/material';

const mockCampaigns = [
  { id: 1, title: 'Web3 Wallet Startup', goal: '50 ETH', raised: '23 ETH' },
  { id: 2, title: 'AI for Healthcare', goal: '100 ETH', raised: '77 ETH' },
];

export default function CampaignList() {
  return (
    <Grid container spacing={4} padding={4} bgcolor="#f0f6ff">
      {mockCampaigns.map((c) => (
        <Grid item xs={12} md={6} key={c.id}>
          <Card>
            <CardContent>
              <Typography variant="h5" fontWeight="bold">{c.title}</Typography>
              <Typography variant="body1" color="text.secondary">Goal: {c.goal} | Raised: {c.raised}</Typography>
              <Button href={`/campaign/${c.id}`} variant="contained" sx={{ mt: 2 }}>View</Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}