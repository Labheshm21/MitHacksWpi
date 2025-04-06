import React, { useEffect, useState } from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar,
  Button,
  IconButton,
  Tooltip,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import Footer from '../../components/layout/Footer';

export default function InvestorDashboard() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
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
    <>
      <Container sx={{ py: 4, backgroundColor: '#f9fafc', minHeight: '100vh' }}>
        {/* 👤 Profile Header (Top Right) */}
        {profile && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              gap: 2,
              mb: 3,
            }}
          >
            <Tooltip title="Edit Profile">
              <IconButton
                component={Link}
                href="/register/investor"
                sx={{ color: '#1976d2' }}
              >
                <EditIcon />
              </IconButton>
            </Tooltip>

            <Avatar sx={{ bgcolor: '#1976d2' }}>
              {profile.investorName?.charAt(0).toUpperCase()}
            </Avatar>

            <Box>
              <Typography fontWeight="bold">{profile.investorName}</Typography>
              <Typography variant="body2" color="textSecondary">
                Tokens: 💰150
              </Typography>
            </Box>
          </Box>
        )}

        {/* 🏷️ Title */}
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{ color: '#1976d2', fontWeight: 'bold', mb: 4 }}
        >
          Investor Dashboard
        </Typography>

        {/* 💳 Investment Cards */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 3,
          }}
        >
          {investments.map((inv) => (
            <Card
              key={inv.id}
              elevation={4}
              sx={{
                width: '100%',
                maxWidth: 500,
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
          ))}

          {/* 🔗 Join Campaign */}
          <Link href="/campaign" passHref>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#1976d2',
                fontWeight: 'bold',
                px: 4,
                py: 1.2,
                borderRadius: 3,
                mt: 2,
              }}
            >
              Join Campaign
            </Button>
          </Link>
        </Box>
      </Container>

      <Footer />
    </>
  );
}
