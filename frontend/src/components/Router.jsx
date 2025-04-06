import { useState, useEffect } from "react";
import LoginUser from "../page/LoginUser";
import RegisterUser from "../page/RegisterUser";
import HomePage from "../page/HomePage";
import Logout from "./Logout";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from "../page/Dashboard";
import EditPresentation from "../page/EditPresentation";
import SlideShowView from "./SlideShow/SlideShowView";
import LoggedOutNavbar from "./LoggedOutComponents/LoggedOurNavbar";
import LoggedInNavbar from "./LoggedInComponents/LoggedInNavBar";
const Router = () => {

    
  const [token, setToken] = useState(null);

  const [store, setStore] = useState(null);
  
  useEffect(() => {    
    setToken(localStorage.getItem('token'));
  }, []);

  return (
    
    <>
      <BrowserRouter>

        <div>
  
          {token ? (          
            <>
              <LoggedInNavbar token = {token} setToken={setToken}/>
              {/** 
              <Link to = "/dashboard">Dashboard</Link>
              <Logout
                token = {token}
                setToken={setToken}
              />
              */}
            </>
              
          ) : (
            <LoggedOutNavbar/>
          )}
        </div>

        <Routes>
                      
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/register" element = {<RegisterUser setTokenFn = { setToken }/>}/>
          <Route path = "/login" element = {<LoginUser setTokenFn = { setToken } />}/>
          <Route path = "/dashboard" element = {<Dashboard   token = {token} store = {store} setStore={setStore}/>}/>
          <Route path = "/dashboard/edit/:id" element = {<EditPresentation token = {token} store = {store} setStore={setStore}/>}/>
          <Route path = "/slideshow-preview" element={<SlideShowView/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router