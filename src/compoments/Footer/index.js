import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import lang from "../../languages";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export default class footer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div
        style={{
          height: 20,
          textAlign: "center",
          marginTop: 50,
          marginBottom: 40,
          color: "#007bff"
        }}
      >
        <p>{lang.t("_footer_text")}</p>
      </div>
    );
  }
}
footer.propTypes = {};
