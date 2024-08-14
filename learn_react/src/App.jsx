import './App.css'
import { useState } from 'react'

function App() {

  let [counter, setCounter] = useState(15)
  
  const incr = () => {
    setCounter(counter+1)
  }

  const decr = () => {
    setCounter(counter-1)
  }

  return (
    <>
      <button onClick={incr}>Increment</button>
      <p></p>
      <button onClick={decr}>Decrement</button>
      <h2>Counter {counter}</h2>
    </>
  )
}

export default App
