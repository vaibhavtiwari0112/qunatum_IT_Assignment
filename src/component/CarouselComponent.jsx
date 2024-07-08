import React, { useState } from "react";
import "./CarouselComponent.css";

function CarouselComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      title: "First slide label",
      text: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    },
    {
      title: "Second slide label",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Third slide label",
      text: "Praesent commodo cursus magna, vel scelerisque nisl consectetur.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <div className="carousel-caption-custom">
              <h3>{slide.title}</h3>
              <p>{slide.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="carousel-dots">
        {slides.map((slide, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
      <button className="carousel-control-prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-control-next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="carousel-counter">{`${currentIndex + 1} / ${
        slides.length
      }`}</div>
    </div>
  );
}

export default CarouselComponent;
