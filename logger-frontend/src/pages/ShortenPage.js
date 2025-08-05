import React, { useState } from 'react';
import {
  Container,
  Typography,
  Stack,
  Button,
  Snackbar,
  Alert,
} from '@mui/material';
import URLRow from '../components/URLRow';
import ResultsTable from '../components/ResultTable';
import { shortenUrls } from '../services/api';
import { saveMappings, loadMappings } from '../utils/Storage';

export default function ShortenPage() {
  const [entries, setEntries] = useState(
    Array(5).fill({ originalUrl: '', validity: 30, code: '' })
  );
  const [results, setResults] = useState(loadMappings());
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });

  const handleChange = (index, field, value) => {
    const updated = [...entries];
    updated[index][field] = value;
    setEntries(updated);
  };

  const handleSubmit = async () => {
    const validEntries = entries.filter(e => e.originalUrl.trim());
    if (validEntries.some(e => !/^https?:\/\//.test(e.originalUrl))) {
      setSnackbar({
        open: true,
        message: 'URLs must start with http:// or https://',
        severity: 'error',
      });
      return;
    }

    setLoading(true);
    try {
      const response = await shortenUrls(validEntries);
      const updatedResults = [...results, ...response];
      setResults(updatedResults);
      saveMappings(updatedResults);
      setSnackbar({
        open: true,
        message: 'URLs shortened successfully!',
        severity: 'success',
      });
    } catch (err) {
      console.error(err);
      setSnackbar({
        open: true,
        message: 'Failed to shorten URLs. Check console.',
        severity: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setEntries(Array(5).fill({ originalUrl: '', validity: 30, code: '' }));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Shorten Your URLs
      </Typography>
      <Stack spacing={2}>
        {entries.map((entry, i) => (
          <URLRow
            key={i}
            index={i}
            entry={entry}
            onChange={handleChange}
          />
        ))}
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={handleSubmit} disabled={loading}>
            {loading ? 'Shortening...' : 'Shorten URLs'}
          </Button>
          <Button variant="outlined" onClick={handleClear}>
            Clear All
          </Button>
        </Stack>
      </Stack>
      <ResultsTable results={results} />
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}