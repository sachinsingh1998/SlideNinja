import {  useEffect } from "react";
import axios from "axios";

import CreatePresentation from "../components/CreatePresentation";
import ViewPresentation from "../components/ViewPresentation";
 
function Dashboard({token, store, setStore}) {
  
  //updating store upon login
  useEffect(() => { 

    if (token){
      //mc
      axios.get('http://localhost:5005/store', {

        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
        .then( (response) => {
          setStore(response.data.store);
            
        })
        .catch( (err) => {
          console.log(err);
        });
    }
  }, [token]);

  
  return (
    
    <>
      {/**Component to create a new presentation */}
      <CreatePresentation 
        token = {token}
        store = {store}
        setStore = {setStore}
      />
      {/**Code to display list of presentations */}
      <ViewPresentation
        store = {store}
        setStore = {setStore}
      />

    </>
  )
}

export default Dashboard

