import React from "react";

function Pricing() {
  return (
    <>
      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom display-4">
          MEMBERSHIP <span className="text-warning">PLANS</span>
        </h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5"></div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header bg-warning py-3">
                <h4 className="my-0 fw-normal ">BASIC</h4>
              </div>
              <div className="card-body bg-dark text-white">
                <h1 className="card-title pricing-card-title">
                  $ 39.0<small className="text-muted fw-light">/mo</small>
                </h1>
                <p className="lead">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Free riding</li>
                    <li>Unlimited equipments</li>
                    <li>Personal trainer</li>
                    <li>Weight losing classes</li>
                    <li>Month to mouth</li>
                    <li>No time restriction</li>
                  </ul>
                </p>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-warning"
                >
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header bg-warning py-3">
                <h4 className="my-0 fw-normal">PREMIUM</h4>
              </div>
              <div className="card-body">
                <h1 className="card-title pricing-card-title">
                  $ 99.0<small className="text-muted fw-light">/year</small>
                </h1>
                <p className="lead">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Free riding</li>
                    <li>Unlimited equipments</li>
                    <li>Personal trainer</li>
                    <li>Weight losing classes</li>
                    <li>Month to mouth</li>
                    <li>No time restriction</li>
                  </ul>
                </p>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-danger"
                >
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card mb-4 rounded-3 shadow-sm">
              <div className="card-header bg-warning py-3">
                <h4 className="my-0 fw-normal">STANDARD</h4>
              </div>
              <div className="card-body bg-dark text-white">
                <h1 className="card-title pricing-card-title">
                  $ 59.0<small className="text-muted fw-light">/hy</small>
                </h1>
                <p className="lead">
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Free riding</li>
                    <li>Unlimited equipments</li>
                    <li>Personal trainer</li>
                    <li>Weight losing classes</li>
                    <li>Month to mouth</li>
                    <li>No time restriction</li>
                  </ul>
                </p>
                <button
                  type="button"
                  className="w-100 btn btn-lg btn-outline-warning"
                >
                  JOIN NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
