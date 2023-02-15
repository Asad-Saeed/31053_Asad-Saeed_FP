import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Hero() {
  return (
    <>
      <section
        className="bg-accent bg-position-center bg-size-cover py-3 py-sm-5"
        style={{
          backgroundImage: "url(imges/h1_hero.png)",
          backgroundPosition: "left",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container py-3">
          <div className="row pt-md-5 pb-lg-5 justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10 text-center py-xl-3">
              <h1 className="text-light pb-sm-3 display-4">
                EASY WITH OUR <span className="text-warning">GYMFIT 🏋️‍♂️</span>
              </h1>
              <p className="lead">
                <span className="d-inline-block  text-light fw-light mx-2 opacity-70">
                  Lorem ipsum proin gravida nibh vel velit auctor aliquet.
                  Aenean pretium sollicitudin, nascetur auci elit consequat
                  ipsutissem niuis sed odio sit amet nibh vulputate cursus a
                  amet. Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                  rhoncus, gravida quam semper libero sit amet. Etiam rhoncus.
                  Maecenas tempus, tellus eget condimentum rhoncus, gravida quam
                  semper libero sit amet.
                </span>
              </p>
              <div className="">
                <div class="mouse_scroll">
                  <div class="mouse">
                    <div class="wheel"></div>
                  </div>
                  <div>
                    <span class="m_scroll_arrows unu"></span>
                    <span class="m_scroll_arrows doi"></span>
                    <span class="m_scroll_arrows trei"></span>
                  </div>
                </div>
                <Link
                  className="btn btn-warning btn-lg"
                  to="/register"
                  data-scroll=""
                >
                  BECOME <i class="fa fa-user"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
