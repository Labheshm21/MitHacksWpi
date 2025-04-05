import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'grey.100',
        color: 'primary.main',
        py: 3,
        textAlign: 'center',
        borderTop: '2px solid #e0e0e0',
        mt: 5,
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        © {new Date().getFullYear()} Decentralized Startup Platform
      </Typography>
      <Typography
        variant="caption"
        sx={{ color: 'text.secondary', fontStyle: 'italic' }}
      >
        Empowering startups through transparency & trust.
      </Typography>
    </Box>
  );
}
