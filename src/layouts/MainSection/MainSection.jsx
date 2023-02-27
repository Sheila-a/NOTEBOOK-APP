import React, { Component } from "react";
import design from "./MainSection.module.css";

export default class MainSection extends Component {
  constructor(props) {
    super(props);

    this.onEditArea = this.onEditArea.bind(this);
  }
  onEditArea = (field, value) => {
    const { currentNote, onUpdateNote } = this.props;
    onUpdateNote({
      ...currentNote,
      [field]: value,
      lastTimeModified: Date.now(),
    });
  };

  render() {
    const { currentNote } = this.props;

    if (!currentNote)
      return <div className={design.no_active_note}>No Note is Active</div>;

    return (
      <div className={design.main_section}>
        <div className={design.main_editor}>
          <input
            type="text"
            autoFocus
            id="title"
            placeholder="Note Title"
            value={currentNote.title}
            onChange={(e) => this.onEditArea("title", e.target.value)}
          />
          <textarea
            name=""
            id="body"
            placeholder="Put down your notes...."
            value={currentNote.body}
            onChange={(e) => this.onEditArea("body", e.target.value)}
          ></textarea>
        </div>
        <div className={design.main_preview}>
          <h1 className={design.main_preview_title}>{currentNote.title}</h1>
          <div className={design.main_preview_markdown}>{currentNote.body}</div>
        </div>
      </div>
    );
  }
}
