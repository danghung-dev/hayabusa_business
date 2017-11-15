import React from "react";
import setting from "./setting";
import MyCarousel from "./MyCarousel";
import data from "./data";
export default class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      images: this.getImagesFromData(data[3].company),
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
  };
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
        <MyCarousel
          className="xs-carousel"
          style={{
            marginTop: 50,
            width: "100%",
            display: "flex",
            alignContent: "center",
            justifyContent: "center"
          }}
          width= "600"
          height= "200"
          images={this.state.images}
          href={this.state.href}
          text={this.state.text}
          ease={this.state.ease}
          duration={this.state.duration}
          layout={this.state.layout}
        />
      </div>
    );
  }
}