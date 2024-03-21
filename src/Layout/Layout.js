import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';
import Sidebar from '../Components/Sidebar';
import Header from '../Components/Header';
import Dashboard from '../Pages/Others/Dashboard/Dashboard';
import Courses from '../Pages/Others/Courses/Courses';
import List from '../Pages/Others/ListAction/List';
import Create from '../Pages/Others/ListAction/Create';
import View from '../Pages/Others/ListAction/View';
import Edit from '../Pages/Others/ListAction/Edit';
import Delete from '../Pages/Others/ListAction/Delete';
import Profilee from '../Components/Profile';
import ViewC from '../Pages/Others/Courses/ViewC';
import EditC from '../Pages/Others/Courses/EditC';
import DeleteC from '../Pages/Others/Courses/DeleteC';
import CreateC from '../Pages/Others/Courses/CreateC';
import Protected from '../Pages/Credentials/Protected';
import Fees from '../Pages/Others/Fees/Fees';
import FeesDetails from '../Pages/Others/Courses/FeesDetails' 
import Courses2 from '../Pages/Others/Courses/Courses2';
import Profile2 from '../Components/Profile2';

const Layout = () => {
  return (
    <>
      <div className="row m-0 p-0">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10 m-0 p-0">
          <Header />
    <Routes> 
    <Route path="/dashboard" element={<Protected Component={Dashboard} />} />
        <Route path = '/List' element={<Protected Component={List} />} />
        <Route path = '/create' element={<Protected Component={Create} />} />
        <Route path = '/courses/*' element={<Protected Component={Courses} />} />
        <Route path = "/view/:id" element={<Protected Component={View} />} />
        <Route path = "/edit/:id" element={<Protected Component={Edit} />} />
        <Route path = "/delete/:id" element={<Protected Component={Delete} />} />
        <Route path = "/profile" element={<Protected Component={Profile2} />} />
        <Route path = "/viewC/:id" element={<Protected Component={ViewC} />} />
        <Route path = "/editC/:id" element={<Protected Component={EditC} />} />
        <Route path = "/deleteC/:id" element={<Protected Component={DeleteC} />} />
        <Route path = '/createC' element={<Protected Component={CreateC} />} />
        <Route path = '/Fees' element = {<Protected Component={Fees} />} />
        <Route path = '/feesdetail/:id' element={<Protected Component={FeesDetails} />} />
        <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
      </div>
      </div>
    </>
  )
}

export default Layout
