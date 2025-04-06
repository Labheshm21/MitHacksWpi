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
          mb: 3,
        }}
      >
        <Typography variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
          Explore Startups
        </Typography>
      </Box>

      {/* Filters spread across a row */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 3,
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 4,
          px: 1,
        }}
      >
        <FormControl sx={{ minWidth: 220 }} size="medium">
          <InputLabel>Prototype</InputLabel>
          <Select
            value={prototype}
            label="Prototype"
            onChange={(e) => setPrototype(e.target.value)}
          >
            <MenuItem value="yes">Yes</MenuItem>
            <MenuItem value="no">No</MenuItem>
          </Select>
        </FormControl>

        <FormControl sx={{ minWidth: 220 }} size="medium">
          <InputLabel>Revenue Model</InputLabel>
          <Select
            value={revenueModel}
            label="Revenue Model"
            onChange={(e) => setRevenueModel(e.target.value)}
          >
            <MenuItem value="subscription">Subscription</MenuItem>
            <MenuItem value="freemium">Freemium</MenuItem>
            <MenuItem value="saas">SaaS</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>

        <Box sx={{ flexGrow: 1, maxWidth: 400 }}>
          <Typography gutterBottom>Expected Funding ($)</Typography>
          <Slider
            value={fundingRange}
            onChange={(e, newVal) => setFundingRange(newVal)}
            valueLabelDisplay="auto"
            step={1000}
            min={0}
            max={100000}
          />
        </Box>
      </Box>

      {/* Full-width stacked campaign cards */}
      <Grid container spacing={3} direction="column">
        {campaigns.map((c) => (
          <Grid item xs={12} key={c.id}>
            <Card elevation={3} sx={{ width: '100%' }}>
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
