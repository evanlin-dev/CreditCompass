import React from 'react';
import { Box, Typography } from '@mui/material';

function StatsSection({ points }) {
    return (
        <Box className='stats'>
            {/* Dynamic Points Display */}
            <Typography variant="h3">{points}</Typography>
            <Typography variant="subtitle1">Current Points</Typography>
            <Box className='income'>
                <Typography>Income</Typography>
                <Typography className="income-text">$1500.50</Typography>
            </Box>
            <Box className='outcome'>
                <Typography>Outcome</Typography>
                <Typography className="outcome-text">$350.60</Typography>
            </Box>
        </Box>
    );
}

export default StatsSection;
