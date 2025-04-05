import React from 'react';
import { Box, Paper, Typography, TextField, Button, Link } from '@mui/material';

export default function Login() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e3f2fd', // Light blue background
      }}
    >
      <Paper
        elevation={10}
        sx={{
          p: 4,
          maxWidth: 400,
          width: '100%',
          backgroundColor: '#e1f5fe', // Slightly different blue shade
          borderRadius: '16px',
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          align="center"
          sx={{ fontWeight: 'bold', color: '#1565c0', mb: 1 }}
        >
          Welcome Back
        </Typography>
        <Typography variant="body1" align="center" sx={{ color: '#1e88e5', mb: 3 }}>
          Login to your account to continue
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            margin="normal"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              borderRadius: '8px',
            }}
          >
            Sign In
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don’t have an account?{' '}
            <Link href="/register" underline="hover" sx={{ fontWeight: 'bold', color: '#1565c0' }}>
              Register
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}
