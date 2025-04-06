import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from '@mui/material';

export default function StartupRegister() {
  const [formData, setFormData] = useState({
    name: '',
    founders: '',
    description: '',
    prototypeReady: '',
    revenueModel: '',
    fundingAmount: '',
    roadmap: '',
    unitEconomy: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple front-end validation
    for (const key in formData) {
      if (!formData[key]) {
        alert(`Please fill in ${key.replace(/([A-Z])/g, ' $1')}`);
        return;
      }
    }

    try {
      const res = await fetch('/api/startup-register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Startup registered successfully!');
        window.location.href = '/dashboard/startup'; // Redirect
      } else {
        alert('Error submitting form.');
      }
    } catch (err) {
      console.error(err);
      alert('Something went wrong!');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box sx={{ backgroundColor: '#f7f9fc', p: 4, borderRadius: 2, boxShadow: 3 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ mb: 3, fontWeight: 'bold', color: '#1976d2' }}
        >
          Startup Registration
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
        >
          <TextField label="Startup Name" name="name" value={formData.name} onChange={handleChange} required />
          <TextField label="Founders" name="founders" value={formData.founders} onChange={handleChange} required />
          <TextField label="Startup Description" name="description" value={formData.description} onChange={handleChange} required multiline rows={4} />
          <FormControl required>
            <InputLabel>Prototype Ready?</InputLabel>
            <Select name="prototypeReady" value={formData.prototypeReady} onChange={handleChange}>
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </FormControl>
          <FormControl required>
            <InputLabel>Revenue Model</InputLabel>
            <Select name="revenueModel" value={formData.revenueModel} onChange={handleChange}>
              <MenuItem value="subscription">Subscription</MenuItem>
              <MenuItem value="freemium">Freemium</MenuItem>
              <MenuItem value="saas">SaaS</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField label="Expected Funding ($)" type="number" name="fundingAmount" value={formData.fundingAmount} onChange={handleChange} required />
          <TextField label="Roadmap" name="roadmap" value={formData.roadmap} onChange={handleChange} required multiline rows={3} />
          <TextField label="Unit Economy" name="unitEconomy" value={formData.unitEconomy} onChange={handleChange} required multiline rows={3} />
          <Button type="submit" variant="contained" sx={{ backgroundColor: '#1976d2' }}>
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
