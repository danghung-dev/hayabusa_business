import React from "react";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { parse } from "qs";
import { connect } from "react-redux";
import { getCompany } from "./actions";
export class CompanyDetail extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    const query = parse(this.props.location.search.substr(1));
    this.props.getCompany(query.id);
  }

  render() {
    const sef = this;
    return <div>{JSON.stringify(this.props.companyDetail)}</div>;
  }
}
const mapStateToProps = store => {
  const state = store.companyDetail;
  return {
    companyDetail: state.data
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCompany
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(CompanyDetail);
