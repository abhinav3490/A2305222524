import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary:   { main: '#008080' },   // Teal
    secondary: { main: '#001f3f' },   // Navy
    background:{ default: '#F8F9FA' },
    warning:   { main: '#FFD700' },   // Gold accent
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h1: { fontFamily: 'Montserrat, sans-serif' },
  },
});

export default theme;