// dashboard/index.js
import React from 'react';
import Link from 'next/link';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
} from '@mui/material';

export default function DashboardOverview() {
  return (
    <Container sx={{ py: 4, backgroundColor: '#f0f4f8', minHeight: '100vh' }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: '#1976d2', fontWeight: 'bold' }}
      >
        Dashboard Overview
      </Typography>
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
      <Box sx={{ textAlign: 'center' }}>
        <Link href="/dashboard/investor" passHref>
          <Button variant="contained" sx={{ mx: 1, backgroundColor: '#1976d2' }}>
            Investor Dashboard
          </Button>
        </Link>
        <Link href="/dashboard/startup" passHref>
          <Button variant="contained" color="secondary" sx={{ mx: 1 }}>
            Startup Dashboard
          </Button>
        </Link>
      </Box>
    </Container>
  );
}
