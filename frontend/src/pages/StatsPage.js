// src/pages/StatsPage.js
import React from 'react';
import { Typography, Container } from '@mui/material';

export default function StatsPage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Stats Page
      </Typography>
      <Typography variant="body1">
        This page will show analytics and usage stats.
      </Typography>
    </Container>
  );
}