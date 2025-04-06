import { useEffect, useState } from "react";

import { Box, Typography } from "@mui/material";
import IndElement from "./IndElement";

const SlideShowView = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentSlideContent, setCurrentSlideContent] = useState();

  useEffect(() => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const slideParam = urlParams.get('slide');
    if (slideParam) {
      setCurrentSlideIndex(parseInt(slideParam, 10));
      //console.log(currentSlideContent);
    }
    

  }, []);
  
  //retrieving slide data
  useEffect(() => { 
    if(currentSlideIndex >= 0){
      const OpenSlidesString = localStorage.getItem('curSlides');
      //alert(OpenSlidesString);
      const curOpenSlides = JSON.parse(OpenSlidesString)[currentSlideIndex];
      console.log(`Have to display ${JSON.stringify(curOpenSlides[currentSlideIndex])}`);
      setCurrentSlideContent(curOpenSlides);
    }

  }, [currentSlideIndex]);
  
  return (
    <>
      <Box
        sx={{
          position: 'relative', // To allow absolute positioning of children relative to this container
          width: '100vw',       // Full viewport width
          height: '100vh',      // Full viewport height
          overflow: 'hidden',   // Prevents overflow of elements outside the screen
          
        }}
        >
        {currentSlideContent && currentSlideContent.elements.map((element, elementId) => (
          <IndElement key={elementId} element={element} elementId={elementId} />
        ))}
      </Box>
    </>
  );
  
};
export default SlideShowView;