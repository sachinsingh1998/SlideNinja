import React from 'react';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import Logout from '../Logout';
import axios from 'axios';
//import Logout from './Logout'; // assuming Logout is your custom component

const LoggedInNavbar = ({ token, setToken }) => {

  const navigate = useNavigate();

  const logoutUser = () => {

    axios.post('http://localhost:5005/admin/auth/logout',{}, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then( () => {

      localStorage.removeItem('token');
      setToken(null);
      navigate('/login');          
    })
    .catch( (error) => {
      console.log(error);
    });
    //axios request end
}
  return (
    <AppBar position="sticky" sx={{ mb: 2 }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Button
            component={Link}
            to="/dashboard"
            sx={{
              color: 'white',
              textTransform: 'none',
              marginRight: 2,
              '&:hover': {
                backgroundColor: '#3f51b5',
              },
            }}
          >
            Dashboard
          </Button>

          <Button
            
           
            onClick={logoutUser}
            sx={{
              color: 'white',
              textTransform: 'none',
              marginRight: 2,
              '&:hover': {
                backgroundColor: '#3f51b5',
              },
            }}
          >
            LogOut
          </Button>



          {/*<Logout token={token} setToken={setToken} />*/}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default LoggedInNavbar;
