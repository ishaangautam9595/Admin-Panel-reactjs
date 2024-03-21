import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const EditC = () => {
  const navigate = useNavigate();
    const [values, setValues] = useState({})
  const { id } = useParams();

  const fetchData = () => {
    axios.get(`/course/${id}/fetch`, values).then(response => {
  setValues(response.data.data);
  toast.success(response.data.message);
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
       axios.put(`/course/${id}/update`, values).then(response => {
       toast.success("Edited Successfully")
        setValues(response.data.data);
        navigate('/list');
  }).catch((error) => {
    toast.error(error.message);
   })
};
  return (
    <>
    <ol className="breadcrumb ms-3">
    <li className="breadcrumb-item active" aria-current="page">Courses</li>
    <li className="breadcrumb-item active" aria-current="page">Edit</li>
  </ol>
  <form className='mx-5 border p-5 shadow-lg' onSubmit={(event) => handleSubmit(event)}>
      <div className='d-flex'>
      <div className="my-1 mx-5 w-50">
    <label htmlFor="exampleInputName1" className="form-label">Name</label>
    <input type="name" className="form-control" Value={values.name} name="name" id="exampleInputName1" onChange={(event) => handleChange(event)}/>
  </div>
  <div className="my-1 mx-5 w-50">
    <label htmlFor="exampleInputName1" className="form-label">Fees</label>
    <input type="number" className="form-control" Value={values.fees} name="fees" id="exampleInputName1" onChange={(event) => handleChange(event)}/>
  </div>
  </div>
  <div className='d-flex'>
  <div className="my-1 mx-5 w-50">
    <label htmlFor="exampleInputName1" className="form-label">Duration</label>
    <input type="number" className="form-control" Value={values.duration} name="duration" id="exampleInputName1" onChange={(event) => handleChange(event)}/>
  </div>
  <div className="my-1 mx-5 w-50">
    <label htmlFor="exampleInputNumber1" className="form-label">Description</label>
    <input type="text" className="form-control" Value={values.description} name="description" id="exampleInputNumber1" onChange={(event) => handleChange(event)}/>
  </div>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<ToastContainer />
    </>
  )
}

export default EditC