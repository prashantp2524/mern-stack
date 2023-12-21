
import './App.css'
import { useState } from 'react'

function App()
{
  const [value, setvalue] = useState(5)
  const addValue = () =>
  {
    setvalue(prev => prev + 1)
    setvalue(prev => prev + 1)
    setvalue(prev => prev + 1)
    setvalue(prev => prev + 1)


  }

  const removeValue = () =>
  {
    setvalue(value - 1)
  }

  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value:{value}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>

    </>
  )
}

export default App
