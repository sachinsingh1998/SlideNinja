import { Modal, Box, Typography, TextField, Button } from '@mui/material';

const CreatePresentationModal = ({ open, handleClose, presentationName, setPresentationName, presentationDescription, setPresentationDescription, setImageUrl, createPresentation }) => {
  //x
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
};

  return (
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
          <Box sx={style}>
              <Typography id="modal-title" variant="h6" component="h2" gutterBottom>
                  New Presentation
              </Typography>
              <TextField
                  fullWidth
                  label="Presentation Name"
                  variant="outlined"
                  value={presentationName}
                  onChange={event => setPresentationName(event.target.value)}
                  sx={{ mb: 2 }}
              />
              <TextField
                  fullWidth
                  label="Presentation Description"
                  variant="outlined"
                  value={presentationDescription}
                  onChange={event => setPresentationDescription(event.target.value)}
                  sx={{ mb: 2 }}
              />
              <Button variant="contained" component="label" fullWidth sx={{ mb: 2 }}>
                  Upload Image
                  <input type="file" hidden onChange={e => setImageUrl(e.target.files[0])} />
              </Button>
              <Button variant="contained" color="primary" fullWidth onClick={createPresentation}>
                  Create Presentation
              </Button>
          </Box>
      </Modal>
  );
};

export default CreatePresentationModal;