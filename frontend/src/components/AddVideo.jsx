import { Button } from "@mui/material"
import { useState } from "react";
import AddVideoModal from "./AddVideoModal";

const AddVideo = ({slides, setSlides, slideId }) => {

  const [ openModal, setOpenModal] = useState(false);
  
  const [elementWidth, setElementWidth] = useState(); // Size in px
  const [elementHeight, setElementHeight] = useState();
  
  const [videoUrl, setVideoUrl] = useState("");
  const [autoplay, setAutoPlay] = useState(false);
  
  const modalProps =  {
    elementWidth: elementWidth, setElementWidth: setElementWidth,
    elementHeight: elementHeight, setElementHeight: setElementHeight,
    videoUrl: videoUrl, setVideoUrl: setVideoUrl,
    autoplay: autoplay, setAutoPlay: setAutoPlay
  };

  //opening the modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  
  //closing the modal
  const handleCloseModal = () => {
    setOpenModal(false);
    

  };

  const AddVideoFn = () => {
    handleCloseModal();
    let newSlides = [...slides];
    newSlides[slideId].elements.push({
      
      type:'video',
      width:elementWidth,
      height:elementHeight,
      x:0,
      y:0,
      url:videoUrl,
      autoplay: autoplay
    });
    setSlides(newSlides); 
    
  };

  return (
    <>
      <Button onClick = {handleOpenModal}>Add Video</Button>
      <AddVideoModal open = {openModal} onClose = {handleCloseModal}
        inputProps = {modalProps} onSubmit = {AddVideoFn}
      />
    </>
    
  );
};

export default AddVideo;