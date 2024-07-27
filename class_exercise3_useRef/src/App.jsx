import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RefCounter} from './RefCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RefCounter></RefCounter>

    </>
  )
}

export default App
