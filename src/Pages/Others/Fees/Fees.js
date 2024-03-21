import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const Fees = () => {
  const [fees, setFees] = useState([]);
  const [student, setStudent] = useState([]);
  const [user, setUser] = useState({
    CourseId: "",
    StudentId: "",
    amount: "",
  });
  const fetchData = () => {
    axios
      .get(`/list/course/options`)
      .then((response) => {
        setFees(response.data.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const fetchStudent = () => {
    axios
      .get(`/list/students/options?keyword=`)
      .then((response) => {
        setStudent(response.data.data);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  useEffect(() => {
    fetchData();
    fetchStudent();
  }, []);

  const handleChanges = (event) => {
      console.log(user);
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  const handleSubmitss = (event) => {
    event.preventDefault();
    axios
      .post(`/submit/fee`, user)
      .then((response) => {
        setUser(response.data.data);
        toast(response.data.message);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.message);
      });
  };

  return (
    <>
      <form className="mx-5 p-5" onSubmit={(event) => handleSubmitss(event)}>
        <h1>Fees</h1>
        <div className="my-1 mx-5">
          <label htmlFor="exampleInputName1" className="form-label">
            Select Course
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="CourseId"
            onChange={(event) => handleChanges(event)}
          >
            <option>Select an option</option>
            {fees?.map((opt, index) => (
              <option value={opt.value} key={index}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <div className="my-1 mx-5">
          <label htmlFor="exampleInputName1" className="form-label">
            Select Student
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="StudentId"
            onChange={(event) => handleChanges(event)}
          >
            <option>Select an option</option>
            {student?.map((stu, index) => (
              <option value={stu.value} key={index}>
                {stu.label}
              </option>
            ))}
          </select>
        </div>

        <div className="my-1 mx-5">
          <label htmlFor="exampleInputName1" className="form-label">
            First Installment
          </label>
          <input
            type="number"
            className="form-control"
            name="amount"
            id="exampleInputName1"
            onChange={(event) => handleChanges(event)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Fees;
