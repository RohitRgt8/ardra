import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md fixed-top bg-white">
      <div className="container my-2">
        <Link to="/" className="navbar-brand text-dark font-weight-bold">
          Rohit George
        </Link>
        <Link to="/contact" className="ml-auto">
          <button className="btn btn-outline-dark ml-auto">Contact</button>
        </Link>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarcollapse"
        >
          <span className="fas fa-bars text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-grow-0"
          id="navbarcollapse"
        >
          <div className="navbar-nav mx-3 my-auto">
            <Link
              to="#about"
              className="nav-item nav-link text-dark font-weight-bold"
            >
              About
            </Link>
            <Link
              to="#career"
              className="nav-item nav-link text-dark font-weight-bold"
            >
              Career
            </Link>
            <Link
              to="#works"
              className="nav-item nav-link text-dark font-weight-bold"
            >
              Works
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
