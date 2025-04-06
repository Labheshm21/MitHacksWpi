import { Box, Typography, Container } from '@mui/material';

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        bgcolor: 'primary.main',
        color: 'white',
        py: 4,
        textAlign: 'center',
        boxShadow: 3,
        borderBottom: '3px solid #1976d2',
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            fontWeight: 800,
            letterSpacing: 1,
            textTransform: 'uppercase',
            mb: 1,
          }}
        >
          Venturly
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            fontStyle: 'italic',
            fontWeight: 300,
            fontFamily: `'Roboto Slab', 'Georgia', serif`,
            color: 'rgba(255,255,255,0.9)',
          }}
        >
          Fueling The Ventures of Tomorrow, Today.
        </Typography>
      </Container>
    </Box>
  );
}
