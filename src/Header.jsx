import React, { useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from './redux/actions';
import CreateNotes from './CreateNotes';
function Header({isLoggedIn, userData, logout}) {
  
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
 
 
  
  return (
    <div>
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Todo List</Navbar.Brand>
          <Nav className="justify-content-end align-items-center">
            {
              isLoggedIn ? (
                <>
                <span>{localStorage.setItem("id",userData.id)}</span>
                <span className="text-white mr-3">{ userData.username }</span>
                <input type="hidden" name="userId" value={userData.id} />
                <button className="btn btn-warning ms-4" onClick={handleLogout}>Logout</button>
                
                </>
                
                
              ):
              (
                <>
                <Link to='/login'><button className='btn btn-warning'>Sign In</button></Link>
                <Link to='/'><button className='btn btn-warning ms-4'>Sign Up</button></Link>
                </>
              )
            }
            
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
  userData: state.auth.userData,
});

export default connect(mapStateToProps, {logout})(Header);