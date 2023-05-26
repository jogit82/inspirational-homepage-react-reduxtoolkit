import React from "react";
import JournalEntry from "./JournalEntry";

const JournalEntries = ({ entries }) => {
  const COLORS = [
    "surface-blue",
    "surface-red",
    "surface-green",
    "surface-orange",
  ];

  const getEntryColor = (index) => COLORS[index % COLORS.length];

  return (
    <div className="surface">
      <ul className="entries-list">
        {entries.map(({ text, isDone }, index) => (
          <li
            key={text}
            className={`${getEntryColor(index)} surface-styles ${
              isDone ? "entry-done" : ""
            }`}
          >
            <JournalEntry id={index} isDone={isDone}>
              {text}
            </JournalEntry>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JournalEntries;
