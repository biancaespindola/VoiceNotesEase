import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { useState } from "react";

export default function AddNoteCard() {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);

  //function handleStartEm bianca 

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md flex flex-col gap-3 text-left bg-slate-700 p-5 hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
        <span className="text-sm font-medium text-slate-200">
          Add a new note
        </span>
        <p className="text-sm leading-6 text-slate-400">
          Record a audio note that it`ll be converted to text automatically
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/50" />
        <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 max-w-[640px] w-full h-[60vh] rounded-md bg-slate-700 flex flex-col outline-none">
          <Dialog.Close className="absolute top-0 right-0 bg-slate-800 p-1.5 text-slate-400">
            <X className="size-5 hover:text-slate-100" />
          </Dialog.Close>

          <div className="flex flex-1 flex-col gap-3 p-5">
            {" "}
            <span className="text-sm font-medium text-slate-300">Add note</span>
            <p className="text-sm leading-6 text-slate-400">
              Start{" "}
              <button className="font-medium text-lime-400 hover:underline">
                recording your audio note
              </button>{" "}
              or if you prefer{" "}
              <button
               onClick={() => setShouldShowOnboarding(false)} 
               className="font-medium text-lime-400 hover:underline">
                type a new note
              </button>
              .
            </p>
          </div>

          <button
            type="button"
            className="w-full bg-lime-400 py-4 text-center text-sm text-lime-950 outline-none font-medium hover:bg-lime-500"
          >
            Save this note
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
