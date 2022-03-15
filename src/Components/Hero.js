import React from "react";

const hero = {
  color: "black",
  textAlign: "left",
  paddingTop: "120px",
};
const btn = {
  borderRadius: "50px",
  padding: "10px 25px",
  color: "#b14cb1",
  borderColor: "#b14cb1",
};
export default function Hero() {
  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-6 mt-5 pt-5 mb-3  ">
          <h3 style={hero}>
            Common Obstacles <br />
            for Your Goals
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elitLorem
            <br /> ipsum dolor, sit amet consectetur adipisicing elitamet
            <br />
            adipisicing.
          </p>
          <div class="d-grid gap-2 d-md-block">
            <button type="button" class="btn  " style={btn}>
              Get Started
            </button>
          </div>
        </div>
        <div className="col-md-6 mt-5 pt-5 mb-3 text-center ">
          <img src="Assets/img0.jpg" className="card-img-top p-4" alt="img0" />
        </div>
      </div>
    </div>
  );
}
