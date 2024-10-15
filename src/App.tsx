import "./App.css";

function App() {
  return (
    <div className="mx-auto my-32 w-3/5 rounded-3xl bg-yellow-400 pt-64 pr-5 pl-5 shadow-2xl">
      <div className="mb-6 border-b-2 border-black pb-2">
        <span className="text-xl font-bold">Select Destination</span>
      </div>
      <div className="space-y-5">
        <div className="group flex items-center space-x-5">
          <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-black text-yellow-400 group-hover:bg-white transition">
            <span className="font-semibold">V</span>
          </div>
          <span className="text-5xl font-bold group-hover:text-white transition">
            Vancouver
          </span>
        </div>
        <div className="group flex items-center space-x-5">
          <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-black text-yellow-400 group-hover:bg-white transition">
            <span className="font-semibold">S</span>
          </div>
          <span className="text-5xl font-bold group-hover:text-white transition">
            Seattle
          </span>
        </div>
        <div className="group flex items-center space-x-5">
          <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-black text-yellow-400 group-hover:bg-white transition">
            <span className="font-semibold">P</span>
          </div>
          <span className="text-5xl font-bold group-hover:text-white transition">
            Portland
          </span>
        </div>
        <div className="group flex items-center space-x-5">
          <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-black text-yellow-400 group-hover:bg-white transition">
            <span className="font-semibold">S</span>
          </div>
          <span className="text-5xl font-bold group-hover:text-white transition">
            Seoul
          </span>
        </div>
        <div className="group flex items-center space-x-5">
          <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-black text-yellow-400 group-hover:bg-white transition">
            <span className="font-semibold">S</span>
          </div>
          <span className="text-5xl font-bold group-hover:text-white transition">
            San Francisco
          </span>
        </div>
        <div className="group flex items-center space-x-5">
          <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-black text-yellow-400 group-hover:bg-white transition">
            <span className="font-semibold">L</span>
          </div>
          <span className="text-5xl font-bold group-hover:text-white transition">
            Los Angeles
          </span>
        </div>
        <div className="group flex items-center space-x-5 pb-8">
          <div className="flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-black text-yellow-400 group-hover:bg-white transition">
            <span className="font-semibold">S</span>
          </div>
          <span className="text-5xl font-bold group-hover:text-white transition">
            San Diego
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
