import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Container,
  Typography,
  Paper,
  Box,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
  Alert,
} from '@mui/material';

const fakeProposal = {
  id: 1,
  title: 'Milestone 1: Prototype Approval',
  description: 'Approve the initial prototype milestone for our startup.',
  stage: 'Concept Approval',
  weighted: true,
};

export default function VotePage() {
  const router = useRouter();
  const { id } = router.query;
  const proposal = fakeProposal;

  const [vote, setVote] = useState('');
  const [weight, setWeight] = useState(1);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleVoteChange = (event) => {
    setVote(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!vote) {
      setError('Please select a vote option.');
      return;
    }
    try {
      console.log({ proposalId: id, vote, weight });
      setSuccess('Your vote has been submitted successfully!');
      setError('');
    } catch (err) {
      setError('Error submitting vote.');
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        py: 4,
        background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography variant="h4" align="center" gutterBottom sx={{ color: '#1976d2' }}>
        Vote on Proposal
      </Typography>
      <Paper
        elevation={4}
        sx={{
          p: 4,
          backgroundColor: 'white',
          borderRadius: 3,
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ color: '#4caf50' }}>
            {proposal.title}
          </Typography>
          <Typography variant="body1" sx={{ color: '#555', mb: 2 }}>
            {proposal.description}
          </Typography>
        </Box>
        <form onSubmit={handleSubmit}>
          <Typography variant="subtitle1" sx={{ color: '#1976d2' }}>
            Your Vote:
          </Typography>
          <RadioGroup row value={vote} onChange={handleVoteChange}>
            <FormControlLabel
              value="approve"
              control={<Radio sx={{ color: '#4caf50', '&.Mui-checked': { color: '#4caf50' } }} />}
              label="Approve"
            />
            <FormControlLabel
              value="reject"
              control={<Radio sx={{ color: '#f44336', '&.Mui-checked': { color: '#f44336' } }} />}
              label="Reject"
            />
          </RadioGroup>
          {proposal.weighted && (
            <TextField
              type="number"
              label="Voting Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              sx={{ mt: 2 }}
              fullWidth
              inputProps={{ min: 1 }}
              variant="outlined"
            />
          )}
          {error && (
            <Alert severity="error" sx={{ mt: 2 }}>
              {error}
            </Alert>
          )}
          {success && (
            <Alert severity="success" sx={{ mt: 2 }}>
              {success}
            </Alert>
          )}
          <Button type="submit" variant="contained" sx={{ mt: 3, backgroundColor: '#1976d2' }}>
            Submit Vote
          </Button>
        </form>
      </Paper>
    </Container>
  );
}
