import React from "react";
import { connect } from 'react-redux'
import { getList } from './actions'
export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
     this.props.getlist()
  }
  render() {
    return (
      <div>
       
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    list : state.List.get('list'),
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getlist : () => dispatch(getList())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)