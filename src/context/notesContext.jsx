import { createContext, useContext, useReducer } from "react";
import notesReducer from "../reducers/notesReducer";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  const initialState = {
    title: "",
    text: "",
    notes: [],
    archive: [],
    trash: [],
  };

  const [{ title, text, notes, archive, trash }, dispatchState] = useReducer(
    notesReducer,
    initialState
  );

  return (
    <NotesContext.Provider
      value={{ title, text, notes, archive, trash, dispatchState }}
    >
      {children}
    </NotesContext.Provider>
  );
};

const useNotes = () => useContext(NotesContext);

export { NotesProvider, useNotes };
