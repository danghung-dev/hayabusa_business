const React = require('react');
const Carousel = require('MyLib/react-3d-carousel/js/Carousel');
const createReactClass = require('create-react-class');
const MyCarousel = createReactClass({
  render() {
    return (
      <div className={this.props.className} style={this.props.style}>
        <Carousel
          width={this.props.width}
          height={this.props.height}
          images={this.props.images}
          href={this.props.href}
          text={this.props.text}
          ease={this.props.ease}
          duration={this.props.duration}
          layout={this.props.layout}
          auto={this.props.auto}
          autoRotateTime={this.props.autoRotateTime}
        />
      </div>
    );
  },
});
module.exports = MyCarousel;
