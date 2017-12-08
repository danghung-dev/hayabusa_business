import React from "react";
import { parse } from 'qs'
import { connect } from 'react-redux'
import { getListCompany } from './actions'
import { bindActionCreators } from "redux";
import CompanyList from '../../compoments/CompanyList'
export class Company extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
     
    const query = parse(this.props.location.search.substr(1))
  }
  componentDidMount() {
    this.props.getListCompany()
  }
  render() {
    console.log(this.props.list);
    return (
      <div>
        <div style={{ textAlign: 'center', marginTop: 20, fontSize: 30, color: 'blue'}}> HAYABUSA</div>
        <div style={{ marginTop: 20 }} >
          <CompanyList data={this.props.list} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = store => {
  const state = store.company;
  return {
    list: state.list
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getListCompany
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Company)