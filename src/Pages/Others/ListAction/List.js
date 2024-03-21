import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import {toast, ToastContainer} from "react-toastify";
import LoadingSpinner from "../../../Loader/loader";

function App() {
const columns = [
  {
    name: "Id",
    selector: (row) => row.id,
    width: "100px",
  },
  {
    name: "First Name",
    cell: (row) => row.firstName,
    selector: (row) => row.coverimage,
    width: "100px",
  },
  {
    name: "Email",
    selector: (row) => row.email,
    width: "200px",
  },
  {
    name: "RollNo.",
    selector: (row) => row.rollNumber,
    width: "100px",
  },
  {
    name: "Mother Name",
    selector: (row) => row.motherName,
    width: "200px",
  },
  {
    name: "Mobile",
    selector: (row) => row.mobNumber,
    width: "120px",
  },
  {
    name: "View",
    cell: (row) =><i className="fs-5 bi-eye" onClick={() => navigate(`/View/${row.id}`)}></i>,
    button: true,
    width:"50px"
  },
  {
    name: "Edit",
    cell: (row) =><i className="fs-5 bi-pencil" onClick={() => navigate(`/Edit/${row.id}`)}></i>,
    button: true,
    width:"50px"
  },
  {
    name: "Delete",
    cell: (row) =><i className="fs-5 bi-trash" onClick={() => navigate(`/Delete/${row.id}`)}></i>,
    button: true,
    width:"50px"
  },
];

  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = (page, per_page) => {
 
    axios.get(`/students?limit=${per_page}&currentPage=${page}`).then((res) => {
      setIsLoading(false);
      setItems(res.data.data);
      setTotalRows(res.data.count);
      toast.success(res.data.message);
    }).catch((error) => {
     toast.error(error.message);
    })
    };
  const handlePageChange = (page) => {
    fetchData(page, perPage);
  };
  const handlePerRowsChange = async (newPerPage) => {
    setPerPage(newPerPage);
  };

  useEffect(() => {
    fetchData(1, perPage);
  }, [perPage]);
  if(!isLoading){
  return (
    <>
      <ol className="breadcrumb ms-3">
        <li className="breadcrumb-item active" aria-current="page">
          Student
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          List
        </li>
      </ol>
      <DataTable
        columns={columns}
        data={items}
        pagination
        paginationRowsPerPageOptions={[2, 5, 10, 15]}
        paginationServer
        paginationTotalRows={totalRows}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handlePerRowsChange}
      />
      <ToastContainer />
    </>

  )
    } else {
      return (
      <LoadingSpinner />
      )}
}


export default App;
