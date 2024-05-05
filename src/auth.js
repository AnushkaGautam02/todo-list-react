export const setLoggedIn = (userData) => {
    localStorage.setItem('isLoggedIn', true);
    localStorage.setItem('userData', JSON.stringify(userData));
  };
  
  export const getLoggedIn = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
  };
  
  export const getUserData = () => {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : null;
  };