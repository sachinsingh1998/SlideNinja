import { Button } from "@mui/material"
import AddTextModal from "./AddTextModal";
import { useState } from "react";

const AddText = ({slides, setSlides, slideId }) => {

  const [ openModal, setOpenModal] = useState(false);
  
  const [textContent, setTextContent] = useState("");
  const [textWidth, setTextWidth] = useState(); // Size in px
  const [textHeight, setTextHeight] = useState();
  const [fontSize, setFontSize] = useState(1); // em as decimal
  const [textColor, setTextColor] = useState("#000000");

  const modalProps =  {
    textContent : textContent, setTextContent : setTextContent,
    textWidth : textWidth , setTextWidth :setTextWidth, 
    textHeight: textHeight, setTextHeight :setTextHeight,
    fontSize: fontSize, setFontSize:setFontSize,
    textColor: textColor, setTextColor:setTextColor

  };

 // console.log(`Dekhna pc ${JSON.stringify(modalProps)}`);


  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);

  };

  const AddText = () => {
    
    setOpenModal(false);
    
    let newSlides = [...slides];
    newSlides[slideId].elements.push({
      
      type:'text',
      width:textWidth,
      height:textHeight,
      x:0,
      y:0,
      fontSize: fontSize,
      textColor: textColor,
      content:textContent
    });
    setSlides(newSlides);
    

  };

  return (
    <>
      <Button onClick = {handleOpenModal}>Add Text</Button>
      <AddTextModal open = {openModal} onClose = {handleCloseModal} 
      inputProps = {modalProps} onSubmit = {AddText}
      />
    </>
    
  );
};

export default AddText;