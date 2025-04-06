//import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import EditPresentationTitle from "./EditPresentationTitle";
import { Button, Typography, Box, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
const PresentationTitle = ( { id, title, store, token, setStore} ) => {
  
  const [ openModal, setOpenModal] = useState(false);
  //const navigate = useNavigate();
  const [presentationTitle, setPresentationTitle] = useState(title);
  const [newPresentationTitle, setNewPresentationTitle] = useState(title);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const editTitle = () => {
    handleCloseModal(false);
    const updatedPresentations = store.presentation.map((presentation) => {
      
      setPresentationTitle(newPresentationTitle);
      
      //console.log('Checking presentation id:', presentation.id); // Log the ID for debugging
      if (presentation.id === id) {
        // Log the matched ID
        presentation['title'] = newPresentationTitle;
        console.log(`Matched ID ${JSON.stringify(presentation)}`)
        //console.log('Matched ID:', presentation.id); 
        return presentation;
      }
      return presentation;
    });
    
        
    let newStore = {...store};
    newStore['presentation'] = updatedPresentations;
    axios.put(
      'http://localhost:5005/store',
      {
          store: newStore,
      },
      {
          headers: {
              Authorization: `Bearer ${token}`,
            }
      }
  )
  .then( () => {
      setStore(newStore);
      //navigate('/dashboard');
  })
  .catch( (err) =>{
      console.log(err);
  });

  };




  return (
    <>
      {/** 
      <p>{presentationTitle}<button onClick={handleOpenModal}>Edit Modal</button></p>*/}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.5 }}>
      <Typography variant="body1" sx={{ flexGrow: 1 }}>
        {presentationTitle}
      </Typography>

      <IconButton
        onClick={handleOpenModal}
        sx={{
          color: 'primary.main', 
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.08)', 
          },
        }}
      >
        <EditIcon />
      </IconButton>
    </Box>

      {/** Edit Title Modal */}
      <EditPresentationTitle open = {openModal} 
      onClose={handleCloseModal}
      onSubmit = {editTitle}
      title = {newPresentationTitle}
      setTitle = {setNewPresentationTitle}
      />
      
    </>
  )
}

export default PresentationTitle