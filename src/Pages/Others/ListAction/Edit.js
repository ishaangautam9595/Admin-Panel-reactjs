import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const View = () => {
  const [values, setValues] = useState({})
  const { id } = useParams();

  const fetchData = () => {
    axios.get(`/students/${id}/fetch`, values).then(response => {
  setValues(response.data.data);
  toast.success(response.data.message);
    }).catch((error) => {
      toast.error(error.message);
     })
  }
  useEffect(() => {
   fetchData();
  }, []);
  
  const handleChange = (event)=> {
    setValues({...values, [event.target.name]: event.target.value}); 
  }

  const handleSubmit = (event) => {
       event.preventDefault();
       axios.put(`/students/${id}/update`, values).then(response => {
      
        setValues(response.data.data);
  }).catch((error) => {
    toast.error(error.message);
   })
};

  return (
    <>
    <ol className="breadcrumb ms-3">
    <li className="breadcrumb-item active" aria-current="page">Student</li>
    <li className="breadcrumb-item active" aria-current="page">Edit</li>
  </ol>
  <form className='mx-5 border p-5 shadow-lg' onSubmit={(event) => handleSubmit(event)}>
      <div className='d-flex'>
      <div className="my-1 mx-5 w-50">
    <label htmlFor="exampleInputName1" className="form-label">First Name</label>
    <input type="name" className="form-control" Value={values.firstName} name="firstName" id="exampleInputName1" onChange={(event) => handleChange(event)}/>
  </div>
  <div className="my-1 mx-5 w-50">
    <label htmlFor="exampleInputName1" className="form-label">Last Name</label>
    <input type="name" className="form-control" Value={values.lastName} name="lastName" id="exampleInputName1" onChange={(event) => handleChange(event)}/>
  </div>
  </div>
  <div className='d-flex'>
  <div className="my-1 mx-5 w-50">
    <label htmlFor="exampleInputName1" className="form-label">Roll Number</label>
    <input type="number" className="form-control" Value={values.rollNumber} name="rollNumber" id="exampleInputName1" onChange={(event) => handleChange(event)}/>
  </div>
  <div className="my-1 mx-5 w-50">
    <label htmlFor="exampleInputNumber1" className="form-label">DOB</label>
    <input type="date" className="form-control" Value={values.dateOfBirth} name="dateOfBirth" id="exampleInputNumber1" onChange={(event) => handleChange(event)}/>
  </div>
  </div>
  <div className='d-flex'>
  <div className="my-1 mx-5 w-50">
    <label htmlFor="exampleInputName1" className="form-label">Father Name</label>
    <input type="name" className="form-control" Value={values.fatherName} name="fatherName" id="exampleInputName1" onChange={(event) => handleChange(event)}/>
  </div>
  <div className="my-1 mx-5 w-50">
    <label htmlFor="exampleInputName1" className="form-label">Mother Name</label>
    <input type="name" className="form-control" Value={values.motherName} name="motherName" id="exampleInputName1" onChange={(event) => handleChange(event)}/>
  </div>
  </div>
  <div className='d-flex'>
  <div className="my-1 mx-5 w-50">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" Value={values.email} name="email" id="exampleInputEmail1" onChange={(event) => handleChange(event)}/>
  </div>
  <div className="my-1 mx-5 w-50">
    <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
    <input type="text" className="form-control" Value={values.address} name="address" id="exampleInputEmail1" onChange={(event) => handleChange(event)}/>
  </div>
  </div>
  <div className="d-flex">
  <div className="my-1 mx-5 w-50">
    <label htmlFor="exampleInputEmail1" className="form-label">Qualification</label>
    <input type="text" className="form-control" Value={values.qualification} name="qualification" id="exampleInputEmail1" onChange={(event) => handleChange(event)}/>
  </div>
  <div className="my-1 mx-5 w-50">
    <label htmlFor="exampleInputNumber1" className="form-label">Mobile Number</label>
    <input type="number" className="form-control" Value={values.mobNumber} name="mobNumber" id="exampleInputNumber1" onChange={(event) => handleChange(event)}/>
  </div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<ToastContainer />
    </>
  );
};

export default View;
