import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import LoadingSpinner from '../../../Loader/loader';

const ViewC = () => {
  const navigate = useNavigate();
  const { id } = useParams();

    const [values, setValues] = useState([""]);
    const [option, setOption] = useState([]);
    const [join, setJoin] = useState(
      {
        CourseId: `${id}`,
        StudentId: "",
        fees: "",
        amount: "",
      }
    );
    const [isLoading, setIsLoading] = useState(true);

    const fetchData = () => {
      axios.get(`/course/${id}/fetch`, values).then(response => {
        setIsLoading(false);
        setValues(response.data.data);
        console.log("values",values)
      }).catch((error) => {
        console.log(error)
        toast.error(error.message);
       })
    }
    
    const fetchOption = () => {
      axios.get(`/list/students/options?keyword=`, option).then(response => {
        setIsLoading(false);
        setOption(response.data.data);
      }).catch((error) => {
        console.log(error)
        toast.error(error.message);
       })
    }
    useEffect(() => {
     fetchData();
     fetchOption();
    }, []);

     const handleChanges= (event) => {
      console.log(join);
      setJoin({...join, [event.target.name]: event.target.value});
     }

    const handleSubmits = (e) => {
      e.preventDefault();
      axios.post(`/join/course`, join).then(response => {
        setIsLoading(false);
        console.log(response);
        setJoin(response.data.data);
        fetchData();
    }).catch((error) => {
      console.log(error)
      toast.error(error.message);
     })
  }


  let data= values.CourseStudents;
if(!isLoading){
  return (
    <>
    <ol className="breadcrumb ms-3">
    <li className="breadcrumb-item active" aria-current="page">Courses</li>
    <li className="breadcrumb-item active" aria-current="page">View</li>
  </ol>
    <p>Name : {values.name}</p>
    <p>Duration : {values.duration} months</p>
    <p>Description : {values.description}</p>

    <form className='mx-5 p-5' onSubmit={(e) =>handleSubmits(e)}>    
    <h1>Join Course</h1>
    <div className='my-1 mx-5'>
    <label htmlFor="exampleInputName1" className="form-label">Course ID</label>
    <input type="number" className="form-control" name="courseId" id="exampleInputName1" value={id} onChange={(event) => handleChanges(event)} />
    </div>
      <div className="my-1 mx-5">
    <label htmlFor="exampleInputName1" className="form-label">Select Student</label>
    <select className="form-select" aria-label="Default select example" name="StudentId" onChange={(event) => handleChanges(event)}>
      <option>Select an option</option>
  {option?.map((opt, index) => (
    <option value={opt.value} key={index}>{opt.label}</option>
    ))}
</select>
  </div>
  <div className="my-1 mx-5">
    <label htmlFor="exampleInputName1" className="form-label">Fees</label>
    <input type="number" className="form-control" name="fees" id="exampleInputName1" onChange={(event) => handleChanges(event)}/>
  </div>

  <div className="my-1 mx-5">
    <label htmlFor="exampleInputName1" className="form-label">First Installment</label>
    <input type="number" className="form-control" name="amount" id="exampleInputName1" onChange={(event) => handleChanges(event)}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
  </form>

  <h1>Student in the Course</h1>
    <table className="table">
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Join fees</th>
              <th scope="col">Fee Submission</th>
              <th scope="col">Joined date</th>
              <th scope="col" className="ps-4">
               Action
              </th>
            </tr>
          </thead>
          <tbody>
             {data?.map((val,index) => (
            <tr key={index}>
               <td>{val.id}</td>
               <td>{val.Student.firstName}</td>
               <td>{val.Student.email}</td>
               <td>{val.fees}</td>
               <td>{val.Fees[0].count_amount}</td>
               <td>{val.createdAt}</td>
               <td><i className="fs-5 bi-eye" onClick={() => navigate(`/feesdetail/${val.id}`)}></i></td>
              </tr>
             ))}
          </tbody>
        </table>

    <ToastContainer />
    </>

  )
    } else {
      return (
      <LoadingSpinner />
      )}
}

export default ViewC