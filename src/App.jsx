import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Cards from './pages/Cards';
import Flowchart from './pages/Flowchart';
import LandingPage from './pages/LandingPage';
import { Box, Typography, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#bb86fc',
    },
    secondary: {
      main: '#03dac6',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/flowchart" element={<Flowchart />} />
          <Route path="*" element={
            <Box sx={{ padding: '2em', color: '#ffffff' }}>
              <Typography variant="h4" gutterBottom>
                404 - Page Not Found
              </Typography>
              <Typography variant="body1">
                The page you are looking for does not exist.
              </Typography>
            </Box>
          } />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
