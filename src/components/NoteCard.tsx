export function NoteCard() {
  return (
    <div className="rounded-md p-5 bg-slate-800 space-y-3 overflow-hidden relative">
      <span className="text-sm font-medium text-slate-300">6 days ago</span>
      <p className="text-sm leading-6 text-slate-400">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
        labore et aut facilis.
      </p>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none "></div>
    </div>
  );
}
