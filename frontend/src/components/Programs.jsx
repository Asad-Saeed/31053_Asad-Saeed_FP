import React from "react";
import { Link } from "react-router-dom";
import "../App";

function Programs() {
  return (
    <>
      <div className="container px-4 py-5 " id="custom-cards">
        <h2 className="pb-2 border-bottom display-4">
          WHAT WE CAN <span className="text-warning">OFFER</span>
        </h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 pt-5 pb-2">
          <div className="col mb-4">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0 , 0, 0, 0.9)),url("imges/run.jpg")',
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className=" pt-5 mt-5 mb-4  lh-1 fw-bold">
                  <Link
                    className="text-decoration-none display-4 text-warning "
                    to="/exercises"
                  >
                    RUNING<br></br>NOW
                  </Link>
                </h3>

                <ul className="d-flex list-unstyled mt-auto ">
                  <li className="me-auto ">
                    <img
                      src="imges/runing.jpg"
                      alt="Bootstrap"
                      width={32}
                      height={32}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>STRENGTH</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0 , 0, 0, 0.9)),url("imges/blog1.png")',
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className=" pt-5 mt-5 mb-4  lh-1 fw-bold">
                  <Link
                    className="text-decoration-none display-4 text-warning "
                    to="/exercises"
                  >
                    BOXING<br></br>NOW
                  </Link>
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="imges/blog1.png"
                      alt="Bootstrap"
                      width={32}
                      height={32}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>TRAINING</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0 , 0, 0, 0.9)),url("imges/gallery3.png")',
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className=" pt-5 mt-5 mb-4  lh-1 fw-bold">
                  <Link
                    className="text-decoration-none display-4 text-warning "
                    to="/exercises"
                  >
                    CYCLING<br></br>NOW
                  </Link>
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="imges/gallery3.png"
                      alt="Bootstrap"
                      width={32}
                      height={32}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>CARDIO</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 ">
          <div className="col mb-4">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0 , 0, 0, 0.9)),url("imges/swim2.jpg")',
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className=" pt-5 mt-5 mb-4  lh-1 fw-bold">
                  <Link
                    className="text-decoration-none display-4 text-warning "
                    to="/exercises"
                  >
                    SWIMING<br></br>NOW
                  </Link>
                </h3>

                <ul className="d-flex list-unstyled mt-auto ">
                  <li className="me-auto ">
                    <img
                      src="imges/swim2.jpg"
                      alt="Bootstrap"
                      width={32}
                      height={32}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>TRAINING</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0 , 0, 0, 0.9)),url("imges/hik1.jpg")',
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className=" pt-5 mt-5 mb-4  lh-1 fw-bold">
                  <Link
                    className="text-decoration-none display-4 text-warning "
                    to="/exercises"
                  >
                    HIKING<br></br>NOW
                  </Link>
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="imges/hik1.jpg"
                      alt="Bootstrap"
                      width={32}
                      height={32}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>TRAINING</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col mb-4">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  'linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0 , 0, 0, 0.9)),url("imges/walking1.jpg")',
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className=" pt-5 mt-5 mb-4  lh-1 fw-bold">
                  <Link
                    className="text-decoration-none display-4 text-warning "
                    to="/exercises"
                  >
                    WALKING<br></br>NOW
                  </Link>
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="imges/walking1.jpg"
                      alt="Bootstrap"
                      width={32}
                      height={32}
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill" />
                    </svg>
                    <small>CARDIO</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3" />
                    </svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Programs;
