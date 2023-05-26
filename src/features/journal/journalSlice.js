import { createSlice } from "@reduxjs/toolkit";

const options = {
  name: "journal",
  initialState: {
    entries: [
      { text: "Feed dog", isDone: false },
      { test: "Do laundry", isDone: false },
      { text: "Do dishes", isDOne: false },
      { text: "Cook dinner", isDone: false },
    ],
    doneEntries: [],
  },
  reducers: {
    addJournalEntry: (state, action) => {
      state.entries.push({ text: action.payload, isDone: false });
    },
    removeEntry: (state, action) => {
      state.entries.splice(action.payload, 1);
    },
    toggleEntryDone: (state, action) => {
      state.entries[action.payload].isDone =
        !state.entries[action.payload].isDone;
    },
  },
};

export const journalSlice = createSlice(options);

export const { addJournalEntry, removeEntry, toggleEntryDone } =
  journalSlice.actions;
export const selectJournal = (state) => state.journal;

export default journalSlice.reducer;
