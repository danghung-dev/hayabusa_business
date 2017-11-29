import React from "react";
import setting from "./setting";
import data from "./data";
import Carousel from "../../MyLib/react-3d-carousel-video/js/Carousel";
import "./style.css";
export default class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      images: this.getImagesFromData(data[3].company),
      href: this.getHrefFromData(data[3].company),
      text: this.getTitleFromData(data[3].company),
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
        <img style={{ margin: 20 }} src="./logo.png" height="30" width="130" />
        <div style= {{ width: '100%', height: 100,textAlign: 'center', fontSize: 30, color: 'red' }}>
          CÔNG TY HAYZBUSA
        </div>
        <div style={{marginLeft: 300}}>
          <Carousel
            key3D="aabcd"
            width="400"
            height="200"
            images={this.state.images}
            href={this.state.href}
            text={this.state.text}
            ease={this.state.ease}
            duration={this.state.duration}
            layout={this.state.layout}
            auto={false}
            autoRotateTime={1500}
          />
        </div>
      </div>
    );
  }
}
