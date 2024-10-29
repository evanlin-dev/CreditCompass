import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

function TransactionsSection() {
    return (
        <Box className='scrollable-cards-container' sx={{ marginTop: '2em' }}>
            <Typography variant="h5" gutterBottom>Recent Transactions</Typography>
            <Box className='cards-scroll' sx={{ display: 'flex', overflowX: 'auto', gap: '1em', paddingBottom: '1em' }}>
                {/* Example Cards */}
                {[1, 2, 3, 4, 5].map((item) => (
                    <Card key={item} sx={{ minWidth: 200, flex: '0 0 auto' }}>
                        <CardContent>
                            <Typography variant="h6">Transaction {item}</Typography>
                            <Typography variant="body2">Details about transaction {item}.</Typography>
                        </CardContent>
                    </Card>
                ))}
            </Box>
        </Box>
    );
}

export default TransactionsSection;
