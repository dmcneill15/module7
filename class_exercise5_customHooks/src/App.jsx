import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {SubscribeForm_customHook} from './SubscribeForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SubscribeForm_customHook></SubscribeForm_customHook>

    </>
  )
}

export default App
