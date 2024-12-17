import React from 'react';
import { Modal, Box, Typography, TextField, Button } from '@mui/material';
import { SketchPicker } from 'react-color';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';

// Modal Style
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

function AddEditCardModal({
    open,
    onClose,
    onSubmit,
    cardData,
    setCardData,
    isEditMode,
}) {
    return (
        <Modal
            open={open}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            aria-labelledby="add-edit-card-modal-title"
            aria-describedby="add-edit-card-modal-description"
        >
            <Fade in={open}>
                <Box sx={modalStyle}>
                    <Typography id="add-edit-card-modal-title" variant="h6" component="h2">
                        {isEditMode ? 'Edit Credit Card' : 'Add New Credit Card'}
                    </Typography>
                    <Box component="form" sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            label="Company Name"
                            variant="outlined"
                            value={cardData.company}
                            onChange={(e) => setCardData({ ...cardData, company: e.target.value })}
                            required
                        />
                        <TextField
                            label="Cardholder Name"
                            variant="outlined"
                            value={cardData.holder}
                            onChange={(e) => setCardData({ ...cardData, holder: e.target.value })}
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
                                    color={cardData.startColor}
                                    onChangeComplete={(color) => setCardData({ ...cardData, startColor: color.hex })}
                                />
                            </Box>
                            {/* End Color Picker */}
                            <Box sx={{ flex: 1 }}>
                                <Typography variant="subtitle1" gutterBottom>
                                    End Color
                                </Typography>
                                <SketchPicker
                                    color={cardData.endColor}
                                    onChangeComplete={(color) => setCardData({ ...cardData, endColor: color.hex })}
                                />
                            </Box>
                        </Box>
                        <TextField
                            label="Points"
                            variant="outlined"
                            type="number"
                            value={cardData.points}
                            onChange={(e) => setCardData({ ...cardData, points: e.target.value })}
                            required
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                            <Button onClick={onClose} variant="outlined" color="secondary">
                                Cancel
                            </Button>
                            <Button onClick={onSubmit} variant="contained" color="primary">
                                {isEditMode ? 'Save Changes' : 'Add Card'}
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Fade>
        </Modal>
    );
}

export default AddEditCardModal;
