import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";


const Courses2 = (page, limit) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRows, setTotalRows] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [coursePerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async (limit, page) => {
      setLoading(true);
      const res = await axios.get(`/courses?limit=11&currentPage=1`);
      setItems(res.data.data);
      setTotalRows(res.data.count);
      setLoading(false);
    };

    console.log(totalRows);

    fetchPosts();
  }, []);

  // Get current posts
  const indexOfLastPost = currentPage * coursePerPage;
  const indexOfFirstPost = indexOfLastPost - coursePerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      <h1 className='text-primary mb-3'>My Blog</h1>
       {items.map((item, index) => (
         <div key = {index}>
         <p>{item.name}</p>
         </div>
       ))}     
      <Pagination
        coursePerPage={coursePerPage}
        totalPosts={items.length}
        paginate={paginate}
      />
    </div>
  );
};
export default Courses2;
