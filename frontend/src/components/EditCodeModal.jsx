import { Box, Button, Modal, TextField, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: '8px',
};

const EditCodeModal = ({ open, onClose , inputProps, onSubmit }) => {
      
  return(
    
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Add Code
        </Typography>
        
        <TextField
          label="Enter code here"
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          value={inputProps.codeContent}
          onChange={(e) => inputProps.setCodeContent(e.target.value)}
          sx={{ mb: 2 }}
        />
        
        <FormControl fullWidth sx={{ mb: 2 }}>
          <InputLabel id="language-label">Language</InputLabel>
          <Select
            labelId="language-label"
            value={inputProps.codeLanguage}
            label="Language"
            onChange={(e) => inputProps.setCodeLanguage(e.target.value)}
          >
            <MenuItem value="javascript">JavaScript</MenuItem>
            <MenuItem value="python">Python</MenuItem>
            <MenuItem value="c">C</MenuItem>
          </Select>

        </FormControl> 
        
        
        <TextField
          label="Font Size (em)"
          type="number"
          variant="outlined"
          fullWidth
          value={inputProps.codeFont}
          onChange={(e) => inputProps.setCodeFont(e.target.value)}
          sx={{ mb: 2 }}
        />

        
        <TextField
          label="Element Width"
          variant="outlined"
          type="number"
          value={inputProps.elementWidth}
          onChange={(e) => inputProps.setElementWidth(e.target.value)}
          required
        />

        <TextField
          label="Element Height"
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
     
        <Button variant="contained" color="primary" fullWidth onClick={onSubmit} sx={{ mt: 2 }}>
          Add Code
        </Button>
      </Box>
    </Modal>
  );
};
export default EditCodeModal;

