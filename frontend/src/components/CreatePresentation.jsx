import { useState } from "react";
import { Button } from "@mui/material";
import {v4 as uuidv4 } from 'uuid';
import axios from "axios";
import { fileToDataUrl } from "../helper";
import CreatePresentationModal from "./LoggedInComponents/CreatePresentationModal";

const  CreatePresentation = ({ token, store, setStore }) => {

  const [open, setOpen] = useState(false);
  const [presentationName, setPresentationName] = useState('');
  const [presentationDescription, setPresentationDescription] = useState('');
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 
  const [imageUrl, setImageUrl ] = useState('');


  const NewPresentation = () =>{
    //alert(`Should open popup for now`);
    handleOpen();
  };

  //method to create new presentation
  const createPresentation = () =>{
    //alert(`Will be creating a presentation ${presentationName}`);
    let newStore = {...store};
    //if store doesnt have any presentation
    if (!('presentation' in newStore)){
        newStore['presentation'] = [];
    }
    // if no thumbnail was attached
    if (! imageUrl){
      
      //no image url
      newStore['presentation'].push({
        //adding newpresentation
        "id":uuidv4(),
        "title":presentationName,
        "description":presentationDescription,
        "thumbnail":imageUrl,
        "slides":[
          //empty slide
          {
            elements:[],
            fontFamily:"cursive",
            //background
            background: {
          
              type: "solid", // "solid", "gradient", or "image"
              solid: {
                color: "#800000",
              },
              gradient: {
                startColor: "#ffffff",
                endColor: "#000000",
                direction: "to right",
              },
              image: {
                url: null,
              }
            }
          }    
        ]
      });

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
      .then( (response) => {
          console.log(`Response from CreatePresentation ${response}`);
          setStore(newStore);
          handleClose();
      })
      .catch( (err) =>{
          console.log(err);
      });

    }
    // if thumbnail has been attached
    else{
      fileToDataUrl(imageUrl)
      .then( imageId => {
        newStore['presentation'].push({
          //adding newpresentation
          "id":uuidv4(),
          "title":presentationName,
          "description":presentationDescription,
          "thumbnail":imageId,
          "slides":[
            //empty slide
            {
              elements:[],
              fontFamily:"cursive",
              //background
              background: {
            
                type: "solid", // "solid", "gradient", or "image"
                solid: {
                  color: "#800000",
                },
                gradient: {
                  startColor: "#ffffff",
                  endColor: "#000000",
                  direction: "to right",
                },
                image: {
                  url: null,
                }
              }
            }    
          ]
        });
  
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
        .then( (response) => {
            console.log(`Response from CreatePresentation ${response}`);
            setStore(newStore);
            handleClose();
        })
        .catch( (err) =>{
            console.log(err);
        });

      });
      //end of asynchronous call

    }
    
  };

  return(
    <>
       <Button
        
        variant="contained"         
        color="primary"             
        size="small"                
                           
        onClick={NewPresentation}   
        sx={{
          mt: 2,                    
          fontWeight: 'bold',       
          borderRadius: 3,          
          padding: '10px 20px',     
        }}
      >
      New Presentation
    </Button>
      <CreatePresentationModal
        open = {open} handleClose={handleClose} presentationName={presentationName} setPresentationName={setPresentationName}
        presentationDescription={presentationDescription} setPresentationDescription={setPresentationDescription}
        setImageUrl={setImageUrl} createPresentation={createPresentation}
      />
      
    </>
  );
};
export default CreatePresentation;