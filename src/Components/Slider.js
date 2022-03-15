import React from "react";

const carousel = {
  height: "600px",
};
export default function About() {
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner" style={carousel}>
          <div className="carousel-item active">
            <img src="Assets/img1.jpg" className="d-block w-100 " alt="img1" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Wukredr Fielly </h5>
              <p>
                Some representative placeholder content for the Wukredr Fielly.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="Assets/img2.jpg" className="d-block w-100" alt="img2" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Ofxten Stainford</h5>
              <p>
                Some representative placeholder content for the Ofxten
                Stainford.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="Assets/img3.jpg" className="d-block w-100" alt="img3" />
            <div className="carousel-caption d-none d-md-block ">
              <h5>United Nation</h5>
              <p>
                Some representative placeholder content for the United Nation.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
