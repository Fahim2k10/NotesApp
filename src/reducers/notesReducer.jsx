import { v4 as uuid } from "uuid";

const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case "TITLE":
      return {
        ...state,
        title: payload,
      };

    case "TEXT":
      return {
        ...state,
        text: payload,
      };

    case "ADD_NOTE":
      return {
        ...state,
        notes: [
          ...state.notes,
          { title: state.title, text: state.text, id: uuid(), isPinned: false },
        ],
      };

    case "CLEAR":
      return {
        ...state,
        title: "",
        text: "",
      };

    case "PIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: true } : note
        ),
      };

    case "UNPIN":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id === payload.id ? { ...note, isPinned: false } : note
        ),
      };

    case "ADD_TO_ARCHIVE":
      const noteToArchive = state.notes.find((note) => note.id === payload.id);
      if (!noteToArchive) return state;
      return {
        ...state,
        archive: [...state.archive, noteToArchive],
        notes: state.notes.filter((note) => note.id !== payload.id),
      };

    case "REMOVE_FROM_ARCHIVE":
      const noteToUnarchive = state.archive.find(
        (note) => note.id === payload.id
      );
      if (!noteToUnarchive) return state;
      return {
        ...state,
        notes: [...state.notes, noteToUnarchive],
        archive: state.archive.filter((note) => note.id !== payload.id),
      };

    case "DELETE":
      // Try finding in notes first
      let noteToTrash = state.notes.find((note) => note.id === payload.id);
      let source = "notes";

      // If not found in notes, try archive
      if (!noteToTrash) {
        noteToTrash = state.archive.find((note) => note.id === payload.id);
        source = "archive";
      }

      if (!noteToTrash) return state; // 🛡️ no note found

      return {
        ...state,
        trash: [...state.trash, noteToTrash],
        notes:
          source === "notes"
            ? state.notes.filter((note) => note.id !== payload.id)
            : state.notes,
        archive:
          source === "archive"
            ? state.archive.filter((note) => note.id !== payload.id)
            : state.archive,
      };

    case "REMOVE": // permanent delete
      return {
        ...state,
        trash: state.trash.filter((note) => note.id !== payload.id),
      };

    case "RESTORE":
      const restoredNote = state.trash.find((note) => note.id === payload.id);
      if (!restoredNote) return state;
      return {
        ...state,
        notes: [...state.notes, restoredNote],
        trash: state.trash.filter((note) => note.id !== payload.id),
      };

    default:
      return state;
  }
};

export default notesReducer;
