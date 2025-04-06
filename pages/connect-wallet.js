import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Box, Typography, Container, Button } from '@mui/material';

export default function ConnectWallet() {
  const [walletAddress, setWalletAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const router = useRouter();

  useEffect(() => {
    const simulatedAddress = '0xa156...dFd4';
    setWalletAddress(simulatedAddress);
    setIsConnected(true);
  }, []);

  useEffect(() => {
    let timer;
    if (isConnected) {
      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            router.push('/select-role');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isConnected]);

  return (
    <>
      <Header />

      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #2196f3, #66bb6a)',
          textAlign: 'center',
          px: 2,
          py: 8,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontFamily: '"Abadi", Tahoma, Geneva, sans-serif',
              fontWeight: 'bold',
              color: '#fff',
              mb: 2,
            }}
          >
            Connect to Wallet
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              fontFamily: '"Abadi", Tahoma, Geneva, sans-serif',
              color: '#f0f0f0',
              mb: 4,
            }}
          >
            Securely connect your Web3 wallet to continue.
          </Typography>

          <Button
            variant="contained"
            size="large"
            disabled
            sx={{
              fontWeight: 'bold',
              textTransform: 'none',
              px: 4,
              py: 1.5,
              backgroundColor: '#fdd835',
              color: '#1e88e5',
              '&:hover': {
                backgroundColor: '#ffeb3b',
                boxShadow: 6,
              },
              mb: 3,
            }}
          >
            Connected: {walletAddress}
          </Button>

          {isConnected && countdown > 0 && (
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: '"Abadi", Tahoma, Geneva, sans-serif',
                color: '#fff',
                mt: 2,
              }}
            >
              Redirecting in {countdown}...
            </Typography>
          )}
        </Container>
      </Box>

      <Footer />
    </>
  );
}
