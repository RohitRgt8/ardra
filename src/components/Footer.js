import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div
        className="container-fluid text-center "
        style={{ backgroundColor: "black" }}
      >
        <div className="row py-5 text-center align-items-center">
          <div className="col-12">
            <h4 className="font-weight-normal text-light">
              Want to reach out ?
            </h4>
            <Link to="/writerec">
              <button className="btn btn-outline-light btn-lg">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info">More Links</h5>
            <Link to="/" className="text-light d-block">
              Home
            </Link>
            <a href="#about" className="text-light d-block">
              About
            </a>
            <a href="#works" className="text-light d-block">
              Works
            </a>
            <Link to="/contact" className="text-light d-block">
              Contact Me
            </Link>
            <Link to="/writerec" className="text-light">
              Write a Recommendation
              <i className="fas fa-heart"></i>
            </Link>
          </div>
          <div className="col-12 col-md-4 text-light text-justify py-3">
            <p>
              Hi All. I'm Ardra Saji, a student at Federal Institute of
              Science and Technology, undergoing the course B.Tech ECE. An upcoming CS Engineering Student
              aspiring to be an experienced Full Stack Developer in the coming
              years.
            </p>
          </div>
          <div className="col-12 col-md-4 py-3">
            <h5 className="text-info">Social</h5>
            <Link to="https://www.linkedin.com/in/rohitgeorgergt/">
              <i className="fab fa-linkedin h1 text-light d-block"></i>
            </Link>
            <a href="https://github.com/RohitRgt8">
              <i className="fab fa-github h1 text-light d-block"></i>
            </a>
            <a href="rohit.rgt8@ieee.org">
              <i className="fas fa-envelope h1 text-light d-block"></i>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-muted">
            <p>Copyright @ Rohit George 2021</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
