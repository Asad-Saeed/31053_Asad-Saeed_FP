import React from "react";
import moment from "moment";
function ShowData(props) {
  // console.log("Data", props.data);
  return (
    <div className="container">
      <div className="col-md-12 text-center my-5">
        <h2 className="pb-2 border-bottom display-4">
          EXERCISE <span className="text-warning">HISTORY</span>
        </h2>
        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4"></div>
      </div>
      <div className="row ">
        {props.data.map((el) => {
          let isoDate = el.date;
          let newDate = moment.utc(isoDate).format("DD-MM-YYYY");
          return (
            <div className="col-sm-12 col-lg-4 col-md-6 ">
              <div className="container">
                <div className="col-12">
                  <div className="card shadow-lg mb-4 rounded-3 ">
                    <div className="card-header bg-warning py-3">
                      <h4 className="my-0 fw-normal">{el.activity}</h4>
                    </div>
                    <div className="card-body text-left text-white main">
                      <h4 className="card-title text-uppercase text-warning">
                        {el.name}
                      </h4>
                      <p className="lead">
                        <ul className="list-unstyled mt-3 mb-4">
                          <li>
                            <strong className="text-warning">AGE : </strong>
                            {el.age}
                          </li>
                          <li>
                            <strong className="text-warning">
                              ACTIVITY :{" "}
                            </strong>
                            {el.activity}
                          </li>

                          <li>
                            <strong className="text-warning">
                              DURATION :{" "}
                            </strong>
                            {el.duration}
                            <small> min</small>
                          </li>
                          <li>
                            <strong className="text-warning">DATE : </strong>

                            {newDate}
                          </li>
                          <li>
                            <strong className="text-warning">
                              DISCRIPTION :{" "}
                            </strong>
                            {el.discription}
                          </li>
                          <li className="my-3">
                            <button
                              className="btn btn-outline-warning mr-2"
                              onClick={() => props.UpdateData(el)}
                            >
                              Edit <i class="fa fa-edit"></i>
                            </button>
                            <button
                              className="btn btn-outline-danger "
                              onClick={() => props.deleteData(el._id)}
                            >
                              Delete <i class="fa fa-trash"></i>
                            </button>
                          </li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShowData;
