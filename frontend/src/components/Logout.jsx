import { useNavigate } from "react-router-dom"
import axios from "axios";

const Logout = ( {token, setToken }) => {
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
        <>
            <hr/>
            <button onClick={logoutUser}>Logout</button>
          </>
    )
}

export default Logout;