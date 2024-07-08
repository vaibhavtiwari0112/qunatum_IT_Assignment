import React from "react";
import Introduction from "./component/Introduction";
import ContactUsForm from "./component/ContactUsForm";
import Card from "./component/Card";
import ImageWitText from "./component/ImageWitText";
import "bootstrap/dist/css/bootstrap.min.css";
import CarouselComponent from "./component/CarouselComponent";

const App = () => {
  return (
    <div>
      <Introduction />
      <div>
        <h1 className="d-flex justify-content-center mb-4">Features</h1>
        <div>
          <ImageWitText
            text="Feature 1 description"
            image="path/to/feature1-image.jpg"
            alignLeft={true}
          />
          <ImageWitText
            text="Feature 2 description"
            image="path/to/feature2-image.jpg"
            alignLeft={false}
          />
          <ImageWitText
            text="Feature 3 description"
            image="path/to/feature3-image.jpg"
            alignLeft={true}
          />
        </div>
      </div>
      <h1 className="d-flex justify-content-center mb-4">Products</h1>
      <div className="d-flex gap-4 flex-row justify-content-center">
        <Card
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <Card
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
        />
        <Card
          text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. "}
        />
      </div>

      <CarouselComponent />
      <ContactUsForm />
    </div>
  );
};

export default App;
