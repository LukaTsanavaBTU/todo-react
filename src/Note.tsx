import type { MouseEventHandler } from "react";
import type { JSX } from "react/jsx-runtime";

function Note({
  name,
  done,
  onClick,
}: {
  name: string;
  done: boolean;
  onClick: MouseEventHandler;
}) {
  let content: JSX.Element;
  if (done) {
    content = (
      <div className="note done">
        <div className="box-name" onClick={onClick}>
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
        <div className="box-name" onClick={onClick}>
          <div className="checkbox"></div>
          <p>{name}</p>
        </div>
        <div className="note-actions">
          <button>
            <img src="/icons/edit.svg" alt="edit" />
          </button>
          <button>
            <img src="/icons/delete.svg" alt="delete" />
          </button>
        </div>
      </div>
    );
  }

  return content;
}

export default Note;
