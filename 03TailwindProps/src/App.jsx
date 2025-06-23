import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-blue-500 text-white text-3xl font-bold p-4 mb-4">
      Hello world!
      </h1>
        <Card username = "John Doe" />
        <Card />
    </>
  )
}

export default App
