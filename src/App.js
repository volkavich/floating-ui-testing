import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "./Popover";

function App() {
  return (
    <div className="flex justify-center items-center h-screen flex-col gap-4">
      <h1>Testing Floating UI — Popover</h1>
      <button className="p-4 font-sans text-xl shadow border rounded-md">
        My trigger
      </button>
      <Popover placement="bottom-start">
        <PopoverTrigger className="p-4 font-sans text-xl shadow border rounded-md">
          My trigger
        </PopoverTrigger>
        <PopoverContent className="p-4 text-xl shadow bg-yellow-200 rounded-md border-black">
          Hello! how are you?
        </PopoverContent>
      </Popover>
    </div>
  );
}

export default App;
