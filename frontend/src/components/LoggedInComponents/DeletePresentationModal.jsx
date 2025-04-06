import { Button, Modal, Box, Typography } from '@mui/material';

const DeletePresentationModal = ( {open, handleClose, handleDelete} ) => {
  return(

    <Modal open={open} onClose={handleClose}>
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 300,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
        textAlign: 'center'
      }}
    >
      <Typography variant="h6" component="h2">
        Are you sure?
      </Typography>
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button
          variant="contained"
          color="error"
          onClick={handleDelete}
          sx={{ width: '45%' }}
        >
          Yes
        </Button>
        <Button
          variant="outlined"
          onClick={handleClose}
          sx={{ width: '45%' }}
        >
          No
        </Button>
      </Box>
    </Box>
  </Modal>
  );
};

export default DeletePresentationModal;