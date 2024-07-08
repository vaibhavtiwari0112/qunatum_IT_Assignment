import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand text-purple" href="#">
          Jillian Technologies
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link text-purple" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-purple" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-purple" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-purple" href="#">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-purple" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
