import { useState } from 'react';
import Slider from 'react-slick';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';

import { Alert } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AddSlide from './AddSlide';
import DeleteSlide from './DeleteSlide';

import AddText from './AddText';
import TextElement from './TextElement';
import AddImage from './AddImage';
import ImageElement from './ImageElement';
import AddVideo from './AddVideo';
import VideoElement from './VideoElement';
import AddCode from './AddCode';
import CodeElement from './CodeElement';
import FontSelect from './FontSelect';
import EditBackground from './EditBackground';
//import SlideShowView from './SlideShow/OpenSlideShowView';
import OpenSlideShowView from './SlideShow/OpenSlideShowView';

const CarouselComponent = ({ slides, setSlides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMessage, setErrorMessage ] = useState('');
  //const [elements, setElements ] = useState(currentSlide.elements);

  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => setCurrentSlide(next),
    prevArrow: <CustomArrow disabled={currentSlide === 0} direction="left" />,
    nextArrow: <CustomArrow disabled={currentSlide === slides.length - 1} direction="right" />,
  };

  
  return (
    <Box sx={{ width: "80%", margin: "auto", position: "relative" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          
          
          <Box
            key={index}
            className="slide"
            sx={{
              height: 300,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#f0f0f0',
              position: 'relative',
            }}
          >
            <AddSlide slides = {slides} setSlides = {setSlides} />
            <DeleteSlide id = {index} slides = {slides} setSlides = {setSlides} setErrorMessage = {setErrorMessage}/>
            <AddText slides = {slides} setSlides = {setSlides} slideId = {index} />
            <AddImage slides = {slides} setSlides = {setSlides} slideId = {index}/>
            <AddVideo slides = {slides} setSlides = {setSlides} slideId = {index} />
            <AddCode slides = {slides} setSlides = {setSlides} slideId = {index} />
            <FontSelect slides = {slides} setSlides = {setSlides} slideId = {index} />
            <EditBackground slides = {slides} setSlides = {setSlides} slideId = {index}/>
            <OpenSlideShowView/>
            {/* Render each element in the slide */}
            <Box 
              sx={{ 
                position: 'relative', 
                width: '100%', 
                height: '100%',
                background:
                slide.background.type === "solid"
                  ? slide.background.solid.color
                  : slide.background.type === "gradient"
                    ? `linear-gradient(${slide.background.gradient.direction}, ${slide.background.gradient.startColor}, ${slide.background.gradient.endColor})`
                    : slide.background.type === "image"
                      ? `url(${slide.background.image.url}) no-repeat center center / cover`
                      : "#fff", // Default background
              }}>
                  
              { (slide.elements) && slide.elements.map((element, idx) => (
                
                <>
                                    
                  {/*<AddText slides = {slides} setSlides = {setSlides} />*/}
                  {element.type === 'text' && 
                    <TextElement element = {element} slideId = {index} elementId = {idx} slides = {slides} setSlides = {setSlides}/>
                  }
                  {element.type === 'image' && 
                    <>
                      <ImageElement element = {element} slideId = {index} elementId = {idx} slides = {slides} setSlides = {setSlides}/>
                      {/*<p>Image: {JSON.stringify(element)}</p>*/}
                    </>
                  }
                  {element.type === 'video' && 
                    <>
                      <VideoElement element = {element} slideId = {index} elementId = {idx} slides = {slides} setSlides = {setSlides}/>
                      {/*<p>Video: {JSON.stringify(element)}</p>*/}
                    </>
                  }

                  {element.type === 'code' && 
                    <>
                      <CodeElement element = {element} slideId = {index} elementId = {idx} slides = {slides} setSlides = {setSlides}/>
                      {/*<p>Code: {JSON.stringify(element)}</p>*/}
                    </>
                  }
                  
                </>
                
              ))}
            </Box>
                        

            {/* Slide number display at the bottom left */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 8,
                left: 8,
                width: 50,
                height: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1em',
                color: '#555',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderRadius: '4px',
              }}
            >
              {index + 1}
            </Box>
            {errorMessage && 
              <Alert 
                variant="filled" 
                severity="error"
                sx={{
                  position: 'absolute',
                  top: 16, // Adjust to place the alert a bit away from the top
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '90%', // Ensures it fits within the width of the container
                  maxWidth: '500px', // Limits the maximum width
                  zIndex: 10, // Make sure it appears above other content
                  marginTop: 16, // Adds some margin for spacing if necessary
                }}
              >
                {errorMessage}                    
              </Alert>
            }
            
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

const CustomArrow = ({ onClick, disabled, direction }) => {
  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      sx={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        color: disabled ? "rgba(0, 0, 0, 0.3)" : "rgba(0, 0, 0, 0.7)",
        ...(direction === "left" ? { left: -30 } : { right: -30 }),
        "&:hover": {
          backgroundColor: disabled ? "transparent" : "rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      {direction === "left" ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
    </IconButton>
  );
};

export default CarouselComponent;
