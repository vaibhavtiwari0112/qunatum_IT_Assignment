import React from "react";
import "./Introduction.css";
import imgaePath from "../images/image.jpg";


const Introduction = () => {
  return (
    <div className="introduction-container">
      <div className="introduction-content">
        <h1 className="colorful-heading">
          <span className="purple-text">WE MAKE YOUR IDEA'S</span>
          <br />
          <span className="orange-text">INTO REALITY</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          doloribus ullam molestias laborum! Impedit aliquid, quaerat, nobis
          similique, accusantium reprehenderit dignissimos nulla dolores
          temporibus vero quam magnam voluptates inventore voluptatem? Vero
          perspiciatis, optio quasi asperiores, mollitia quia unde tenetur ut
          magnam laudantium, excepturi minus voluptatem ea placeat aliquid
          ratione dignissimos dolorem nam? Velit cum excepturi maxime facilis.
        </p>
        <br />
        <div>
          <button className="btn btn-purple">Get Started</button>
          <button className="btn btn-white">Contact Us</button>
        </div>
      </div>
      <div className="introduction-image">
        <img src={imgaePath} alt="Introduction Image" />
      </div>
    </div>
  );
};

export default Introduction;
