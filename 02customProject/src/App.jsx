import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [custom,setcustom] = useState(5)
  // let custom = useState(5)
  
  const addValue =()=> {
    console.log ('add value',custom);
    custom += 1;
    setcustom(custom);
  }
  const remValue =()=> {
    if(custom<0){
      return;
    }
    console.log ('remove value',custom);
    setcustom(custom-1);
  }

  return (
    <>
      <h1>Vite + React</h1>
      <h2>Custom value : {custom}</h2>
      <button onClick={addValue}>add value</button>
      <br />
      <button onClick={remValue}>remove value</button>
    </>
  )
}

export default App
