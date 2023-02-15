import React from "react";
import { Link } from "react-router-dom";

function Blog() {
  return (
    <>
      <div className="container text-left mt-4">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center my-5">
            <h2 className="pb-2 border-bottom display-4">
              EXERCISE <span className="text-warning">ACTIVITIES</span>
            </h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 "></div>
          </div>
        </div>
        <div className="container text-left">
          <div className="row mb-2">
            <div className="col-md-6">
              <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                  <strong className="d-inline-block mb-2 text-warning">
                    Single
                  </strong>
                  <h3 className="mb-0">
                    <a className="text-dark" href="#">
                      WEIGHT_LIFTING
                    </a>
                  </h3>
                  <div className="mb-1 text-muted">Nov 12</div>
                  <p className="card-text mb-2 lead">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                  <Link
                    to="/exercises"
                    type="button"
                    className="btn btn-warning btn-sm mr-2 mt-2 px-4 me-md-2"
                  >
                    EXPLORE
                  </Link>
                </div>
                <img
                  className="card-img-right flex-auto d-none d-md-block"
                  data-src="holder.js/200x250?theme=thumb"
                  alt="Thumbnail [200x250]"
                  style={{ width: 200, height: 300 }}
                  src="imges/team1.png"
                  data-holder-rendered="true"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                  <strong className="d-inline-block mb-2 text-warning">
                    Double
                  </strong>
                  <h3 className="mb-0">
                    <a className="text-dark" href="#">
                      DUMBOL_HOLDING
                    </a>
                  </h3>
                  <div className="mb-1 text-muted">Nov 11</div>
                  <p className="card-text mb-2 lead">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </p>
                  <Link
                    to="/exercises"
                    type="button"
                    className="btn btn-warning btn-sm mr-2 mt-2 px-4 me-md-2"
                  >
                    EXPLORE
                  </Link>
                </div>
                <img
                  className="card-img-right flex-auto d-none d-md-block"
                  data-src="holder.js/200x250?theme=thumb"
                  alt="Thumbnail [200x250]"
                  src="imges/gallery1.png"
                  data-holder-rendered="true"
                  style={{ width: 200, height: 300 }}
                />
              </div>
            </div>
          </div>

          <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
            <div className="col-12 col-sm-12 col-lg-6 align-items-center">
              <img
                src="imges/joging.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                // width={700}
                // height={500}
                loading="lazy"
              />
            </div>
            <div className="col-lg-6 text-left">
              <h2 className="py-4 border-bottom display-4">
                RUN<span className="text-warning">ING</span>
              </h2>
              <p className="lead">
                Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
                pretium sollicitudin, nascetur auci elit consequat ipsutissem
                niuis sed odio sit amet nibh vulputate cursus a amet. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                gravida quam semper libero sit amet. Etiam rhoncus. Maecenas
                tempus, tellus eget condimentum rhoncus, gravida quam semper
                libero sit amet.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start pt-md-4">
                <Link
                  to="/exercises"
                  type="button"
                  className="btn btn-warning btn-lg mr-2 mb-2 px-4 me-md-2"
                >
                  EXPLORE
                </Link>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
            <div className="col-lg-6 text-left">
              <h2 className="py-4 border-bottom display-4">
                CYCL<span className="text-warning">ING</span>
              </h2>
              <p className="lead">
                Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
                pretium sollicitudin, nascetur auci elit consequat ipsutissem
                niuis sed odio sit amet nibh vulputate cursus a amet. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                gravida quam semper libero sit amet. Etiam rhoncus. Maecenas
                tempus, tellus eget condimentum rhoncus, gravida quam semper
                libero sit amet.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start pt-md-4">
                <Link
                  to="/exercises"
                  type="button"
                  className="btn btn-warning btn-lg mr-2 mb-2 px-4 me-md-2"
                >
                  EXPLORE
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-6 align-items-center">
              <img
                src="imges/cycling.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                // width={700}
                // height={500}
                loading="lazy"
              />
            </div>
          </div>
          <hr></hr>
          <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
            <div className="col-12 col-sm-12 col-lg-6 align-items-center">
              <img
                src="imges/boxing.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                // width={700}
                // height={500}
                loading="lazy"
              />
            </div>
            <div className="col-lg-6 text-left">
              <h2 className="py-4 border-bottom display-4">
                BOX<span className="text-warning">ING</span>
              </h2>
              <p className="lead">
                Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
                pretium sollicitudin, nascetur auci elit consequat ipsutissem
                niuis sed odio sit amet nibh vulputate cursus a amet. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                gravida quam semper libero sit amet. Etiam rhoncus. Maecenas
                tempus, tellus eget condimentum rhoncus, gravida quam semper
                libero sit amet.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start pt-md-4">
                <Link
                  to="/exercises"
                  type="button"
                  className="btn btn-warning btn-lg mr-2 mb-2 px-4 me-md-2"
                >
                  EXPLORE
                </Link>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
            <div className="col-lg-6 text-left">
              <h2 className="py-4 border-bottom display-4">
                WALK<span className="text-warning">ING</span>
              </h2>
              <p className="lead">
                Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
                pretium sollicitudin, nascetur auci elit consequat ipsutissem
                niuis sed odio sit amet nibh vulputate cursus a amet. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                gravida quam semper libero sit amet. Etiam rhoncus. Maecenas
                tempus, tellus eget condimentum rhoncus, gravida quam semper
                libero sit amet.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start pt-md-4">
                <Link
                  to="/exercises"
                  type="button"
                  className="btn btn-warning btn-lg mr-2 mb-2 px-4 me-md-2"
                >
                  EXPLORE
                </Link>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-lg-6 align-items-center">
              <img
                src="imges/run.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                // width={700}
                // height={500}
                loading="lazy"
              />
            </div>
          </div>
          <hr></hr>
          <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5 mb-md-5">
            <div className="col-12 col-sm-12 col-lg-6 align-items-center">
              <img
                src="imges/swim.jpg"
                className="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                // width={700}
                // height={500}
                loading="lazy"
              />
            </div>
            <div className="col-lg-6 text-left">
              <h2 className="py-4 border-bottom display-4">
                SWIM<span className="text-warning">ING</span>
              </h2>
              <p className="lead">
                Lorem ipsum proin gravida nibh vel velit auctor aliquet. Aenean
                pretium sollicitudin, nascetur auci elit consequat ipsutissem
                niuis sed odio sit amet nibh vulputate cursus a amet. Etiam
                rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,
                gravida quam semper libero sit amet. Etiam rhoncus. Maecenas
                tempus, tellus eget condimentum rhoncus, gravida quam semper
                libero sit amet.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start pt-md-4">
                <Link
                  to="/exercises"
                  type="button"
                  className="btn btn-warning btn-lg mr-2 mb-2 px-4 me-md-2"
                >
                  EXPLORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <img src="imges/under.webp"></img>
      </div> */}
    </>
  );
}

export default Blog;
