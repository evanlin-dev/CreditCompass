import React from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const CreditCard = React.forwardRef(({ card, onEdit, onRemove }, ref) => {
    return (
        <Card
            ref={ref}
            className='credit-card-container'
            sx={{
                background: card.bgGradient,
                color: '#fff',
                width: '20em',
                height: '12em',
                minWidth: '20em',
                cursor: 'pointer',
                position: 'relative',
                transition: 'transform 0.5s',
            }}
            onClick={() => onEdit(card)}
        >
            <CardContent>
                <Box className='card-details'>
                    <Typography variant="h6">{card.company}</Typography>
                    <Typography className='card-holder'>Cardholder: {card.holder}</Typography>
                    <Box className='points-container'>
                        <Typography variant="body1">Points: {card.points}</Typography>
                    </Box>
                </Box>
                {/* Remove Button */}
                <IconButton
                    size="small"
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove(card);
                    }}
                    sx={{ position: 'absolute', top: 0, right: 0, color: '#ff4d4f' }}
                    aria-label="Remove Card"
                >
                    <DeleteIcon />
                </IconButton>
                {/* Edit Button */}
                <IconButton
                    size="small"
                    onClick={(e) => {
                        e.stopPropagation();
                        onEdit(card);
                    }}
                    sx={{ position: 'absolute', bottom: 0, right: 0, color: '#fff' }}
                    aria-label="Edit Card"
                >
                    <EditIcon />
                </IconButton>
            </CardContent>
        </Card>
    );
});

export default CreditCard;
