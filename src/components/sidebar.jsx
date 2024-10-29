import React from 'react';
import './Sidebar.css';
import { Box, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Sidebar() {
    const navigate = useNavigate();

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <Box className='left-container'>
            <Box className='left-header'>
                <Typography variant="h5" className="logo">Credit Compass</Typography>
            </Box>
            <Box className='nav-container'>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleNavigate('/dashboard')}>
                            <ListItemText primary="Overview" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleNavigate('/flowchart')}>
                            <ListItemText primary="Flowchart" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton onClick={() => handleNavigate('/cards')}>
                            <ListItemText primary="Cards" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default Sidebar;
