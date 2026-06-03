import { useState } from "react";
import Note from "./Note";
import type { FiltersType, NoteType } from "./App";

function Notes({ search, filter }: { search: string; filter: FiltersType }) {
  const [notesList, setNotesList] = useState<NoteType[]>([
    { name: "Do laundry", done: false, id: 1 },
    { name: "Walk the dogs", done: true, id: 2 },
    { name: "Make dinner", done: false, id: 3 },
    { name: "Study", done: false, id: 4 },
  ]);

  let filteredList = notesList;

  if (filter && filter !== "all") {
    filteredList = filteredList.filter((note) =>
      filter === "done" ? note.done : !note.done,
    );
  }
  if (search) {
    filteredList = filteredList.filter((note) =>
      note.name.toLowerCase().includes(search.toLowerCase()),
    );
  }

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
      {filteredList.map((note, index, arr) => (
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
