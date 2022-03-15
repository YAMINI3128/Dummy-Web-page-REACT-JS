import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const contact1 = {
  color: "white",
  backgroundImage: "url(../Assets/img9.jpg)",
  backgroundSize: "cover",
  backgroundRepeat: "none",
};
const btn = {
  borderRadius: "50px",
  padding: "6px 25px",
  color: "#b14cb1",
  borderColor: "#b14cb1",
};
export default function Contact() {
  return (
    <div className="container-fluid" style={contact1}>
      <div className="row ">
        <div className="col-md-12 mt-5 p-3 mb-3 text-center ">
          <h3>Contact us</h3>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 pt-3">
            <h3>
              <LocationOnIcon />
            </h3>
            <h4>ADDRESS</h4>
            <p>207, NY central ,WASHINGTON</p>
            <h3>
              <EmailIcon />
            </h3>
            <h4>EMAIL</h4>
            <p>example@123.com</p>
            <h3>
              <CallIcon />
            </h3>
            <h4>PHONE</h4>
            <p>+85 47921661</p>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                FIRST NAME
              </label>
              <input
                type="Text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Jon"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                LAST NAME
              </label>
              <input
                type="Text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Monrow"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="col-12 m-3">
              <button type="submit" className="btn" style={btn}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
