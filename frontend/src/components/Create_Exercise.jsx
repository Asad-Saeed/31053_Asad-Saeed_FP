import React from "react";

function Create_Exercise() {
  return (
    <>
      <div className="container text-left">
        <div className="col-md-12 text-center my-5">
          <h2 className="pb-2 border-bottom display-4">
            CREATE <span className="text-warning">EXERCISE</span>
          </h2>
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 "></div>
        </div>

        <div
          className="col-md-12 text-left py-3 p-md-5   my-5 text-white"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.5), #000000), url(imges/gal1.jpg)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputName1">User Name</label>
              <input
                type="name"
                className="form-control "
                id="exampleInputName1"
                aria-describedby="nameHelp"
                placeholder="Enter name"
              />
            </div>

            <div className="form-group">
              <label className="label" htmlFor="#">
                Description
              </label>
              <textarea
                name="message"
                className="form-control"
                id="message"
                cols={30}
                rows={4}
                placeholder="Message"
                defaultValue={""}
              />
            </div>

            <div className="form-group">
              <label htmlFor="exampleInputDuration1">
                Duration (in minute)
              </label>
              <input
                type="number"
                className="form-control"
                id="exampleInputDuration1"
                placeholder="Enter Duration"
              />
            </div>

            <form>
              <div className="form-group">
                <label htmlFor="exampleFormControlDate1">Select Date</label>
                <br></br>
                <input
                  type="date"
                  className="form-control-date"
                  id="exampleFormControlDate1"
                />
              </div>
              <small id="nameHelp" className="form-text text-muted">
                We'll never share your detailes with anyone else.
              </small>
            </form>

            <button type="submit" className="btn btn-warning my-5">
              Create Exercise
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create_Exercise;
