import React from 'react';
import { Box, Typography } from '@mui/material';

function Flowchart() {
  return (
    <Box sx={{ padding: '2em', color: '#ffffff' }}>
      <Typography variant="h4" gutterBottom>
        Flowchart Page
      </Typography>
      <Typography variant="body1">
        This is the Flowchart page. Here you can visualize and manage your financial flows, understand transactions, and analyze your spending patterns.
      </Typography>
    </Box>
  );
}

export default Flowchart;