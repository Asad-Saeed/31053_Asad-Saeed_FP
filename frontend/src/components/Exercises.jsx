import React from "react";

function Exercises() {
  return (
    <>
      <div className="container text-left">
        <div className="col-md-12 text-center my-5">
          <h2 className="pb-2 border-bottom display-4">
            EXERCISE <span className="text-warning">LOGS</span> HISTORY
          </h2>
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 "></div>
        </div>

        <div
          className="col-md-12 text-left py-3 p-md-5   my-5 text-white"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.5), #000000), url(imges/gal4.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div>
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">User Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Date</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <a href="#">Edit</a> || <a href="#">Delete</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>
                    <a href="#">Edit</a> || <a href="#">Delete</a>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry</td>
                  <td>the Bird</td>
                  <td>@twitter</td>
                  <td>
                    <a href="#">Edit</a> || <a href="#">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exercises;
