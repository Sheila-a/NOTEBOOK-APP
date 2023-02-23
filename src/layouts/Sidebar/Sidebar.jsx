import React from "react";
import StyledBtn from "../../components/Button/Button";
import design from "./Sidebar.module.css";

export default class Sidebar extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div classNa me={design.sidebar.lo}>
        <div className={design.side_head}>
          <h1>Sheila's Notes</h1>
          <StyledBtn btnName={"Add Notes"} />
        </div>
        <div className={design.side_notes}>
          <div className={design.side_single_note}>
            <div className={design.side_note_title}>
              <p>TITLE</p>
              <StyledBtn btnName={"Delete"} />
            </div>
            <p>Note preview</p>
            <small className={design.side_note_small}>
              Last modified [date]
            </small>
          </div>
        </div>
      </div>
    );
  }
}
