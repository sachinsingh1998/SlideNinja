import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Alert, Box, Button, Container, Paper, TextField, Typography } from '@mui/material';


const RegisterUser = ({ setTokenFn }) => {

  //console.log(setTokenFn);

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('None');

  //password check
  const ValidatePasswordMatch = () => {
      
      if (password !== confirmPassword){
        setErrorMessage('Password and Confirm Password do not match');
      }
    };
  const navigate = useNavigate();
  
  const registerUser = (e) => {
    
    e.preventDefault();

    //axios request
    
    if (!email.length  || !password.length){
      console.log(`${email} ${name} ${password}`);
      setErrorMessage("Please enter non empty values");
      return;
    }
    
    if (password !== confirmPassword){
      
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
      setErrorMessage("Enter valid email");
      return;
    }

    axios.post('http://localhost:5005/admin/auth/register', {
      
      //validate register data first and display error message
      email:email,
      password:password,
      name: name
    })
    .then( (response) => {
      
      localStorage.setItem('token', response.data.token);
      setTokenFn(localStorage.getItem('token', response.data.token));
      navigate('/dashboard');
    })
    .catch(function () {
      setErrorMessage("Registration unsuccessful, Please try again")
    });
    //axios request end
  }
  
  return (

    <>

      <Container maxWidth = "xs">
              
        <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
            
          <Typography component="h1" variant="h5" sx = {{ textAlign: "center" }}>
            Register User
          </Typography>
          
          <Box
            component="form"
            onSubmit={registerUser}
            sx={{ mt:1 }}
            noValidate
          >
                      
            <TextField

              placeholder='Enter Username'
              fullWidth
              required
              sx={ {mb:2} }
              value={name}
              onChange={event => setName(event.target.value)}
            />

            <TextField
              placeholder='Enter Email'
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

            <TextField
              
              placeholder='Confirm Password'
              type='password'
              fullWidth
              required
              autoFocus
              sx={ {mb:2} }
              value={confirmPassword}
              onChange = {event => setConfirmPassword(event.target.value)}
              onBlur={event => ValidatePasswordMatch(event.target.value)} 
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
                  Register User
              </Button>

          </Box>                

        </Paper>

        </Container>
    </>
  )
}

export default RegisterUser
