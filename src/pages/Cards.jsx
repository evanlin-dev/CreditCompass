import React from 'react';
import { Box, Typography } from '@mui/material';

function Cards() {
  return (
    <Box sx={{ padding: '2em', color: '#ffffff' }}>
      <Typography variant="h4" gutterBottom>
        Cards Page
      </Typography>
      <Typography variant="body1">
        This is the Cards page. Here you can manage your credit cards, view details, and perform various actions related to your cards.
      </Typography>
    </Box>
  );
}

export default Cards;