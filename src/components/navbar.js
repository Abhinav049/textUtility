import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
function Navbar(props) {
  {
    return (
      <div>
        <nav className="bar" style={props.style}>
          <li>
            <a>{props.title}</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
          <li>
            <a>About Us</a>
          </li>

          <li>
            {/* <button className="chan" onClick={props.newStyle}>
              {props.clicked}
            </button> */}
            <div className="form-check form-switch chan">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="switchCheckDefault"
                onClick={props.newStyle}
              ></input>
              <label className="form-check-label" htmlFor="switchCheckDefault">
                {props.clicked}{" "}
              </label>
            </div>
          </li>
        </nav>
      </div>
    );
  }
}

export default Navbar;
