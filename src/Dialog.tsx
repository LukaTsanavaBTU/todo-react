import { useEffect, useRef, useState } from "react";

function Dialog({
  isOpen,
  onClose,
  initialText,
  onDataChange,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialText?: string;
  onDataChange: (newVal: string, id?: string) => void;
}) {
  const [text, setText] = useState(initialText || "");

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (isOpen) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }
  }, [isOpen]);

  function onCancelHandler(e: React.SyntheticEvent) {
    e.preventDefault();
    onClose();
  }

  function onAcceptHandler() {
    onDataChange(text);
    onClose();
    setText("");
  }

  if (isOpen)
    return (
      <dialog ref={dialogRef} onClose={onCancelHandler}>
        <h2>NEW NOTE</h2>
        <input
          type="text"
          placeholder="Input your note..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="dialog-actions">
          <button className="dialog-cancel" onClick={onCancelHandler}>
            CANCEL
          </button>
          <button className="dialog-accept" onClick={onAcceptHandler}>
            APPLY
          </button>
        </div>
      </dialog>
    );
}

export default Dialog;
