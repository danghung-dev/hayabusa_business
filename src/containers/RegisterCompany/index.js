import React from "react";
import { parse } from "qs";
import { connect } from "react-redux";
import { addCompany } from "./actions";
import { getList } from "../HomePage/actions";
import { bindActionCreators } from "redux";
import InlineForm from "../../compoments/InlineForm";
import InlineSelect from "../../compoments/InlineSelect";
export class RegisterCompany extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      telephoneNumber: "",
      Fax: "",
      Website: "",
      city: "",
      email: "",
      director: "",
      directorEmail: "",
      mainCategory: "",
      shortDescription: ""
    };
    this.isRegister = false;
    this.setInputState = this.setInputState.bind(this);
    this.setSelectState = this.setSelectState.bind(this);
    this.register = this.register.bind(this);
  }
  componentDidMount() {
    this.props.getList();
  }
  setInputState(name, event) {
    this.setState({ [name]: event.target.value });
  }
  setSelectState(name, event) {
    this.setState({ [name]: event.value });
  }
  register() {
    this.isRegister = true;
    const data = {
      name: this.state.name,
      address: this.state.address,
      phoneNumber: this.state.telephoneNumber,
      website: this.state.Website,
      shortDescription: this.state.shortDescription,
      email: this.state.email,
      categoryId: this.state.mainCategory
    };
    this.props.addCompany(data);
  }
  parseList(list) {
    let result = [];
    list.map(item => {
      let temp = {};
      temp.value = item._id;
      temp.label = item.name;
      result.push(temp);
    });
    return result;
  }
  render() {
    if (this.props.success && this.isRegister) {
      this.props.history.push(`/detail?id=${this.props.data._id}`);
    }
    return (
      <div style={{ marginBottom: 200 }}>
        <div
          style={{
            textAlign: "center",
            marginTop: 20,
            fontSize: 30,
            color: "blue"
          }}
        >
          HAYABUSA
        </div>
        <div style={{ marginTop: 50 }} className="row">
          <div className="col-10 col-sm-8 offset-1 offset-sm-2">
            <h5 style={{ color: "blue", marginTop: 20, marginBottom: 20 }}>
              Thông tin công ty
            </h5>
            <div style={{ border: "1px solid gray" }}>
              <form style={{ marginTop: 10, padding: 20 }}>
                <InlineForm
                  label="Tên công ty * :"
                  id="name"
                  placeholder=""
                  value={this.state.name}
                  onChange={event => {
                    this.setInputState("name", event);
                  }}
                />
                <InlineForm
                  label="Đia chỉ * :"
                  id="address"
                  placeholder=""
                  value={this.state.address}
                  onChange={event => {
                    this.setInputState("address", event);
                  }}
                />
                <InlineForm
                  label="Điện thoại :"
                  id="telephoneNumber"
                  placeholder=""
                  value={this.state.telephoneNumber}
                  onChange={event => {
                    this.setInputState("telephoneNumber", event);
                  }}
                />
                <InlineForm
                  label="Số Fax:"
                  id="Fax"
                  placeholder=""
                  value={this.state.Fax}
                  onChange={event => {
                    this.setInputState("Fax", event);
                  }}
                />
                <InlineForm
                  label="Website :"
                  id="Website"
                  placeholder=""
                  value={this.state.Website}
                  onChange={event => {
                    this.setInputState("Website", event);
                  }}
                />
                <InlineForm
                  label="Email:"
                  id="email"
                  placeholder=""
                  value={this.state.email}
                  onChange={event => {
                    this.setInputState("email", event);
                  }}
                />
                <InlineForm
                  label="Tỉnh/Thành phố *:"
                  id="city"
                  placeholder=""
                  value={this.state.city}
                  onChange={event => {
                    this.setInputState("city", event);
                  }}
                />
                <InlineForm
                  label="Tên giám đốc:"
                  id="director"
                  placeholder=""
                  value={this.state.director}
                  onChange={event => {
                    this.setInputState("director", event);
                  }}
                />
                <InlineForm
                  label="Email giám đốc:"
                  id="directorEmail"
                  placeholder=""
                  value={this.state.directorEmail}
                  onChange={event => {
                    this.setInputState("directorEmail", event);
                  }}
                />
                <InlineSelect
                  title="Ngành nghề * :"
                  id="mainCategory"
                  options={this.parseList(this.props.listCategory)}
                  value={this.state.mainCategory}
                  onChange={event => {
                    this.setSelectState("mainCategory", event);
                  }}
                />
                <div className="form-group no-gutters">
                  <label className="col-sm-12">Chi tiết công ty</label>
                  <div className="col-sm-12">
                    <textarea
                      type="name"
                      className="form-control"
                      id="shortDescription"
                      value={this.state.shortDescription}
                      onChange={event => {
                        this.setInputState("shortDescription", event);
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
            <button
              onClick={this.register}
              style={{ marginTop: 50, marginBottom: 20 }}
              type="submit"
              className="btn btn-primary col-6 offset-3 col-sm-4 offset-sm-4"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = store => {
  const state = store.registerCompany;
  const cateState = store.home;
  return {
    listCategory: cateState.list,
    data: state.data,
    success: state.success
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getList, addCompany }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RegisterCompany);
