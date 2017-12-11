import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import { Link } from "react-router-dom";
export default class CategoryList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const link = `/category/${this.props._id}`;
    const sef = this;
    return (
      <div>
        <Link target="_blank" to={link}>
          {this.props.name}
        </Link>
        {this.props.childs.map(t => {
          const tempLink = `/category/${t._id}`;
          return (
            <div>
              <Link target="_blank" to={tempLink}>
                {t.name}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
CategoryList.propTypes = {
  name: PropTypes.any,
  id: PropTypes.any
};
