import React from 'react';
import { Box, Typography } from '@mui/material';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

// Custom Tooltip Component
const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <Box className="custom-tooltip">
                <Typography variant="body2">{`${label}`}</Typography>
                {payload.map((entry, index) => (
                    <Typography key={index} variant="body2" style={{ color: entry.color }}>
                        {`${entry.name}: ${entry.value}`}
                    </Typography>
                ))}
            </Box>
        );
    }

    return null;
};

function ChartsSection({ data }) {
    return (
        <Box className='charts-container' sx={{ marginTop: '2em' }}>
            <Typography variant="h5" gutterBottom>Financial Overview</Typography>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#bbb" />
                    <YAxis stroke="#bbb" />
                    <Tooltip content={<CustomTooltip />} />
                    <Line type="monotone" dataKey="income" stroke="#03dac6" />
                    <Line type="monotone" dataKey="outcome" stroke="#d9534f" />
                </LineChart>
            </ResponsiveContainer>
        </Box>
    );
}

export default ChartsSection;
