// dashboard/investor.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function InvestorDashboard() {
  const investments = [
    { id: 1, startup: 'Startup A', amount: '$100K', status: 'Active' },
    { id: 2, startup: 'Startup B', amount: '$200K', status: 'Pending Vote' },
  ];

  return (
    <Container sx={{ py: 4, backgroundColor: '#f9fafc', minHeight: '100vh' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: '#1976d2', fontWeight: 'bold' }}
      >
        Investor Dashboard
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: 4, color: '#555' }}>
        View your portfolio and manage your investments.
      </Typography>
      <Grid container spacing={3}>
        {investments.map((inv) => (
          <Grid item xs={12} sm={6} key={inv.id}>
            <Card
              elevation={4}
              sx={{
                borderRadius: 2,
                backgroundColor: '#fff',
                p: 2,
                '&:hover': { boxShadow: 6 },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {inv.startup}
                </Typography>
                <Typography variant="body1">Investment: {inv.amount}</Typography>
                <Typography variant="body2" sx={{ color: '#777' }}>
                  Status: {inv.status}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Link href="/governance" passHref>
          <Button variant="contained" sx={{ backgroundColor: '#1976d2' }}>
            View Governance Proposals
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
