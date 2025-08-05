import React from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  Paper,
  TableContainer,
} from '@mui/material';

export default function ResultsTable({ results }) {
  if (!results.length) return null;

  return (
    <>
      <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
        Shortened Links
      </Typography>
      <TableContainer component={Paper} sx={{ overflowX: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><strong>Original URL</strong></TableCell>
              <TableCell><strong>Short URL</strong></TableCell>
              <TableCell><strong>Expires At</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((r, i) => (
              <TableRow key={i}>
                <TableCell>{r.originalUrl}</TableCell>
                <TableCell>
                  <a
                    href={`/${r.code}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ wordBreak: 'break-all' }}
                  >
                    {`${window.location.origin}/${r.code}`}
                  </a>
                </TableCell>
                <TableCell>
                  {r.expiresAt
                    ? new Date(r.expiresAt).toLocaleString()
                    : 'N/A'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}