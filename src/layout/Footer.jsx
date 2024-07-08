import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark-purple-gradient text-white p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5>Contact us</h5>
            <h7>Email</h7>
            <p>info@example.com</p>
            <h7>Phone</h7>
            <p>+1-123-456-7890</p>
            <h7>Address</h7>
            <p>123 Main St, City, State 12345</p>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Company</h5>
            <h7>About Us</h7>
            <h7>Services</h7>
            <h7>Portfolio</h7>
            <h7>Development Process</h7>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Service</h5>
            <h7>Web Development</h7>
            <h7>Mobile App Development</h7>
            <h7>E-commerce Development</h7>
            <h7>Custom Software Development</h7>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Support</h5>
            <h7>Contact</h7>
            <h7>Terms & Policy</h7>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
