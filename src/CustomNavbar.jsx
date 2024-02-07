import { Component } from "react";
import { Link, useLocation } from "react-router-dom";

const CustomNavbar = () => {
  const location = useLocation();
  console.log(location);

  return (
    <nav
      className="navbar navbar-expand-lg bg-black"
      data-bs-theme="dark"
      style={{ backgroundColor: "#221f1f" }}
    >
      <div className="container-fluid">
        <span className="navbar-brand">
          <img
            src="../assets/logo.png"
            alt="logo"
            style={{ width: "100px", height: "55px" }}
          />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link
              className={
                location.pathname === "/Home" ? "nav-link active" : "nav-link"
              }
              to="Home"
            >
              <li className="nav-item">
                <button className="nav-link active fw-bold">Home</button>
              </li>
            </Link>
            <Link
              className={
                location.pathname === "/TvShows"
                  ? "nav-link active"
                  : "nav-link"
              }
              to="TvShows"
            >
              <li className="nav-item">
                <button className="nav-link fw-bold">TV Shows</button>
              </li>
            </Link>

            <Link
              className={
                location.pathname === "/Movies" ? "nav-link active" : "nav-link"
              }
              to="Movies"
            >
              <li className="nav-item">
                <button className="nav-link fw-bold">Movies</button>
              </li>
            </Link>
            <li className="nav-item">
              <button className="nav-link fw-bold">Recently Added</button>
            </li>
            <li className="nav-item">
              <button className="nav-link fw-bold">My List</button>
            </li>
          </ul>

          <div
            className="d-flex align-items-center justify-content-between"
            style={{ width: "120px" }}
          >
            <div id="kids" className="fw-bold text-white">
              KIDS
            </div>
            <i className="bi bi-bell icons text-white"></i>
            <i className="bi bi-person-circle icons text-white"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default CustomNavbar;
