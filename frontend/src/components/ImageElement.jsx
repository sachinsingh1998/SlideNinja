import { Box } from "@mui/material";
import EditImageModal from "./EditImageModal";
import { useState } from "react";
const ImageElement = ({element, slideId, elementId, slides, setSlides}) => {

  
  //modal functions
  const [openModal, setOpenModal] = useState(false);
  
  const [elementWidth, setElementWidth] = useState(element.width); // Size in px
  const [elementHeight, setElementHeight] = useState(element.height);
  const [imageUrl, setImageUrl] = useState(element.url);
  const [imageAlt, setImageAlt] = useState(element.alt);

  const [x, setX] = useState(element.x);
  const [y, setY] = useState(element.y);

  const modalProps =  {
    
    elementWidth: elementWidth, setElementWidth: setElementWidth,
    elementHeight: elementHeight, setElementHeight: setElementHeight,
    imageUrl: imageUrl, setImageUrl: setImageUrl,
    imageAlt: imageAlt, setImageAlt: setImageAlt,
    x:x, setX:setX,
    y:y, setY:setY

  };
  
  const handleCloseModal = () => {

    setOpenModal(false);    
  };

  const EditContent = () => {
    handleCloseModal();
    //alert(`Will Edit image element for now`)
    
    let newSlides = [...slides];
    newSlides[slideId].elements[elementId] = {
      
      type:'image',
      width:elementWidth,
      height:elementHeight,
      url:imageUrl,
      alt: imageAlt,
      x:x,
      y:y
    };
    
    setSlides(newSlides);
    
    
  }

  const deleteContent = () => {
    //newSlides[slideId].elements[elementId]
    let Elements = slides[slideId].elements;
    let newElements = [...Elements.slice(0, elementId), ...Elements.slice(elementId + 1)];
    let newSlides = [...slides];
    newSlides[slideId].elements = newElements;
    setSlides(newSlides);

  };

  const ShowModal = () => {

    if (! openModal){
      setOpenModal(true);
    }
      
  };
  
  /*
  useEffect(() => {
    console.log(`openModal updated: ${openModal}`);
  }, [openModal]);
  */

  return(
    <>
      <Box
        
        key={elementId}
        className="slide-element"
        onDoubleClick = {ShowModal}
        
        sx={{
          position: 'absolute',
          width: `${element.width}%`,
          height: `${element.height}%`,
          top: `${element.y}%`,
          left: `${element.x}%`,
          //border: '1px solid lightgrey',
          padding: '8px',
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          zIndex: elementId + 1,
          overflow: "hidden",
        }}
        onContextMenu={(event) => {
          event.preventDefault(); // Prevent the default context menu
          //alert("Right-clicked on the image container"); // Handle your custom logic here
          // You can trigger a custom menu or other actions here
          deleteContent();
        }}
      >
        
        <img
          src={element.url}
          alt={element.alt || 'Image'}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Ensures the image covers the box dimensions without distortion
          }}
        />
        <EditImageModal open = {openModal} onClose = {handleCloseModal} inputProps = {modalProps} onSubmit = {EditContent}/>
      </Box>
  
    </>
  )
}

export default ImageElement;