import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protectedd = (props) => {
  const {Component} = props;
  const navigate = useNavigate();
  useEffect(() => {
    const tokenn = JSON.parse(localStorage.getItem('token'));
    if(tokenn !== null){
       navigate('/Dashboard');
    } else {
        navigate('/Signin');
    }
  }, [])
    return (
    <Component />
  )
}

export default Protectedd