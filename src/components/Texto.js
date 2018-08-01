import React from "react";

class Texto extends React.Component {
  render() {
    return (
      <p className="field__text">{this.props.mitexto}</p>
    );
  }
}

export default Texto;