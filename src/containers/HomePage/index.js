import React from "react";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import lang from "../../languages";
import { getList } from "./actions";
import CategoryList from "../../compoments/CategoryList";
import CompanyLogo from "../../compoments/CompanyLogo";
export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listCategory: null
    };
    this.renderListCategory = this.renderListCategory.bind(this);
    this.register = this.register.bind(this);
  }
  componentWillMount() {
    this.props.getList();
  }
  register() {
    this.props.history.push("/register");
  }
  renderListCategory() {
    if (!this.props.listCategory) return null;
    return <CategoryList listCategory={this.props.listCategory} />;
  }
  render() {
    const sef = this;
    return (
      <div>
        <div
          style={{
            marginTop: 30,
            width: "100%",
            textAlign: "center",
            fontSize: 30,
            color: "red"
          }}
        >
          {lang.t("hayabusa")}
        </div>

        <div
          style={{
            marginTop: 15,
            paddingTop: 15,
            paddingBottom: 30,
            width: "100%",
            textAlign: "center",
            color: "red",
            backgroundColor: "#33ccff"
          }}
        >
          <img src="./img/petrolimex.png" width={150} /> PETROLグループ
          <CompanyLogo number={1} />
          <div style={{ marginTop: 15 }}>
            <a href="http://fahasa.com">
              <img src="./img/fahasa.png" width={150} /> FAHASAグループ
            </a>
            <CompanyLogo />
          </div>
        </div>

        <div style={{ marginTop: 30 }}>
          <div className="col-10 col-sm-8 offset-1 offset-sm-2">
            <h5 style={{ color: "blue", marginTop: 20, marginBottom: 20 }}>
              {lang.t("categoryList")}
            </h5>
            <div style={{ paddingTop: 20 }}>{this.renderListCategory()}</div>
            <button
              style={{ marginTop: 50, marginBottom: 20 }}
              onClick={this.register}
              type="submit"
              className="btn btn-primary col-6 offset-3 col-sm-4 offset-sm-4"
            >
              {lang.t("register")}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = store => {
  const state = store.home;
  console.log("list categories: ", state.list);
  return {
    listCategory: state.list
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
