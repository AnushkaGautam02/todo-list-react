import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from './actions';
import { connect } from 'react-redux';

function Login({ loginUser, isLoggedIn }) {
  const [data, setDate] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;

    setDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    await loginUser(email, password);

    // Redirect only if the login was successful
    // if (isLoggedIn) {
    //   navigate('/todo');
    // }
    // else{
    //   return "login failed"
    // }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 m-auto border rounded my-5 p-4">
            <div className=" pb-3 text-center">
              <h2 className="">Login</h2>
            </div>
            <form onSubmit={handleSubmit}>
              {
                !isLoggedIn ? (<div className= "text-danger">Email or Password is wrong!!</div>): navigate('/todo')
              }
              <div className="form-group mb-3">
                <label className="pb-2">Enter Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="form-control"
                  value={data.email}
                  onChange={inputHandler}
                ></input>
                
              </div>
              <div className="form-group mb-3">
                <label className="pb-2">Enter Password:</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="form-control"
                  value={data.password}
                  onChange={inputHandler}
                ></input>
              </div>
              <div className="form-group mb-3">
                <button className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { loginUser })(Login);
