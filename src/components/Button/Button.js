import React from "react";
import "./Button.sass"

const Button = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <div className="Button">
      <a href= { this.props.link }> { this.props.text } </a>
    </div>
    )
  }
}

export default Button
