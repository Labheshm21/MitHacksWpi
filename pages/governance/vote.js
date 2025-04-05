// pages/governance/vote.js
import React, { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
  TextField,
  Divider,
  Grid,
} from '@mui/material';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';

export default function VotePage() {
  const [kycCompleted, setKycCompleted] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    dob: '',
    country: '',
    address: '',
    email: '',
    idFile: null,
  });

  const handleFileChange = (e) => {
    setForm({ ...form, idFile: e.target.files[0] });
  };

  const handleKycSubmit = () => {
    // For now, we just simulate a KYC success
    setKycCompleted(true);
  };

  return (
    <>
      <Header />

      <Box
        sx={{
          background: 'linear-gradient(to bottom, #e3f2fd, #ffffff)',
          minHeight: '100vh',
          py: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom color="primary">
            Vote on Proposal
          </Typography>

          {!kycCompleted && (
            <Card sx={{ mb: 4, p: 2 }}>
              <CardContent>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  KYC Verification Required
                </Typography>
                <Typography variant="body2" color="text.secondary" mb={2}>
                  Please complete the KYC process to verify your identity before voting.
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Date of Birth"
                      type="date"
                      InputLabelProps={{ shrink: true }}
                      value={form.dob}
                      onChange={(e) => setForm({ ...form, dob: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Country"
                      value={form.country}
                      onChange={(e) => setForm({ ...form, country: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Address"
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="outlined" component="label" fullWidth>
                      Upload Government-issued ID
                      <input type="file" hidden onChange={handleFileChange} />
                    </Button>
                    {form.idFile && (
                      <Typography variant="caption" display="block" mt={1}>
                        Selected File: {form.idFile.name}
                      </Typography>
                    )}
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      onClick={handleKycSubmit}
                      disabled={!form.fullName || !form.email || !form.idFile}
                    >
                      Submit KYC
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          )}

          {kycCompleted && (
            <Card sx={{ p: 3 }}>
              <CardContent>
                <Typography variant="h6" color="green">
                  Milestone 1: Prototype Approval
                </Typography>
                <Typography variant="body2" mb={2}>
                  Approve the initial prototype milestone for our startup.
                </Typography>

                <Typography variant="subtitle1" color="primary">
                  Your Vote:
                </Typography>

                <RadioGroup row sx={{ mb: 2 }}>
                  <FormControlLabel value="approve" control={<Radio color="success" />} label="Approve" />
                  <FormControlLabel value="reject" control={<Radio color="error" />} label="Reject" />
                </RadioGroup>

                <TextField fullWidth label="Voting Weight" defaultValue="1" sx={{ mb: 2 }} />
                <Button variant="contained" color="primary" fullWidth>
                  Submit Vote
                </Button>
              </CardContent>
            </Card>
          )}
        </Container>
      </Box>

      <Footer />
    </>
  );
}
