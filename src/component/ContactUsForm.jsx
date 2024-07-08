import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUsForm.css";
import imgaePath from "../images/image.jpg";

const ContactUsForm = () => {
  return (
    <div className="container mt-5 mb-10">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="d-flex flex-row justify-content-center">
        <img
          src={imgaePath}
          className="img-fluid mb-4 contact-img"
          alt="Contact"
        />
        <form className="w-100 p-4 border border-gray rounded mb-4 contact-form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="textarea" className="form-label">
              Example Textarea
            </label>
            <textarea
              className="form-control"
              id="textarea"
              rows="3"
              placeholder="Example Textarea"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
