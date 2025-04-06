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

export default function EditPresentationTitle({ open, onClose , onSubmit, title, setTitle}) {



  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Edit Presentation Title
        </Typography>
        <TextField
          id="modal-modal-description"
          label="Presentation Title"
          variant="outlined"
          fullWidth
          value = {title}
          onChange = {(e) => {setTitle(e.target.value)}}
          
          sx={{ mt: 2 }}
        />
        <Button onClick={onSubmit} sx={{ mt: 2 }}>
          Edit
        </Button>
      </Box>
    </Modal>
  );
}

