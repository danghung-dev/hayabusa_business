var React = require("react");
var Carousel = require("react-3d-carousel");
var Ease = require('ease-functions');
var MyCarousel = React.createClass({
  render: function() {
    return (
      <div className={this.props.className} style={this.props.style}>
        <Carousel
          width={this.props.width}
          images={this.props.images}
          href={this.props.href}
          text={this.props.text}
          ease={this.props.ease}
          duration={this.props.duration}
          layout={this.props.layout}
        />
      </div>
    );
  }
});
module.exports = MyCarousel;    
