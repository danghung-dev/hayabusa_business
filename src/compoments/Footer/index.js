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
          padding: 20,
          margin: "50px 15%",
          textAlign: "center",
          color: "#007bff",
          border: "1px solid gray"
        }}
      >
        <p style={{ marginBottom: 0 }}>{lang.t("_footer_text")}</p>
      </div>
    );
  }
}
footer.propTypes = {};
