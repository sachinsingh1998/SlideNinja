import { useState } from "react";
import CarouselComponent from "./CarouselComponent";
import { useEffect } from "react";
import axios from "axios";

export default function SlideView ({id, store, token, setStore, targetPresentation, setTargetPresentation } ) {

  const[slides, setSlides ] = useState(targetPresentation.slides)
  //any new addition to slides
  useEffect(() =>{
    const updatedPresentations = store.presentation.map((presentation) => {

      //console.log('Checking presentation id:', presentation.id); // Log the ID for debugging
      if (presentation.id === id) {
        // Log the matched ID
        presentation['slides'] = slides;
        //console.log('Matched ID:', presentation.id); 
        return presentation;
      }
      return presentation;
    });

    let newStore = {...store};
      newStore['presentation'] = updatedPresentations;
      axios.put(
        'http://localhost:5005/store',
        {
            store: newStore,
        },
        {
            headers: {
  
                Authorization: `Bearer ${token}`,
              }
        }
    )
    .then( () => {
        setStore(newStore);
        //setPresentationTitle(newTitle);
        //navigate('/dashboard');
        localStorage.setItem('curSlides', JSON.stringify(slides));
    })
    .catch( (err) =>{
        console.log(err);
    });
  }, [slides])
  
  return(
    <>
     
      <CarouselComponent slides = {slides} setSlides = {setSlides}/>
    </>
  )
}