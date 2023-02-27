import Card from "../Card/Card.js";
import design from "./CardList.module.css";

export const CardList = ({ notes }) => {
  return (
    <div className={design.notes_list}>
      {notes.map((note) => (
        <Card
          id={note.id}
          title={note.title}
          body={note.body}
          lastTimeModified={note.lastTimeModified}
        />
      ))}
    </div>
  );
};
