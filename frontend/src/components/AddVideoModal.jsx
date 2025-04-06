//import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
//import { Check, CheckBox } from '@mui/icons-material';

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

export default function AddVideoModal({ open, onClose , inputProps, onSubmit }) {
      
  return(
    
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add Video
        </Typography>
        
        <TextField
          label="Video Url"   
          variant="outlined"
          value={inputProps.videoUrl}
          onChange={(e) => inputProps.setVideoUrl(e.target.value)}
          required
        /> 

        <TextField
          label="Video Width"
          variant="outlined"
          type="number"
          value={inputProps.elementWidth}
          onChange={(e) => inputProps.setElementWidth(e.target.value)}
          required
        />

        <TextField
          label="Video Height"
          variant="outlined"
          type="number"
          value={inputProps.elementHeight}
          onChange={(e) => inputProps.setElementHeight(e.target.value)}
          required
        /> 

        <Button onClick={onSubmit} sx={{ mt: 2 }}>
          Add Video
        </Button>
      </Box>
    </Modal>
  );
}

