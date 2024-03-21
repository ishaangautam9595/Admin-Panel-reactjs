import React from "react";
import { useNavigate } from "react-router-dom";
import "./Components.css";
import imagee from "../assets/98681.jpeg";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        <div className="container">
          <div className="input-group">
            <div className="form-outline">
              <input
                id="search-input"
                type="search"
                placeholder="Search for..."
                className="form-control text-muted"
              />
            </div>
            <button
              id="search-button"
              type="button"
              className="btn btn-primary fw-5"
            >
              <i className=" icon fs-6 bi-search"></i>
            </button>
            <div className="dropdown ms-auto mx-2 p-1">
              <a
                href="#"
                className="d-flex align-items-center text-white text-decoration-none me-auto  dropdown-toggle"
                id="dropdownUser1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={imagee}
                  alt="hugenerd"
                  width="30"
                  height="30"
                  className="rounded-circle"
                />
                <span className="d-none d-sm-inline text-dark mx-3">
                  Ishaan
                </span>
              </a>
              <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li>
                  <a className="dropdown-item" href="/profile">
                    Profile
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="/Signin"
                    onClick={(e) => handleLogout(e)}
                  >
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Header;
