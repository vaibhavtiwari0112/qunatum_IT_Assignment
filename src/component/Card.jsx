import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css";
import imgaePath from "../images/image.jpg";

const Card = ({ text }) => {
  return (
    <div className="card small-card border-gray p-3 mb-4">
      <div className="card-body">
        <img src="" alt=""  />
        <h5 className="card-title">Card Title</h5>

        <p className="card-text">{text}</p>
      </div>
    </div>
  );
};

export default Card;
