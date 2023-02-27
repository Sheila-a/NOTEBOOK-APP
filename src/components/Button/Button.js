import React, { Component } from "react";
import design from "./button.module.css";

export default class StyledBtn extends Component {
  render() {
    const { onPress, classing } = this.props;

    return (
      <button className={design.button} onClick={onPress} id={classing}>
        {this.props.btnName}
      </button>
    );
  }
}
