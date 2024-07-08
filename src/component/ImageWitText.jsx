import React from "react";
import imgaePath from "../images/image.jpg";

const ImageWitText = ({ text, image, alignLeft }) => {
  return (
    <div className="row g-4 align-items-center">
      <div className={`col-md-6 ${alignLeft ? "order-md-1" : "order-md-2"}`}>
        <img src={imgaePath} alt="Card Image" className="img-fluid" />
      </div>
      <div className={`col-md-6 ${alignLeft ? "order-md-2" : "order-md-1"}`}>
        <div>
          <h5>Card Title</h5>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageWitText;
