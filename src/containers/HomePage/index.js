import React from "react";
import { bindActionCreators } from "redux";

import { connect } from 'react-redux'
import { getList } from './actions'
import TagHeader from '../../compoments/TagHeader'
export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.onClick = this.onClick.bind(this);
  }
  onClick(href){
    this.props.history.push(`/company?name=${href}`);
  }
  render() {
    return (
      <div>
        <div style={{ textAlign: 'center', marginTop: 20, fontSize: 30, color: 'blue'}}> HAYABUSA</div>
        <div style={{ marginTop: 20 }} >
          <TagHeader onClick={this.onClick} href="test" title="fafafa" child={[]} />
        </div>
      </div>
    );
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
