import React, { Component } from "react";
import design from "./Card.module.css";
import { Link } from "react-router-dom";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, body, lastTimeModified } = this.props;

    return (
      <div className={design.note}>
        <p>
          <Link to="/edit-notes">{title}</Link>
        </p>
        <span>{body}</span>
        <div className={design.note_footer}>
          <small>
            {new Date(lastTimeModified).toLocaleDateString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </small>
        </div>
      </div>
    );
  }
}
