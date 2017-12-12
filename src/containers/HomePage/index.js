import React from "react";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import lang from "../../languages";
import { getList } from "./actions";
import CategoryList from "../../compoments/CategoryList";
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
    let listDiv;
    listDiv = this.props.listCategory.map(t => (
      <CategoryList
        _id={t._id}
        name={t.name}
        childs={t.childs ? t.childs : []}
      />
    ));
    return <div>{listDiv}</div>;
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
        <div style={{ marginTop: 30 }}>
          <div className="col-10 col-sm-8 offset-1 offset-sm-2">
            <h5 style={{ color: "blue", marginTop: 20, marginBottom: 20 }}>
              {lang.t("categoryList")}
            </h5>
            <div style={{ border: "1px solid gray", padding: 20 }}>
              {this.renderListCategory()}
            </div>
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
