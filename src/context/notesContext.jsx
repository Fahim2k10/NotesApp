import notesReducer from "../reducers/notesReducer";
import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialState = {
    title: "",
    text: "",
    notes: [],
    archive: [],
  };

  const [{ title, text, notes, archive }, dispatchState] = useReducer(
    notesReducer,
    initialState
  );

  return (
    <NotesContext.Provider
      value={{ notes, text, title, archive, dispatchState }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
