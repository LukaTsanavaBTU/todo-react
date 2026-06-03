import { useState } from "react";
import Note from "./Note";
import type { FiltersType, NoteType } from "./App";
import Dialog from "./Dialog";

function Notes({ search, filter }: { search: string; filter: FiltersType }) {
  const [notesList, setNotesList] = useState<NoteType[]>([
    { name: "Do laundry", done: false, id: "0000000000001" },
    { name: "Walk the dogs", done: true, id: "0000000000002" },
    { name: "Make dinner", done: false, id: "0000000000003" },
    { name: "Study", done: false, id: "0000000000004" },
  ]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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

  function handleMark(id: string) {
    const notesCopy = structuredClone(notesList);
    const targetNoteIndex = notesCopy.findIndex((note) => note.id === id);
    if (targetNoteIndex !== -1) {
      const currentDoneStatus = notesCopy[targetNoteIndex].done;
      notesCopy[targetNoteIndex].done = !currentDoneStatus;
      setNotesList(notesCopy);
    }
  }

  function handleDelete(id: string) {
    setNotesList(notesList.filter((note) => note.id !== id));
  }

  function handleDialogClose() {
    setIsDialogOpen(false);
  }

  function handleDataChange(newVal: string, id?: string) {
    if (id) {
      const notesCopy = structuredClone(notesList);
      const targetIndex = notesCopy.findIndex((note) => note.id === id);
      if (targetIndex) {
        notesCopy[targetIndex].name = newVal;
        setNotesList(notesCopy);
      }
    } else {
      setNotesList([
        ...notesList,
        { name: newVal, done: false, id: String(Date.now()) },
      ]);
    }
  }

  return (
    <>
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
      <div className="add-button-wrapper">
        <button className="add-button" onClick={() => setIsDialogOpen(true)}>
          <img src="/icons/add.svg" alt="add" />
        </button>
      </div>
      <Dialog
        isOpen={isDialogOpen}
        onClose={handleDialogClose}
        onDataChange={handleDataChange}
      />
    </>
  );
}

export default Notes;
