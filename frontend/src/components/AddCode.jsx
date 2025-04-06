import { Button } from "@mui/material"
import { useState } from "react";
import AddCodeModal from "./AddCodeModal";


const AddCode = ({slides, setSlides, slideId }) => {

  const [ openModal, setOpenModal] = useState(false);
  
  const [elementWidth, setElementWidth] = useState(); // Size in px
  const [elementHeight, setElementHeight] = useState();
  
  const [codeContent, setCodeContent] = useState("");
  const [codeFont, setCodeFont] = useState("");
  const [codeLanguage, setCodeLanguage] = useState("");
  
  const modalProps =  {
    elementWidth: elementWidth, setElementWidth: setElementWidth,
    elementHeight: elementHeight, setElementHeight: setElementHeight,
    codeContent: codeContent, setCodeContent: setCodeContent,
    codeFont: codeFont, setCodeFont: setCodeFont,
    codeLanguage: codeLanguage, setCodeLanguage: setCodeLanguage
  
  };

  //opening the modal
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  
  //closing the modal
  const handleCloseModal = () => {
    setOpenModal(false);
    
  };

  const AddCodeFn = () => {
    handleCloseModal();
    let newSlides = [...slides];
    newSlides[slideId].elements.push({
      
      type:'code',
      width:elementWidth,
      height:elementHeight,
      x:0,
      y:0,
      code: codeContent,
      font: codeFont,
      language: codeLanguage
    });
    setSlides(newSlides); 
    
  }

  return (
    <>
      <Button onClick = {handleOpenModal}>Add Code</Button>
      <AddCodeModal open = {openModal} onClose = {handleCloseModal}
        inputProps = {modalProps} onSubmit = {AddCodeFn}
      />
    </>
    
  )
}

export default AddCode;