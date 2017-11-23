/**
 *
 * HomePage
 *
 */
import GoogleImages from 'google-images';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectHomePage from './selectors';
import reducer from './reducer';
import saga from './saga';
import setting from './setting';
import MyCarousel from './MyCarousel';
import Data from './data';
import './style.css';
export class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      images: this.getImagesFromData(Data[3].company),
      href: this.getHrefFromData(Data[0].company),
      text: this.getTitleFromData(Data[0].company),
      layout: 'prism',
      ease: 'linear',
      duration: setting.rotateDurarota,
    };
    const client = new GoogleImages(
      '000693924675613677504:tgwhxnv6w5k',
      'AIzaSyAibc4Z2IrPpMfrSR-gGHEQGOJE6WGMZpQ'
    );

    client.search('fsdfsf').then((images) => {
      console.log(images);
    });
    this.getImagesFromData = this.getImagesFromData.bind(this);
    this.getHrefFromData = this.getHrefFromData.bind(this);
    //  this.getCompanyFromId = this.getCompanyFromId.bind(this);
    //  this.handleChange = this.handleChange.bind(this);
  }
  // getCompanyFromId(data, id) {
  //   var result = {};
  //   if (data.length > 0) {
  //     data.map(function(item, index) {
  //       if (item.id === id) {
  //         result = item.company;
  //       }
  //     });
  //   }
  //   result = result.slice(0, setting.imageNumber);

  //   return result;
  // };
  getImagesFromData(data) {
    let result = [];
    if (data.length > 0) {
      data.map((item) => {
        result.push(item.image);
      });
    }
    result = result.slice(0, setting.imageNumber);
    return result;
  }
  getHrefFromData(data) {
    let result = [];
    if (data.length > 0) {
      data.map((item) => {
        result.push(item.href);
      });
    }
    result = result.slice(0, setting.imageNumber);
    return result;
  }
  getTitleFromData(data) {
    const result = [];
    if (data.length > 0) {
      data.map((item) => {
        result.push(item.title);
      });
    }
    return result;
  }
  // handleChange(event) {
  //   var companyArray = this.getCompanyFromId(data, event.target.value);
  //   this.setState({
  //     images: this.getImagesFromData(companyArray),
  //     href: this.getHrefFromData(companyArray),
  //     text: this.getTitleFromData(companyArray)
  //   });
  // }
  render() {
    return (
      <div style={{ width: '100%' }}>
        <input
          style={{
            marginTop: 50,
            width: 200,
            height: 30,
            border: '1px solid gray',
          }}
          type="text"
          name="name"
        />
        <MyCarousel
          style={{
            marginTop: 50,
            marginLeft: 100,
            marginRight: 100,
          }}
          width="150"
          height="60"
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
    );
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  homepage: makeSelectHomePage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homepage', reducer });
const withSaga = injectSaga({ key: 'homepage', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
