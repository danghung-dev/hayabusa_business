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
        <li onClick={()=>{this.props.onClick(this.props.href)}} style={{ color: '#00C', fontSize: 15, marginLeft: 15 }}>{this.props.title}</li>
         {this.props.child.map((item)=>{
            <li style={{ color: '#00C', fontSize: 15, marginLeft: 30 }}>{item.title}</li>
         })}
      </div>
    );
  }
}
TagHeader.propTypes = {
  title: PropTypes.any,
  child: PropTypes.any,
  onClick: PropTypes.func,
};
