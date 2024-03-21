import React from "react";
import './Dashboard.css';
import CountUp from 'react-countup';

const Dashboard = () => {
  return (
    <>
    <div>
    <ol className="breadcrumb ms-3">
    <li className="breadcrumb-item active" aria-current="page">Dashboard</li>
  </ol>
      <div className="row m-3">
        <div className="col">
          <div className="card border-left-primary shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    Users
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800"><CountUp end={100} duration={2} /></div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-left-success shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                    Students
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800"><CountUp end={1000} duration={2} /></div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-left-info shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-info text-uppercase mb-1">
                    Courses
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800"><CountUp end={10} duration={2} /></div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card border-left-warning shadow h-100 py-2">
            <div className="card-body">
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                    Pending
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800"><CountUp end={50} duration={2} /></div>
                </div>
                <div className="col-auto">
                  <i className="fas fa-calendar fa-2x text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Dashboard;
