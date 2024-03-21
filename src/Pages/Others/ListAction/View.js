import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import LoadingSpinner from "../../../Loader/loader";

const View = () => {

  const [values, setValues] = useState("");
  const [isLoading, setIsLoading] = useState(true);

    const { id } = useParams();

    const fetchData = () => {
      axios.get(`/students/${id}/fetch`, values).then(response => {
        setIsLoading(false);
        setValues(response.data.data);
        toast(response.data.message);
      }).catch((error) => {
        toast.error(error.message);
       })
    }
    useEffect(() => {
     fetchData();
    }, []);

    
if(!isLoading){
  return (
    <>
    <h1 className="mb-4 text-decoration-underline">Details</h1>
    <div className="row">
      <p>First Name: {values.firstName}</p>
      <p>Last Name: {values.lastName}</p>
      <p>Roll No.: {values.rollNumber}</p>
      <p>Email: {values.email}</p>
      <p>Father Name: {values.fatherName}</p>
      <p>Mother Name: {values.motherName}</p>
      <p>Qualification: {values.qualification}</p>
      <p>Mobile Number: {values.mobNumber}</p>
      <p>Address: {values.address}</p>
    </div>
    <ToastContainer />
      </>
  )
     } else {
       return(
       <LoadingSpinner />)
     }
     
    
}

export default View;
