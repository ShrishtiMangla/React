import { useState } from "react";

function App() {
  const [bg, setBg] = useState("pink");

  return (
    <div
      className="w-full h-screen transition-colors duration-200"
      style={{ backgroundColor: bg }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-centre gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={()=> setBg("red")} className ="px-4 py-1 rounded-full text-white" style={{backgroundColor: "red"}}>RED</button>
          <button 
          onClick={()=> setBg("green")} className ="px-4 py-1 rounded-full text-white" style={{backgroundColor: "green"}}>GREEN</button>
          <button
          onClick={()=> setBg("blue")} className ="px-4 py-1 rounded-full text-white" style={{backgroundColor: "blue"}}>BLUE</button>
          <button
          onClick={()=> setBg("yellow")} className ="px-4 py-1 rounded-full text-white" style={{backgroundColor: "yellow"}}>YELLOW</button>
          <button
          onClick={()=> setBg("black")} className ="px-4 py-1 rounded-full text-white" style={{backgroundColor: "black"}}>BLACK</button>

        </div>
      </div>
    </div>
  );
}

export default App;
