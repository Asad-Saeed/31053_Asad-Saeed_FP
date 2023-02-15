// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Programs from "./components/Programs";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import Testimonial from "./components/Testimonial";
import Exercises from "./components/Exercises";
import Create_Exercise from "./components/Create_Exercise";
import Create_User from "./components/Create_User";
import ShowData from "./components/showData";
import Form from "./components/form";
import Logout from "./components/Logout";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home></Home>} />

          <Route
            path="/about"
            element={
              <>
                <About></About>
                <Programs></Programs>
                <Testimonial></Testimonial>
                <Pricing></Pricing>
              </>
            }
          ></Route>
          <Route
            path="/gallery"
            element={
              <>
                <Gallery></Gallery>
                <Programs></Programs>
              </>
            }
          ></Route>
          <Route
            path="/blog"
            element={
              <>
                <Blog></Blog>
              </>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <>
                <Contact></Contact>
              </>
            }
          ></Route>
          <Route
            path="/exercises"
            element={
              <>
                <Form></Form>
              </>
            }
          ></Route>
          <Route
            path="/logout"
            element={
              <>
                <Logout></Logout>
              </>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <>
                <Register></Register>
              </>
            }
          ></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
