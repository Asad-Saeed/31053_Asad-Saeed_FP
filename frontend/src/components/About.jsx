import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5 ">
        <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
          <div className="col-12 col-sm-12 col-lg-6 align-items-center">
            <img
              src="imges/about.png"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              // width={700}
              // height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 text-left">
            <h2 className="py-4 border-bottom display-4">
              About <span className="text-warning">US</span>
            </h2>
            <p className="lead">
              Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
              pretium sollicitudin, nascetur auci elit consequat ipsutissem
              niuis sed odio sit amet nibh vulputate cursus a amet. Etiam
              rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, gravida
              quam semper libero sit amet. Etiam rhoncus. Maecenas tempus,
              tellus eget condimentum rhoncus, gravida quam semper libero sit
              amet.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start pt-md-4">
              <Link
                to="/about"
                type="button"
                className="btn btn-warning btn-lg mr-2 mb-2 px-4 me-md-2"
              >
                EXPLORE
              </Link>
              <Link
                to="/register"
                type="button"
                className="btn btn-outline-danger mr-2 mb-2 btn-lg px-4"
              >
                REGISTER
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
