import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {UpdateEmoji} from './UpdateEmoji.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UpdateEmoji></UpdateEmoji>
    </>
  )
}

export default App
