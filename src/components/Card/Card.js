import React from "react";
import design from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ title, body, lastTimeModified }) => {
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
};

export default Card;
