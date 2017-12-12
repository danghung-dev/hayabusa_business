import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";
export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div
        style={{ height: 50, backgroundColor: "yellow", margin: 0 }}
        className="row"
      >
        <img
          style={{ paddingLeft: 30, paddingTop: 15 }}
          src={logo}
          width="auto"
          height={30}
        />
      </div>
    );
  }
}
Header.propTypes = {};
