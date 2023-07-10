import Model from './Model'
import './App.css'
import { useRef, useState } from 'react'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const modelRef = useRef()

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Model</button>
      <button onClick={() => modelRef.current.yesFocus()}>
        Model Yes Focus
      </button>
      <button onClick={() => modelRef.current.noFocus()}>Model No Focus</button>
      <Model isOpen={isOpen} setIsOpen={setIsOpen} ref={modelRef} />
    </div>
  )
}

export default App
