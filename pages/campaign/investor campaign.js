import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  useTheme,
} from '@mui/material';

export default function ExploreStartups() {
  const theme = useTheme();
  const [prototype, setPrototype] = useState('');
  const [revenueModel, setRevenueModel] = useState('');
  const [fundingRange, setFundingRange] = useState([0, 100000]);

  const campaigns = [
    { id: 1, title: 'Web3 Wallet Startup', goal: 50000, raised: 23000 },
    { id: 2, title: 'AI for Healthcare', goal: 100000, raised: 77000 },
  ];

  return (
    <Container sx={{ py: 4 }}>
      {/* Header */}
      <Box
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          py: 2,
          borderRadius: 1,
          mb: 4,
        }}
      >
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
          Explore Startups
        </Typography>
      </Box>

      {/* Filters */}
      <Box sx={{ mb: 4, px: 1, pt: 2 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Prototype</InputLabel>
              <Select
                value={prototype}
                onChange={(e) => setPrototype(e.target.value)}
              >
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>Revenue Model</InputLabel>
              <Select
                value={revenueModel}
                onChange={(e) => setRevenueModel(e.target.value)}
              >
                <MenuItem value="subscription">Subscription</MenuItem>
                <MenuItem value="freemium">Freemium</MenuItem>
                <MenuItem value="saas">SaaS</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography gutterBottom>Expected Funding ($)</Typography>
            <Slider
              value={fundingRange}
              onChange={(e, newVal) => setFundingRange(newVal)}
              valueLabelDisplay="auto"
              step={1000}
              min={0}
              max={100000}
            />
          </Grid>
        </Grid>
      </Box>

      {/* Campaign Cards */}
      <Grid container direction="column" spacing={3}>
        {campaigns.map((c) => (
          <Grid item xs={12} key={c.id}>
            <Card elevation={3} sx={{ width: '100%', p: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {c.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                  Goal: {c.goal} ETH | Raised: {c.raised} ETH
                </Typography>
                <Button variant="contained">View</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
