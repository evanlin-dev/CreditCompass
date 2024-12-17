import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Box, Typography } from '@mui/material';
import Sidebar from '../components/sidebar';
import CreditCardCarousel from '../components/CreditCardCarousel';
import StatsSection from '../components/StatsSection';
import ChartsSection from '../components/ChartsSection';
import TransactionsSection from '../components/TransactionsSection';
import AddEditCardModal from '../components/AddEditCardModal';
import ConfirmationModal from '../components/ConfirmationModal';

// Sample data for charts
const initialData = [
    { name: 'Jan', income: 4000, outcome: 2400 },
    { name: 'Feb', income: 3000, outcome: 1398 },
    { name: 'Mar', income: 2000, outcome: 9800 },
    { name: 'Apr', income: 2780, outcome: 3908 },
    { name: 'May', income: 1890, outcome: 4800 },
    { name: 'Jun', income: 2390, outcome: 3800 },
    { name: 'Jul', income: 3490, outcome: 4300 },
];

// Initial credit cards data
const initialCreditCards = [
    {
        id: 1,
        company: 'CloudCash',
        holder: 'Mike Smith',
        bgGradient: 'linear-gradient(135deg, #2e64e2 0%, #4b84ff 100%)',
        points: 2850,
        pointLimit: 80000
    },
    {
        id: 2,
        company: 'FuturePay',
        holder: 'Jane Doe',
        bgGradient: 'linear-gradient(135deg, #ff7e5f 0%, #feb47b 100%)',
        points: 1500,
        pointLimit: 50000
    },
    {
        id: 3,
        company: 'MoneyWise',
        holder: 'John Doe',
        bgGradient: 'linear-gradient(135deg, #43cea2 0%, #185a9d 100%)',
        points: 3500,
        pointLimit: 100000
    },
    // Add more cards as needed
];

// Helper function to generate gradient
const generateGradient = (startColor, endColor) => {
    return `linear-gradient(135deg, ${startColor} 0%, ${endColor} 100%)`;
};

function Dashboard() {
    // State declarations
    const [anchorEl, setAnchorEl] = useState(null);
    const [creditCards, setCreditCards] = useState(initialCreditCards);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [addEditModalOpen, setAddEditModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [modalCard, setModalCard] = useState(null);
    const [removeConfirmOpen, setRemoveConfirmOpen] = useState(false);
    const [cardToRemove, setCardToRemove] = useState(null);
    const [cardData, setCardData] = useState({
        company: '',
        holder: '',
        startColor: '#2e64e2',
        endColor: '#4b84ff',
        points: '',
        pointLimit: ''
    });

    // Load from localStorage on mount
    useEffect(() => {
        const storedCards = localStorage.getItem('creditCards');
        if (storedCards) {
            setCreditCards(JSON.parse(storedCards));
        }
    }, []);

    // Save to localStorage whenever creditCards change
    useEffect(() => {
        localStorage.setItem('creditCards', JSON.stringify(creditCards));
    }, [creditCards]);

    // Handle Menu Open
    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Handle Menu Close
    const handleMenuClose = (index = null) => {
        setAnchorEl(null);
        if (index !== null && index >= 0 && index < creditCards.length) {
            setCurrentCardIndex(index);
        }
    };

    // Handle Next Card
    const handleNext = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex < creditCards.length - 1 ? prevIndex + 1 : 0
        );
    };

    // Handle Previous Card
    const handlePrev = () => {
        setCurrentCardIndex((prevIndex) =>
            prevIndex > 0 ? prevIndex - 1 : creditCards.length - 1
        );
    };

    // Handle Add Modal Open
    const handleAddModalOpen = () => {
        setIsEditMode(false);
        setCardData({
            company: '',
            holder: '',
            startColor: '#2e64e2',
            endColor: '#4b84ff',
            points: '',
            pointLimit: ''
        });
        setAddEditModalOpen(true);
    };

    // Handle Edit Modal Open
    const handleEditModalOpen = (card) => {
        setIsEditMode(true);
        setModalCard(card);
        // Extract start and end colors from the gradient
        const gradientParts = card.bgGradient.match(/linear-gradient\((\d+)deg,\s*(#[0-9a-fA-F]{3,6})\s*0%,\s*(#[0-9a-fA-F]{3,6})\s*100%\)/);
        let startColor = '#2e64e2';
        let endColor = '#4b84ff';
        if (gradientParts && gradientParts.length === 4) {
            startColor = gradientParts[2];
            endColor = gradientParts[3];
        }
        setCardData({
            company: card.company,
            holder: card.holder,
            startColor: startColor,
            endColor: endColor,
            points: card.points,
            pointLimit: card.pointLimit
        });
        setAddEditModalOpen(true);
    };

    // Handle Add/Edit Modal Close
    const handleAddEditModalClose = () => {
        setAddEditModalOpen(false);
        setModalCard(null);
    };

    // Handle Remove Confirmation Open
    const handleRemoveConfirmOpen = (card) => {
        setCardToRemove(card);
        setRemoveConfirmOpen(true);
    };

    // Handle Remove Confirmation Close
    const handleRemoveConfirmClose = () => {
        setRemoveConfirmOpen(false);
        setCardToRemove(null);
    };

    // Confirm Remove
    const confirmRemove = () => {
        setCreditCards((prevCards) => prevCards.filter(card => card.id !== cardToRemove.id));
        // Adjust currentCardIndex if necessary
        setCurrentCardIndex((prevIndex) =>
            prevIndex >= creditCards.length - 1 ? creditCards.length - 2 : prevIndex
        );
        handleRemoveConfirmClose();
    };

    // Handle Add/Edit Card Submit
    const handleAddEditCardSubmit = () => {
        // Validate required fields
        if (
            cardData.company.trim() === '' ||
            cardData.holder.trim() === '' ||
            cardData.points === ''
        ) {
            alert('Please fill in all required fields.');
            return;
        }

        // Generate the linear gradient based on selected colors
        const gradient = generateGradient(cardData.startColor, cardData.endColor);

        if (isEditMode) {
            // Update the specific card in the creditCards array
            const updatedCards = creditCards.map(card =>
                card.id === modalCard.id
                    ? {
                        ...card,
                        company: cardData.company,
                        holder: cardData.holder,
                        bgGradient: gradient,
                        points: parseInt(cardData.points),
                        pointLimit: parseInt(cardData.pointLimit)
                    }
                    : card
            );
            setCreditCards(updatedCards);
        } else {
            // Generate a unique ID for the new card
            const newId = creditCards.length ? creditCards[creditCards.length - 1].id + 1 : 1;
            // Create the new card object
            const cardToAdd = {
                id: newId,
                company: cardData.company,
                holder: cardData.holder,
                bgGradient: gradient,
                points: parseInt(cardData.points),
                pointLimit: parseInt(cardData.pointLimit)
            };
            // Add the new card to the creditCards array
            setCreditCards((prevCards) => [...prevCards, cardToAdd]);
            // Update the currentCardIndex to the new card's index
            setCurrentCardIndex(creditCards.length);
        }
        // Close the modal
        handleAddEditModalClose();
    };

    return (
        <Box className='container'>
            {/* Left Sidebar */}
            <Sidebar />

            {/* Right Content */}
            <Box className='right-container'>
                {/* Header */}
                <Box className='right-header-container'>
                    <Typography variant="h4">Dashboard</Typography>
                    <Typography variant="subtitle1">Get summary of your point totals here.</Typography>
                </Box>

                {/* Body */}
                <Box className='right-body-container'>
                    {/* Card and Stats Section */}
                    <Box className='card-and-stats-wrapper'>
                        {/* Credit Card Carousel */}
                        <CreditCardCarousel
                            creditCards={creditCards}
                            currentCardIndex={currentCardIndex}
                            onPrev={handlePrev}
                            onNext={handleNext}
                            onMenuOpen={handleMenuOpen}
                            onMenuClose={handleMenuClose}
                            anchorEl={anchorEl}
                            onAddModalOpen={handleAddModalOpen}
                            onEditCard={handleEditModalOpen}
                            onRemoveCard={handleRemoveConfirmOpen}
                        />

                        {/* Stats Section */}
                        <StatsSection points={creditCards[currentCardIndex]?.points || 0} />
                    </Box>
                </Box>

                {/* Charts Section */}
                <ChartsSection data={initialData} />

                {/* Transactions Section */}
                <TransactionsSection />
            </Box>

            {/* Add/Edit Card Modal */}
            <AddEditCardModal
                open={addEditModalOpen}
                onClose={handleAddEditModalClose}
                onSubmit={handleAddEditCardSubmit}
                cardData={cardData}
                setCardData={setCardData}
                isEditMode={isEditMode}
            />

            {/* Confirmation Modal */}
            <ConfirmationModal
                open={removeConfirmOpen}
                onClose={handleRemoveConfirmClose}
                onConfirm={confirmRemove}
                card={cardToRemove}
            />
        </Box>
    );
}

export default Dashboard;
