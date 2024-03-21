import React, { useState } from "react";
import "./Signin.css";
import axios from "axios";
import limage from '../../assets/draw2.webp';
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
  const [user, setUser] = useState({
    firstName:'',
    lastName:'',
    email: '',
    password:'',
    gender:'',
    loginType:'manual',
  });

  const handleChange = (event) => {
    setUser({...user, [event.target.name] : event.target.value});
  }

  const handleSubmit = async (event) => {
    console.log("register",user);
    event.preventDefault();
    await axios.post(`/user`,user).then(response => {
      console.log(response.data);
      setUser(response.data);
    }).catch((error) => {
      console.log(error);
      toast.error(error.message);
     })
   
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-6 login-section-wrapper">
            <div className="login-wrapper my-auto">
              <h1 className="login-title">Register</h1>
              <form onSubmit={(event)=> handleSubmit(event)}>
                <div className="form-group">
                  <label htmlFor="name">First Name</label>
                  <input
                    type="name"
                    name="firstName"
                    id="firstName"
                    className="form-control"
                    placeholder="Enter First Name"
                    onChange={(event) => handleChange(event)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="name">Last Name</label>
                  <input
                    type="name"
                    name="lastName"
                    id="lastName"
                    className="form-control"
                    placeholder="Enter Last Name"
                    onChange={(event) => handleChange(event)}
                  />
                </div>
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
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(event) => handleChange(event)}
                  />
                  </div>
                   <div className="form-group">
                  <label htmlFor="password">Gender</label>
                  <input
                    type="name"
                    name="gender"
                    id="gender"
                    className="form-control"
                    placeholder="Enter Gender"
                    onChange={(event) => handleChange(event)}
                  />
                </div>
                
                <input
                  name="login"
                  id="login"
                  className="btn btn-block btn-primary"
                  type="submit"
                  value="Register"
                />
              </form>
              <p className="login-wrapper-footer-text">
                Have an account?{" "}
                <a href="./Signin" className="text-reset">
                  SignIn here
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

export default Register;
