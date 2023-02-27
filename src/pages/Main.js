import { useState, useEffect } from "react";
import MainSection from "../layouts/MainSection/MainSection.jsx";
import Sidebar from "../layouts/Sidebar/Sidebar.jsx";
import design from "./Main.module.css";

export default function Main() {
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [currentNote, setCurrentNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
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
    setNotes(notes.filter(({ id }) => id !== deleteThisId));
  };

  const onUpdateNote = (noteUpdated) => {
    const noteUpdatedArr = notes.map((note) => {
      if (note.id === noteUpdated.id) {
        return noteUpdated;
      }

      return note;
    });

    setNotes(noteUpdatedArr);
  };

  const getCurrentNote = () => {
    return notes.find(({ id }) => id === currentNote);
  };

  return (
    <div className={design.main}>
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        currentNote={currentNote}
        setCurrentNote={setCurrentNote}
      />
      <MainSection currentNote={getCurrentNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}
