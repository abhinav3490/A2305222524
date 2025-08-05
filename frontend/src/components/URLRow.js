import React from 'react';
import { TextField, Stack } from '@mui/material';

export default function URLRow({ index, entry, onChange }) {
  return (
    <Stack direction="row" spacing={2}>
      <TextField
        fullWidth
        label="Original URL"
        value={entry.originalUrl}
        onChange={e => onChange(index, 'originalUrl', e.target.value)}
      />
      <TextField
        label="Validity (min)"
        type="number"
        value={entry.validity}
        onChange={e => onChange(index, 'validity', e.target.value)}
        sx={{ width: 120 }}
      />
      <TextField
        label="Custom Code"
        value={entry.code}
        onChange={e => onChange(index, 'code', e.target.value)}
        sx={{ width: 150 }}
      />
    </Stack>
  );
}