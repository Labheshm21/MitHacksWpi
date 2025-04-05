// dashboard/startup.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function StartupDashboard() {
  const milestones = [
    { id: 1, title: 'Prototype Development', status: 'Completed' },
    { id: 2, title: 'Market Testing', status: 'In Progress' },
    { id: 3, title: 'Series A Funding', status: 'Pending Approval' },
  ];

  return (
    <Container sx={{ py: 4, backgroundColor: '#f3f4f6', minHeight: '100vh' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: '#1976d2', fontWeight: 'bold' }}
      >
        Startup Dashboard
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: 4, color: '#555' }}>
        Manage your milestones and track your progress.
      </Typography>
      <Grid container spacing={3}>
        {milestones.map((milestone) => (
          <Grid item xs={12} sm={6} md={4} key={milestone.id}>
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
                  {milestone.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#777' }}>
                  Status: {milestone.status}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Link href="/governance" passHref>
          <Button variant="contained" color="secondary">
            Manage Proposals
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
