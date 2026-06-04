import type { MouseEventHandler } from "react";
import type { JSX } from "react/jsx-runtime";

function Note({
  name,
  done,
  onMark,
  onDelete,
  onEdit,
}: {
  name: string;
  done: boolean;
  onMark: MouseEventHandler;
  onDelete: MouseEventHandler;
  onEdit: MouseEventHandler;
}) {
  let content: JSX.Element;
  if (done) {
    content = (
      <div className="note done">
        <div className="box-name" onClick={onMark}>
          <div className="checkbox marked">
            <img src="/icons/checkmark.svg" alt="done" />
          </div>
          <p>{name}</p>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="note">
        <div className="box-name" onClick={onMark}>
          <div className="checkbox"></div>
          <p>{name}</p>
        </div>
        <div className="note-actions">
          <button onClick={onEdit}>
            <img src="/icons/edit.svg" alt="edit" />
          </button>
          <button onClick={onDelete}>
            <img src="/icons/delete.svg" alt="delete" />
          </button>
        </div>
      </div>
    );
  }

  return content;
}

export default Note;
