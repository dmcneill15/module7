import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Clock, ClockDisplay } from './Clock'
import {ActivityFinder} from './ActivityFinder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ActivityFinder></ActivityFinder>

    </>
  )
}

export default App
