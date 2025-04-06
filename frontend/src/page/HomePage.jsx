
import { Box, Typography } from '@mui/material';

const HomePage = () => {


  return (

    <Box className = "homepage-content"
    
      sx = {{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        textAlign: 'center'
      }}
    >
      <Typography variant = "h1">Welcome!!</Typography>
    </Box>

  );
};
  
export default HomePage;
  