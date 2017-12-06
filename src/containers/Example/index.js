import React from "react";
import setting from "./setting";
import MyCarousel from "./MyCarousel";
import data from "./data";
import logo from "../../img/logo.png";
import { Link } from 'react-router-dom'
import "./style.css";
export default class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      images: this.getImagesFromData(data[0].company),
      href: this.getHrefFromData(data[0].company),
      text: this.getTitleFromData(data[0].company),
      layout: "prism",
      ease: "linear",
      duration: setting.rotateDurarota
    };
    this.getImagesFromData = this.getImagesFromData.bind(this);
    this.getHrefFromData = this.getHrefFromData.bind(this);
    this.getCompanyFromId = this.getCompanyFromId.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  getCompanyFromId(data, id) {
    var result = {};
    if (data.length > 0) {
      data.map(function(item, index) {
        if (item.id === id) {
          result = item.company;
        }
      });
    }
    result = result.slice(0, setting.imageNumber);

    return result;
  }
  getImagesFromData(data) {
    var result = [];
    if (data.length > 0) {
      data.map(function(item, index) {
        result.push(item.image);
      });
    }
    result = result.slice(0, setting.imageNumber);
    return result;
  }
  getHrefFromData(data) {
    var result = [];
    if (data.length > 0) {
      data.map(function(item, index) {
        result.push(item.href);
      });
    }
    result = result.slice(0, setting.imageNumber);
    return result;
  }
  getTitleFromData(data) {
    var result = [];
    if (data.length > 0) {
      data.map(function(item, index) {
        result.push(item.title);
      });
    }
    return result;
  }
  handleChange(event) {
    var companyArray = this.getCompanyFromId(data, event.target.value);
    this.setState({
      images: this.getImagesFromData(companyArray),
      href: this.getHrefFromData(companyArray),
      text: this.getTitleFromData(companyArray)
    });
  }
  render() {
    return (
      <div style={{ width: "100%" }}>
        <img style={{ margin: 20 }} src='./logo.png' height="30" width="130" />
        <div
          style={{
            width: "100%",
            height: 100,
            textAlign: "center",
            fontSize: 30,
            color: "red"
          }}
        >
          ハヤブサ広告システム
        </div>
        <div
          style={{
            marginTop: 20,
            width: "100%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center"
          }}
        >
          <span style={{ marginTop: 5 }}> Chọn ngành nghề : </span>
          <select
            style={{ marginLeft: 20, height: 30, width: 500 }}
            onChange={this.handleChange}
          >
            <option value="0">Công Nghệ</option>
            <option value="1">Mỹ Phẩm</option>
            <option value="2">Nước Uống</option>
            <option value="3">Default</option>
          </select>
        </div>
        
        <div style={{ height: 100, width: "100%" }} />
        <div>
          <MyCarousel
            style={{
              marginLeft: 400
            }}
            key3D="aabcd"
            width="400"
            height="200"
            images={this.state.images}
            href={this.state.href}
            text={this.state.text}
            ease={this.state.ease}
            duration={this.state.duration}
            layout={this.state.layout}
            auto={true}
            autoRotateTime={1500}
          />
        </div>
        <div style={{ height: 300, width: "100%" }} />
        <div style={{ textAlign: "center", width: "100%" }}>
        <Link to="/">Video</Link>
        </div>
      </div>
    );
  }
}
