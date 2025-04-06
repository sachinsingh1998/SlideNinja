import { Box } from "@mui/material";
import EditVideoModal from "./EditVideoModal";
import { useState } from "react";
const VideoElement = ({element, slideId, elementId, slides, setSlides}) => {

  
  //modal functions
  const [openModal, setOpenModal] = useState(false);
  
  const [elementWidth, setElementWidth] = useState(element.width); // Size in px
  const [elementHeight, setElementHeight] = useState(element.height);
  
  const [videoUrl, setVideoUrl] = useState(element.url);
  const [autoplay, setAutoPlay] = useState(true);

  

  const [x, setX] = useState(element.x);
  const [y, setY] = useState(element.y);

  const modalProps =  {
    
    elementWidth: elementWidth, setElementWidth: setElementWidth,
    elementHeight: elementHeight, setElementHeight: setElementHeight,
    videoUrl: videoUrl, setVideoUrl: setVideoUrl,
    autoplay: autoplay, setAutoPlay: setAutoPlay,
    x:x, setX:setX,
    y:y, setY:setY

  };
  
  const handleCloseModal = () => {

    setOpenModal(false);    
  };

  const EditContent = () => {
    handleCloseModal();
    //alert(`Will Edit video element for now`)
    
    let newSlides = [...slides];
    newSlides[slideId].elements[elementId] = {
      
      type:'video',
      width:elementWidth,
      height:elementHeight,
      url:videoUrl,
      autoplay:true,
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
        onDoubleClick={ShowModal} // Trigger modal for editing properties
        sx={{
          position: 'absolute',
          width: `${element.width}%`,
          height: `${element.height}%`,
          top: `${element.y}%`,
          left: `${element.x}%`,
          padding: '8px',
          boxSizing: 'border-box',
          backgroundColor: '#fff',
          zIndex: elementId + 1,
          overflow: "hidden",
          border: '2px dashed blue', // Visible border to indicate editability
          cursor: 'pointer',         // Cursor changes on hover to indicate interaction
        }}
        onContextMenu={(event) => {
          event.preventDefault(); // Prevent default context menu
          deleteContent();
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            overflow: 'hidden',
          }}
        >
          <iframe
            src={`${element.url}${element.autoplay ? '?autoplay=1' : ''}`}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </Box>

        {/* Modal for editing video properties */}
        <EditVideoModal open={openModal} onClose={handleCloseModal} inputProps={modalProps} onSubmit={EditContent} />
      </Box>
  
    </>
  )
}

export default VideoElement;