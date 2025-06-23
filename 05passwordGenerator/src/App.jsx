import { useState , useCallback , useEffect , useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const[number, setNumber] = useState(false);
  const[character, setCharacter] = useState(false);
  const[password, setPassword] = useState("");

  //useRed hook is used to create a function that can be called without creating a new instance of the function on every render

  const ref = useRef(null);

  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(number) str += "0123456789"
    if(character) str += "!@#$%^&*()_+[]{}|;:,.<>?/~`-="

    for(let i=1 ; i<  length ; i++){
      let char = Math.floor(Math.random() * str.length +1);
      pass += str.charAt(char);
      
    }
    setPassword(pass);

  } , [length, number, character,setPassword])//depenancies of callback in array

  const copy = useCallback(() => {
    if (ref.current) {
      ref.current.select();
    }

    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() =>{
    passwordGenerator();
  } , [length , number, character, passwordGenerator]);
  return (
<>
    <h1 className="text-center text-[50px] font-bold bg-orange-500 text-white p-4">
  PASSWORD GENERATOR
</h1>

<div className="w-[500px] mx-auto mt-10 p-4 bg-orange-500 text-white rounded-lg shadow-lg">
  <div className="flex gap-2">
    <input
      type="text"
      value={password}
      placeholder="Generated Password"
      className="w-full p-2 rounded-lg bg-white text-black mb-8"
      readOnly
      ref={ref}
    />
    <button onClick={copy} className ="rounded-lg w-32 mb-8 text-black bg-amber-50">COPY</button>
  </div>

  <div className = "flex text-md gap-x-2">
    <div className="flex items-center gap-x-1">
      <input type="range" min={6} max={100} value={length}
      className="cursor-pointer"
      onChange={(e)=>{setLength(e.target.value)}}/>
      <label>Length: {length}</label>
    </div>

    <div className="flex items-center gap-x-1">
       <input
          type="checkbox"
          defaultChecked={number}
          id="numberInput"
          onChange={() => {
              setNumber((prev) => !prev);
          }}          
      />

      <label >Numbers</label>
    </div>
     <div className="flex items-center gap-x-1">
       <input
          type="checkbox"
          defaultChecked={character}
          id="characterInput"
          onChange={() => {
              setCharacter((prev) => !prev);
          }}          
      />
      <label htmlFor="characterInput">Characters</label>
    </div>
  </div>
</div>

</>
  )
}

export default App
