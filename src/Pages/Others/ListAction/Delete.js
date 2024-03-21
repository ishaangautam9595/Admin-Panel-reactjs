import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';


const Delete = () => {
    const [values, setValues] = useState();
    const navigate = useNavigate();
    const { id } = useParams();

    const fetchData = () => {
        axios.delete(`/students/${id}/fetch`, values).then(response => {
            setValues(response.data.data);
    }).catch((error) => {
      toast.error(error.message);
     })
}
    useEffect(() => {
        fetchData();
        navigate('/List');
      }, [])
  return (
    <>
    <ToastContainer />
    </>
  )
}

export default Delete