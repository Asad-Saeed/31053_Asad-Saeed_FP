import React from "react";

function Create_User() {
  return (
    <>
      <div className="container text-left">
        <div className="col-md-12 text-center my-5">
          <h2 className="pb-2 border-bottom display-4">
            CREATE <span className="text-warning">USER</span>
          </h2>
          <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 "></div>
        </div>

        <div
          className="col-md-12 text-left py-3 p-md-5   my-5 text-white"
          style={{
            backgroundImage:
              "linear-gradient(0deg, rgba(0, 0, 0, 0.5), #000000), url(imges/gallery6.png)",
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

            {/* <div className="form-group">
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
            </div> */}

            <button type="submit" className="btn btn-warning my-5">
              Create User
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Create_User;
