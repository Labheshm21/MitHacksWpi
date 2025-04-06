import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import {
  Box,
  Typography,
  Container,
  Radio,
  RadioGroup,
  FormControlLabel,
  Paper,
  Grid,
} from '@mui/material';

export default function SelectRole() {
  const [selectedRole, setSelectedRole] = useState('');

  return (
    <>
      <Header />

      <Box
        sx={{
          minHeight: '80vh',
          background: 'linear-gradient(135deg, #2196f3, #66bb6a)',
          display: 'flex',
          justifyContent: 'center',
          px: 2,
          pt: 6,
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontFamily: '"Abadi", Tahoma, Geneva, sans-serif',
              color: '#fff',
              fontWeight: 400, // not bold
              mb: 4,
            }}
          >
            Are you an investor or a startup founder?
          </Typography>

          <RadioGroup
            value={selectedRole}
            onChange={(e) => setSelectedRole(e.target.value)}
          >
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <Paper
                  elevation={selectedRole === 'investor' ? 6 : 2}
                  sx={{
                    p: 4,
                    backgroundColor: selectedRole === 'investor' ? '#fdd835' : '#fff',
                    transition: '0.3s',
                    cursor: 'pointer',
                    borderRadius: 2,
                  }}
                  onClick={() => setSelectedRole('investor')}
                >
                  <FormControlLabel
                    value="investor"
                    control={<Radio />}
                    label={
                      <Typography
                        sx={{
                          fontSize: '1.2rem',
                          fontFamily: '"Abadi", Tahoma, Geneva, sans-serif',
                        }}
                      >
                        Investor
                      </Typography>
                    }
                    sx={{ width: '100%', justifyContent: 'center' }}
                  />
                </Paper>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Paper
                  elevation={selectedRole === 'founder' ? 6 : 2}
                  sx={{
                    p: 4,
                    backgroundColor: selectedRole === 'founder' ? '#fdd835' : '#fff',
                    transition: '0.3s',
                    cursor: 'pointer',
                    borderRadius: 2,
                  }}
                  onClick={() => setSelectedRole('founder')}
                >
                  <FormControlLabel
                    value="founder"
                    control={<Radio />}
                    label={
                      <Typography
                        sx={{
                          fontSize: '1.2rem',
                          fontFamily: '"Abadi", Tahoma, Geneva, sans-serif',
                        }}
                      >
                        Startup Founder
                      </Typography>
                    }
                    sx={{ width: '100%', justifyContent: 'center' }}
                  />
                </Paper>
              </Grid>
            </Grid>
          </RadioGroup>
        </Container>
      </Box>

      <Footer />
    </>
  );
}
