import React from "react";
import design from "./button.module.css";

export default class StyledBtn extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return <button className={design.button}>{this.props.btnName}</button>;
  }
}
