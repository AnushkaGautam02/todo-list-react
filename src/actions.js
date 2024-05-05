
import axios from 'axios';
import { loginSuccess, loginFailure } from './redux/actions';

export const loginUser = (email, password) => {
  return (dispatch) => {
    axios
      .get(`https://663626a7415f4e1a5e2672b0.mockapi.io/users?email=${email}`)
      .then((response) => {
        const userData = response.data[0];
        if (userData.email===email && userData.password === password) {
          dispatch(loginSuccess(userData));
          
        } else {
          const status= false
          dispatch(loginFailure(status));
                  
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        dispatch(loginFailure());
      });
  };
};
