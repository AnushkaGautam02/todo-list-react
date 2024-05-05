import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Ragister = () => {
  const [data, setDate] = useState({
    username: "",
    email: "",
    password:"",
    cpassword:""
  });
  const navigate = useNavigate();
  const inputHandler = (e) => {
    const { name, value } = e.target;

    setDate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://663626a7415f4e1a5e2672b0.mockapi.io/users", {
        username: data.username,
        email: data.email,
        password:data.password
      })
      .then(() => {
        navigate("/");
      });
  };
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-4 m-auto border rounded my-5 p-4">
          <div className=" pb-3 text-center">
            <h2 className="">Register User</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label className="pb-2">Enter User Name:</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                className="form-control"
                value={data.username}
                onChange={inputHandler}
              ></input>
            </div>
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
              <label className="pb-2">Confirm Password:</label>
              <input
                type="password"
                name="cpassword"
                placeholder="confirm password"
                className="form-control"
                value={data.cpassword}
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
};

export default Ragister;
