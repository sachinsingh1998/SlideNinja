import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert, Box, Button, Container, Paper, TextField, Typography } from '@mui/material';

function LoginUser({ setTokenFn} ) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('None');

  const navigate = useNavigate();

  const loginUser = (e) => {
    
    e.preventDefault();
    axios.post('http://localhost:5005/admin/auth/login', {
      
      //validate register data first and display error message
      email:email,
      password:password,
    })
      .then( (response) => {
        
        localStorage.setItem('token', response.data.token);
        setTokenFn(localStorage.getItem('token', response.data.token));
        navigate('/dashboard');
        //console.log(localStorage.getItem('token'));
      })
      .catch(function () {
          setErrorMessage('Login failed!');
          //alert("Login failed");
      });
    //axios request end
  }
  
  return (
    <>
        
       <Container maxWidth = "xs">
        
        <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
          
          <Typography component="h1" variant="h5" sx = {{ textAlign: "center" }}>
              LogIn
          </Typography>
          <Box

            component="form"
            onSubmit={loginUser}
            sx={{ mt:1 }}
            noValidate
          >
                      
            <TextField

              placeholder='Enter Username'
              fullWidth
              required
              
              sx={ {mb:2} }
              value={email}
              onChange={event => setEmail(event.target.value)}

              />

              <TextField

                placeholder='Enter Password'
                type='password'
                fullWidth
                required
                autoFocus
                sx={ {mb:2} }
                value={password}
                onChange={event => setPassword(event.target.value)}
                  
              />

              {
                errorMessage != 'None' && (
                  <Alert variant="filled" severity="error">
                      {errorMessage}
                  </Alert>
              )}
              
              <Button
                type='submit'
                variant='contained'
                fullWidth sx={{mt: 1}}
              >
                Login
              </Button>

          </Box>                

      </Paper>

      </Container>
      
    </>
  )
}

export default LoginUser
