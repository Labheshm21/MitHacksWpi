import { TextField, Button, Box, Typography, Paper } from '@mui/material';

export default function CreateCampaign() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bgcolor="#f0f6ff">
      <Paper sx={{ padding: 4, maxWidth: 600, width: '100%' }}>
        <Typography variant="h4" fontWeight="bold" mb={3}>Create New Campaign</Typography>
        <form className="space-y-4">
          <TextField label="Startup Name" fullWidth margin="normal" required />
          <TextField label="Funding Goal (ETH)" fullWidth margin="normal" required />
          <TextField label="Description" multiline rows={4} fullWidth margin="normal" required />
          <TextField label="Pitch Deck URL" fullWidth margin="normal" />
          <Button type="submit" variant="contained" sx={{ mt: 2 }}>Submit Campaign</Button>
        </form>
      </Paper>
    </Box>
  );
}