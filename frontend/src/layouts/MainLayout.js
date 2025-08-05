import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

export default function MainLayout({ children }) {
  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh' }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            URL Shortener
          </Typography>
          <Button
            color="inherit"
            component={NavLink}
            to="/"
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Shorten
          </Button>
          <Button
            color="inherit"
            component={NavLink}
            to="/stats"
            style={({ isActive }) => ({
              fontWeight: isActive ? 'bold' : 'normal',
              textDecoration: isActive ? 'underline' : 'none',
            })}
          >
            Stats
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 4 }}>
        {children}
      </Container>
    </Box>
  );
}