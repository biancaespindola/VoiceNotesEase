import logo from "./assets/logo.svg";
import AddNoteCard from "./components/AddNoteCard";
import { NoteCard } from "./components/NoteCard";

export function App() {
  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 ">
      <img src={logo} alt="Logo Voice Notes"></img>
      <form className="w-full">
        <input
          type="text"
          placeholder="Search for your notes"
          className="w-full bg-transparent text-3xl font=semibold tracking-tight outline-none placeholder: text-slate-50 "
        />
      </form>

      <div className="h-px bg-slate-700" />

      <div className="grid grid-cols-3 auto-rows-[250px] gap-6">
        <AddNoteCard />
        {/* old notes cards */}
        <NoteCard
          note={{
            date: new Date(),
            content: "This is a note",
          }}
        />
        <NoteCard
          note={{ date: new Date(), content: "This is a second note" }}
        />
      </div>
    </div>
  );
}
