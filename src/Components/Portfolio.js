import React from "react";

const portfolio1 = {
  backgroundColor: "white",
};
const portfolio11 = {
  color: "#b14cb1",
};
const portfolio111 = {
  backgroundImage: "url(../Assets/img00.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "none",
};

export default function Portfolio() {
  return (
    <div className="container " style={portfolio111}>
      <div className="row ">
        <div
          className="col-md-12 mt-5  pt-2 mb-3 text-center "
          style={portfolio11}
        >
          <h3>Portfolio</h3>
        </div>
      </div>

      <div
        className="row row-cols-1 row-cols-md-2  mt-3 mb-3 g-4  "
        style={portfolio1}
      >
        <div className="col-md-3">
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <img src="Assets/img4.jpg" className="card-img-top " alt="img4" />
            <div className="card-body">
              <h5 className="card-title">Aliana Moris</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <img src="Assets/img6.jpg" className="card-img-top" alt="img6" />
            <div className="card-body">
              <h5 className="card-title">Yoguard peese</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <img src="Assets/img8.jpg" className="card-img-top" alt="img8" />
            <div className="card-body">
              <h5 className="card-title">Suvenm silena</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="card shadow p-3 mb-5 bg-body rounded">
            <img src="Assets/img7.jpg" className="card-img-top" alt="img7" />
            <div className="card-body">
              <h5 className="card-title">Wuave deloi</h5>
              <p className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
