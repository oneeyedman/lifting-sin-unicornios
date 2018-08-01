import React from "react";

class Campo extends React.Component {
  constructor(props) {
    super(props);
    this.handleUnicornChange = this.handleUnicornChange.bind(this);

    this.comunGithub = 'https://github.com/';
    this.comunPhone = 'tel:';
  }

  handleUnicornChange(e) {

    const unicornValue = e.currentTarget.value;

    if (e.currentTarget.getAttribute('id')=== 'phone') {
      this.props.miotroclickdeApp(this.comunPhone + unicornValue);
    } else {
      this.props.miotroclickdeApp(this.comunGithub + unicornValue);
    }


    
  }

  render() {
    return (
      <div className="row">
        <label>{this.props.label}</label>
        <input type="text" className="form__field" id={this.props.label} onChange={this.handleUnicornChange} />
      </div>
    );
  }
}

export default Campo;