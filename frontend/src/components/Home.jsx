import React from "react";
import About from "./About";
import Contact from "./Contact";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Programs from "./Programs";
import Testimonial from "./Testimonial";
import "../App.css";
import Logout from "./Logout";

function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <Programs></Programs>
      <Testimonial></Testimonial>
      <Pricing></Pricing>
      <Gallery></Gallery>
      <Contact></Contact>
    </>
  );
}

export default Home;
