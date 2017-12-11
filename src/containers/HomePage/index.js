import React from "react";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getList } from "./actions";
import TagHeader from "../../compoments/TagHeader";
export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listCategory: null
    };
    this.onClick = this.onClick.bind(this);
    this.renderListCategory = this.renderListCategory.bind(this);
  }
  componentWillMount() {
    this.props.getList();
  }
  onClick(href) {
    this.props.history.push(`/company?name=${href}`);
  }
  renderListCategory() {
    if (!this.props.listCategory) return null;
    let listDiv;
    listDiv = this.props.listCategory.map(t => {
      const link = `/category/${t._id}`;
      return (
        <div>
          <Link target="_blank" to={link}>
            {t.name}
          </Link>
        </div>
      );
    });
    return <div>{listDiv}</div>;
  }
  render() {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 30,
            color: "blue"
          }}
        >
          ハヤブサビジネス交流サイト
        </div>

        <div>経済分類は下記のように対応します。 </div>
        {this.renderListCategory()}
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
