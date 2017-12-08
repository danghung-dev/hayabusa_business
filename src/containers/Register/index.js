import React from "react";
import Select from '../../compoments/Select';
import 'bootstrap/dist/css/bootstrap.css';
export default class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      companyValue: "",
      companyLable: ""
    };
    this.selectCompany = this.selectCompany.bind(this);
  }
  selectCompany(selectedOption) {
    this.setState({
      companyValue: selectedOption.value,
      companyLable: selectedOption.label
    });
  }
  render() {
    return (
      <div className="row" >
        <Select
          className="col-sm-5 offset-sm-3"
          title= "Chọn ngành nghề "
          name="form-field-name"
          value={this.state.companyValue}
          onChange={this.selectCompany}
          options={[
            { value: 'one', label: 'One' },
            { value: 'two', label: 'Two' },
          ]}
        />
      </div>
    );
  }
}
