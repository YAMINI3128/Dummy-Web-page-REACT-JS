import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import CopyrightIcon from "@mui/icons-material/Copyright";

const footer2 = {
  color: "#b14cb1",
  fontSize: "small",
};

export default function Footer() {
  return (
    <div className="container">
      <div className="row pt-3 pb-3">
        <div className="col-md-6 ">
          <p>
            Obstacles
            <CopyrightIcon />
            2020 . All rights reserved
          </p>
        </div>
        <div className="col-md-6 ">
          <div className="text-end footer2" style={footer2}>
            <FacebookIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
