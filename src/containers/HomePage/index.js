import React from "react";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { connect } from "react-redux";
import lang from "../../languages";
import { getList } from "./actions";
import CategoryList from "../../compoments/CategoryList";
import CompanyLogo from "../../compoments/CompanyLogo";
import Footer from "../../compoments/Footer";
export class Home extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      listCategory: null,
      lang: localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
    };
    lang.changeLanguage(this.state.lang);
    this.renderListCategory = this.renderListCategory.bind(this);
    this.register = this.register.bind(this);
    this.setLanguageTitle = this.setLanguageTitle.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
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
  setLanguageTitle(languageKey) {
    switch (languageKey) {
      case "vi":
        return (
          <span>
            <img src="./img/vietnam.png" style={{ width: 20, height: 20 }} />
            <span style={{ marginLeft: 10 }}>Việt Nam</span>
          </span>
        );
      case "en":
        return (
          <span>
            <img src="./img/vietnam.png" style={{ width: 20, height: 20 }} />
            <span style={{ marginLeft: 10 }}>English</span>
          </span>
        );
      case "jan":
        return (
          <span>
            <img src="./img/japan.png" style={{ width: 20, height: 20 }} />
            <span style={{ marginLeft: 10 }}>日本</span>
          </span>
        );
      default:
        return (
          <div>
            <img src="./img/English.png" style={{ width: 20, height: 20 }} />
            <span style={{ marginLeft: 10 }}>English</span>
          </div>
        );
    }
  }
  changeLanguage(eventkey) {
    //alert(JSON.stringify(event))
    lang.changeLanguage(eventkey);
    localStorage.setItem("lang", eventkey);
    this.setState({
      lang: eventkey
    });
    window.location.reload();
  }
  render() {
    const sef = this;
    return (
      <div>
        <div style={{ color: "black", textAlign: "right" }}>
          <DropdownButton
            id="language"
            style={{ width: 120 }}
            onSelect={this.changeLanguage}
            title={this.setLanguageTitle(this.state.lang)}
          >
            <MenuItem eventKey="en">
              <img src="./img/vietnam.png" style={{ width: 20, height: 20 }} />
              <span style={{ marginLeft: 10 }}>English</span>
            </MenuItem>
            <MenuItem eventKey="vi">
              <img src="./img/English.png" style={{ width: 20, height: 20 }} />
              <span style={{ marginLeft: 10 }}>Việt Nam</span>
            </MenuItem>
            <MenuItem eventKey="jan">
              <img src="./img/japan.png" style={{ width: 20, height: 20 }} />
              <span style={{ marginLeft: 10 }}>日本</span>
            </MenuItem>
          </DropdownButton>
        </div>
        <div style={styles.title}>{lang.t("hayabusa")}</div>
        <div style={styles.vietnhatimage}>
          <img src="./img/viet_nhat.jpg" width={400} />
        </div>
        <div style={styles.petroImgae}>
          <a href="http://www.petrolimex.com.vn/">
            <img src="./img/petrolimex.png" width={150} /> PETROLグループ
          </a>
          <CompanyLogo number={1} />
          <div style={styles.fahasaBlock}>
            <a href="http://fahasa.com">
              <img src="./img/fahasa.png" width={150} /> FAHASAグループ
            </a>
            <CompanyLogo />
          </div>
        </div>

        <div style={styles.categoryBlock}>
          <div className="col-10 col-sm-8 offset-1 offset-sm-2">
            <h3 style={{ color: "blue", marginTop: 50, marginBottom: 20 }}>
              {lang.t("categoryList")}
            </h3>
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
        <Footer />
      </div>
    );
  }
}
const styles = {
  title: {
    marginTop: 30,
    width: "100%",
    textAlign: "center",
    fontSize: 30,
    color: "red"
  },
  vietnhatimage: {
    width: "100%",
    textAlign: "center",
    fontSize: 30,
    color: "red"
  },
  petroImgae: {
    marginTop: 15,
    paddingTop: 15,
    paddingBottom: 30,
    width: "100%",
    textAlign: "center",
    color: "red",
    backgroundColor: "#33ccff"
  },
  fahasaBlock: {
    marginTop: 15
  },
  categoryBlock: {
    marginTop: 30
  }
};
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
