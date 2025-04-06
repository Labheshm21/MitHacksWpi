import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
  Button,
} from '@mui/material';
import Link from 'next/link';

export default function InvestorDashboard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    // Load profile from localStorage
    const stored = localStorage.getItem('investorProfile');
    if (stored) {
      setProfile(JSON.parse(stored));
    }
  }, []);

  const investments = [
    { id: 1, startup: 'Startup A', amount: '$100K', status: 'Active' },
    { id: 2, startup: 'Startup B', amount: '$200K', status: 'Pending Vote' },
  ];

  return (
    <Container sx={{ py: 4, backgroundColor: '#f9fafc', minHeight: '100vh' }}>
      {/* 👤 Profile (Right aligned) */}
      {profile && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            mb: 2,
            pr: 2,
          }}
        >
          <Avatar sx={{ bgcolor: '#1976d2', mr: 2 }}>
            {profile.investorName?.[0]?.toUpperCase()}
          </Avatar>
          <Box>
            <Typography sx={{ fontWeight: 'bold' }}>{profile.investorName}</Typography>
            <Typography variant="body2" sx={{ color: '#555' }}>
              Tokens: 150
            </Typography>
          </Box>
        </Box>
      )}

      {/* 🧭 Title */}
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ color: '#1976d2', fontWeight: 'bold' }}
      >
        Investor Dashboard
      </Typography>

      {/* 💰 Investments */}
      <Typography
        variant="h6"
        align="center"
        sx={{ mt: 5, mb: 2, color: '#1976d2', fontWeight: 'bold' }}
      >
        Your Investments
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {investments.map((inv) => (
          <Grid item xs={12} sm={6} md={4} key={inv.id}>
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

      {/* 📄 Complete Profile Prompt */}
      {!profile && (
        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Please complete your investor profile
          </Typography>
          <Link href="/register/investor" passHref>
            <Button variant="contained" sx={{ backgroundColor: '#1976d2' }}>
              Complete Profile
            </Button>
          </Link>
        </Box>
      )}
    </Container>
  );
}
