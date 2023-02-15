import React from "react";

function Gallery() {
  return (
    <>
      <div className="container text-left mt-4">
        <div className="row justify-content-center">
          <div className="col-md-12 text-center my-5">
            <h2 className="pb-2 border-bottom display-4">
              OUR <span className="text-warning">GALLERY</span>
            </h2>
            <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 "></div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4 mb-lg-2">
            <img
              src="imges/gallery6.png"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
            <img
              src="imges/gallery5.png"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
            <img
              src="imges/cat1.png"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Wintry Mountain Landscape"
            />
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="imges/gal1.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Mountains in the Clouds"
            />
            <img
              src="imges/gallery3.png"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Boat on Calm Water"
            />
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <img
              src="imges/swim.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Waves at Sea"
            />
            <img
              src="imges/gal4.jpg"
              className="w-100 shadow-1-strong rounded mb-4"
              alt="Yosemite National Park"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
