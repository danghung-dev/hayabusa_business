import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
export default class TagHeader extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <li style={{ color: '#00C', fontSize: 15}}>{this.props.title}</li>
         {this.props.child.map((item)=>{
         })}
      </div>
    );
  }
}
TagHeader.propTypes = {
  title: PropTypes.any,
  child: PropTypes.any,
};
