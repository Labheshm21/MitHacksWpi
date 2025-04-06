// pages/invest/[campaignId].js
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material';

export default function InvestPage() {
  const router = useRouter();
  const { campaignId } = router.query;
  const [amount, setAmount] = useState('');
  const [investorName, setInvestorName] = useState('');
  const [investorId, setInvestorId] = useState(''); // new numeric field

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { campaignId, amount, investorName, investorId };

    const res = await fetch('/pages/invest', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      alert('Investment successful!');
    } else {
      alert('Failed to invest.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Paper elevation={3} sx={{ p: 4, backgroundColor: '#f1f7ff' }}>
        <Typography variant="h4" fontWeight="bold" align="center" color="primary" gutterBottom>
          Invest in Campaign #{campaignId}
        </Typography>
        <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={3}>
          <TextField
            label="Your Name"
            value={investorName}
            onChange={(e) => setInvestorName(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Investor ID"
            type="number"
            value={investorId}
            onChange={(e) => setInvestorId(e.target.value)}
            required
            fullWidth
          />
          <TextField
            label="Investment Amount (ETH)"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            fullWidth
          />
          <Button type="submit" variant="contained" size="large" sx={{ mt: 2 }}>
            Confirm Investment
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}
