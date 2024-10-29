import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import Fade from '@mui/material/Fade';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90vw',
    maxWidth: 500,
    maxHeight: '90vh',
    bgcolor: 'background.paper',
    borderRadius: '8px',
    boxShadow: 24,
    p: 4,
    overflowY: 'auto',
};

function ConfirmationModal({ open, onClose, onConfirm, card }) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            aria-labelledby="remove-confirm-modal-title"
            aria-describedby="remove-confirm-modal-description"
        >
            <Fade in={open}>
                <Box sx={modalStyle}>
                    <Typography id="remove-confirm-modal-title" variant="h6" component="h2">
                        Confirm Removal
                    </Typography>
                    <Typography id="remove-confirm-modal-description" sx={{ mt: 2 }}>
                        Are you sure you want to remove the card "{card?.company}"?
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                        <Button onClick={onClose} variant="outlined" color="secondary">
                            Cancel
                        </Button>
                        <Button onClick={onConfirm} variant="contained" color="primary">
                            Remove
                        </Button>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}

export default ConfirmationModal;
