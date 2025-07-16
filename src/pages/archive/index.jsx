import { useState } from "react";
import Navbar from "../../components/navbar";
import NotesCard from "../../components/notesCard";
import Sidebar from "../../components/sidebar";
import { useNotes } from "../../context/notesContext";

const Archive = () => {
  const { archive } = useNotes();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Navbar onMenuClick={() => setSidebarOpen(true)} />

      <div className="flex min-h-screen bg-gray-50">
        {/* Sidebar Drawer + Static */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-10 mt-2 lg:mt-0">
          <h2 className="text-3xl font-semibold mb-6 text-yellow-600">
            📦 Archive
          </h2>

          {archive.length === 0 ? (
            <p className="text-gray-600 italic">No archived notes.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {archive.map(({ id, title, text, isPinned }) => (
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

export default Archive;
