import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav
        style={{
          backgroundImage:
            'linear-gradient(to top, rgba(130, 0, 0, 0.9), rgba(0 , 0, 0, 0.9)),url("imges/cat2.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="navbar navbar-expand-md navbar-dark  px-2 bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span className="flaticon-lotus" />

            <img src="imges/logo.png" />
          </Link>
          <button
            className="navbar-toggler text-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon " />
          </button>
          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav ml-auto mb-2 mb-md-0">
              <li className="nav-item  active ">
                <Link to="/" className="nav-link text-warning text-uppercase">
                  Home
                </Link>
              </li>
              <li className="nav-item active ">
                <Link
                  to="/about"
                  className="nav-link text-warning text-uppercase"
                >
                  About
                </Link>
              </li>
              <li className="nav-item active ">
                <Link
                  to="/gallery"
                  className="nav-link text-warning text-uppercase"
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item active ">
                <Link
                  to="/blog"
                  className="nav-link text-warning text-uppercase"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item active ">
                <Link
                  to="/contact"
                  className="nav-link text-warning text-uppercase"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item active ">
                <Link
                  to="/exercises"
                  className="nav-link text-warning text-uppercase"
                >
                  Workout
                </Link>
              </li>
              <li className="nav-item active ">
                <Link
                  to="/logout"
                  className="nav-link text-warning text-uppercase"
                >
                  <i class="fa fa-sign-out" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <nav
        style={{
          backgroundImage:
            'linear-gradient(to top, rgba(130, 0, 0, 0.9), rgba(0 , 0, 0, 0.9)),url("imges/cat2.png")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="navbar navbar-expand-lg navbar-dark ftco_navbar  ftco-navbar-light"
        id="ftco-navbar"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span className="flaticon-lotus" />

            <img src="imges/logo.png" />
          </Link>
          <button
            className="navbar-toggler collapsed text-white bg-danger"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="oi oi-menu" />
            💱
          </button>

          <div className="collapse navbar-collapse" id="ftco">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item  active ">
                <Link to="/" className="nav-link text-warning text-uppercase">
                  Home
                </Link>
              </li>
              <li className="nav-item active ">
                <Link
                  to="/about"
                  className="nav-link text-warning text-uppercase"
                >
                  About
                </Link>
              </li>
              <li className="nav-item active ">
                <Link
                  to="/gallery"
                  className="nav-link text-warning text-uppercase"
                >
                  Gallery
                </Link>
              </li>
              <li className="nav-item active ">
                <Link
                  to="/blog"
                  className="nav-link text-warning text-uppercase"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item active ">
                <Link
                  to="/contact"
                  className="nav-link text-warning text-uppercase"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item active ">
                <Link
                  to="/exercises"
                  className="nav-link text-warning text-uppercase"
                >
                  Workout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
    </>
  );
}

export default Nav;
