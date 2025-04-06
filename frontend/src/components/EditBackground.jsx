import { Button } from "@mui/material"
import EditBackgroundModal from "./EditBackgroundModal";
import { useState } from "react";

const EditBackground = ({slides, setSlides, slideId }) => {

  const [ openModal, setOpenModal] = useState(false);
  
  const [ backgroundType, setBackgroundType ] = useState('');
  const [solidColor, setSolidColor ] = useState('');
  const [startColor, setStartColor ] = useState('');
  const [endColor, setEndColor ] = useState('');
  const [ imageUrl, setImageUrl ] = useState('');

  const modalProps =  {
    backgroundType: backgroundType, setBackgroundType: setBackgroundType,
    solidColor: solidColor, setSolidColor: setSolidColor,
    startColor: startColor, setStartColor: setStartColor,
    endColor : endColor, setEndColor : setEndColor,
    imageUrl: imageUrl, setImageUrl: setImageUrl

  };

  //opening the modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };


  //closing the modal
  const handleCloseModal = () => {
    setOpenModal(false);
    //console.log(`dekh ana ki chut ${JSON.stringify(slides[slideId].elements)}`);

  };

  const UpdateBackground = () => {
    handleCloseModal();
    let newSlides = [...slides];
    let newBackground =  {
          
      type: backgroundType, // "solid", "gradient", or "image"
      solid: {
        color: solidColor,
      },
      gradient: {
        startColor: startColor,
        endColor: endColor,
        direction: "to right",
      },
      image: {
        url: imageUrl,
      }
    }
    newSlides[slideId].background = newBackground;  
    setSlides(newSlides); 
    console.log(`Ana, I have added a new image ${slides}`);
  }

  return (
    <>
      <Button onClick = {handleOpenModal}>Edit Background</Button>
      <EditBackgroundModal open = {openModal} onClose = {handleCloseModal}
        inputProps = {modalProps} onSubmit = {UpdateBackground}
      />
    </>
    
  )
}

export default EditBackground;