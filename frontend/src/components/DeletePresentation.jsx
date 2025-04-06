import { useNavigate } from "react-router-dom";
import axios from "axios";
import DeletePresentationModal from "./LoggedInComponents/DeletePresentationModal";
import { useState } from "react";
import { Button, Modal, Box, Typography } from '@mui/material';

function DeletePresentation( { id, store, token, setStore} ) {
  //mc
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);

  const handleCloseModal = () => {
    setOpenModal(false);
  }

  //delete presentation and close modal
  const deleteElement = () => {
    //removing current presentation from list
    handleCloseModal();
    const updatedPresentation = store.presentation.filter((item) => item.id !== id);
    let newStore = {...store};
    newStore['presentation'] = updatedPresentation;
    axios.put(
      'http://localhost:5005/store',
      {

        store: newStore,
      },
      {
        headers: {

          Authorization: `Bearer ${token}`,
        }
      })
      .then( () => {
        
        setStore(newStore);
        navigate('/dashboard');
      })
      .catch( (err) =>{
        console.log(err);
      });
  };
  
  const handleOpenModal = () => {
    
    setOpenModal(true);
    //alert(`click kia bc ${openModal}`);
  };
  
  return (
    <>
      <Button
        variant="contained"
        color="error"
        onClick={handleOpenModal}
        sx={{ margin: 1 }}
      >
        Delete Presentation
      </Button>
      <DeletePresentationModal open = {openModal} handleClose = {handleCloseModal} handleDelete = {deleteElement}/>
    </>
  );
};

export default DeletePresentation;