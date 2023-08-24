import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import "../CSS/Navbar.css";

const navbar = () => {
  return (
    <Fragment>
      <nav>
        <a href="#">
          <h1>
            Health<span className="dot">.</span>
          </h1>
        </a>
        <div className="menu">
          <ul>
            <li>
              <a href="/"></a>Home
            </li>
            <li>
              <a href="#about"></a>About
            </li>
            <li>
              <a href="#services"></a>Services
            </li>
            <li>
              <a href="#portfolio"></a>Portfolio
            </li>
            <li>
              <a href="#blog"></a>Blog
            </li>
            <li>
              <a href="#contact"></a>Contact
            </li>
          </ul>
        </div>
        <div className="right">
          <a href="#contact" className="contact-btn">
            Contact
          </a>
          <div className="bar">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="close">
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default navbar;