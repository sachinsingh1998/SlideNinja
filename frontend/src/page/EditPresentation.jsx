import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import DeletePresentation from "../components/DeletePresentation.jsx";
import PresentationTitle from "../components/PresentationTitle.jsx";
import EditThumbnail from "../components/EditThumbnail.jsx";
import SlideView from "../components/SlideView.jsx";


const EditPresentation = ({token, store, setStore  }) => {

  const navigate = useNavigate();
  const [targetPresentation, setTargetPresentation] = useState('')


  useEffect( () => {
    if(store){
      const targetItem = store.presentation.find((item) => item.id === id);
      setTargetPresentation(targetItem);
    }
    else{
      navigate('/dashboard');
    }
  }, []);
  
  
  const { id } = useParams();
  
  return (
    
    <>

      {targetPresentation ? 
        <>
          <PresentationTitle
            id = {id}
            title = {targetPresentation.title}
            store= {store}
            token = {token}
            setStore = {setStore}

          />
          
          <EditThumbnail
            id = {id}
            store= {store}
            token = {token}
            setStore = {setStore}
            
            /><br/>

          <SlideView
            id = {id}
            store= {store}
            token = {token}
            setStore = {setStore}
            targetPresentation = {targetPresentation}
            setTargetPresentation = {setTargetPresentation}
          />
          
          <DeletePresentation
            id ={id}
            store = {store}
            token = {token}
            setStore = {setStore}
          />
          
        </>
      :
      <p>Loading Details</p>
      }
      
    </>
  );
};

export default EditPresentation;
