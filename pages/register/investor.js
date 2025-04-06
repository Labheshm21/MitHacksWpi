import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
} from '@mui/material';

export default function InvestorRegister() {
  const [formData, setFormData] = useState({
    investorName: '',
    email: '',
    walletAddress: '',
    investmentInterest: '',
    allocationSize: '',
    investmentType: '',
    experience: '',
    country: '',
    linkedin: '',
  });

  // ✅ Handles form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handles form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
<<<<<<< HEAD

    // Save to localStorage
    localStorage.setItem('investorProfile', JSON.stringify(formData));

    // Optional: simulate sending to backend
    try {
      const res = await fetch('/api/investor-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Investor registered successfully!');
      }
    } catch (error) {
      console.warn('API failed, continuing with localStorage only.');
=======
    const res = await fetch('/pages/investor-register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert('Investor registered successfully!');
    } else {
      alert('Error submitting investor registration.');
>>>>>>> 6ba10c39dbb97731f5df4560b957bde1f85a6d22
    }

    // Redirect to Investor Dashboard
    window.location.href = '/dashboard/investor';
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box
        sx={{
          backgroundColor: '#f5faff',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 3, fontWeight: 'bold', color: '#1976d2' }}
        >
          My Profile
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField
            label="Full Name"
            name="investorName"
            value={formData.investorName}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Wallet Address"
            name="walletAddress"
            value={formData.walletAddress}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="Investment Interest (e.g. Web3, AI)"
            name="investmentInterest"
            value={formData.investmentInterest}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            select
            label="Investment Type"
            name="investmentType"
            value={formData.investmentType}
            onChange={handleChange}
            required
            fullWidth
          >
            <MenuItem value="pre-seed">Pre-Seed</MenuItem>
            <MenuItem value="seed">Seed</MenuItem>
            <MenuItem value="series-a">Series A</MenuItem>
            <MenuItem value="series-b">Series B</MenuItem>
            <MenuItem value="series-c">Series C</MenuItem>
          </TextField>

          <TextField
            select
            label="Years of Experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
            fullWidth
          >
            <MenuItem value="beginner">Beginner</MenuItem>
            <MenuItem value="1-3">1–3 years</MenuItem>
            <MenuItem value="4-7">4–7 years</MenuItem>
            <MenuItem value="8+">8+ years</MenuItem>
          </TextField>

          <TextField
            label="Country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            label="LinkedIn Profile URL"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            select
            label="Preferred Allocation Size"
            name="allocationSize"
            value={formData.allocationSize}
            onChange={handleChange}
            required
            fullWidth
          >
            <MenuItem value="<10000">$ &lt;10,000</MenuItem>
            <MenuItem value="10000-50000">$10,000 – $50,000</MenuItem>
            <MenuItem value="51000-100000">$51,000 – $100,000</MenuItem>
            <MenuItem value=">100000">$100,000+</MenuItem>
          </TextField>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ py: 1.5, mt: 2, backgroundColor: '#1976d2' }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
