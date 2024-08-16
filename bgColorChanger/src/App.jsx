import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("grey")

  return (

    <div className="w-full h-screen duration-500"
      style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='justify-center gap-3 shadow-lg bg-white flex flex-wrap px-3 py-2 rounded-3xl'>
          <button onClick={() => setColor("red")} className='text-white bg-red-600 px-4 py-1 rounded-full shadow-md shadow-red-600'>Red</button>
          <button onClick={() => setColor("green")} className='bg-green-600 shadow-md shadow-green-500 rounded-full px-4 py-1 text-white'>Green</button>
          <button onClick={() => setColor("blue")} className='bg-blue-600 px-4 py-1 rounded-full text-white shadow-md shadow-blue-400'>Blue</button>
          <button onClick={() => setColor("yellow")} className='bg-yellow-500 text-white px-4 py-1 rounded-full shadow-md shadow-yellow-400'>Yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
