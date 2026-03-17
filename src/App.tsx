import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  function handleClick(){
    setCount(count + 1)
  }

  return (
    <>
      <button onClick={handleClick}>
        Click Me {count}
      </button>
    </>
  )
}

export default App
