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
    complianceDoc: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = new FormData();
    Object.keys(formData).forEach((key) => {
      body.append(key, formData[key]);
    });

    const res = await fetch('/api/startup-register', {
      method: 'POST',
      body,
    });

    if (res.ok) {
      alert('Startup registered successfully!');
    } else {
      alert('Error submitting form.');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box
        sx={{
          backgroundColor: '#f7f9fc',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
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
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <TextField
            label="Startup Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Founders"
            name="founders"
            value={formData.founders}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Startup Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            multiline
            rows={4}
          />
          <FormControl fullWidth variant="outlined" required>
            <InputLabel id="prototype-ready-label">
              Prototype Ready?
            </InputLabel>
            <Select
              labelId="prototype-ready-label"
              label="Prototype Ready?"
              name="prototypeReady"
              value={formData.prototypeReady}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="yes">Yes</MenuItem>
              <MenuItem value="no">No</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth variant="outlined" required>
            <InputLabel id="revenue-model-label">
              Revenue Model
            </InputLabel>
            <Select
              labelId="revenue-model-label"
              label="Revenue Model"
              name="revenueModel"
              value={formData.revenueModel}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="subscription">Subscription</MenuItem>
              <MenuItem value="freemium">Freemium</MenuItem>
              <MenuItem value="saas">SaaS</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Expected Funding ($)"
            name="fundingAmount"
            type="number"
            value={formData.fundingAmount}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
          />
          <TextField
            label="Roadmap"
            name="roadmap"
            value={formData.roadmap}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            multiline
            rows={3}
          />
          <TextField
            label="Unit Economy"
            name="unitEconomy"
            value={formData.unitEconomy}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            multiline
            rows={3}
          />
          <Button
            variant="outlined"
            component="label"
            fullWidth
            sx={{
              borderColor: '#1976d2',
              color: '#1976d2',
            }}
          >
            Upload Compliance Document
            <input
              type="file"
              name="complianceDoc"
              onChange={handleChange}
              hidden
              required
            />
          </Button>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              py: 1.5,
              mt: 2,
              backgroundColor: '#1976d2',
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
