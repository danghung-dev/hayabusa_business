const React = require('react');
const createReactClass = require('create-react-class');
const Util = require('./util');
const Layout = require('./layout');
const Depot = require('./depot');
const rightImage = require('./../img/right.png');
const leftImage = require('./../img/left.png');
const Carousel = createReactClass({
  displayName: 'Carousel',
  getInitialState: function getInitialState() {
    return {
      images: this.props.images,
      text: this.props.text,
      href: this.props.href,
      width: this.props.width ? this.props.width : '400',
      height: this.props.height ? this.props.height : '200',
      figures: Layout[this.props.layout].figures(
        this.props.width,
        this.props.images,
        0
      ),
      rotationY: 0,
    };
  },
  componentWillMount: function componentWillMount() {
    this.depot = Depot(
      this.getInitialState(),
      this.props,
      this.setState.bind(this)
    );
    this.onRotate = this.depot.onRotate.bind(this);
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.depot.onNextProps(nextProps);
  },
  render: function render() {
    const angle = 2 * Math.PI / this.state.figures.length;
    const translateZ = -Layout[this.props.layout].distance(
      this.props.width,
      this.state.figures.length
    );
    const sef = this;
    const figures = this.state.figures.map((d, i) =>
      React.createElement(
        'figure',
        {
          key: i,
          style: Util.figureStyle(d, sef.props.width, sef.props.height),
        },
        React.createElement(
          'a',
          {
            href: sef.props.href[i],
            target: '_blank',
            style: {
              height: `${sef.state.height}px`,
              width: `${sef.state.width}px`,
              textDecoration: 'none',
            },
          },
          [
            React.createElement('img', {
              src: d.image,
              key: i,
              alt: i,
              height: sef.state.height,
              width: `${sef.state.width}px`,
            }),
            //     React.createElement("a", { href:sef.props.href[i],style: {zIndex:1, height:'100',display:'block', fontSize:'25', marginTop:'-130', color: "white", backgroundColor: "rgba(0.5, 0.5, 0.5, 0.9)",textDecoration: 'none'}}, sef.props.text[i])
          ]
        )
      )
    );
    return React.createElement(
      'section',
      {
        className: 'react-3d-carousel',
        style: { width: `${this.props.width}px` },
      },
      React.createElement(
        'div',
        {
          className: 'carousel',
          style: {
            transform: `translateZ(${translateZ}px)`,
            height: `${sef.state.height}px`,
          },
        },
        figures
      ),
      React.createElement('img', {
        src: leftImage,
        className: 'prev',
        onClick: Util.partial(this.onRotate, -angle),
        style: {
          position: 'absolute',
          top: `${parseInt(sef.state.height / 2 + 49, 10)}px`,
          left: '50px',
          width: `${parseInt(sef.state.width / 200 * 43, 10)}px`,
          height: `${parseInt(sef.state.height / 200 * 49, 10)}px`,
          zIndex: 100000,
        },
      }),
      React.createElement('img', {
        src: rightImage,
        className: 'next',
        onClick: Util.partial(this.onRotate, +angle),
        style: {
          position: 'absolute',
          top: parseInt(sef.state.height / 2 + 49, 10),
          left: `${sef.state.width}px`,
          width: `${parseInt(sef.state.width / 200 * 43, 10)}px`,
          height: `${parseInt(sef.state.height / 200 * 49, 10)}px`,
          zIndex: 100000,
        },
      })
    );
  },
});
module.exports = Carousel;
