import React from "react";
import { Link } from "react-router-dom";

function Logout() {
  return (
    <>
      <div
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0.85), rgba(0 , 0, 0, 0.85)),url("imges/joging.jpg")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="container py-5">
          <div
            class="alert alert-info alert-dismissible fade show text-left"
            role="alert"
          >
            <strong>Note!</strong>
            <p className="p-0 m-0">
              Hi! My project requirments completed these LogIn/SignUp page are
              extra work, These are static pages yet 'coz deadline came. I have
              built them to learn JWT Athentication and still working on them in
              my child branch for practice. so only static routing given here on
              buttons.Thanks!
            </p>
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="row">
            <div className="col-sm-9 col-md-9 col-lg-5 mx-auto">
              <div className=" text-light card-signin my-5">
                <div
                  className="card-body p-5"
                  style={{
                    backgroundImage:
                      'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0 , 0, 0, 0.9)),url("imges/cat1.png")',
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                >
                  {/* <h5 className="card-title text-center p-4">Sign In</h5> */}
                  <img
                    src="imges/user.png"
                    className="rounded-circle img-fluid shadow-1"
                    alt="woman avatar"
                    width={120}
                    height={120}
                  />
                  <form className="form-signin text-left my-2">
                    <label htmlFor="inputEmail">Email address</label>
                    <div className="form-label-group  my-2">
                      <input
                        type="email"
                        name="email"
                        className="form-control "
                        placeholder="Email address"
                        required=""
                      />
                    </div>
                    <label htmlFor="inputPassword">Password</label>
                    <div className="form-label-group  my-2">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required=""
                      />
                    </div>
                    {/* <div className="form-check mb-3 text-warning">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault"
                      />
                      <small>
                        We'll never share your email with anyone else.
                      </small>
                    </div> */}
                    <div className="container ml-2">
                      <div className="form-check my-3  form-switch">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                          defaultChecked=""
                        />
                        <small>
                          We'll never share your email with anyone else.
                        </small>
                      </div>
                    </div>
                    <div className="text-center">
                      {" "}
                      <Link to="/" type="submit" className="btn btn-warning ">
                        Sign In <i class="fa fa-paper-plane"></i>
                      </Link>
                    </div>
                  </form>

                  <small>Don't have a account? </small>
                  <Link to="/register" type="submit" className="text-warning ">
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Logout;
