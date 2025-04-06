import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import Link from 'next/link';

export default function AchieveMilestones() {
  const milestones = [
    { id: 1, title: 'Prototype Development', status: 'Completed' },
    { id: 2, title: 'Market Testing', status: 'In Progress' },
    { id: 3, title: 'Series A Funding', status: 'Pending Approval' },
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      {/* 🔷 Gradient Header */}
      <Box
        sx={{
          background: 'linear-gradient(to right, #1976d2, #42a5f5)',
          color: '#fff',
          py: 4,
          px: 2,
          position: 'relative',
        }}
      >
        <Container sx={{ position: 'relative' }}>
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold' }}>
            Startup Dashboard
          </Typography>

          {/* 🚀 Achieve Milestones button */}
          <Box sx={{ position: 'absolute', top: 16, right: 24 }}>
            <Link href="/register/startup" passHref>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#fff',
                  color: '#1976d2',
                  fontWeight: 'bold',
                }}
              >
                Achieve Milestones
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>

      {/* 📌 Section heading */}
      <Container sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h5" align="center" sx={{ color: '#1976d2', fontWeight: 'bold' }}>
          Milestones Achieved
        </Typography>
      </Container>

      {/* 🧱 Milestone Cards */}
      <Container sx={{ py: 4 }}>
        <Grid container spacing={4} justifyContent="center">
          {milestones.map((milestone) => (
            <Grid item xs={12} sm={8} md={6} key={milestone.id}>
              <Card
                elevation={4}
                sx={{
                  borderRadius: 2,
                  backgroundColor: '#fff',
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
      </Container>
    </Box>
  );
}
