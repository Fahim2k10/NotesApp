import React from "react";
import { useNotes } from "../../context/notesContext";

const NotesCard = ({ id, title, text, isPinned }) => {
  const { dispatchState, archive, trash } = useNotes();

  const isArchived = archive.some((note) => note.id === id);
  const isInTrash = trash.find((note) => note?.id === id);

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

  const onDeleteClick = (id) => {
    dispatchState({
      type: isInTrash ? "REMOVE" : "DELETE",
      payload: { id },
    });
  };

  return (
    <div key={id} className="border-md border-2 min-w-72 pt-4 rounded-md">
      <div className="flex justify-between px-4 align-middle">
        <p className="font-bold text-xl">{title}</p>

        {/* ✅ Only show pin button if NOT archived */}
        {!isArchived && !isInTrash && (
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
        <button onClick={() => onDeleteClick(id)}>
          <span
            className={`material-symbols-outlined mt-2 mr-2 ${
              isInTrash ? "text-red-700" : ""
            }`}
          >
            delete
          </span>
        </button>
        {!isInTrash && (
          <button onClick={() => onArchiveClick(id)}>
            <span className={`material-symbols-outlined`}>archive</span>
          </button>
        )}
        {isInTrash && (
          <button
            onClick={() => dispatchState({ type: "RESTORE", payload: { id } })}
          >
            <span className="material-symbols-outlined text-green-600">
              restore
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default NotesCard;
