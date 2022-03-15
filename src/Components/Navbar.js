import React from "react";

const header = {
  backgroundColor: "#b14cb1",
  border: "none",
  padding: "10px 0px",
};

const headerul = {
  color: "white",
  padding: "5px 15px",
};

export default function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar fixed-top navbar-expand-lg " style={header}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={headerul}>
            OBSTACLES
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/"
                  style={headerul}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={headerul}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={headerul}>
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/" style={headerul}>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
