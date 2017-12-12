import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import Star from "./Star";
import "../../font/css/font-awesome.min.css";
import lang from "../../languages";
export default class Company extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div style={styles.index}>
        <div className="row no-gutters">
          <div className="col-2">
            <div style={styles.number}> {this.props.number}</div>
          </div>
          <div className="col-10">
            <h5 style={styles.title}>{this.props.infor.name}</h5>
            <Star number={4} />
            <div style={{ marginTop: 10 }} className="row no-gutters">
              <div
                style={{ border: "1px solid gray" }}
                className="col-3 row no-gutters justify-content-center"
              >
                {
                  // <img
                  // src="http://logo.trangvangvietnam.com/L3954750400.gif"
                  // width="75"
                  // height="75"
                  // />
                }
              </div>
              <div
                style={{ paddingLeft: 20, paddingRight: 10, fontSize: 12 }}
                className="col-8"
              >
                <p style={{ color: "#888" }}>
                  {lang.t("_company_infor_category")}{" "}
                  <span style={{ color: "#0066cc" }}> Ngành ô tô</span>
                </p>
                <p>{this.props.infor.address}</p>
                <p style={{ color: "black", fontWeight: "bold" }}>
                  {this.props.infor.phoneNumber}
                </p>
              </div>
            </div>
            <div style={{ marginTop: 20 }} className="row no-gutters">
              {this.props.infor.images.map(item => {
                <div
                  style={{ border: "1px solid #cecece", marginRight: 5 }}
                  className="col-2"
                >
                  <img src={item} width="100%" height="100%" />
                </div>;
              })}
            </div>
          </div>
        </div>
        <div
          style={{
            marginTop: 20,
            border: "1px solid #cecece",
            backgroundColor: "#eddeee"
          }}
          className="row no-gutters"
        >
          <div
            style={{ paddingTop: 20, paddingBottom: 20 }}
            className="col-6 row no-gutters justify-content-center"
          >
            <a href="" style={{ color: " #007BAC" }}>
              {" "}
              {this.props.infor.email}{" "}
            </a>
          </div>
          <div
            style={{ paddingTop: 20, paddingBottom: 20 }}
            className="col-6 row no-gutters justify-content-center"
          >
            <a href={this.props.infor.website} style={{ color: " #007BAC" }}>
              {" "}
              {this.props.infor.website}{" "}
            </a>
          </div>
        </div>
      </div>
    );
  }
}
Company.propTypes = {
  title: PropTypes.string,
  child: PropTypes.array,
  onClick: PropTypes.func
};

const styles = {
  index: {
    marginTop: 20,
    height: "auto",
    background: "#FFFFFF",
    borderRadius: "6px 6px 0px 0px",
    position: "relative"
  },
  number: {
    width: 30,
    height: 30,
    backgroundColor: "Yellow",
    textAlign: "center",
    fontSize: 15,
    marginTop: 20,
    marginLeft: 20,
    padding: 5
  },
  title: {
    color: "#333333",
    marginTop: 10
  }
};