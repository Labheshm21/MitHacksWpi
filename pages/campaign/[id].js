import { useRouter } from 'next/router';
import { Typography, Box, Button, Paper } from '@mui/material';

export default function CampaignDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Box p={6} bgcolor="#f9fbff" minHeight="100vh">
      <Paper sx={{ padding: 4 }}>
        <Typography variant="h4" fontWeight="bold">Campaign #{id}</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Campaign details, milestone progress, funding info, etc.
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }}>Invest Now</Button>
      </Paper>
    </Box>
  );
}