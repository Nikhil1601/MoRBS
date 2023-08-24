import React, { Fragment } from "react";

import "../CSS/Home.css";

const home = () => {
  return (
    <Fragment>
      <section className="home">
        <div className="container">
          <div className="btn">
            <div className="btn">Browse</div>
          </div>
          <h1>We are carying about your health</h1>
          <p>
          An application to revolutionize medical field by usnig technology. We optimize medical operating methods by introducing emerging technologies like Blockchain and artifical intelligence.{" "}
          </p>
          <div className="link">
            <a href="#" className="book">
              Book Appointment
            </a>
            <a href="#" className="consult">
              Consult Online
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default home;
