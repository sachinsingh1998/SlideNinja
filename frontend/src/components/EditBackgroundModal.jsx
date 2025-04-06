//import React from 'react';
import { Modal, Box, Typography, Radio, RadioGroup, FormControlLabel, Button, TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AddImageModal({ open, onClose , inputProps, onSubmit }) {
      
  return(
    
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit Background
        </Typography>
        
        <RadioGroup
          value={inputProps.backgroundType}
          onChange={(e) => inputProps.setBackgroundType(e.target.value)}
          sx={{ marginBottom: 2 }}
        >
          <FormControlLabel value="solid" control={<Radio />} label="Solid Color" />
          <FormControlLabel value="gradient" control={<Radio />} label="Gradient" />
          <FormControlLabel value="image" control={<Radio />} label="Image" />
        </RadioGroup>

        {/* Solid Color Picker */}
        {inputProps.backgroundType === "solid" && (
          <TextField
            label="Solid Color"
            type="text"
            value={inputProps.solidColor}
            onChange={(e) => inputProps.setSolidColor(e.target.value)}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
        )}
        
        
        {inputProps.backgroundType === "gradient" && (
          <div>
            <TextField
              label="Start Color"
              type="text"
              value={inputProps.startColor}
              onChange={(e) => inputProps.setStartColor(e.target.value)}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="End Color"
              type="text"
              value={inputProps.endColor}
              onChange={(e) => inputProps.setEndColor(e.target.value)}
              fullWidth
              sx={{ marginBottom: 2 }}
            />
          </div>
        )}

        
        {inputProps.backgroundType === "image" && (
          <TextField
            type="text"
            label="Image Url" 
            value={inputProps.imageUrl}
            onChange={(e) => inputProps.setImageUrl(e.target.value)}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
        )}
        
        
        <Button onClick={onSubmit} variant="contained" color="primary"  fullWidth>
          Apply Background
        </Button>
        
        
      </Box>
    </Modal>
  );
}

