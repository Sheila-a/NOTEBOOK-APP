import React from "react";
import design from "./MainSection.module.css";

export default class MainSection extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className={design.main_section}>
        <div className={design.main_editor}>
          <input type="text" autoFocus id="title" />
          <textarea
            name=""
            id="body"
            placeholder="Put down your notes...."
          ></textarea>
        </div>
        <div className={design.main_preview}>
          <h1 className={design.main_preview_title}>TITLE</h1>
          <div className={design.main_preview_markdown}>note preview</div>
        </div>
      </div>
    );
  }
}
