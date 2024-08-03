import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes.jsx/AppRoutes'
import NavBar from './components/NavBar'
import { EmojiProvider } from './context/EmojiContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <EmojiProvider>
        <NavBar />
        <AppRoutes />
      </EmojiProvider>
    </>
  )
}

export default App
