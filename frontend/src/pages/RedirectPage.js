import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, CircularProgress, Box } from '@mui/material';

export default function RedirectPage() {
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate redirect logic (replace with actual API call if needed)
    const timer = setTimeout(() => {
      // Example: navigate to a fallback page or show error
      navigate('/', { replace: true });
    }, 3000);

    return () => clearTimeout(timer);
  }, [code, navigate]);

  return (
    <Box sx={{ textAlign: 'center', mt: 8 }}>
      <CircularProgress />
      <Typography variant="h6" sx={{ mt: 2 }}>
        Redirecting for code: <strong>{code}</strong>
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        If you're not redirected automatically, you'll be taken to the homepage shortly.
      </Typography>
    </Box>
  );
}