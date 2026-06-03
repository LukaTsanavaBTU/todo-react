import { useState } from "react";
import Note from "./Note";

function Notes() {
  const [notesList, setNotesList] = useState([
    { name: "Do laundry", done: false, id: 1 },
    { name: "Walk the dogs", done: true, id: 2 },
    { name: "Make dinner", done: false, id: 3 },
    { name: "Study", done: false, id: 4 },
  ]);

  function handleMark(id: number) {
    const notesCopy = structuredClone(notesList);
    const targetNoteIndex = notesCopy.findIndex((note) => note.id === id);
    if (targetNoteIndex !== -1) {
      const currentDoneStatus = notesCopy[targetNoteIndex].done;
      notesCopy[targetNoteIndex].done = !currentDoneStatus;
      setNotesList(notesCopy);
    }
  }

  function handleDelete(id: number) {
    setNotesList(notesList.filter((note) => note.id !== id));
  }

  return (
    <ul className="notes-list">
      {notesList.map((note, index, arr) => (
        <li key={note.id}>
          <Note
            name={note.name}
            done={note.done}
            onMark={() => handleMark(note.id)}
            onDelete={() => handleDelete(note.id)}
          />{" "}
          {index !== arr.length - 1 && <div className="note-separator"></div>}
        </li>
      ))}
    </ul>
  );
}

export default Notes;
