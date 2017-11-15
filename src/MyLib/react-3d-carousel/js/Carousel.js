var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');
var Util = require('./util');
var Layout = require('./layout');
var Depot = require('./depot');
var rightImage = require('./../img/right.png');
var leftImage = require('./../img/left.png');
var Carousel = createReactClass({
    displayName: 'Carousel',
    getInitialState: function getInitialState() {
        return {
            images: this.props.images,
            text:this.props.text,
            href:this.props.href,
            width: this.props.width ? this.props.width : '400',
            height: this.props.height ? this.props.height : '200',
            figures: Layout[this.props.layout].figures(this.props.width, this.props.images, 0),
            rotationY: 0
        };
    },
    componentWillMount: function componentWillMount() {
        this.depot = Depot(this.getInitialState(), this.props, this.setState.bind(this));
        this.onRotate = this.depot.onRotate.bind(this);
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.depot.onNextProps(nextProps);
    },
    render: function render() {
        var angle = 2 * Math.PI / this.state.figures.length;
        var translateZ = -Layout[this.props.layout].distance(this.props.width, this.state.figures.length);
        var sef = this
        var figures = this.state.figures.map(function (d, i) {
            return React.createElement(
                'figure',
                { key: i, style: Util.figureStyle(d,sef.props.width) },
                  React.createElement('a',  { href:sef.props.href[i], target:"_blank" ,style: { height: 'auto', width: sef.state.width+'px',textDecoration: 'none' }},[
                     React.createElement('img', { src: d.image, key: i, alt: i, height: sef.state.height, width: sef.state.width+'px' }),
                //     React.createElement("a", { href:sef.props.href[i],style: {zIndex:1, height:'100',display:'block', fontSize:'25', marginTop:'-130', color: "white", backgroundColor: "rgba(0.5, 0.5, 0.5, 0.9)",textDecoration: 'none'}}, sef.props.text[i])
                 ])
            );
        });
        return React.createElement(
            'section',
            { className: 'react-3d-carousel',
              style: { width: this.props.width }
            },
            React.createElement(
                'div',
                { className: 'carousel',
                    style: { transform: 'translateZ(' + translateZ + 'px)' } },
                figures
            ),
            React.createElement('img', { src: leftImage, className: 'prev', onClick: Util.partial(this.onRotate, -angle), style:{position: 'absolute', top: sef.state.height/2 + 50, left: '50px', width: '43px', height: '49px',zIndex: 100000 } }),
            React.createElement('img', { src: rightImage, className: 'next', onClick: Util.partial(this.onRotate, +angle), style:{ position: 'absolute', top: sef.state.height/2 + 50 , left: sef.state.width +'px', width: '43px', height: '49px', zIndex: 100000} })
        );
    }
});
module.exports = Carousel;