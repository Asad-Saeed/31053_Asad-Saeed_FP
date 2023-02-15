import React from "react";

function Testimonial() {
  return (
    <>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom display-4">
          TESTI<span className="text-warning">MONIAL</span>
        </h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5"></div>
        <section
          className="p-4 p-md-5 text-center text-lg-start shadow-1-strong rounded"
          style={{
            backgroundImage: "url(imges/cat2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="row d-flex justify-content-center ">
            <div className="col-md-6 my-3">
              <div className="card">
                <div className="card-body m-3">
                  <div className="row">
                    <div className="col-lg-4 d-flex-column  justify-content-center align-items-center mb-4 mb-lg-0">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                        className="rounded-circle  img-fluid shadow-1"
                        alt="woman avatar"
                        width={200}
                        height={200}
                      />
                      <ul className="list-unstyled py-3  d-flex justify-content-center">
                        <li>
                          <i className="fa fa-star fa-sm text-warning" />
                        </li>
                        <li>
                          <i className="fa fa-star fa-sm text-warning" />
                        </li>
                        <li>
                          <i className="fa fa-star fa-sm text-warning" />
                        </li>
                        <li>
                          <i className="fa fa-star fa-sm text-warning" />
                        </li>
                        <li>
                          <i className="fa fa-star-half fa-sm text-warning" />
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-8">
                      <p className="text-muted fw-light mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Id quam sapiente molestiae numquam quas,
                        voluptates omnis nulla ea odio quia similique corrupti
                        magnam.
                      </p>

                      <p className="fw-bold lead mb-2">
                        <strong>John Smith</strong>
                      </p>
                      <p className="fw-bold text-muted mb-0">Young Stunner</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 my-3">
              <div className="card">
                <div className="card-body m-3">
                  <div className="row">
                    <div className="col-lg-4 d-flex-column  justify-content-center align-items-center mb-4 mb-lg-0">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                        className="rounded-circle  img-fluid shadow-1"
                        alt="woman avatar"
                        width={200}
                        height={200}
                      />
                      <ul className="list-unstyled py-3 d-flex justify-content-center">
                        <li>
                          <i className="fa fa-star fa-sm text-warning" />
                        </li>
                        <li>
                          <i className="fa fa-star fa-sm text-warning" />
                        </li>
                        <li>
                          <i className="fa fa-star fa-sm text-warning" />
                        </li>
                        <li>
                          <i className="fa fa-star fa-sm text-warning" />
                        </li>
                        <li>
                          <i className="fa fa-star fa-sm text-warning" />
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-8">
                      <p className="text-muted fw-light mb-4">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Id quam sapiente molestiae numquam quas,
                        voluptates omnis nulla ea odio quia similique corrupti
                        magnam.
                      </p>

                      <p className="fw-bold lead mb-2">
                        <strong>Anna Smith</strong>
                      </p>
                      <p className="fw-bold text-muted mb-0">Actors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Testimonial;
