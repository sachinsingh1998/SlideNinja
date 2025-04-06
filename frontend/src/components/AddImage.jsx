import { Button } from "@mui/material"
import { useState } from "react";
import AddImageModal from "./AddImageModal";

const AddImage = ({slides, setSlides, slideId }) => {

  const [ openModal, setOpenModal] = useState(false);
  
  const [elementWidth, setElementWidth] = useState(); // Size in px
  const [elementHeight, setElementHeight] = useState();
  const [imageUrl, setImageUrl] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  
  const modalProps =  {
    elementWidth: elementWidth, setElementWidth: setElementWidth,
    elementHeight: elementHeight, setElementHeight: setElementHeight,
    imageUrl: imageUrl, setImageUrl: setImageUrl,
    imageAlt: imageAlt, setImageAlt: setImageAlt
    
  };

  //opening the modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  
  //closing the modal
  const handleCloseModal = () => {
    setOpenModal(false);
    

  };

  const AddImageFn = () => {
    handleCloseModal();
    let newSlides = [...slides];
    newSlides[slideId].elements.push({
      
      type:'image',
      width:elementWidth,
      height:elementHeight,
      x:0,
      y:0,
      url:imageUrl,
      alt: imageAlt
    });
    setSlides(newSlides); 
    console.log(`Ana, I have added a new image ${slides}`);
  };

  return (
    <>
      <Button onClick = {handleOpenModal}>Add Image</Button>
      <AddImageModal open = {openModal} onClose = {handleCloseModal}
        inputProps = {modalProps} onSubmit = {AddImageFn}
      />
    </>
    
  );
};

export default AddImage;