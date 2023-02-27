import React from "react";
import StyledBtn from "../../components/Button/Button";
import design from "./Sidebar.module.css";

export default function Sidebar({
  notes,
  onAddNote,
  onDeleteNote,
  currentNote,
  setCurrentNote,
}) {
  return (
    <div className={design.sidebar}>
      <div className={design.side_head}>
        <h1>Sheila's Notes</h1>
        <StyledBtn btnName={"Add Notes"} onPress={onAddNote} />
      </div>
      <div className={design.side_notes}>
        {notes.map((note) => (
          <div
            key={note.id}
            className={`${design.side_single_note} ${
              note.id === currentNote && design.active
            }`}
            onClick={() => setCurrentNote(note.id)}
          >
            <div className={design.side_note_title}>
              <p>{note.title}</p>
              <StyledBtn
                classing={design.deleting}
                btnName={"Delete"}
                onPress={() => onDeleteNote(note.id)}
              />
            </div>
            <p>{note.body && note.body.substr(0, 100) + "..."}</p>
            <small className={design.side_note_small}>
              Last modified{" "}
              {new Date(note.lastTimeModified).toLocaleDateString("en-GB", {
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

// import React, { Component } from "react";
// import StyledBtn from "../../components/Button/Button";
// import design from "./Sidebar.module.css";

// class Sidebar extends Component {
//   render() {
//     const { notes, onAddNote, onDeleteNote } = this.props;

//     return (
//       <div className={design.sidebar}>
//         <div className={design.side_head}>
//           <h1>Sheila's Notes</h1>
//           <button onClick={onAddNote}>Add Notes</button>
//         </div>
//         <div className={design.side_notes}>
//           {notes.map((note) => (
//             <div className={design.side_single_note}>
//               <div className={design.side_note_title}>
//                 <p>{note.title}</p>
//                 <button onClick={() => onDeleteNote(note.id)}>Delete</button>
//               </div>
//               <p>{note.body && note.body.substr(0, 100) + "..."}</p>
//               <small className={design.side_note_small}>
//                 Last modified{" "}
//                 {new Date(note.lastTimeModified).toLocaleDateString("en-GB", {
//                   hour: "2-digit",
//                   minute: "2-digit",
//                 })}
//               </small>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// }

// export default Sidebar;
