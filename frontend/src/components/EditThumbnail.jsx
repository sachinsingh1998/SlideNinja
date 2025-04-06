import { useState } from "react";
import { fileToDataUrl } from "../helper";
import axios from "axios";

export default function EditThumbnail( {id, store, token, setStore}){
  
  const [imageUrl, setImageUrl ] = useState('');
  
  const editThumbnail = () => {
    //alert(`chud gaye ${imageUrl}`);
    fileToDataUrl(imageUrl)
    .then(imageId => {
      //alert(`Chud gaye ${imageId}`);
      //START UPLOADING
      const updatedPresentations = store.presentation.map((presentation) => {
      
      
        console.log('Checking presentation id:', presentation.id); // Log the ID for debugging
        if (presentation.id === id) {
          // Log the matched ID
          presentation['thumbnail'] = imageId;
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
    })
    .catch( (err) =>{
        console.log(err);
    });
      //end uploading

    })
  };


  return (
    <>
       <input type="file"  onChange={e => setImageUrl(e.target.files[0])} />
      <button onClick={editThumbnail}>Edit Thumbnail</button>
    </>
  )
}