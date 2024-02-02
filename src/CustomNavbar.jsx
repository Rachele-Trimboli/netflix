import { Component } from "react";

class CustomNavbar extends Component {
  render() {
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
              <li className="nav-item">
                <button className="nav-link active fw-bold">Home</button>
              </li>
              <li className="nav-item">
                <button className="nav-link fw-bold">TV Shows</button>
              </li>
              <li className="nav-item">
                <button className="nav-link fw-bold">Movies</button>
              </li>
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
  }
}
export default CustomNavbar;
