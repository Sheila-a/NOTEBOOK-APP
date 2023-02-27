import React, { Component } from "react";
import Burger from "../Hamburger/Hamburger.js";
import design from "./Header.module.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className={design.header}>
        <h1>
          <Link to="/edit-notes"> Sheila's Notes</Link>
        </h1>
        <Burger />
      </div>
    );
  }
}
