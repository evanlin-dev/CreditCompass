import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    Card,
    CardContent,
    IconButton,
    Menu,
    MenuItem,
    Button,
    Modal,
    TextField,
    Fade,
    Backdrop
} from '@mui/material';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { SketchPicker } from 'react-color';
import { useNavigate } from 'react-router-dom';

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

// Modal Style
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw', // Responsive width
    maxWidth: 500,  // Maximum width
    maxHeight: '90vh', // Maximum height
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto', // Enable vertical scrolling
};

// Helper function to generate gradient
const generateGradient = (startColor, endColor) => {
    return `linear-gradient(135deg, ${startColor} 0%, ${endColor} 100%)`;
};

function Dashboard() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [creditCards, setCreditCards] = useState(initialCreditCards);
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [addModalOpen, setAddModalOpen] = useState(false);
    const [editModalOpen, setEditModalOpen] = useState(false);
    const [modalCard, setModalCard] = useState(null);
    const [removeConfirmOpen, setRemoveConfirmOpen] = useState(false);
    const [cardToRemove, setCardToRemove] = useState(null);
    const [newCard, setNewCard] = useState({
        company: '',
        holder: '',
        startColor: '#2e64e2',
        endColor: '#4b84ff',
        points: '',
        pointLimit: ''
    });
    const [editCardData, setEditCardData] = useState({
        company: '',
        holder: '',
        startColor: '#2e64e2',
        endColor: '#4b84ff',
        points: '',
        pointLimit: ''
    });

    const navigate = useNavigate();

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
        setAddModalOpen(true);
    };

    // Handle Add Modal Close
    const handleAddModalClose = () => {
        setAddModalOpen(false);
        setNewCard({
            company: '',
            holder: '',
            startColor: '#2e64e2',
            endColor: '#4b84ff',
            points: '',
            pointLimit: ''
        });
    };

    // Handle Edit Modal Open
    const handleEditModalOpen = (card) => {
        setModalCard(card);
        // Extract start and end colors from the gradient
        const gradientParts = card.bgGradient.match(/linear-gradient\((\d+)deg,\s*(#[0-9a-fA-F]{6})\s*0%,\s*(#[0-9a-fA-F]{6})\s*100%\)/);
        let startColor = '#2e64e2';
        let endColor = '#4b84ff';
        if (gradientParts && gradientParts.length === 4) {
            startColor = gradientParts[2];
            endColor = gradientParts[3];
        }

        setEditCardData({
            company: card.company,
            holder: card.holder,
            startColor: startColor,
            endColor: endColor,
            points: card.points,
            pointLimit: card.pointLimit
        });
        setEditModalOpen(true);
    };

    // Handle Edit Modal Close
    const handleEditModalClose = () => {
        setEditModalOpen(false);
        setModalCard(null);
        setEditCardData({
            company: '',
            holder: '',
            startColor: '#2e64e2',
            endColor: '#4b84ff',
            points: '',
            pointLimit: ''
        });
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

    // Handle Add Card
    const handleAddCard = () => {
        // Validate required fields
        if (
            newCard.company.trim() === '' ||
            newCard.holder.trim() === '' ||
            newCard.points === '' ||
            newCard.pointLimit === ''
        ) {
            alert('Please fill in all required fields.');
            return;
        }

        // Generate a unique ID for the new card
        const newId = creditCards.length ? creditCards[creditCards.length - 1].id + 1 : 1;

        // Generate the linear gradient based on selected colors
        const gradient = generateGradient(newCard.startColor, newCard.endColor);

        // Create the new card object
        const cardToAdd = {
            id: newId,
            company: newCard.company,
            holder: newCard.holder,
            bgGradient: gradient,
            points: parseInt(newCard.points),
            pointLimit: parseInt(newCard.pointLimit)
        };

        // Add the new card to the creditCards array
        setCreditCards((prevCards) => {
            const updatedCards = [...prevCards, cardToAdd];
            return updatedCards;
        });

        // Update the currentCardIndex to the new card's index
        setCurrentCardIndex(creditCards.length); // New index is equal to the previous length

        // Close the add modal and reset the newCard state
        handleAddModalClose();
    };

    // Handle Save Edited Card
    const handleSaveEditedCard = () => {
        // Validate required fields
        if (
            editCardData.company.trim() === '' ||
            editCardData.holder.trim() === '' ||
            editCardData.points === '' ||
            editCardData.pointLimit === ''
        ) {
            alert('Please fill in all required fields.');
            return;
        }

        // Generate the linear gradient based on selected colors
        const gradient = generateGradient(editCardData.startColor, editCardData.endColor);

        // Update the specific card in the creditCards array
        const updatedCards = creditCards.map(card =>
            card.id === modalCard.id
                ? {
                    ...card,
                    company: editCardData.company,
                    holder: editCardData.holder,
                    bgGradient: gradient,
                    points: parseInt(editCardData.points),
                    pointLimit: parseInt(editCardData.pointLimit)
                }
                : card
        );

        setCreditCards(updatedCards);
        handleEditModalClose();
    };

    // Handle Navigation via Sidebar
    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <Box className='container'>
            {/* Left Sidebar */}
            <Box className='left-container'>
                <Box className='left-header'>
                    <Typography variant="h5" className="logo">Credit Compass</Typography>
                </Box>
                <Box className='nav-container'>
                    <List>
                        <ListItem button onClick={() => handleNavigate('/dashboard')}>
                            <ListItemText primary="Overview" />
                        </ListItem>
                        <ListItem button onClick={() => handleNavigate('/flowchart')}>
                            <ListItemText primary="Flowchart" />
                        </ListItem>
                        <ListItem button onClick={() => handleNavigate('/cards')}>
                            <ListItemText primary="Cards" />
                        </ListItem>
                    </List>
                </Box>
            </Box>

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
                        {/* Credit Card Section */}
                        <Box className='credit-card-section'>
                            {/* Carousel Controls - Left Arrow */}
                            <IconButton
                                onClick={handlePrev}
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
                                        <Card
                                            className='credit-card-container'
                                            sx={{
                                                background: creditCards[currentCardIndex].bgGradient,
                                                color: '#fff',
                                                width: '20em',
                                                height: '12em',
                                                minWidth: '20em',
                                                cursor: 'pointer',
                                                position: 'relative',
                                                transition: 'transform 0.5s',
                                            }}
                                            onClick={() => handleEditModalOpen(creditCards[currentCardIndex])}
                                        >
                                            <CardContent>
                                                <Box className='card-details'>
                                                    <Typography variant="h6">{creditCards[currentCardIndex].company}</Typography>
                                                    <Typography className='card-holder'>Cardholder: {creditCards[currentCardIndex].holder}</Typography>
                                                    <Box className='points-container'>
                                                        <Typography variant="body1">Points: {creditCards[currentCardIndex].points}</Typography>
                                                    </Box>
                                                </Box>
                                                {/* Remove Button */}
                                                <IconButton
                                                    size="small"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleRemoveConfirmOpen(creditCards[currentCardIndex]);
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
                                                        handleEditModalOpen(creditCards[currentCardIndex]);
                                                    }}
                                                    sx={{ position: 'absolute', bottom: 0, right: 0, color: '#fff' }}
                                                    aria-label="Edit Card"
                                                >
                                                    <EditIcon />
                                                </IconButton>
                                            </CardContent>
                                        </Card>
                                    </Fade>
                                )}
                            </Box>

                            {/* Carousel Controls - Right Arrow */}
                            <IconButton
                                onClick={handleNext}
                                disabled={creditCards.length <= 1}
                                className="right-arrow"
                                aria-label="Next Card"
                            >
                                <ArrowForwardIosIcon style={{ color: '#bb86fc' }} />
                            </IconButton>

                            {/* Menu Button */}
                            <Box className='menu-button-container'>
                                <IconButton onClick={handleMenuOpen} className="menu-button" aria-label="Open Menu">
                                    <MenuIcon style={{ color: '#bb86fc' }} />
                                </IconButton>
                                <Menu
                                    anchorEl={anchorEl}
                                    open={Boolean(anchorEl)}
                                    onClose={() => handleMenuClose(null)}
                                >
                                    {creditCards.map((card, index) => (
                                        <MenuItem key={card.id} onClick={() => handleMenuClose(index)}>
                                            {card.company}
                                        </MenuItem>
                                    ))}
                                    <MenuItem onClick={handleAddModalOpen}>
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
                                    onClick={handleAddModalOpen}
                                    sx={{ marginTop: '1em', backgroundColor: '#03dac6', color: '#000' }}
                                >
                                    Add Card
                                </Button>
                            </Box>

                            {/* Progress Bar */}
                            <Box className='progress-container'>
                                <Typography variant="body1">Quarterly Point Limit</Typography>
                                <Box className='progress-bar'>
                                    <Box
                                        className='progress-fill'
                                        style={{
                                            width: `${(creditCards[currentCardIndex].points / creditCards[currentCardIndex].pointLimit) * 100}%`
                                        }}
                                    ></Box>
                                </Box>
                                <Typography variant="caption">
                                    {creditCards[currentCardIndex].points} / {creditCards[currentCardIndex].pointLimit}
                                </Typography>
                            </Box>
                        </Box>

                        {/* Stats Section */}
                        <Box className='stats'>
                            {/* Dynamic Points Display */}
                            <Typography variant="h3">{creditCards[currentCardIndex].points}</Typography>
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
                    </Box>
                </Box>

                {/* Charts Section */}
                <Box className='charts-container' sx={{ marginTop: '2em' }}>
                    <Typography variant="h5" gutterBottom>Financial Overview</Typography>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={initialData}>
                            <XAxis dataKey="name" stroke="#bbb" />
                            <YAxis stroke="#bbb" />
                            <Tooltip content={<CustomTooltip />} />
                            <Line type="monotone" dataKey="income" stroke="#03dac6" />
                            <Line type="monotone" dataKey="outcome" stroke="#d9534f" />
                        </LineChart>
                    </ResponsiveContainer>
                </Box>

                {/* Scrollable Cards Section */}
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
            </Box>

            {/* Modal for Adding New Card */}
            <Modal
                open={addModalOpen}
                onClose={handleAddModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                aria-labelledby="add-card-modal-title"
                aria-describedby="add-card-modal-description"
            >
                <Fade in={addModalOpen}>
                    <Box sx={modalStyle}>
                        <Typography id="add-card-modal-title" variant="h6" component="h2">
                            Add New Credit Card
                        </Typography>
                        <Box component="form" sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                label="Company Name"
                                variant="outlined"
                                value={newCard.company}
                                onChange={(e) => setNewCard({ ...newCard, company: e.target.value })}
                                required
                            />
                            <TextField
                                label="Cardholder Name"
                                variant="outlined"
                                value={newCard.holder}
                                onChange={(e) => setNewCard({ ...newCard, holder: e.target.value })}
                                required
                            />

                            {/* Color Pickers Container */}
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                                {/* Start Color Picker */}
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Start Color
                                    </Typography>
                                    <SketchPicker
                                        color={newCard.startColor}
                                        onChangeComplete={(color) => setNewCard({ ...newCard, startColor: color.hex })}
                                    />
                                </Box>
                                
                                {/* End Color Picker */}
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        End Color
                                    </Typography>
                                    <SketchPicker
                                        color={newCard.endColor}
                                        onChangeComplete={(color) => setNewCard({ ...newCard, endColor: color.hex })}
                                    />
                                </Box>
                            </Box>

                            <TextField
                                label="Points"
                                variant="outlined"
                                type="number"
                                value={newCard.points}
                                onChange={(e) => setNewCard({ ...newCard, points: e.target.value })}
                                required
                            />
                            <TextField
                                label="Point Limit"
                                variant="outlined"
                                type="number"
                                value={newCard.pointLimit}
                                onChange={(e) => setNewCard({ ...newCard, pointLimit: e.target.value })}
                                required
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                                <Button onClick={handleAddModalClose} variant="outlined" color="secondary">
                                    Cancel
                                </Button>
                                <Button onClick={handleAddCard} variant="contained" color="primary">
                                    Add Card
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>

            {/* Modal for Editing Card Details */}
            <Modal
                open={editModalOpen}
                onClose={handleEditModalClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                aria-labelledby="edit-card-modal-title"
                aria-describedby="edit-card-modal-description"
            >
                <Fade in={editModalOpen}>
                    <Box sx={modalStyle}>
                        <Typography id="edit-card-modal-title" variant="h6" component="h2">
                            Edit Credit Card
                        </Typography>
                        <Box component="form" sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                label="Company Name"
                                variant="outlined"
                                value={editCardData.company}
                                onChange={(e) => setEditCardData({ ...editCardData, company: e.target.value })}
                                required
                            />
                            <TextField
                                label="Cardholder Name"
                                variant="outlined"
                                value={editCardData.holder}
                                onChange={(e) => setEditCardData({ ...editCardData, holder: e.target.value })}
                                required
                            />

                            {/* Color Pickers Container */}
                            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
                                {/* Start Color Picker */}
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        Start Color
                                    </Typography>
                                    <SketchPicker
                                        color={editCardData.startColor}
                                        onChangeComplete={(color) => setEditCardData({ ...editCardData, startColor: color.hex })}
                                    />
                                </Box>
                                
                                {/* End Color Picker */}
                                <Box sx={{ flex: 1 }}>
                                    <Typography variant="subtitle1" gutterBottom>
                                        End Color
                                    </Typography>
                                    <SketchPicker
                                        color={editCardData.endColor}
                                        onChangeComplete={(color) => setEditCardData({ ...editCardData, endColor: color.hex })}
                                    />
                                </Box>
                            </Box>

                            <TextField
                                label="Points"
                                variant="outlined"
                                type="number"
                                value={editCardData.points}
                                onChange={(e) => setEditCardData({ ...editCardData, points: e.target.value })}
                                required
                            />
                            <TextField
                                label="Point Limit"
                                variant="outlined"
                                type="number"
                                value={editCardData.pointLimit}
                                onChange={(e) => setEditCardData({ ...editCardData, pointLimit: e.target.value })}
                                required
                            />
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                                <Button onClick={handleEditModalClose} variant="outlined" color="secondary">
                                    Cancel
                                </Button>
                                <Button onClick={handleSaveEditedCard} variant="contained" color="primary">
                                    Save Changes
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Fade>
            </Modal>

            {/* Confirmation Modal for Removing Card */}
            <Modal
                open={removeConfirmOpen}
                onClose={handleRemoveConfirmClose}
                closeAfterTransition
                aria-labelledby="remove-confirm-modal-title"
                aria-describedby="remove-confirm-modal-description"
            >
                <Fade in={removeConfirmOpen}>
                    <Box sx={modalStyle}>
                        <Typography id="remove-confirm-modal-title" variant="h6" component="h2">
                            Confirm Removal
                        </Typography>
                        <Typography id="remove-confirm-modal-description" sx={{ mt: 2 }}>
                            Are you sure you want to remove the card "{cardToRemove?.company}"?
                        </Typography>
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                            <Button onClick={handleRemoveConfirmClose} variant="outlined" color="secondary">
                                Cancel
                            </Button>
                            <Button onClick={confirmRemove} variant="contained" color="primary">
                                Remove
                            </Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    )
    }

    export default Dashboard;
