import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const LoggedOutNavbar = () => {

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
       
        {/* Navbar Links */}
        <Box>
          <Button color="inherit" component={Link} to="/" sx={{ textTransform: 'none' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/login" sx={{ textTransform: 'none' }}>
            Login
          </Button>
          <Button color="inherit" component={Link} to="/register" sx={{ textTransform: 'none' }}>
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default LoggedOutNavbar;
