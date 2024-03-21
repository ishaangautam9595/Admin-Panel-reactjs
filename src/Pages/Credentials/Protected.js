import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
  const { Component } = props;
  const navigate = useNavigate();
  useEffect(() => {
    const tokenn = JSON.parse(localStorage.getItem("token"));
    if (tokenn !== null) {
      
    } else {
      navigate("/Signin");
    }
  }, []);
  return <Component />;
};

export default Protected;
