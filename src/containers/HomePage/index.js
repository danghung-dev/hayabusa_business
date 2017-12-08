import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getList } from "./actions";
export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    this.props.getList();
  }
  render() {
    return <div> test </div>;
  }
}
const mapStateToProps = store => {
  const state = store.home;
  console.log("list categories: ", state.list);
  return {
    list: state.list
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getList
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
