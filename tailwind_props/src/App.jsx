// import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import CV_Card from './components/CV_Card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='bg-green-400 text-black p-3 rounded-2xl mb-10'>Tailwind Test</h2>

      <CV_Card/>
      <Card />

    </>
  )
}

export default App
