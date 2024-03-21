import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const CreateC = () => {
  const [values, setValues] = useState("");

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`/courses`, values).then((response) => {
      console.log(response.data.data);
      setValues(response.data.data);
      toast.success(response.data.message);
    }).catch((error) => {
      toast.error(error.message);
     })
  };
  return (
    <>
      <ol className="breadcrumb ms-3">
        <li className="breadcrumb-item active" aria-current="page">
          Student
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          Create
        </li>
      </ol>
      <form
        className="mx-5 border p-5 shadow-lg"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="d-flex">
          <div className="my-1 mx-5 w-50">
            <label htmlFor="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              name="name"
              id="exampleInputName1"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="my-1 mx-5 w-50">
            <label htmlFor="exampleInputName1" className="form-label">
              Duration
            </label>
            <input
              type="number"
              className="form-control"
              name="duration"
              id="exampleInputName1"
              onChange={(event) => handleChange(event)}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="my-1 mx-5 w-50">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              id="exampleInputEmail1"
              onChange={(event) => handleChange(event)}
            />
          </div>
          <div className="my-1 mx-5 w-50">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Fees
            </label>
            <input
              type="number"
              className="form-control"
              name="fees"
              id="exampleInputEmail1"
              onChange={(event) => handleChange(event)}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default CreateC;
