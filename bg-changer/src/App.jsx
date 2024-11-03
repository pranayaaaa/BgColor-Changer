import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}>
        <div className="fixed inset-0 flex flex-col justify-center px-2">
          <div className="bg-white flex flex-col gap-2 px-2 w-fit py-2">
            <button onClick={()=>setColor("red")} className="px-3 bg-red-600 text-white hover:bg-red-700">Red</button>
            <button onClick={()=>setColor("yellow")} className="px-3 bg-yellow-600 text-white hover:bg-yellow-700">Yellow</button>
            <button onClick={()=>setColor("blue")} className="px-3 bg-blue-600 text-white hover:bg-blue-700">Blue</button>
            <button onClick={()=>setColor("orange")} className="px-3 bg-orange-600 text-white hover:bg-orange-700">Orange</button>
            <button onClick={()=>setColor("grey")} className="px-3 bg-slate-500 text-white hover:bg-slate-600">Grey</button>
            <button onClick={()=>setColor("green")} className="px-3 bg-green-500 text-white hover:bg-green-600">Green</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
