import React from 'react';
import Link from 'next/link';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from '@mui/material';

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

      {/* 🔹 Overview Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            elevation={4}
            sx={{
              borderRadius: 2,
              backgroundColor: '#ffffff',
              p: 2,
              '&:hover': { boxShadow: 6 },
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
              p: 2,
              '&:hover': { boxShadow: 6 },
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
              p: 2,
              '&:hover': { boxShadow: 6 },
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

      {/* 🔹 Milestone Section */}
      <Typography
        variant="h5"
        align="center"
        sx={{ color: '#1976d2', fontWeight: 'bold', mb: 2 }}
      >
        Your Milestones
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

      {/* 🔹 CTA Button */}
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
