import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import NavBar from './components/NavBar'
import { EmojiProvider } from './context/EmojiContext'
import { UserProvider } from './context/UserContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProvider>
        <EmojiProvider>
          <NavBar />
          <AppRoutes />
        </EmojiProvider>
      </UserProvider>
    </>
  )
}

export default App
