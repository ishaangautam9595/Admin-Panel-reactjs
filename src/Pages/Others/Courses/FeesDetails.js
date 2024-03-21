import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const FeesDetails = () => {

  const { id } = useParams();
  const [data, setData] = useState([]);

  const fetchData = () => {
  axios.post(`/student/fee/details`, { CourseStudentId: id }).then(response => {
    console.log(response);
    setData(response.data.data);
    toast.success(response.data.message);
}).catch((error) => {
  console.log(error)
  toast.error(error);
 })
}

useEffect(() => {
  fetchData();
}, []);

console.log(data[0]);

  return (
    <>
    <h1>Student in the Course</h1>
    <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Course Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Created date</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((val) => (
            <tr>
               <td>{val.id}</td>
               <td>{val.CourseStudent.Student.firstName + " " + val.CourseStudent.Student.lastName}</td>
               <td>{val.CourseStudent.Student.email}</td>
               <td>{val.CourseStudent.Course.name}</td>
               <td>{val.amount}</td>
               <td>{val.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <ToastContainer />
    </>
  )
}

export default FeesDetails