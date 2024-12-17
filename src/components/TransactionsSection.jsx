import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

function TransactionsSection() {
    // Example transaction data
    const transactions = [
        { id: 1, title: "Starbucks Coffee", details: "$5.45 - Morning coffee" },
        { id: 2, title: "Amazon Purchase", details: "$45.89 - Electronics accessories" },
        { id: 3, title: "Uber Ride", details: "$12.30 - Trip to downtown" },
        { id: 4, title: "Whole Foods", details: "$78.25 - Weekly groceries" },
        { id: 5, title: "Netflix Subscription", details: "$15.99 - Monthly subscription" },
    ];

    return (
        <Box className='scrollable-cards-container' sx={{ marginTop: '2em' }}>
            <Typography variant="h5" gutterBottom>Recent Transactions</Typography>
            <Box className='cards-scroll' sx={{ display: 'flex', overflowX: 'auto', gap: '1em', paddingBottom: '1em' }}>
                {/* Render Cards with transaction data */}
                {transactions.map((transaction) => (
                    <Card key={transaction.id} sx={{ minWidth: 200, flex: '0 0 auto' }}>
                        <CardContent>
                            <Typography variant="h6">{transaction.title}</Typography>
                            <Typography variant="body2">{transaction.details}</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default TransactionsSection;
