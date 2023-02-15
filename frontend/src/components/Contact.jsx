import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="container text-left mt-4">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center my-5">
            <h2 className="pb-2 border-bottom display-4">
              CONTACT <span className="text-warning">US</span>
            </h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 "></div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div
              className="wrapper text-white"
              style={{
                backgroundImage:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.5), #000000), url(imges/hero-1.jpg)",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="row no-gutters mb-5">
                <div className="col-md-12">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <div id="form-message-warning" className="mb-4" />
                    <div id="form-message-success" className="mb-4">
                      Get in touch, thank you!
                    </div>
                    <form
                      method="POST"
                      id="contactForm"
                      name="contactForm"
                      className="contactForm"
                      noValidate="novalidate"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" htmlFor="name">
                              Full Name
                            </label>
                            <input
                              required
                              name="name"
                              type="name"
                              className="form-control"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" htmlFor="email">
                              Email Address
                            </label>
                            <input
                              required
                              type="email"
                              className="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="subject">
                              Subject
                            </label>
                            <input
                              required
                              type="subject"
                              className="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="#">
                              Message
                            </label>
                            <textarea
                              type="message"
                              name="message"
                              className="form-control"
                              id="message"
                              cols={30}
                              rows={4}
                              placeholder="Message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        <div className="col-md-12 text-center">
                          <div className="form-group">
                            <Link
                              type="submit"
                              to="/"
                              onClick={() => {
                                alert("Static page yet!");
                              }}
                              className="btn btn-warning my-5"
                            >
                              Submit <i class="fa fa-paper-plane"></i>
                            </Link>
                            <div className="submitting" />
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="container">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13580.392948928737!2d74.26068227246883!3d31.68588226034249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39191efe151910d9%3A0xd8f0e39b8e82fa89!2sRana%20Town%2C%20Lahore%2C%20Sheikhupura%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1675711140482!5m2!1sen!2s"
                        // width={1000}
                        // height={400}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
