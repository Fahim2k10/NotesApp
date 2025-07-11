import React from "react";
import { useNotes } from "../../context/notesContext";

const NotesCard = ({ id, title, text, isPinned }) => {
  const { dispatchState, archive } = useNotes();

  const isArchived = archive.some((note) => note.id === id);

  const onPinClick = (id) => {
    if (isArchived) return; // 🔒 Prevent pinning archived notes
    dispatchState({
      type: isPinned ? "UNPIN" : "PIN",
      payload: { id },
    });
  };

  const onArchiveClick = (id) => {
    dispatchState({
      type: isArchived ? "REMOVE_FROM_ARCHIVE" : "ADD_TO_ARCHIVE",
      payload: { id },
    });
  };

  return (
    <div key={id} className="border-md border-2 min-w-72 pt-4 rounded-md">
      <div className="flex justify-between px-4 align-middle">
        <p className="font-bold text-xl">{title}</p>

        {/* ✅ Only show pin button if NOT archived */}
        {!isArchived && (
          <button className="pt-1" onClick={() => onPinClick(id)}>
            <span
              className={
                isPinned
                  ? "material-symbols-outlined text-red-700"
                  : "material-symbols-outlined"
              }
            >
              bookmark
            </span>
          </button>
        )}
      </div>

      <div className="px-4">
        <p className="pb-5 pt-3">{text}</p>
        <button>
          <span className="material-symbols-outlined mt-2 mr-2">delete</span>
        </button>
        <button onClick={() => onArchiveClick(id)}>
          <span
            className={`material-symbols-outlined ${
              isArchived ? "text-blue-700" : ""
            }`}
          >
            archive
          </span>
        </button>
      </div>
    </div>
  );
};

export default NotesCard;
