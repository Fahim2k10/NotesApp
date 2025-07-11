import Navbar from "../../components/navbar";
import NotesCard from "../../components/notesCard";
import Sidebar from "../../components/sidebar";
import { useNotes } from "../../context/notesContext";

const Archive = () => {
  const { archive } = useNotes();

  return (
    <>
      <Navbar />
      <main className="flex gap-5 min-h-screen bg-gray-50">
        <Sidebar />
        <div className="mt-10 w-full px-10">
          <div className="flex flex-wrap gap-6">
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
        </div>
      </main>
    </>
  );
};

export default Archive;
