import React from 'react';
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

const EditTextModal = ({open, onClose , inputProps}) => {
  
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit Text
        </Typography>
        <TextField
        label="Text Content"
        variant="outlined"
        value={inputProps.textContent}
        onChange={(e) => inputProps.setTextContent(e.target.value)}
        required
      />
      
      <TextField
        label="Text Width"
        variant="outlined"
        type="number"
        value={inputProps.textWidth}
        onChange={(e) => inputProps.setTextWidth(e.target.value)}
        required
      />

      <TextField
        label="Text Height"
        variant="outlined"
        type="number"
        value={inputProps.textHeight}
        onChange={(e) => inputProps.setTextHeight(e.target.value)}
        required
      /> 

      <TextField
        label="Font Size (em)"
        variant="outlined"
        type="number"
        value={inputProps.fontSize}
        onChange={(e) => inputProps.setFontSize(e.target.value)}
        inputProps={{ step: "0.1" }}
        required
      />      
      <TextField
        label="Text Color (HEX)"
        variant="outlined"
        value={inputProps.textColor}
        onChange={(e) => inputProps.setTextColor(e.target.value)}
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

        <Button onClick={onClose} sx={{ mt: 2 }}>
          Edit
        </Button>
      </Box>
    </Modal>
  );
};
export default EditTextModal;