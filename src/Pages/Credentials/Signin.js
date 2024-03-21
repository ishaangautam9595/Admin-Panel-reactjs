import axios from "axios";
import React, { useState } from "react";
import "./Signin.css";
import {  useNavigate } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
import limage from '../../assets/draw2.webp';
import { toast, ToastContainer } from "react-toastify";

const Signin = () => {
   const navigate = useNavigate();
  const [login, setLogin] = useState({
    email: "",
    password: "",
    loginType: "manual",
  });
  let [token, setToken] = useState("");
   const handleChange = (event) => {
    setLogin({ ...login, [event.target.name]: event.target.value });
   };
   
   const handleSubmit = (event) => {
     event.preventDefault();
     axios.put(`/user`, login).then(response => {
       console.log(response.data);
       setLogin(response.data);
       setToken(response.data.token);
       localStorage.setItem("token", JSON.stringify(response.data.token));
       localStorage.setItem("user", JSON.stringify(response.data.data));
       navigate('/dashboard');
      }).catch((error) => {
        console.log(error);
        toast.error(error.message);
       })
   };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 login-section-wrapper">
            <div className="login-wrapper my-auto">
              <h1 className="login-title">Log in</h1>
              <form onSubmit={(event) => handleSubmit(event)}>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Email"
                    onChange={(event) => handleChange(event)}
                  />
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter Password"
                    onChange={(event) => handleChange(event)}
                  />
                </div>
                <input
                  name="login"
                  id="login"
                  className="btn btn-block btn-primary"
                  type="submit"
                  value="Login"
                />
              </form>
              <p className="login-wrapper-footer-text">
                Don't have an account?{" "}
                <a href="./Register" className="text-reset">
                  Register here
                </a>
              </p>
            </div>
          </div>
          <div className="col-sm-6 px-0 d-none d-sm-block ms-auto">
            <img
              src={limage}
              alt="login image"
              className="login-img"
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signin;
