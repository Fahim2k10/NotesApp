import { useState } from "react";
import Navbar from "../../components/navbar";
import Sidebar from "../../components/sidebar";
import NotesCard from "../../components/notesCard";
import { useNotes } from "../../context/notesContext";

const Trash = () => {
  const { trash } = useNotes();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-10 mt-2 lg:mt-0">
          <h2 className="text-3xl font-semibold mb-6 text-red-600">🗑️ Trash</h2>

          {trash.length === 0 ? (
            <p className="text-gray-600 italic">Trash is empty.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trash
                .filter((note) => note && note.id)
                .map(({ id, title, text, isPinned }) => (
                  <NotesCard
                    key={id}
                    id={id}
                    title={title}
                    text={text}
                    isPinned={isPinned}
                  />
                ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Trash;
