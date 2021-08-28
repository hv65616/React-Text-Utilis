import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
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
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                AboutUs
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* ******Code to add color pallete in navigation bar*******
      <div className="d-flex">
        <div
          className="bg-primary rounded mx-2"
          style={{ height: "20px", width: "20px", cursor: "pointer" }}
          onClick={() => {
            props.toggleMode("primary");
          }}
        ></div>
        <div
          className="bg-danger rounded mx-2"
          style={{ height: "20px", width: "20px", cursor: "pointer" }}
          onClick={() => {
            props.toggleMode("danger");
          }}
        ></div>
        <div
          className="bg-warning rounded mx-2"
          style={{ height: "20px", width: "20px", cursor: "pointer" }}
          onClick={() => {
            props.toggleMode("warning");
          }}
        ></div>
        <div
          className="bg-info rounded mx-2"
          style={{ height: "20px", width: "20px", cursor: "pointer" }}
          onClick={() => {
            props.toggleMode("info");
          }}
        ></div>
      </div> */}

      <div
        className={`form-check form-switch text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          onClick={() => {
            props.toggleMode(null);
          }}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          {props.modeText}
        </label>
      </div>
    </nav>
  );
}
NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};
NavBar.defaultProps = { title: "Set Title Here", about: "About Text-Utilis" };
