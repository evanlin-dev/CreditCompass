import React from 'react';
import { Box, IconButton, Button, Menu, MenuItem } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import Fade from '@mui/material/Fade';
import CreditCard from './CreditCard';

function CreditCardCarousel({
    creditCards,
    currentCardIndex,
    onPrev,
    onNext,
    onMenuOpen,
    onMenuClose,
    anchorEl,
    onAddModalOpen,
    onEditCard,
    onRemoveCard,
    handleCardSelect,
}) {
    return (
        <Box className='credit-card-section'>
            {/* Carousel Controls - Left Arrow */}
            <IconButton
                onClick={onPrev}
                disabled={creditCards.length <= 1}
                className="left-arrow"
                aria-label="Previous Card"
            >
                <ArrowBackIosIcon style={{ color: '#bb86fc' }} />
            </IconButton>

            {/* Single Credit Card Display */}
            <Box className='single-credit-card-container'>
                {creditCards.length > 0 && (
                    <Fade in={true} timeout={500}>
                        <CreditCard
                            card={creditCards[currentCardIndex]}
                            onEdit={onEditCard}
                            onRemove={onRemoveCard}
                        />
                    </Fade>
                )}
            </Box>

            {/* Carousel Controls - Right Arrow */}
            <IconButton
                onClick={onNext}
                disabled={creditCards.length <= 1}
                className="right-arrow"
                aria-label="Next Card"
            >
                <ArrowForwardIosIcon style={{ color: '#bb86fc' }} />
            </IconButton>

            {/* Menu Button */}
            <Box className='menu-button-container'>
                <IconButton onClick={onMenuOpen} className="menu-button" aria-label="Open Menu">
                    <MenuIcon style={{ color: '#bb86fc' }} />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => onMenuClose(null)}
                >
                    {creditCards.map((card, index) => (
                        <MenuItem key={card.id} onClick={() => onMenuClose(index)}>
                            {card.company}
                        </MenuItem>
                    ))}
                    <MenuItem onClick={onAddModalOpen}>
                        <AddIcon fontSize="small" style={{ marginRight: '8px' }} />
                        Add New Card
                    </MenuItem>
                </Menu>
            </Box>

            {/* Add New Card Button */}
            <Box className='add-card-button-container'>
                <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={onAddModalOpen}
                    sx={{ marginTop: '1em', backgroundColor: '#03dac6', color: '#000' }}
                >
                    Add Card
                </Button>
            </Box>
        </Box>
    );
}

export default CreditCardCarousel;
