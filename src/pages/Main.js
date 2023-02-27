import { useState } from "react";
import MainSection from "../layouts/MainSection/MainSection.jsx";
import Sidebar from "../layouts/Sidebar/Sidebar.jsx";

export default function Main(props) {
  const [notes, setNotes] = useState([]);
  const [currentNote, setCurrentNote] = useState(false);

  const onAddNote = (e) => {
    // e.preventDefault();
    const newAddNote = {
      id: Math.floor(Math.random() * 100),
      title: "No Title",
      body: "",
      lastTimeModified: Date.now(),
    };

    setNotes([newAddNote, ...notes]);
    setCurrentNote(newAddNote.id);
  };

  const onDeleteNote = (deleteThisId) => {
    setNotes(notes.filter((note) => note.id !== deleteThisId));
  };

  const getCurrentNote = () => {
    return notes.find(({ id }) => id === currentNote);
  };

  return (
    <div style={{ display: "flex" }}>
      {/* <h1>welcome</h1>
      <StyledBtn type="submit" btnName={"Welcome"} />
      <Burger />
      <Card /> */}
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
      <MainSection currentNote={getCurrentNote()} />
    </div>
  );
}
