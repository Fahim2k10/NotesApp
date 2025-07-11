import Navbar from "../../components/navbar";
import NotesCard from "../../components/notesCard";
import Sidebar from "../../components/sidebar";
import { useNotes } from "../../context/notesContext";

const Trash = () => {
  const { trash } = useNotes();

  return (
    <>
      <Navbar />
      <main className="flex gap-5 min-h-screen bg-gray-50">
        <Sidebar />
        <div className="mt-10 w-full px-10">
          {trash.length === 0 ? (
            <p className="text-gray-600">Trash is empty.</p>
          ) : (
            <div className="flex flex-wrap gap-6">
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
        </div>
      </main>
    </>
  );
};

export default Trash;
