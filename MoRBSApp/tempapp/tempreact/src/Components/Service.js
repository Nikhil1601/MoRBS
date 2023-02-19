import React, { Fragment } from "react";
import Store from "./Store";
import Retrieve from "./Retrieve";

import "../CSS/Service.css";

const Service = () => {
  return (
    <Fragment>
      <section className="home">
        <div className="container">
          <div className="innercontainer">
            <h1>Store your files</h1>
            <Store />
          </div>
          <div className="innercontainer">
            <h1>Retrieve your files</h1>
            <Retrieve />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Service;