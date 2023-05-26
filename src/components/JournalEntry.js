import React from "react";
import { useDispatch } from "react-redux";
import { removeEntry, toggleEntryDone } from "../features/journal/journalSlice";
import Confetti from "react-dom-confetti";

const JournalEntry = ({ children, id, isDone }) => {
  const dispatch = useDispatch();

  return (
    <div className="entry">
      <div className="entry-actions-container">
        <button
          aria-label="Remove"
          className="remove"
          onClick={() => dispatch(removeEntry(id))}
        >
          Remove
        </button>
        <button
          arial-label="Mark done"
          className="done"
          onClick={() => {
            dispatch(toggleEntryDone(id));
          }}
        >
          {isDone ? "Redo" : "Done"}
          <Confetti active={isDone} config={{ spread: 360 }} />
        </button>
      </div>
      {children}
    </div>
  );
};

export default JournalEntry;
