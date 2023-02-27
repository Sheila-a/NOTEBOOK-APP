import React from "react";
import { Burger } from "../Hamburger/Hamburger.js";
import design from "./Header.module.css";

const Header = () => {
  return (
    <div className={design.header}>
      <h1>Sheila's Notes</h1>
      <Burger />
    </div>
  );
};

export default Header;
