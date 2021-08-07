import React from "react";

function Navbar()
{
    return(
        <nav className="navbar navbar-expand-md fixed-top bg-white">
        <div className="container my-2">
            <a href="/" className="navbar-brand text-dark font-weight-bold">
                Rohit George
            </a>
            <button className="btn btn-outline-dark ml-auto">
                Contact
            </button>
            <button 
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarcollapse"
            >
                <span className="fas fa-bars text-dark"></span>
            </button>
            <div className="collapse navbar-collapse flex-grow-0" id="navbarcollapse">
                <div className="navbar-nav mx-3 my-auto">
                    <a href="/" className="nav-item nav-link text-dark font-weight-bold">
                        About
                    </a>
                    <a href="/" className="nav-item nav-link text-dark font-weight-bold">
                        Career
                    </a>
                    <a href="/" className="nav-item nav-link text-dark font-weight-bold">
                        Works
                    </a>
                </div>
            </div>
        </div>
    </nav>

    );
}

export default Navbar;