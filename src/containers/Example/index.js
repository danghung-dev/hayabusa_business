import React from "react";
import setting from "./setting";
import MyCarousel from "./MyCarousel";
import data from "./data";
import logo from '../../img/logo.png';
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
        <img style={{ margin: 20 }} src={logo} height="30" width="130" />
        <div style= {{ width: '100%', height: 100,textAlign: 'center', fontSize: 30, color: 'red' }}>
          CÔNG TY HAYZBUSA
        </div>
        <div>
          <MyCarousel
            style={{
              marginLeft: 500
            }}
            key3D="abc"
            width="100"
            height="50"
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
        <div style={{height: 100, width: '100%' }}>
        </div>
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
        <div style={{height: 500, width: '100%' }}>
        </div>
        <div style={{textAlign: 'center', width: '100%'}}>
          <a href="/video"> Video</a>
        </div>
      </div>
    );
  }
}
