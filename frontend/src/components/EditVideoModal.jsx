//import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';

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

const EditVideoModal = ({open, onClose , inputProps, onSubmit}) => {
  
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit Video
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

        
         

        <TextField
          label="X coordinate"
          variant="outlined"
          type="number"
          value={inputProps.x}
          onChange={(e) => inputProps.setX(e.target.value)}
          inputProps={{ step: "0.1" }}
          required
        />

        <TextField
          label="Y coordinate"
          variant="outlined"
          type="number"
          value={inputProps.y}
          onChange={(e) => inputProps.setY(e.target.value)}
          inputProps={{ step: "0.1" }}
          required
        />      

        <Button onClick={onSubmit} sx={{ mt: 2 }}>
          Edit Video
        </Button>
      </Box>
    </Modal>
  );
};
export default EditVideoModal;