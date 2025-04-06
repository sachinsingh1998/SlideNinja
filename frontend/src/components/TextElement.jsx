import { Box, Typography } from "@mui/material";
import EditTextModal from "./EditTextModal";
import { useState, useEffect } from "react";
const TextElement = ({element, slideId, elementId, slides, setSlides}) => {


 
  
  //modal functions
  const [openModal, setOpenModal] = useState(false);
  const [textContent, setTextContent] = useState(element.content);
  const [textWidth, setTextWidth] = useState(element.width); // Size in px
  const [textHeight, setTextHeight] = useState(element.height);
  const [fontSize, setFontSize] = useState(element.fontSize); // em as decimal
  const [textColor, setTextColor] = useState(element.textColor);
  const [x, setX] = useState(element.x);
  const [y, setY] = useState(element.y);

  const modalProps =  {
    textContent : textContent, setTextContent : setTextContent,
    textWidth : textWidth , setTextWidth :setTextWidth, 
    textHeight: textHeight, setTextHeight :setTextHeight,
    fontSize: fontSize, setFontSize:setFontSize,
    textColor: textColor, setTextColor:setTextColor,
    x:x, setX:setX,
    y:y, setY:setY

  };

  
  const handleCloseModal = () => {
     
    setOpenModal(false);
    let newSlides = [...slides];
    newSlides[slideId].elements[elementId] = {
      
      type:'text',
      width:textWidth,
      height:textHeight,
      x:x,
      y:y,
      fontSize: fontSize,
      textColor: textColor,
      content:textContent
    };

    setSlides(newSlides);
    
    
  };

  const EditContent = () => {

    if (! openModal){
      setOpenModal(true);
    }

  }; 
  
  const deleteContent = () => {
    //newSlides[slideId].elements[elementId]
    let Elements = slides[slideId].elements;
    let newElements = [...Elements.slice(0, elementId), ...Elements.slice(elementId + 1)];
    let newSlides = [...slides];
    newSlides[slideId].elements = newElements;
    setSlides(newSlides);

  };
  return(
    <>
      <Box
        //onClick = {EditContent}
        onDoubleClick={EditContent}
        key={elementId}
        className="slide-element"
        sx={{
          position: 'absolute',
          width: `${element.width}%`,
          height: `${element.height}%`,
          top: `${element.y}%`,
          left: `${element.x}%`,  
          border: '1px solid lightgrey',
          padding: '8px',
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          zIndex: elementId + 1, // Adjust zIndex based on the order of elements
          overflow:"hidden"
      }}
>

  {element.type === 'text' && (
    <Typography
      variant="body1"
      sx={{
        fontSize: `${element.fontSize || 1}em`, // Use element.fontSize if defined
        color: element.textColor || '#000', // Use element.color if defined
        fontFamily:slides[slideId].fontFamily
      }}
      onContextMenu={(event) => {
        event.preventDefault();
        deleteContent();
      }}
    >
      {element.content}
      
    </Typography>
  )}
  <EditTextModal open = {openModal} onClose = {handleCloseModal} inputProps = {modalProps}/>
  </Box>
  
    </>
  )
  
  
}

export default TextElement;