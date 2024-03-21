import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import DataTable from 'react-data-table-component';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import LoadingSpinner from '../../../Loader/loader';

const Courses = () => {
  const pageref  =useRef(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
      width: "75px",
    },
    {
      name: "Name",
      selector: (row) => row.name,
      width: "300px",
    },
    {
      name: "Fees",
      selector: (row) => row.fees ,
      width: "150px",
    },
    {
      name: "Duration",
      selector: (row) => row.duration,
      width: "150px",
    },
    {
      name: "View",
      cell: (row) =><i className="fs-5 bi-eye" onClick={() => navigate(`/ViewC/${row.id}`)}></i>,
      button: true,
      width:"75px"
    },
    {
      name: "Edit",
      cell: (row) =><i className="fs-5 bi-pencil" onClick={() => navigate(`/EditC/${row.id}`)}></i>,
      button: true,
      width:"75px"
    },
    {
      name: "Delete",
      cell: (row) =><i className="fs-5 bi-trash" onClick={() => navigate(`/DeleteC/${row.id}`)}></i>,
      button: true,
      width:"75px"
    },
  ]
  // function goToNextPage() {
  //   setCurrentPage((page) => page + 1);
  // }
  // function goToPreviousPage() {
  //   setCurrentPage((page) => page - 1);
  // }

  // function changePage(event) {
  //   const pageNumber = Number(event.target.textContent);
  //   setCurrentPage(pageNumber);
  // }
  // const getPaginatedData = () => {
  //   const startIndex = currentPage * per_page - per_page;
  //   const endIndex = startIndex + per_page;
  //   return items.slice(startIndex, endIndex);
  // };

  // const getPaginationGroup = () => {
  //   let start = Math.floor((currentPage - 1) / page) * page;
  //   return new Array(page).fill().map((_, idx) => start + idx + 1);
  // };
  
  const [items, setItems] = useState([]);
  const [totalRows, setTotalRows] = useState(0);
  const [perPage, setPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = (page, per_page) => {
    axios.get(`/courses?limit=${per_page}&currentPage=${page}`).then((res) => {
      setIsLoading(false);
      setItems(res.data.data);
      setTotalRows(res.data.count);
    }).catch((error) => {
      toast.error(error.message);
     })
  };
  const handlePageChange = (page) => {
    setPage(page);
      pageref.current = page;
    fetchData(page, perPage);
  };
  const handlePerRowsChange = async (newPerPage) => {
    setPerPage(newPerPage);
  };

  useEffect(() => {
  setSearchParams({page: pageref.current})
    fetchData(1, perPage);
  }, [page]);

  if(!isLoading) {
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
        paginationServer
        paginationRowsPerPageOptions={[2, 5, 10, 15]}
        paginationTotalRows={totalRows}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handlePerRowsChange}
      />
       <ToastContainer />
      </>
  )
     } else {
       return(
       <LoadingSpinner />)
     }
     
    
}

export default Courses