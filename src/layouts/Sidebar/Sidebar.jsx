import React, { Component } from "react";
import StyledBtn from "../../components/Button/Button";
import design from "./Sidebar.module.css";
import { Link } from "react-router-dom";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortedNotes: [],
    };
    this.setCurrentNote = this.setCurrentNote.bind(this);
    this.onDeleteNote = this.onDeleteNote.bind(this);
  }

  componentDidMount() {
    const { notes } = this.props;
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
    this.setState({ sortedNotes });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.notes !== this.props.notes) {
      const sortedNotes = this.props.notes.sort(
        (a, b) => b.lastModified - a.lastModified
      );
      this.setState({ sortedNotes });
    }
  }

  setCurrentNote(id) {
    this.props.setCurrentNote(id);
  }

  onDeleteNote(id) {
    this.props.onDeleteNote(id);
  }

  render() {
    const { sortedNotes } = this.state;
    const { onAddNote, currentNote } = this.props;

    return (
      <div className={design.sidebar}>
        <div className={design.side_head}>
          <h1>
            <Link to="/">Sheila's Notes</Link>{" "}
          </h1>
          <StyledBtn btnName={"Add Notes"} onPress={onAddNote} />
        </div>
        <div className={design.side_notes}>
          {sortedNotes.map(({ id, title, body, lastTimeModified }) => (
            <div
              className={`${design.side_single_note} ${
                id === currentNote && design.active
              }`}
              onClick={() => this.setCurrentNote(id)}
            >
              <div className={design.side_note_title}>
                <p>{title}</p>
                <StyledBtn
                  classing={design.deleting}
                  btnName={"Delete"}
                  onPress={(e) => this.onDeleteNote(id)}
                />
              </div>
              <p>{body && body.substr(0, 100) + "..."}</p>
              <small className={design.side_note_small}>
                Last modified{" "}
                {new Date(lastTimeModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
