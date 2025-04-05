// pages/register/index.js
import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, MenuItem } from '@mui/material';
import { useRouter } from 'next/router';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.role === 'startup') {
      router.push('/campaign/startup-register');
    } else if (formData.role === 'investor') {
      router.push('/register/investor');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e3f2fd',
      }}
    >
      <Paper
        elevation={10}
        sx={{
          p: 4,
          maxWidth: 400,
          width: '100%',
          backgroundColor: '#e1f5fe',
          borderRadius: '16px',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{ fontWeight: 'bold', color: '#1565c0', mb: 1 }}
        >
          Register
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: '#1e88e5', mb: 3 }}>
          Continue as Startup Founder or Investor
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            select
            label="Register As"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
          >
            <MenuItem value="startup">Startup Founder</MenuItem>
            <MenuItem value="investor">Investor</MenuItem>
          </TextField>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, py: 1.5, borderRadius: '8px' }}
          >
            Continue
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}
