import React from "react";
import "./Components.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaughWink } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";

const Sidebar = () => {
  const {page} = useParams();
  console.log("sidebar")
  return (
    <>
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">
          <div className="d-flex flex-column align-items-start align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <Link
              to="/"
              className="d-flex align-items-center pb-3 mb-md-4 me-md-auto text-white text-decoration-none"
            >
              <div className="logoImg m-0 fs-1">
                {" "}
                <FontAwesomeIcon icon={faLaughWink} />
              </div>
              <div className="logoText ms-4">
                <b>ADMIN</b>
              </div>
            </Link>
            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start px-3 "
              id="menu"
            >
              <li className="nav-item ">
                <Link
                  to="/"
                  className="nav-link px-0 align-left text-white d-flex mb-2"
                >
                  <i className="fs-5 bi-grid"></i>{" "}
                  <span className=" ms-2 d-none d-sm-inline mt-1">
                    Dashboard
                  </span>
                </Link>
              </li>
              <li>
                <div className="accordion-item ">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button
                      className="accordion-button collapsed shadow-none Accord border-none me-1"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      {" "}
                      <i className="fs-4 bi-person me-2"></i>
                      Students
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    className="accordion-collapse collapse text-white"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#flush-headingOne"
                  >
                    <div className="accordion-body text-dark">
                      <Link
                        className="text-dark text-decoration-none"
                        to="/list"
                      >
                        List
                      </Link>
                    </div>
                    <div className="accordion-body text-dark">
                      <Link
                        className="text-dark text-decoration-none"
                        to="/create"
                      >
                        Create
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="divider"></li>
              <li>
                <div className="accordion-item ">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button
                      className="accordion-button collapsed shadow-none Accord border-none me-1"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      {" "}
                      <i className="fs-4 bi-book me-2"></i>
                      Courses
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    className="accordion-collapse collapse text-white"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#flush-headingTwo"
                  >
                    <div className="accordion-body text-dark">
                      <Link
                        className="text-dark text-decoration-none"
                        to={`courses/`}
                      >
                        List
                      </Link>
                    </div>
                    <div className="accordion-body text-dark">
                      <Link
                        className="text-dark text-decoration-none"
                        to="/createC"
                      >
                        Create
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item ">
                <a
                  href="/Fees"
                  className="nav-link px-0 align-left text-white d-flex mb-2"
                >
                  <i className="fs-5 bi-cash me-2"></i>{" "}
                  <span className=" ms-2 d-none d-sm-inline mt-1">
                    Fees
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
