import React, { useState, useEffect } from "react";
import ShowData from "./showData";
import "../App.css";

function Form() {
  const [isUpdate, setisUpdate] = useState(false);
  const empty = {
    name: "",
    age: "",
    activity: "",
    discription: "",
    duration: "",
    date: "",
  };
  const [formData, setFormData] = useState(empty);
  const handleInput = (e) => {
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);

  // get data from api / database

  const [data, setData] = useState([]);
  async function fetchapi() {
    let myapi = await fetch("http://localhost:4000/");
    myapi = await myapi.json();
    setData(myapi);
  }
  useEffect(() => {
    fetchapi();
  }, []);

  // post data in api
  const postData = async () => {
    // console.log(formData);

    if (!isUpdate) {
      await fetch("http://localhost:4000/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      fetchapi();
      setFormData(empty);
    } else {
      let id = formData._id;
      console.log(formData);
      await fetch(`http://localhost:4000/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      setFormData(empty);
      fetchapi();
      setisUpdate(!isUpdate);
    }
  };

  // delete data from api / database
  const deleteData = async (id) => {
    await fetch(`http://localhost:4000/${id}`, {
      method: "Delete",
    });
    fetchapi();
  };

  // Update Data from DataBase / api

  const UpdateData = async (item) => {
    // setFormData(id);
    setFormData(item);
    setisUpdate(!isUpdate);
    // await fetch(`http://localhost:4000/${item._id}`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(formData),
    // });
  };
  const [showSection, setShowSection] = useState(false);

  return (
    <>
      <div className="container text-left mt-4">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center my-5">
            <h2 className="pb-2 border-bottom display-4">
              CREATE <span className="text-warning">EXERCISE</span>
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
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.5), #000000), url(imges/gal1.jpg)",
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
                      Enter Your Workout Details, thank you!
                    </div>
                    <form
                      className="form mb-5"
                      onSubmit={(e) => e.preventDefault()}
                      method="POST"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          {" "}
                          <div className="form-group ">
                            <label htmlFor="exampleInputName1">Name</label>
                            <input
                              value={formData.name}
                              name="name"
                              onChange={handleInput}
                              type="name"
                              className="form-control "
                              id="exampleInputName1"
                              aria-describedby="nameHelp"
                              placeholder="Enter name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          {" "}
                          <div className="form-group ">
                            <label htmlFor="exampleInputDuration1">Age</label>
                            <input
                              type="number"
                              name="age"
                              value={formData.age}
                              onChange={handleInput}
                              className="form-control"
                              id="exampleInputDuration1"
                              placeholder="Enter Age 10-100"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          {" "}
                          <div className="form-group ">
                            <label htmlFor="exampleInputDuration1">
                              Activity
                            </label>
                            <br />
                            <select
                              className="form-control "
                              name="activity"
                              value={formData.activity}
                              onChange={handleInput}
                              required
                            >
                              <option readonly>Select...</option>
                              <option>Runing</option>
                              <option>Cycling</option>
                              <option>Boxing</option>
                              <option>Hiking</option>
                              <option>Swiming</option>
                            </select>
                          </div>
                        </div>

                        <div className="col-md-6">
                          {" "}
                          <div className="form-group">
                            <label htmlFor="exampleInputDuration1">
                              Duration (in minute)
                            </label>
                            <input
                              type="number"
                              name="duration"
                              value={formData.duration}
                              onChange={handleInput}
                              className="form-control"
                              id="exampleInputDuration1"
                              placeholder="Enter Duration"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group">
                          <label className="label" htmlFor="#">
                            Discription (optional)
                          </label>
                          <textarea
                            name="discription"
                            value={formData.discription}
                            onChange={handleInput}
                            className="form-control"
                            id="message"
                            cols={30}
                            rows={3}
                            placeholder="Enter Workout Discription"
                            defaultValue={""}
                          />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlDate1">
                            Select Date
                          </label>
                          <br></br>
                          <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleInput}
                            className="form-control-date"
                            id="exampleFormControlDate1"
                            required
                          />
                        </div>
                        <small id="nameHelp" className="form-text text-muted">
                          We'll never share your detailes with anyone else.
                        </small>

                        <button
                          type="submit"
                          onClick={() => postData()}
                          className="btn btn-warning mt-5 mb-2"
                        >
                          Create Exercise <i class="fa fa-save"></i>
                        </button>
                      </div>
                      <div class="mouse_scroll">
                        <div class="mouse">
                          <div class="wheel"></div>
                        </div>
                        <div>
                          <span class="m_scroll_arrows unu"></span>
                          <span class="m_scroll_arrows doi"></span>
                          <span class="m_scroll_arrows trei"></span>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          className="btn btn-warning btn-lg mb-5"
          onClick={() => setShowSection(!showSection)}
        >
          Show<i class="fa fa-angle-double-down mx-2"></i>Hide
        </button>
        {showSection && (
          <div>
            <ShowData
              deleteData={deleteData}
              UpdateData={UpdateData}
              data={data}
            />
          </div>
        )}
      </div>
      {/* <ShowData deleteData={deleteData} UpdateData={UpdateData} data={data} /> */}
    </>
  );
}

export default Form;
