import React from "react";

function Footer() {
  return (
    <>
      {/* <footer className="bg-warning text-white text-decoration-none p-4">
        <div className="container ">
          <div className="row">
            <div className="col-lg-12">
              <p>
                Copyright © 2020 Game Train Studio - Designed by
                <a
                  rel="nofollow"
                  href="https://github.com/Asad-Saeed"
                  className="tm-text-link"
                  target="_parent"
                >
                  <strong>
                    <span className="text-danger">Asad Saeed</span>
                  </strong>
                </a>
                <br />
                Powered by
                <a
                  rel="nofollow"
                  href="https://www.linkedin.com/in/asad-saeed-4685a9202/"
                  className="tm-text-link"
                  target="_blank"
                >
                  Frag Game & Pasha
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer> */}
      <>
        {/* Remove the container if you want to extend the Footer to full width. */}
        <div className="container-fluid bg-warning text-white text-decoration-none p-4">
          {/* Footer */}
          <footer
            className="text-center text-lg-start text-white"
            // style={{ backgroundColor: "#ECEFF1" }}
          >
            {/* Section: Social media */}
            <section className="d-flex justify-content-between p-4 text-white bg-warning">
              <div className="me-5">
                <span>Get connected with us on social networks:</span>
              </div>

              <div>
                <a
                  href="https://www.facebook.com/asadsaeed44"
                  className="text-white m-2"
                >
                  <i className="fa fa-facebook-f" />
                </a>
                <a
                  href="https://twitter.com/AsadJut55033268"
                  className="text-white m-2"
                >
                  <i className="fa fa-twitter" />
                </a>
                <a
                  href="https://www.instagram.com/asad_saeed_44/"
                  className="text-white m-2"
                >
                  <i className="fa fa-instagram" />
                </a>
                <a
                  href="https://www.linkedin.com/in/asad-saeed-4685a9202/"
                  className="text-white m-2"
                >
                  <i className="fa fa-linkedin" />
                </a>
                <a
                  href="https://github.com/Asad-Saeed"
                  className="text-white m-2"
                >
                  <i className="fa fa-github" />
                </a>
              </div>
            </section>

            <section className="">
              <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase ">Company</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto bg-warning"
                      style={{
                        width: 60,
                        height: 2,
                      }}
                    />
                    <p className="text-md-left">
                      Software Engineer || MERN Developer || React JS+ES6 ||
                      Next JS || JavaScript+ES6 || Frontend Developer ||
                      WordPress Developer...
                    </p>
                  </div>

                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 ">
                    <h6 className="text-uppercase ">Menu I</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto bg-warning"
                      style={{
                        width: 60,
                        height: 2,
                      }}
                    />
                    <p>
                      <a href="/" className="text-white">
                        Home
                      </a>
                    </p>
                    <p>
                      <a href="/about" className="text-white">
                        About
                      </a>
                    </p>
                    <p>
                      <a href="/gallery" className="text-white">
                        Gallery
                      </a>
                    </p>
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ">
                    <h6 className="text-uppercase ">Menu II</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto bg-warning"
                      style={{
                        width: 60,
                        height: 2,
                      }}
                    />
                    <p>
                      <a href="/blog" className="text-white">
                        Blog
                      </a>
                    </p>
                    <p>
                      <a href="/contact" className="text-white">
                        Contact
                      </a>
                    </p>
                    <p>
                      <a href="/exercises" className="text-white">
                        Workout
                      </a>
                    </p>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-md-left">
                    <h6 className="text-uppercase ">Contact</h6>
                    <hr
                      className="mb-4 mt-0 d-inline-block mx-auto bg-warning"
                      style={{
                        width: 60,
                        height: 2,
                      }}
                    />
                    <p>
                      <i className="fa fa-home mr-3" /> Rana Town Lahore,
                      Pakistan
                    </p>
                    <p>
                      <i className="fa fa-envelope mr-3" />{" "}
                      asadsaeed12225@gmail.com
                    </p>
                    <p>
                      <i className="fa fa-phone mr-3" /> +92 3017631644
                    </p>
                    <p>
                      <i className="fa fa-whatsapp mr-3" /> +92 3478730644
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <div className="text-center p-3">
              <p>
                Copyright © 2022 Game Train Studio - Designed by
                <a
                  rel="nofollow"
                  href="https://github.com/Asad-Saeed"
                  className="tm-text-link"
                  target="_blank"
                >
                  <span className="text-warning"> Asad Saeed</span>
                </a>
                <br />
                Powered by
                <a
                  rel="nofollow"
                  href="https://www.linkedin.com/in/asad-saeed-4685a9202/"
                  className="tm-text-link"
                  target="_blank"
                >
                  <span className="text-warning"> Frag Game & Pasha</span>
                </a>
              </p>
            </div>
          </footer>
        </div>
      </>
    </>
  );
}

export default Footer;
