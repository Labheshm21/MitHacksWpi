import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Box, Typography, Button, Container } from '@mui/material';
import { ethers } from 'ethers';

export default function ConnectWallet() {
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const address = await signer.getAddress();
        setWalletAddress(address);
      } catch (error) {
        alert('Wallet connection failed. Please try again.');
        console.error(error);
      }
    } else {
      alert('No wallet found. Please install MetaMask.');
    }
  };

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
            }}
            onClick={connectWallet}
          >
            {walletAddress
              ? `Connected: ${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`
              : 'Connect Wallet'}
          </Button>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
