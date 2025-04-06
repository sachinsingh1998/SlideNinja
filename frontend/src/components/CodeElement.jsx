import { Box } from "@mui/material";
import EditCodeModal from "./EditCodeModal";
import { useState } from "react";
import Prism from 'prismjs';
import 'prismjs/themes/prism.css'; // Import a Prism CSS theme
import 'prismjs/components/prism-c'; 
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';

const CodeElement = ({element, slideId, elementId, slides, setSlides}) => {

  
  //modal functions
  const [openModal, setOpenModal] = useState(false);
  
  const [elementWidth, setElementWidth] = useState(element.width); // Size in px
  const [elementHeight, setElementHeight] = useState(element.height);
  
    
  const [codeContent, setCodeContent] = useState(element.code);
  const [codeFont, setCodeFont] = useState(element.font);
  const [codeLanguage, setCodeLanguage] = useState(element.codeLanguage);

  const [x, setX] = useState(element.x);
  const [y, setY] = useState(element.y);

  const modalProps =  {
    
    elementWidth: elementWidth, setElementWidth: setElementWidth,
    elementHeight: elementHeight, setElementHeight: setElementHeight,
    
    codeContent: codeContent, setCodeContent: setCodeContent,
    codeFont: codeFont, setCodeFont: setCodeFont,
    codeLanguage: codeLanguage, setCodeLanguage: setCodeLanguage,   
    x:x, setX:setX,
    y:y, setY:setY

  };
  
  const handleCloseModal = () => {

    setOpenModal(false);    
  };

  const EditContent = () => {
    handleCloseModal();
    //alert(`Will Edit Code element for now`)
    
    let newSlides = [...slides];
    newSlides[slideId].elements[elementId] = {
      
      type:'code',
      width:elementWidth,
      height:elementHeight,
      x:x,
      y:y,
      code: codeContent,
      font: codeFont,
      language: codeLanguage,
    
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

  return(
    <>
      <Box
        
        key={elementId}
        className="slide-element"
        onDoubleClick={ShowModal}

        sx={{
          position: 'absolute',
          width: `${element.width}%`,
          height: `${element.height}%`,
          top: `${element.y}%`,
          left: `${element.x}%`,
          padding: '8px',
          boxSizing: 'border-box',
          backgroundColor: '#f5f5f5',
          zIndex: elementId + 1,
          overflow: 'auto',
          fontSize: `${element.font}em`,  // Apply user-defined font size
        }}
        onContextMenu={(event) => {
          event.preventDefault();
          deleteContent();
        }}
      >
        <pre
          className={`language-${element.language}`}
          style={{
            fontFamily: 'inherit', // Keep font-family consistent
            whiteSpace: 'pre-wrap', // Preserve whitespace and wrap lines
          }}
        >
          <code dangerouslySetInnerHTML={{ __html: Prism.highlight(element.code, Prism.languages[element.language], element.language) }} />
        </pre>

        <EditCodeModal open={openModal} onClose={handleCloseModal} inputProps={modalProps} onSubmit={EditContent} />
      </Box>
  
    </>
  )
}

export default CodeElement;